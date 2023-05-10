import {useAppStore} from "../store";

const Test = () => {
    const {bear, fish} = useAppStore();
    return (
        <div>
            컴포넌트하위지롱
            <br/>
            곰: {JSON.stringify(bear)}
            <br/>
            생선: {JSON.stringify(fish)}
        </div>
    );
};

export default Test;
