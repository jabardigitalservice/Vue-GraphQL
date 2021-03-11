const { TodoTask } = require("../models/todo");
const { TodoTaskTC } = require("../models/todo");

TodoTaskTC.addResolver({
  name: "create",
  kind: "mutation",
  type: TodoTaskTC.getResolver("createOne").getType(),
  args: TodoTaskTC.getResolver("createOne").getArgs(),
  resolve: async ({ source, args, context, info }) => {
    const todoTask = await TodoTask.create(args.record);

    return {
      record: todoTask,
      recordId: TodoTaskTC.getRecordIdFn()(todoTask),
    };
  },
});

const TodoTaskQuery = {
  todoById: TodoTaskTC.getResolver("findById"),
  todoByIds: TodoTaskTC.getResolver("findByIds"),
  todoOne: TodoTaskTC.getResolver("findOne"),
  todoMany: TodoTaskTC.getResolver("findMany"),
  todoCount: TodoTaskTC.getResolver("count"),
  todoConnection: TodoTaskTC.getResolver("connection"),
  todoPagination: TodoTaskTC.getResolver("pagination"),
};

const TodoTaskMutation = {
  todoWithFile: TodoTaskTC.getResolver("create"),
  todoCreateOne: TodoTaskTC.getResolver("createOne"),
  todoCreateMany: TodoTaskTC.getResolver("createMany"),
  todoUpdateById: TodoTaskTC.getResolver("updateById"),
  todoUpdateOne: TodoTaskTC.getResolver("updateOne"),
  todoUpdateMany: TodoTaskTC.getResolver("updateMany"),
  todoRemoveById: TodoTaskTC.getResolver("removeById"),
  todoRemoveOne: TodoTaskTC.getResolver("removeOne"),
  todoRemoveMany: TodoTaskTC.getResolver("removeMany"),
};

module.exports = { TodoTaskQuery: TodoTaskQuery, TodoTaskMutation: TodoTaskMutation }