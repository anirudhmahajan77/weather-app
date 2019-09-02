// Importing the dependencies for the Component
import React from "react";
import "./Comment.css";

// Class for the Comment Component
class Comment extends React.Component {
  constructor() {
    super();
    // Setting up the State 
    this.state = {
      count: 0,
      comments: []
    };

    // Binding the newCommentHandler function with this object
    this.newCommentHandler = this.newCommentHandler.bind(this);
  }

  /*
   This function implies the logic of new comment posting 
  */
  newCommentHandler(e) {
    e.preventDefault(); // Stopping the Bubbling

    // Fetching the new Comment Value
    var newComment = e.target.review.value;

    // Checking if the comment is not empty
    if (newComment === "" || newComment === " ") {
      alert("Empty Comment Cannot Be Posted!");
      return 0;
    }

    // Updating the Comment Counter
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });

    // Resetting the Value of the TextArea in the form
    e.target.review.value = "";

    // Adding the new comment to the comment holder
    this.setState({ comments: [...this.state.comments, newComment] });
  }

  // Rendering method to return JSX of Component
  render() {
    return (
      <div>
        <div className="comment-div">
          <div>
            {/* Form for the Comment Posting Section */}
            <form onSubmit={this.newCommentHandler}>
              <textarea
                placeholder="Enter Your Comment Here..."
                name="review"
                className="comment-form"
              />
              {/* Button for Posting the comment */}
              <button type="submit" className="comment-btn">
                Comment
              </button>
            </form>
          </div>
        </div>
        {/* Holder for the Comments */}
        <div className="comment-div">
          <div style={{ marginBottom: "3px" }}>
            Comments ({this.state.count})
          </div>
          <div className="comment-holder">
            {/* Putting the Comment to the Screen */}
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

// Exporting the component to the WeatherApp Component
export default Comment;