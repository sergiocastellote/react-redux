import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions'
class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message,
      editing: false
    }
    //  this.props.dispatch({
    //  type: 'ADD_POST',
    //  data
    //  })
    this.props.dispatch(addPost(data));
    this.getTitle.value = '';
    this.getMessage.value = '';
  }
  render() {
    return (
      <section id="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <section>
                <div>
                  <h1 className="post_heading">Create Post</h1>
                  <form className="form" onSubmit={this.handleSubmit} >
                  <br></br>
                  <label className="title-form">Title</label>
                    <input className="form-input" required type="text" ref={(input) => this.getTitle = input}/>
                    <br></br>
                    <label className="title-form">Content</label>
                    <textarea className="form-textarea" required rows="5" ref={(input) => this.getMessage = input}
                      cols="28"/>
                    <br></br>
                    <button className="class-button">Create</button>
                  </form>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default connect()(PostForm);