export type search = {
  searchFilter: string;
  setsearchFilter: (x: string) => void;
};

import { createContext } from "react";

export const Context = createContext<search | undefined>(undefined);
