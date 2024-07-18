// 파일: src/step11/Counter.jsx
// 2. useState 사용하는 방법
import {useState} from "react";

export function Counter(props) {
    // const[읽기변수, 입력함수] = useState(초기값)
    const[count, setCount] = useState(0);

    return (
        <div>
            <p id='msg'>총 {count}번 클릭했습니다.</p>
            <button onClick={() => {
                // count++; 읽기 전용이라 직접 변경 불가능
                setCount(count+1);
                console.log('count=>', count+1);
                }}>클릭</button>
        </div>
    )
}