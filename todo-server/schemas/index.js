const { SchemaComposer } = require( 'graphql-compose')

const schemaComposer = new SchemaComposer()

const { TodoTaskQuery, TodoTaskMutation } =require ('./todo')

schemaComposer.Query.addFields({
    ...TodoTaskQuery,
});

schemaComposer.Mutation.addFields({
    ...TodoTaskMutation,
});

module.exports = schemaComposer.buildSchema()