"use client";

import { cn, rc } from "@/lib/utils";
interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatars: string[];
}

const AvatarCircles = ({
  numPeople,
  className,
  avatars,
}: AvatarCirclesProps) => {
  return (
    <div
      className={cn(
        "z-10 flex -space-x-2 hover:space-x-0 rtl:space-x-reverse transition-all",
        className
      )}
    >
      {avatars.map((avatar, index) => (
        <div
          className={`flex h-6 w-6 items-center justify-center text-center rounded-full border-2 border-black  text-uppercase text-2xl ${rc(
            "bg",
            avatar.charAt(0)
          )}`}
          key={index}
        >
          {avatar.charAt(0)}
        </div>
      ))}
      {(numPeople ?? 0) > 0 && (
        <a
          className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
          href=""
        >
          +{numPeople}
        </a>
      )}
    </div>
  );
};

export default AvatarCircles;
