import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Dropdown } from "@/components/dropdown";
import { Separator } from "@/components/ui/separator";
import { Task } from "@/types";
import { rc } from "@/lib/utils";

export default function AddTask({
  listDropdown,
  listId,
  task,
  onSubmit,
  onClose,
}: {
  listDropdown: string[];
  listId: string;
  task?: Task;
  onSubmit: (task: Task) => void;
  onClose: () => void;
}) {
  const [taskName, setTaskName] = useState(task?.name || "");
  const [description, setDescription] = useState(task?.description || "");
  const [selectedList, setSelectedList] = useState(task?.listId || listId);

  // Update state when editing an existing task
  useEffect(() => {
    if (task) {
      setTaskName(task.name);
      setDescription(task.description);
      setSelectedList(task.listId);
    }
  }, [task]);

  const handleSave = () => {
    if (!taskName.trim()) {
      alert("Task name is required!");
      return;
    }

    const newTask: Task = {
      id: task?.id || `task-${Date.now()}`, // Generate a new ID if creating a new task
      name: taskName,
      description,
      title: taskName,
      listId: selectedList,
      assignees: task?.assignees || [], // Default to an empty assignees list if not provided
    };

    onSubmit(newTask);
  };

  return (
    <Dialog open={!!task || true}>
      <DialogContent className="max-w-screen-md px-0">
        <DialogHeader className="px-6">
          <DialogTitle>
            <span className={`text-2xl px-1 ${rc("bg", task ? "U" : "A")}`}>
              {task ? "Update Task" : "Add Task"}
            </span>
          </DialogTitle>
        </DialogHeader>
        <Separator />
        <div className="grid p-6 bg-gray-100 h-auto -my-4">
          {/* Task Name Input */}
          <input
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="bg-transparent text-3xl font-semibold focus-within:outline-none mb-4"
          />

          {/* Description Input */}
          <textarea
            rows={6}
            placeholder="Add a short description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-transparent text-xl focus-within:outline-none text-gray-700 resize-none mb-4"
          />

          {/* Dropdown to change the list */}
          <div className="w-fit">
            <Dropdown
              items={listDropdown}
              defaultValue={selectedList}
              onChange={setSelectedList}
            />
          </div>
        </div>
        <Separator />
        <DialogFooter className="px-6">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="button" className="mr-2" onClick={handleSave}>
            Save Task
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
