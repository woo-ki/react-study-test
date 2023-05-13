import './App.css'
import {useAppStore} from "./store";
import Test from "./pages/Test.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Query2 from "./pages/Query2.tsx";
import Query1 from "./pages/Query1.tsx";
import Query3 from "./pages/Query3";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./routes/Layout";
import NoMatch from "./routes/NoMatch.tsx";
import CustomAlert from "./components/common/CustomAlert";

function App() {
    const {bears, increase: bearInc, description: descriptionBear, test} = useAppStore("bear");
    const {fishes, increase: fishInc, description: descriptionFish} = useAppStore("fish");
    const increaseBear = () => bearInc(1);
    const increaseFish = () => fishInc(1);
    const queryClient = new QueryClient();
    const {loading, alert_visibility, showAlert} = useAppStore("common");

    const testAlert = async () => {
        const res= await showAlert({title: "알림", content: "알림 내용이지라~", showCancel: true, cancel: "취소", confirm: "확인"});
        console.log(res);
    }

    return (
        <>
            <button onClick={testAlert}>알럿테스트</button>
            <div>곰: {bears}</div>
            <button onClick={increaseBear}>베어증가</button>
            <button onClick={descriptionBear}>베어소개</button>
            <button onClick={test}>베어테스트</button>
            <div>생선: {fishes}</div>
            <button onClick={increaseFish}>피시증가</button>
            <button onClick={descriptionFish}>피시소개</button>
            <Test/>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route path="/query1" element={<Query1/>}/>
                            <Route path="/query2" element={<Query2/>}/>
                            <Route path="/query3" element={<Query3/>}/>
                            <Route path="*" element={<NoMatch/>}/>
                        </Route>
                    </Routes>
                </QueryClientProvider>
            </BrowserRouter>
            {alert_visibility && <CustomAlert/>}
            {loading && (
                <div id="loading_wrapper">
                    <div className="loading-overlay"/>
                    <img
                        src="/loading.svg"
                        alt="로딩아이콘"
                    />
                </div>
            )}
        </>
    )
}

export default App
