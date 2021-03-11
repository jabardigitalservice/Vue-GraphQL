const mongoose = require("mongoose");
const { composeWithMongoose } = require("graphql-compose-mongoose");
const Schema = mongoose.Schema;

const TodoTask = new Schema(
  {
    nameTask: {
      type: String,
      required: true
    },
  }
);

module.exports = {
  TodoTask: mongoose.model("todotasks", TodoTask),
  TodoTaskTC: composeWithMongoose(mongoose.model("todotasks", TodoTask)),
}