// import _ from 'lodash';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import { fetchPost } from '../actions';
// import { Field, reduxForm } from 'redux-form';
// import { Link } from  'react-router-dom';

class PostsShow extends Component {
  componentDidMount() {
    // const id = this.props.match.params.id;
    const {id} = this.props.match.params;
    this.props.fetchPost(id);
  }
  render(){
    const { handleSubmit } = this.props;
    return(
      <div>
        PostsShow
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return {post: posts[ownProps.match.params.id]}
}
export default connect(mapStateToProps, {fetchPost})(PostsShow);
