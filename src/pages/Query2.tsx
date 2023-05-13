import {useApi} from "../hooks/useApi.ts";

const Query2 = () => {
    const { isLoading, error, data, isFetching } = useApi<any, Error>();

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>An error has occurred: {error.message}</p>;

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong>👀 {data.subscribers_count}</strong>{" "}
            <strong>✨ {data.stargazers_count}</strong>{" "}
            <strong>🍴 {data.forks_count}</strong>
            <div>{isFetching ? "Updating..." : ""}</div>
        </div>
    );
};

export default Query2;
