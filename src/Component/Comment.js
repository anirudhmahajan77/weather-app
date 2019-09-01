import React from "react";
import "./Comment.css";

class Comment extends React.Component{
    constructor(){
        super();
        this.state={
            count : 0,
            value : []
        }
        this.count = 1;
    }

    countHandler = () => {
        this.count++;
      }

      commentHandler(e){
          e.preventDefault();
          let cmnt = e.target.comment.value;
          console.log(cmnt);
      }
    render(){
        return(
        <div className="comment-section">
            <form onSubmit={this.countHandler}>
            <textarea placeholder="Enter Your Comment Here..." required onChange={this.handleChange} />
            <button type="submit" name="comment">Comment</button>
            </form>
            <div className="comment-form">
            <div>Comments ({this.count})</div>
            <div className="comment-holder">
            </div>
            </div>
        </div>
        )
    }
}

export default Comment;