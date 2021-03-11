<template>
    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:pt-5">
      <div class="mt-1 sm:mt-0 sm:col-span-2">
        <input
            v-model="taskName"
            type="text"
            name="task"
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Name Task"
        >
      </div>
      <button
        type="button"
        class="items-center px-2 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        @click="addTodo({ nameTask: taskName })"
      >
        Save
      </button>
    </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    nameTask: { 
        type: String,
        default: null
    },
    addTodo: {
        type: Function,
        default: null
    },
  },
  computed: {
    taskName: {
        get () {
            return this.nameTask
        },
        set (val) {
            this.$emit('update:nameTask', val)
        },
    },
  },
}
</script>
