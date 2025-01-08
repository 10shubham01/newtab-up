import { Input } from "@/components/ui/input";


export function Navbar() {
  return (
    <div className="flex justify-end w-full p-6">
      <Input className="w-full sm:w-1/4 mx-2 sm:mx-8" placeholder="search"></Input>
    </div>
  );
}
