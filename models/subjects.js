let { Schema, model } = require('mongoose')

const subjectsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    is_published: {
        type: Boolean,
        required: true,
        default: false
    }
})

const subjects = model('subjects', subjectsSchema)

module.exports = subjects