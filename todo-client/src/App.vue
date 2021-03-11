<template>
  <div class="max-w-2xl mx-auto py-2 px-2 sm:px-4 lg:px-2">
    <div class="relative">
      <blockquote class="mt-10">
        <div class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
          <p>
            VueJS GrapQL Client
          </p>
        </div>
      </blockquote>
    </div>
    <Form
      :task-name="nameTask"
      v-model:name-task="nameTask"
      :add-todo="addTodo"
    />
    <div v-if="loadingList">Loading...</div>
    <List
      :todo-list="listTask"
      v-model:list-todo="listTask"
      :deleteTodo="deleteTodo"
    />
  </div>
</template>

<script>
import Form from './components/Form.vue'
import List from './components/List.vue'
import { ref } from 'vue'
import { useResult, useQuery, useMutation } from '@vue/apollo-composable'
import { LIST_TASK_QUERY, CREATE_TASK_QUERY, DELETE_TASK_QUERY } from './graphql/query'

export default {
  name: 'App',
  components: {
    Form,
    List
  },
  setup () {
    const nameTask = ref('')

    const { result, loading: loadingList, refetch } = useQuery(LIST_TASK_QUERY)
  
    const listTask = useResult(result, [])

    const { mutate: addTodo, onDone: onDoneCreate } = useMutation(CREATE_TASK_QUERY)

    const { mutate: deleteTodo, onDone: onDoneDelete } = useMutation(DELETE_TASK_QUERY)

    onDoneCreate(() => {
      refetch()
      nameTask.value = ''
    })

    onDoneDelete(() => {
      refetch()
    })

    return {
      listTask,
      nameTask,
      loadingList,
      refetch,
      addTodo,
      deleteTodo
    }
  },
}
</script>

