import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useAppDispatch, useAppSelector} from "./store";
import {fetchItems, fetchItemsThunk} from "./store/slices/itemsSlice.ts";
import {useItemsStore} from "./store/useItemsStore.ts";
import Test from "./pages/Test.tsx";

function App() {
    const dispatch = useAppDispatch();
    const {loading, items, error} = useAppSelector(state => state.items);
    const zustand = useItemsStore(state => state);
    const [count, setCount] = useState(0);

    const addItem = () => dispatch(fetchItems(Math.floor(Math.random() * 10 + 1)));
    const addItem2 = async () => {
        console.log("addItem2 start");
        await dispatch(fetchItemsThunk(Math.floor(Math.random() * 10 + 1)))
        console.log("addItem2 end");
    };
    const addItem3 = async () => {
        console.log("addItem3 start");
        await zustand.fetchItems(Math.floor(Math.random() * 10 + 1));
        console.log("addItem3 end");
    }

    return (
        <>
            <div>
                <button onClick={addItem}>하하하</button>
                <button onClick={addItem2}>하하하2</button>
                <button onClick={addItem3}>하하하3</button>
                <br/>
                {loading + "리덕스"}
                <br/>
                {JSON.stringify(items) + "리덕스"}
                <br/>
                {error+"리덕스"}
                <br/>
                {zustand.loading + "주스탠드"}
                <br/>
                {JSON.stringify(zustand.items) + "주스탠드"}
                <br/>
                {zustand.error+"주스탠드"}
            </div>
            <Test />
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
