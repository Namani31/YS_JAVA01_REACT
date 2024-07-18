// 파일: src/step11/Counter.jsx
export function Counter(props) {
    let count = 0;
    

    return (
        <div>
            <p id='msg'>총 {count}번 클릭했습니다.</p>
            <button onClick={() => {
                count++;
                let msgEle = document.getElementById('msg');
                msgEle.innerText = `총 ${count}번 클릭했습니다.`
                console.log('count=>', count);
                }}>클릭</button>
        </div>
    )
}