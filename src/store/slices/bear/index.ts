import {getCreate} from "../../hooks/getCreate.ts";
import {slice} from "./slice.ts";
export * from "./types.ts";

export const useBearStore = getCreate(slice, "bear-store");
