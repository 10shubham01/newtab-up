import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { rc } from "@/lib/utils";

export function Dropdown({
  items,
  defaultValue,
  onChange,
}: {
  items: string[];
  defaultValue: string;
  onChange: (value: string) => void;
}) {
  const [position, setPosition] = React.useState(defaultValue);

  const handleValueChange = (value: string) => {
    setPosition(value);
    onChange(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="sm"
          className={`${rc("bg", position.charAt(0))} hover:${rc(
            "bg",
            position.charAt(0)
          )}/80  text-2xl`}
        >
          #{position}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup
          value={position}
          onValueChange={handleValueChange}
        >
          {items?.map((item) => (
            <DropdownMenuRadioItem key={item} value={item}>
              {item}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
