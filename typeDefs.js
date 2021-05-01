const { gql } = require('apollo-server-express')

const typeDefs = gql
`
    type Todo {
        id: ID
        title: String
        description: String
    }

    type Query {
        getTodo(id: ID): Todo
        getAllTodo: [Todo]
    }

    type Mutation {
        createTodo(title: String, description: String): Todo
        updateTodo(id: ID, title: String, description: String): Todo
        deleteTodo(id: ID): String
    }
    
`

module.exports = typeDefs