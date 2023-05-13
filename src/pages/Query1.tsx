import {useAxios} from "../hooks/useAxios";
import {useEffect} from "react";

const Query1 = () => {
    // const { isLoading, error, data, isFetching } = useApi<any, Error>();
    const json = useAxios("json");
    const { isLoading, data, isFetching } = json.fetchTodo();

    useEffect(() => {
        console.log("Query1 useEffect", data);
    }, [data]);
    if (isLoading) return <p>Loading...</p>;

    if (data && data.result_code !== 200) return <p>An error has occurred: {data.result_msg}</p>;

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isFetching && <p>Loading...</p>}
            <h1>{JSON.stringify(data)}</h1>
        </div>
    );
};

export default Query1;
