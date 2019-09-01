import React from "react";
import "./Comment.css";

var count = 0;
var commentData = [];
var commentComponent = [];

function commentHandler() {
  countHandler();
  commentComponent = commentData.map(comment => (
    <div key={count}>{comment}</div>
  ));
}

function countHandler() {
  count++;
}

function Comment() {
  return (
    <div>
      <div className="comment-div">
        <div>
          <form onSubmit={commentHandler}>
            <textarea
              placeholder="Enter Your Comment Here..."
              name="text"
              className="comment-form"
            />
            <button type="submit" className="comment-btn">
              Comment
            </button>
          </form>
        </div>
      </div>
      <div className="comment-div">
        <div>Comments ({count})</div>
        <div className="comment-holder">{commentComponent}</div>
      </div>
    </div>
  );
}

export default Comment;
