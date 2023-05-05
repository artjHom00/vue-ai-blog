let articles = require('../models/articles.js')

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
}

module.exports = APIController