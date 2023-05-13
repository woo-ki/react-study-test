import {useAxios} from "../../hooks/useAxios";
import {useEffect} from "react";
import {useAppStore} from "../../store";

export const useQuery3 = () => {
    const json = useAxios("json");
    const { isLoading, data, isFetching } = json.fetchTodo();

    const {setLoading} = useAppStore("common");

    useEffect(() => {
        setLoading(isLoading || isFetching);
        if (!isLoading && !isFetching && data && data.result_code !== 200) {
            alert(data.result_msg);
        }
    }, [isLoading, isFetching]);

    return data;
}
