import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "나마니",
        comment: "안녕하세요, 나마니입니다.",
    },
    {
        name: "진",
        comment: "리액트 화이팅!",
    },
    {
        name: "아서",
        comment: "리액트 재밌네",
    },
    {
        name: "더치",
        comment: "Have some faith!",
    },
]
function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;