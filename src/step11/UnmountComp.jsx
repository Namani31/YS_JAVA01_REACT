// 파일명: src/step11/UnmountComp.jsx
import { useState, useEffect } from "react";

export function UnmountComp() {
    const [mounted, setMounted] = useState(true);
    useEffect(() => {
        console.log('컴포넌트 마운팅 됨'); // 마운팅 된 뒤, 수정된 뒤 실행 됨
        return () => {
            console.log('컴포넌트 언마운팅 전');
        }
    }, []);

    const Dounmounting = () => {
        setMounted(false); // 마우스 클릭 시 `useState` 만 바꾸게 됨
    };

    if (mounted) {
        return (<div>컴포넌트가 언 마운팅 됨</div>);
    } else {
        return (
            <div> 컴포넌트가 마운팅 됨
                <button onClick={Dounmounting}>Unmount</button>
            </div>
        );
    }
}