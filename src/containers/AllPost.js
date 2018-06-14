import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';


class AllPost extends Component {
  render() {
    var partial;
    if (this.props.posts.length > 0) {
      partial = <section>
        {this.props.posts.map((post) => (
          <div key={post.id}>
            {post.editing ? <EditComponent post={post} key={post.id} /> : <Post post={post}
              key={post.id}
            />}
          </div>
        ))}
      </section>
    } else {
      partial = <section>
      No posts created</section>
    }
    return (
      <section id="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {partial}
            </div>
          </div>
        </div>
      </section>








    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.postReducer
  }
}
export default connect(mapStateToProps)(AllPost);