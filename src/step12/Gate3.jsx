import { useEffect, useState } from "react";
import {useCounter} from './useCounter';

// 최대 정원
const MAX_CAPACITY = 10;
export function Gate3() {
    const [isFull, setIsFull] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const [count, increaseCount, decreaseCount] = useCounter(0); // 현재 입장객

    // count 값이 변경되면 실행
    useEffect(()=>{
        setIsFull(count >= MAX_CAPACITY); // 최대 정원의 상태를 셋팅 10명 이상 >= isFull:true
        setIsEmpty(count <= 0); // 비어있는 상태를 셋팅 0명 => isEmpty:true
    }, [count]);
    return (
        <div style={{padding:16}}>
            <p>총 {count}명 수용했습니다.</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount} disabled={isEmpty}>퇴장</button>
            
            {isFull && <p style={{color:'red'}}>정원이 가득 찼습니다.</p> }
            {isEmpty && <p style={{color:'red'}}>입장객이 없습니다.</p>}
        </div>
    );
}