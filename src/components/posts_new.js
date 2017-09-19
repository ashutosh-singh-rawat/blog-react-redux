// import _ from 'lodash';
import React,{Component} from 'react';
// import {connect} from 'react-redux';
// import { fetchPosts } from '../actions';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field){
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }


  render(){
    return(
      <form>
        <Field
          label="Title for Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}
function validate(values){
  const errors = {};
  if(!values.title || values.title.length < 3) {
    errors.title =  "Enter a title atleast 3 chars";
  }

  if(!values.categories) {
    errors.categories = "Enter some categories";
  }

  if(!values.content) {
    errors.content = "Enter a content";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm',
})(PostsNew);
