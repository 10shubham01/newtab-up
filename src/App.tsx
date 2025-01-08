import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { List } from "@/components/list";
import { Task } from "@/components/task";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

export default function App() {
  type Task = {
    name: string;
    listId: string;
    decription: string;
    title: string;
    assignees: string[];
    id: string;
  };

  type ListType = {
    name: string;
    id: string;
    tasks: Task[];
  };
  const [listDropdownItem, setListDropdownItem] = useState<string[]>([]);

  const [lists, setLists] = useState<ListType[]>([
    {
      name: "Todo",
      id: "to_do",
      tasks: [
        {
          name: "First task",
          listId: "to_do",
          id: "todo_task",
          decription: "anything",
          title: "title",
          assignees: ["Shubham"],
        },
      ],
    },
    {
      name: "In Progress",
      id: "in_progress",
      tasks: [
        {
          name: "last task",
          listId: "in_progress",
          id: "first_task",
          decription: "anything",
          title: "title",
          assignees: ["Shubham"],
        },
        {
          name: "new task",
          listId: "in_progress",
          id: "new_task",
          decription: "anything",
          title: "title",
          assignees: ["Shubham"],
        },
      ],
    },
  ]);

  useEffect(() => {
    setListDropdownItem(lists.map((list) => list.name));
  }, [lists]);

  function handleDragEnd(result: DropResult) {
    const { source, destination } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const sourceList = lists.find((list) => list.id === source.droppableId);
    const destinationList = lists.find(
      (list) => list.id === destination.droppableId
    );

    if (!sourceList || !destinationList) return;

    const [movedTask] = sourceList.tasks.splice(source.index, 1);

    destinationList.tasks.splice(destination.index, 0, movedTask);

    setLists((prevLists) =>
      prevLists.map((list) => {
        if (list.id === sourceList.id) return { ...sourceList };
        if (list.id === destinationList.id) return { ...destinationList };
        return list;
      })
    );
  }

  return (
    <div className="h-dvh w-full flex flex-col justify-between bg-gradient-to-bl from-gray-50 to-gray-200 via-gray-50">
      <div>
        <Navbar />
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="size-full flex gap-x-2 overflow-x-scroll p-10">
          {lists.map((list) => (
            <List
              key={list.id}
              id={list.id}
              name={list.name}
              listDropdown={listDropdownItem}
            >
              {list.tasks.map((task, index) => (
                <Task key={task.id} id={task.id} index={index}>
                  {task.name}
                </Task>
              ))}
            </List>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
