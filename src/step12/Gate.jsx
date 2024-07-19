import { useState } from "react";

export function Gate() {
    const [isFull, setIsFull] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        let _count = count + 1;
        setCount(_count);
    }
    return (
        <div style={{padding:16}}>
            <p>총 {count}명 수용했습니다.</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button disabled={isEmpty}>퇴장</button>
            <p style={{color:'blue'}}>정원이 가득 찼습니다.</p>
        </div>
    );
}