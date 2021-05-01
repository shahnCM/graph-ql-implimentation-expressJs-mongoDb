const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000

async function startServer() {
    const app = express()
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    await apolloServer.start()
    apolloServer.applyMiddleware({ app: app, path: '/test-graphql' })
    app.use((req, res) => res.send("Hello from express Apollo Server"))
    await mongoose.connect('mongodb://rootuser:rootpass@mongodb/todo_db?authSource=admin', { 
        // connectionUrl -> mongodb://localhost:27017/post_db -> if not using docker
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    console.log('Mongoose Connected Succesfully. . .')
    app.listen(PORT, () => console.log("Server running on port 3000"))
}

startServer()