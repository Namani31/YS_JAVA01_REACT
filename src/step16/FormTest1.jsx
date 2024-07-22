import { useState } from 'react'

export function FormTest1() {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        // 키보드로 칠 때마다 값이 들어감
        setValue(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('입력 값:' + value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>이름</label>
            <input type="text" id="name" onChange={handleChange}/>
            <button type="submit">제출</button>
        </form>
    )
}