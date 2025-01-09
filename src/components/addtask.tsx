import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Dropdown } from "@/components/dropdown";
import { Separator } from "@/components/ui/separator";
import { Task } from "@/types";
import { rc } from "@/lib/utils";

export default function AddTask({
  listDropdown,
  listId,
  onSubmit,
}: {
  listDropdown: string[];
  listId: string;
  onSubmit: (task: Task) => void;
}) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedList, setSelectedList] = useState(listId);

  const handleSave = () => {
    const newTask: Task = {
      id: `task-${Date.now()}`,
      name: taskName,
      description,
      title: taskName,
      listId: selectedList,
      assignees: [],
    };
    onSubmit(newTask);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="ghost" className="text-3xl">
          +
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-screen-md px-0">
        <DialogHeader className="px-6">
          <DialogTitle>
            <span className={`text-2xl ${rc("bg", "A")} px-1`}>Add Task</span>
          </DialogTitle>
        </DialogHeader>
        <Separator />
        <div className="grid p-6 bg-gray-100 h-auto -my-4">
          <input
            placeholder="Untitled"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="bg-transparent text-3xl font-semibold focus-within:outline-none mb-2"
          />
          <textarea
            rows={8}
            placeholder="Add a short description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-transparent text-xl focus-within:outline-none text-gray-700 resize-none"
          />
          <div>
            <Dropdown
              items={listDropdown}
              defaultValue={listId}
              onChange={setSelectedList}
            />
          </div>
        </div>
        <Separator />
        <DialogFooter className="px-6">
          <DialogClose asChild>
            <Button
              type="button"
              className={rc("bg", "s")}
              onClick={handleSave}
            >
              Save Task
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
