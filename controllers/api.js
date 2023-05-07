let articles = require('../models/articles.js')
let subjects = require('../models/subjects.js')
let OpenAIApi = require('../services/openai')
require('dotenv').config()

let openai = new OpenAIApi(process.env.OPENAI_API_KEY)

class APIController {
    constructor() {

    }

    test(req, res) {
        res.sendStatus(200)
    }

    async getArticlesPreview(req, res) {
        await articles.find().select('image heading snippet')
        .then((articles) => {
            res.json({
                "is_success": true,
                "data": articles
            })
        }).catch((err) => {
            res.json({
                "is_success": false,
                "message": err
            })
        })
    }

    async getFullArticle(req, res) {
        await articles.findOne({
            _id: req.params.id
        }).then((article) => {
            res.json({
                "is_success": true,
                "data": article
            })
        }).catch((err) => {
            res.json({
                "is_success": false,
                "message": err
            })
        })
    }

    async createArticle(req, res) {
        await articles.create(req.body)
        .then((article) => {
            res.json({
                "is_success": true,
                "data": article
            })
        })
        .catch((err) => {
            res.json({
                "is_success": false,
                "message": err
            })
        })

    }

    async getRandomRelated(req, res) {

        let getRandomArticle = async () => {
            return new Promise(async (resolve, reject) => {
                const random = Math.floor(Math.random() * (await articles.count()))
                
                await articles.findOne().skip(random)
                .then((article) => {
                    resolve(article)
                })
                .catch((err) => {
                    reject(err)
                })
                

            })
        }
        
        const { limit = 2 } = req.query

        
        let arr = [
        await getRandomArticle().catch((err) => {
            res.json({
                "is_success": false,
                "message": err
            })
        }), 
        await getRandomArticle().catch((err) => {
            res.json({
                "is_success": false,
                "message": err
            })
        })]

        res.json({
            "is_success": true,
            "data": arr
        })
    }

    async generateArticle(req, res) {

        // получаем случайную тему для создания статьи
        let getRandomSubject = async () => {
            return new Promise(async (resolve, reject) => {
                const random = Math.floor(Math.random() * (await subjects.count()))
                
                await subjects.findOne({
                    is_published: false
                }).skip(random)
                .then((subject) => {
                    resolve(subject)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        }

        const subject = await getRandomSubject()
        console.log("🚀 ~ file: api.js:126 ~ APIController ~ generateArticle ~ subject:", subject._id + ' ' + subject.name)

        let generated = await openai.createSEOArticle(subject.name)
        
        await articles.create({
            heading: subject.name,
            text: generated[0].text,
            subject_id: subject._id
        }).then(async (article) => {

            await subjects.findOneAndUpdate({
                _id: subject._id
            }, {
                is_published: true
            })

            res.json({
                "is_success": true,
                "data": article
            })
        }).catch((err) => {
            res.json({
                "is_success": false,
                "message": err
            })
        })
    }

    async generateSubjects(req, res) {
        /* 
        преобразовывает 
            1. Example Name
        в
            ['Example Name']
        */
        let transformListToArray = (str) => {

            let arr = str.split(/\d+\.\s*/).map((v) => {
                return v.replace('\n', '')
            })

            arr.shift()

            return arr
            
        }

        // деконструирует в переменную generated ответ chatgpt 
        let [{text: generated}] = await openai.generateSubjectsForArticles()
        
        for await (const v of  transformListToArray(generated)) {
            subjects.findOneAndUpdate({
                name: v
            }, {
                $set: {
                    name: v
                }
            }, { new: true, upsert: true, setDefaultsOnInsert: true })
            .catch((err) => {
                res.json({
                    "is_success": false,
                    "err": err
                })

                return
            })
        }

        res.json({
            "is_success": true
        })
        
    }
}

module.exports = APIController