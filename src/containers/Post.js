import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, editPost } from '../actions';

class Post extends Component {

  
  render() {

    return (
      <div className="marginPosts">
        <h3>{this.props.post.title}</h3>
        <br></br>
        <p>{this.props.post.message}</p>
        <div className="footer-buttons">
          <button className="class-button"
            onClick={() => this.props.dispatch(editPost(this.props.post.id))
            }
          >Edit</button>
          <div className="delete-button">
            <button className="class-button"
              onClick={() => this.props.dispatch(deletePost(this.props.post.id))}
            >Delete</button>
          </div>
        </div>
      </div>
    );
  }

}
export default connect()(Post);