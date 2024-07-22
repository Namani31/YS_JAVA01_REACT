import { useState } from "react";

export function FormTest3() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('선택한 과일: ' + value);
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* value={value}는 선택된 옵션의 값이 일치하도록 `select` 요소의 값을 설정 */}
            <select value={value} onChange={handleChange} >
                <option value="apple">사과</option>
                <option value="banana">바나나</option>
                <option value="grape">포도</option>
                <option value="melon">멜론</option>
            </select>
            <button type="submit" >제출</button>
        </form>
    )
}