import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "김철수",
        comment: "안녕하세요! ",
    },
    {
        name: "홍길동",
        comment: "반가워요! ",
    },
    {
        name: "김땡땡",
        comment: "잘 부탁드려요~",
    },
];

function CommentList(props) {
    return (
        <dv>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </dv>
    );
}

export default CommentList;