import { Draggable } from "react-beautiful-dnd";
import AvatarCircles from "./ui/avatar-circles";
import { Ellipsis } from "lucide-react";

export default function Task({
  id,
  index,
  name,
  onClick,
  description,
  title,
  assignees,
}: {
  id: string;
  index: number;
  name: string;
  description: string;
  title: string;
  assignees: string[];
  onClick: () => void;
}) {
  return (
    <Draggable draggableId={id} index={index} key={id}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onClick={onClick}
          className={`w-72 h-40 rounded-lg p-4 my-2 bg-white flex flex-col justify-between ${
            snapshot.isDragging ? "border-none" : "border-2 border-black"
          }`}
        >
          <div>
            <div className="text-2xl flex justify-between items-start">
              {title || name}
              <Ellipsis />
            </div>
            <p className="line-clamp-2 text-gray-500">{description}</p>
          </div>

          <div className="self-end">
            <AvatarCircles avatars={assignees} />
          </div>
        </div>
      )}
    </Draggable>
  );
}
