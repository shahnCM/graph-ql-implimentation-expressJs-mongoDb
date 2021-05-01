const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
})

const Todo = mongoose.model('todo', TodoSchema)
module.exports = Todo;