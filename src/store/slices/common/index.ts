import {getCreate} from "../../hooks/getCreate.ts";
import {slice} from "./slice.ts";
export * from "./types.ts";

export const useCommonStore = getCreate(slice, "common-store");
