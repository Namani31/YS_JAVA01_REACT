import {Link} from 'react-router-dom';

export function About2() {
    return (
        <>
            <h2>도움말2</h2>
            <nav>
                <Link to="details">도움말 상세보기</Link>
            </nav>
        </>
    );
}