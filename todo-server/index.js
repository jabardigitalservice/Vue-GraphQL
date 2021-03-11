const express = require('express')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')

require('dotenv').config();

const logs = require("./logs/logs")
const graphqlSchema = require("./schemas/index")

const app = express()

app.use(logs)
app.use(cors())

app.listen(4000, async () => {
  console.log("server is running ", 4000);
  await mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

const isGraphiql = String(process.env.GRAPHIQL) === 'true'

app.use(
  "/graphql",
  graphqlHTTP((request) => {
    return {
      graphiql: isGraphiql,
      schema: graphqlSchema
    };
  })
);