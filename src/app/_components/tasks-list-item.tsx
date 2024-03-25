import CheckboxComplete from "./checkbox-complete";
import DeleteTaskBtn from "./delete-task-btn";

interface ITasksListItemProps {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

const TasksListItem = ({
  id,
  title,
  description,
  completed,
}: ITasksListItemProps) => {
  return (
    <>
      <li key={id} className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <h2 className="text-lg">{title}</h2>
          <p className="block w-[150px] overflow-hidden truncate text-wrap">
            {description}
          </p>
        </div>
        <CheckboxComplete id={id} completed={completed} />
        <DeleteTaskBtn id={id} />
      </li>
      <div className="inline-flex h-[1px] w-full bg-gray-400"></div>
    </>
  );
};

export default TasksListItem;
