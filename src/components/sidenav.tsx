import { FileTree } from "./projects";

export default function Sidenav() {
  return (
    <div className="h-full flex">
      <div className="w-20 h-full bg-gray-950"></div>
      <FileTree></FileTree>
    </div>
  );
}
