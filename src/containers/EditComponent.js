import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../actions'


class EditComponent extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
      newTitle,
      newMessage
    };
    this.props.dispatch(updatePost({
      id: this.props.post.id,
      data
    }))
  }
  render() {
    return (
      <div key={this.props.post.id} className="post">
        <form className="form" onSubmit={this.handleEdit}>
          <input className="form-input" required type="text" ref={(input) => this.getTitle = input}
            defaultValue={this.props.post.title} placeholder="Enter Post Title" /><br /><br />
          <textarea className="form-textarea" required rows="5" ref={(input) => this.getMessage = input}
            defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" /><br /><br />
          <button className="class-button">Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditComponent);