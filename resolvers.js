const Todo = require('./models/Todo.model')

const resolvers = {
    Query: {
        getTodo: async (parent, args, context, info) => {
            return await Todo.findById(args.id)
        },
        getAllTodo: async () => {
            return await Todo.find()
        }
    },
    Mutation: {
        createTodo: async (parent, args, context, info) => {
            const { title, description } = args
            const todo = new Todo({ title, description })
            await todo.save()
            return todo
        },
        updateTodo: async (parent, args, context, info) => {
            const {id, title, description } = args
            const todo = await Todo.findByIdAndUpdate(id, {title, description}, {new: true})
            return todo
        },
        deleteTodo: async (parent, args, context, info) => {
            const { id } = args
            await Todo.findByIdAndDelete(id)
            return `Deleted Todo With ID: ${id}`
        }
    }
}

module.exports = resolvers