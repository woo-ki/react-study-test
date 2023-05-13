import {useAxios} from "../hooks/useAxios";
import {useEffect} from "react";

const Query1 = () => {
    // const { isLoading, error, data, isFetching } = useApi<any, Error>();
    const json = useAxios("json");
    const { isLoading, data, isFetching } = json.fetchTodo();

    useEffect(() => {
        if (!(isLoading || isFetching) && data) {
            if (data.result_code !== 200) {
                alert(data.result_msg);
            }
        }
    }, [data]);

    if (data && data.result_code !== 200) return <p>An error has occurred: {data.result_msg}</p>;

    if (isLoading || isFetching) return <p>Loading...</p>;
    return (
        <div>
            <h1>{JSON.stringify(data)}</h1>
        </div>
    );
};

export default Query1;
