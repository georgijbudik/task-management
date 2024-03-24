import { api } from "@/trpc/server";

import TasksListItem from "./tasks-list-item";

const TasksList = async () => {
  const tasks = await api.task.getAll();
  return (
    <ul className="flex w-[400px] flex-col gap-4">
      {tasks.map(({ id, title, description, completed }) => {
        return (
          <TasksListItem
            id={id}
            title={title}
            description={description!}
            completed={completed}
          />
        );
      })}
    </ul>
  );
};

export default TasksList;
