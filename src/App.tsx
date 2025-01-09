import { useState, useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import List from "@/components/list";
import Sidenav from "./components/sidenav";
import { TASK } from "./constant";

export default function App() {
  type Task = {
    name: string;
    listId: string;
    description: string;
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
  const [lists, setLists] = useState<ListType[]>(TASK);

  // const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  useEffect(() => {
    setListDropdownItem(lists.map((list) => list.id));
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

  const handleAddTask = (newTask: Task) => {
    console.log(newTask);

    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === newTask.listId
          ? { ...list, tasks: [...list.tasks, newTask] }
          : list
      )
    );
  };
  return (
    <div className="h-dvh w-full flex  bg-gradient-to-bl from-white to-gray-200 via-white">
      <Sidenav></Sidenav>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="size-full flex gap-x-2 overflow-x-scroll p-10">
          {lists.map((list) => (
            <List
              key={list.id}
              id={list.id}
              name={list.name}
              tasks={list.tasks}
              listDropdown={listDropdownItem}
              // onTaskClick={setSelectedTask}
              onAddOrUpdateTask={handleAddTask}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
