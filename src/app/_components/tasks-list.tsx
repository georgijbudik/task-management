import { api } from "@/trpc/server";

import TasksListItem from "./tasks-list-item";

const TasksList = async () => {
  const tasks = await api.task.getAll();
  return (
    <>
      <ul className="flex w-[500px] flex-col gap-4">
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
      {tasks.length === 0 && (
        <div className="w-[310px]">
          <h2 className="bg-gradient-to-tr from-neutral-200 to-neutral-400 bg-clip-text text-center font-sans font-bold text-transparent md:text-3xl">
            You do not have any created tasks yet
          </h2>
        </div>
      )}
    </>
  );
};

export default TasksList;
