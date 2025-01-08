import { ReactNode, Children } from "react";
import { Droppable } from "react-beautiful-dnd";
import { AddTask } from "@/components/addtask";
export function List({
  children,
  id,
  name,
  listDropdown,
}: {
  children: ReactNode;
  id: string;
  name: string;
  listDropdown: string[];
}) {
  return (
    <Droppable droppableId={id} key={id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`w-80 h-fit border-dashed border-2 rounded-lg flex flex-col items-center pb-4 ${
            snapshot.isDraggingOver ? "bg-gray-100" : "bg-transparent"
          }`}
        >
          <div className="w-full flex items-center p-4 justify-between">
            <span className="text-sm text-gray-500">
              {name + `(${Children.toArray(children).length})`}
            </span>

            <AddTask listDropdown={listDropdown} listName={name}></AddTask>
          </div>
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
