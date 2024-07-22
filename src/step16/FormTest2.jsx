import { useState } from "react";

export function FormTest2() {
    const [value, setValue] = useState('');

    /*
        `event.textarea.value 쓰면 오류 남
        `event` 객체의 `target` 속성이 `textarea` 요소를 가리키고,
        이 요소의 `value` 속성을 읽어야 함

        `event.textarea`를 사용할 수 없는 이유:
        `event` 객체가 `textarea` 요소를 직접 포함시키지 않기 때문임
        `event.target`: 이벤트가 발생한 DOM 요소를 참조
        `event.target.value`: 해당 DOM 요소의 값(value) 속성을 가리킴
    */
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('입력 값:' + value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>요청사항:
                <textarea id="name" onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    )
}