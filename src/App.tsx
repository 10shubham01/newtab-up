import { useState, useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import List from "@/components/list";
import Sidenav from "./components/sidenav";
import AddTask from "@/components/addtask";
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

  const LOCAL_STORAGE_KEY = "task_lists";

  const [listDropdownItem, setListDropdownItem] = useState<string[]>([]);
  const [lists, setLists] = useState<ListType[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task>();
  const [isAddTaskOpen, setAddTaskOpen] = useState(false);
  const [defaultListId, setDefaultListId] = useState<string>("");
  useEffect(() => {
    const storedLists = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedLists) {
      setLists(JSON.parse(storedLists));
    } else {
      setLists(TASK);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lists));
  }, [lists]);

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

    movedTask.listId = destinationList.id;

    destinationList.tasks.splice(destination.index, 0, movedTask);

    setLists((prevLists) =>
      prevLists.map((list) => {
        if (list.id === sourceList.id) return { ...sourceList };
        if (list.id === destinationList.id) return { ...destinationList };
        return list;
      })
    );
  }

  const handleAddOrUpdateTask = (task: Task) => {
    setLists((prevLists) =>
      prevLists.map((list) => {
        if (list.id === task.listId) {
          const existingTaskIndex = list.tasks.findIndex(
            (t) => t.id === task.id
          );
          if (existingTaskIndex > -1) {
            list.tasks[existingTaskIndex] = task;
          } else {
            list.tasks.push(task);
          }
        } else {
          list.tasks = list.tasks.filter((t) => t.id !== task.id);
        }
        return { ...list };
      })
    );
    setSelectedTask(undefined);
    setAddTaskOpen(false);
  };

  const handleAddTask = (listId: string) => {
    setDefaultListId(listId);
    setAddTaskOpen(true);
  };

  return (
    <div className="h-dvh w-full flex bg-gradient-to-bl from-white to-gray-200 via-white">
      <Sidenav />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="size-full flex gap-x-2 overflow-x-scroll p-10">
          {lists.map((list) => (
            <List
              key={list.id}
              id={list.id}
              name={list.name}
              tasks={list.tasks}
              listDropdown={listDropdownItem}
              onTaskClick={setSelectedTask}
              onAdd={() => handleAddTask(list.id)}
            />
          ))}
        </div>
      </DragDropContext>
      {(isAddTaskOpen || selectedTask) && (
        <AddTask
          listDropdown={listDropdownItem}
          listId={selectedTask?.listId || defaultListId}
          task={selectedTask}
          onSubmit={handleAddOrUpdateTask}
          onClose={() => {
            setSelectedTask(undefined);
            setAddTaskOpen(false);
          }}
        />
      )}
    </div>
  );
}
