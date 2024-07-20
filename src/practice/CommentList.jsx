import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment name={"나마니"} comment={"안녕하세요, 나마니입니다."}/>
            <Comment name={"진"} comment={"리액트 화이팅!"}/>
        </div>
    );
}

export default CommentList;