let { Schema, model } = require('mongoose')

const articlesSchema = new Schema({
    image: {
        type: String,
        required: true,
        default: 'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg' // set default image pic if not found
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
    },
    subject_id: {
        type: Schema.Types.ObjectId,
        required: false,
        default: null,
        ref: 'subjects'
    }
});

const articles = model('articles', articlesSchema)

module.exports = articles