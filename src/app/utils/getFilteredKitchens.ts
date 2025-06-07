import { Kitchen } from "../types";

export const getFilteredKitchens = (list: Kitchen[], style: string) => {
  return list.filter((kitchen) => kitchen.style === style);
};
