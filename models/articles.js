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
})

// articlesSchema.pre('save', async function(next) {
//     function getFirstNWords(str) {
//         return str.split(/\s+/).slice(0, 50).join(' ') + '...'
//     }
//     const article = this;

//     if(!article.snippet) return next()

//     article.snippet = getFirstNWords(article.snippet)
//     next()
// })

const articles = model('articles', articlesSchema)

module.exports = articles