import React from "react";
import "./Comment.css";

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      comments: []
    };
    this.newCommentHandler = this.newCommentHandler.bind(this);
  }

  newCommentHandler(e) {
    e.preventDefault();

    var newComment = e.target.review.value;
    if (newComment === "" || newComment === " ") {
      alert("Empty Comment Cannot Be Posted!");
      return 0;
    }

    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });

    e.target.review.value = "";
    this.setState({ comments: [...this.state.comments, newComment] });
  }

  render() {
    return (
      <div>
        <div className="comment-div">
          <div>
            <form onSubmit={this.newCommentHandler}>
              <textarea
                placeholder="Enter Your Comment Here..."
                name="review"
                className="comment-form"
              />
              <button type="submit" className="comment-btn">
                Comment
              </button>
            </form>
          </div>
        </div>
        <div className="comment-div">
          <div style={{ marginBottom: "3px" }}>
            Comments ({this.state.count})
          </div>
          <div className="comment-holder">
            {this.state.comments.map((value, index) => (              
              <p className="comment-val" key={index}>
              <img
              src="https://img.icons8.com/pastel-glyph/64/000000/person-male.png"
              width="20px"
              height="20px"
            />{" "}
                {value}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Comment;
