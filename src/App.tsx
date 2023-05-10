import './App.css'
import {useAppStore} from "./store";
import Test from "./pages/Test.tsx";

function App() {
    const {bears, increase: bearInc, description: descriptionBear, test} = useAppStore("bear");
    const {fishes, increase: fishInc, description: descriptionFish} = useAppStore("fish");
    const increaseBear = () => bearInc(1);
    const increaseFish = () => fishInc(1);
    return (
        <>
            <div>곰: {bears}</div>
            <button onClick={increaseBear}>베어증가</button>
            <button onClick={descriptionBear}>베어소개</button>
            <button onClick={test}>베어테스트</button>
            <div>생선: {fishes}</div>
            <button onClick={increaseFish}>피시증가</button>
            <button onClick={descriptionFish}>피시소개</button>
            <Test/>
        </>
    )
}

export default App
