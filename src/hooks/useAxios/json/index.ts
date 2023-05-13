import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {TodoType} from "./types.ts";
import {api, DataReturn} from "../axios.ts";

export type JsonData = {
    fetchTodo: () => UseQueryResult<DataReturn<TodoType>, Error>;
}
export const jsonData = {
    fetchTodo: () => useQuery<DataReturn<TodoType>, Error>({
        queryKey: ["todo"],
        queryFn: () => {
            const random = Math.floor(Math.random() * 3);
            let url = "https://jsonplaceholder.typicode.com/todos/1";
            if (random === 1) {
                url = "https://jsonplaceholder.typicode.com/todos2/1"
            }
            return api<TodoType>("get", url, {}, {externalUrl: true})
        }
    })
}
