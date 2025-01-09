import { Droppable } from "react-beautiful-dnd";
import AddTask from "@/components/addtask";
import Task from "@/components/task";
import { Task as TaskType } from "@/types";
import { rc } from "@/lib/utils";

export default function List({
  id,
  name,
  tasks,
  listDropdown,
  // onTaskClick,
  onAddOrUpdateTask,
}: {
  id: string;
  name: string;
  tasks: TaskType[];
  listDropdown: string[];
  onTaskClick?: (task: TaskType) => void;
  onAddOrUpdateTask: (task: TaskType) => void;
}) {
  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`min-w-80 h-fit border-dashed border-black border-2 rounded-lg flex flex-col items-center pb-4 ${
            snapshot.isDraggingOver ? "bg-gray-100" : "bg-transparent"
          }`}
        >
          <div className="w-full flex items-center p-4 justify-between">
            <h1 className={`text-lg text-gray-800 ${rc("bg", name.charAt(0))}`}>
              {name + ` (${tasks.length})`}
            </h1>
            <AddTask
              listDropdown={listDropdown}
              listId={id}
              onSubmit={onAddOrUpdateTask}
            />
          </div>
          {tasks.map((task, index) => (
            <Task
              key={task.id}
              id={task.id}
              index={index}
              name={task.name}
              title={task.title}
              description={task.description}
              assignees={task.assignees}
              // onClick={() => onTaskClick(task)}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
