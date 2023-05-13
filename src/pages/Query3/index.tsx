import {useQuery3} from "./hooks.ts";

const Query3 = () => {
    const data = useQuery3();

    if (data && data.result_code !== 200) return <p>An error has occurred: {data.result_msg}</p>;

    return (
        <div>
            <h1>{JSON.stringify(data)}</h1>
        </div>
    );
};

export default Query3;
