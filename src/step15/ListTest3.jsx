const animals = [
    '고양이', '호랑이', '기러기',
]

export function ListTest3() {
    return (
        <ul>
            {/* 
                맵 함수에서 만들어지는 요소는
                반드시 유니크한 키값을 가지고 있어야 함
                유니크 값이 없다면 전체 순환을 하여 값을 찾아내야 하기 때문에
                성능에 문제가 생김
             */}
            {animals.map(
                (animal, index) => {
                    return <li key={index}>{animal}</li>
                }
            )}
        </ul>
    );
}