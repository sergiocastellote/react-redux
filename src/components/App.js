import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import PostForm from '../containers/PostForm';
// import AllPost from '../containers/AllPost';
import Header from './Header';
import Content from './Content';


class App extends Component {
  
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  
  render() {

    const { children } = this.props;

    return (
      <div className="App">
        <Header />
        <Content body={children}/>
      </div>
    );
  }
}
export default App;