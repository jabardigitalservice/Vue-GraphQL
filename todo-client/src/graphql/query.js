import gql from 'graphql-tag'

export const LIST_TASK_QUERY = gql`
  query todoMany {
    listTask :todoMany {
      _id,
      nameTask
    }
  }
`
export const CREATE_TASK_QUERY = gql`
      mutation todoCreateOne ($nameTask: String!) {
        todoCreateOne(record: { nameTask: $nameTask }) {
          record{
            nameTask
          }
          error { message }
        }
      }
    `

export const DELETE_TASK_QUERY = gql`
    mutation todoRemoveById ($id: MongoID!){
      todoRemoveById(_id: $id) {
        error { message }
      }
    }
  `