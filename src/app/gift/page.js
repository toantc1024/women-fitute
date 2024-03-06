"use client";
// Generate random background color
const possible_colors = ["bg-pink-200", "bg-rose-200", "bg-red-200"];
import { emojis } from "../components/Letter";

const random_bg = () =>
  possible_colors[Math.floor(Math.random() * possible_colors.length)];

export default function Gift() {
  return (
    <div className="h-screen flex flex-wrap gap-4 w-full items-center justify-between pt-8 ">
      <div className="w-full h-full flex flex-wrap justify-center items-center flex-col gap-4">
        {[...new Array(28)].map((_, i) => (
          <div
            className={` ${
              i % 3 != 0 ? possible_colors[0] : possible_colors[1]
            } w-40 btn btn-secondary h-40 rounded-xl shadow-xl cursor-pointer flex items-center justify-center text-[4rem]`}
          >
            {emojis[i % emojis.length]}
          </div>
        ))}
      </div>
    </div>
  );
}
