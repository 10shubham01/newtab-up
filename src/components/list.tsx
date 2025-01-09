import { Droppable } from "react-beautiful-dnd";
import Task from "@/components/task";
import { Button } from "@/components/ui/button";
import { rc } from "@/lib/utils";
type Task = {
  name: string;
  listId: string;
  description: string;
  title: string;
  assignees: string[];
  id: string;
};
export default function List({
  id,
  name,
  tasks,
  onTaskClick,
  onAdd,
}: {
  id: string;
  name: string;
  tasks: Task[];
  listDropdown: string[];
  onTaskClick: (task: Task) => void;
  onAdd: () => void;
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
              {name}
            </h1>
            <Button className="text-sm" size="sm" onClick={onAdd}>
              +
            </Button>
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
              onClick={() => onTaskClick(task)}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
