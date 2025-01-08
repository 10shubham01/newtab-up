import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Dropdown } from "@/components/dropdown";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";

export function AddTask({
  listDropdown,
  listName,
}: {
  listDropdown: string[];
  listName: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="ghost">
          <Plus></Plus> Add new Task
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-screen-md px-0">
        <DialogHeader className="px-6">
          <DialogTitle>Add Task</DialogTitle>
        </DialogHeader>
        <Separator />
        <div className="grid p-6 bg-gray-100 h-auto -my-4">
          <input
            placeholder="Untitled"
            className="bg-transparent text-2xl font-semibold focus-within:outline-none mb-2"
          ></input>
          <textarea
            rows={8}
            placeholder="Add a short decription..."
            className="bg-transparent text-md focus-within:outline-none text-gray-700 resize-none"
          ></textarea>
          <div>
            <Dropdown items={listDropdown} defaultValue={listName}></Dropdown>
          </div>
        </div>
        <Separator />
        <DialogFooter className="px-6">
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
