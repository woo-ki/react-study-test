import {useAppStore} from "../store";

const Test = () => {
    const {bear} = useAppStore();
    return (
        <div>
            컴포넌트징: {JSON.stringify(bear)}
        </div>
    );
};

export default Test;
