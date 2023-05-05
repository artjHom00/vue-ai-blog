let { Schema, model } = require('mongoose')

const articlesSchema = new Schema({
    image: {
        type: String,
        required: true,
        default: 'https://i.pinimg.com/originals/0d/94/e9/0d94e97b264f27373a0dcb5a4347ab33.jpg' // set default image pic if not found
    },
    heading: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: false,
    },
    snippet: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: String,
        default: 'AI',
        required: false
    },
    video: {
        type: String,
        required: false
    }
});

const articles = model('articles', articlesSchema)

module.exports = articles