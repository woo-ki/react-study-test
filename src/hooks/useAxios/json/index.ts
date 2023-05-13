import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {TodoType} from "./types.ts";
import {api, DataReturn} from "../axios.ts";

export type JsonData = {
    fetchTodo: () => UseQueryResult<DataReturn<TodoType>, Error>;
}
export const jsonData = {
    fetchTodo: () => useQuery<DataReturn<TodoType>, Error>({
        queryKey: ["todo"],
        queryFn: () => api<TodoType>("get", "https://jsonplaceholder.typicode.com/todos/1", {}, {externalUrl: true}),
    })
}
