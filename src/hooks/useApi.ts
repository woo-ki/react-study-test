import axios from "axios";
import {useQuery} from "@tanstack/react-query";

export const useApi = <T, E>() => (useQuery<T, E>({
    queryKey: ["repoData"],
    queryFn: () =>
        axios
            .get("https://api.github.com/repos/tannerlinsley/react-query")
            .then((res) => res.data),
}))
