import { writable } from 'svelte/store';
import curbeCover from "/curbe.svg";
import defaultCover from "/default.svg";
import fadeCover from "/fade.svg";

export const covers = [
  {
    id: 1,
    img: defaultCover,
    name: "Default Cover",
    position: "col-start-1 col-end-3 row-start-1 row-end-3",
  },
  {
    id: 2,
    img: curbeCover,
    name: "Curbe Cover",
    position: "col-start-3 col-end-5 row-start-1 row-end-3",
  },
  {
    id: 3,
    img: fadeCover,
    name: "Fade Cover",
    position: "col-start-2 col-end-4 row-start-3 row-end-5",
  },
] as const;

export type Cover = (typeof covers)[number]

export const choosedCover = writable<Cover | null>(null);
