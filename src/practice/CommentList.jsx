import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment name={"나마니"} comment={"안녕하세요, 나마니입니다."}/>
        </div>
    );
}

export default CommentList;