import {useItemsStore} from "../store/useItemsStore.ts";

const Test = () => {
    const zustand = useItemsStore(state => state);
    return (
        <div>
            여기는 이제 컴포넌트영역
            <br/>
            {zustand.loading + "주스탠드"}
            <br/>
            {JSON.stringify(zustand.items) + "주스탠드"}
            <br/>
            {zustand.error+"주스탠드"}
        </div>
    );
};

export default Test;
