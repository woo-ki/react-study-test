import {getCreate} from "../../hooks/getCreate.ts";
import {slice} from "./slice.ts";
export * from "./types.ts";

export const useFishStore = getCreate(slice, "fish-store");
