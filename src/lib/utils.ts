import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const rc = (type: "text" | "bg", letter: string): string => {
  const colorMap: Record<string, string> = {
    a: "rose-500",
    b: "orange-500",
    c: "cyan-500",
    d: "blue-500",
    e: "emerald-500",
    f: "fuchsia-500",
    g: "green-500",
    h: "amber-500",
    i: "green-500",
    j: "yellow-500",
    k: "pink-500",
    l: "lime-500",
    m: "orange-500",
    n: "teal-500",
    o: "red-500",
    p: "purple-500",
    q: "sky-500",
    r: "rose-500",
    s: "blue-500",
    t: "rose-500",
    u: "cyan-500",
    v: "fuchsia-500",
    w: "yellow-500",
    x: "pink-500",
    y: "amber-500",
    z: "lime-500",
  };


  const normalizedLetter = letter.toLowerCase();
  const fallbackColor = "rose-500";
  const color = colorMap[normalizedLetter] || fallbackColor;
  return `${type}-${color}`;
};

