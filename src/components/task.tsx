import { Draggable } from "react-beautiful-dnd";

export function Task({
  id,
  index,
  children,
}: {
  id: string;
  index: number;
  children: React.ReactNode;
}) {
  return (
    <Draggable draggableId={id} index={index} key={id}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`w-72 h-40  rounded-lg p-4 my-2 text-center bg-white ${
            snapshot.isDragging ? "border-none" : "border-2"
          }`}
        >
          {children}
        </div>
      )}
    </Draggable>
  );
}
