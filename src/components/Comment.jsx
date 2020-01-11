import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Comment = ({ comment }) => {
  const { comments } = comment;
  return (
    <div className="comment">
      <span className="comment-meta">{comment.user} {comment.time_ago}</span>
      <div className="comment-body">{ReactHtmlParser(comment.content)}</div>
      <div className="nested">
        {comments.map((comment) => {
          return (
            <Comment comment={comment} key={comment.id}/>
          )
        })}
      </div>
    </div>
  )
}

export default Comment
