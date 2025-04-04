import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './schemas/type-defs.js'
import { resolvers } from './schemas/resolvers.js'
import bodyParser from 'body-parser'
const PORT = process.env.PORT || 5000
const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/comp3133__101150792_assigment1"

mongoose.Promise = global.Promise;
mongoose
    .connect(DB_URL)
    .then(() => {
        console.log("Successfully connected to the database");
    })
    .catch((err) => {
        console.log("Could not connect to the database. Exiting now...", err);
        process.exit();
    })

const app = express()

try {
    const apolloServer = new ApolloServer({ typeDefs, resolvers })
    await apolloServer.start()
    apolloServer.applyMiddleware({ app: app })
    app.use('*', cors)
    app.use(bodyParser.json())
    // http://localhost:5000/graphql
    app.listen(PORT, () => {
        console.log(`Server listening at  http://localhost:${PORT}${apolloServer.graphqlPath}`)
    })
} catch (err) {
    console.log(err)
}
