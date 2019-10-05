import React, { Component } from 'react';
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errorMsg:''
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/postss')
        .then(response => {
            this.setState({
                posts: response.data
            })
        })
        .catch(error => {
            this.setState({
                errorMsg: 'Oops!! Something went wrong'
            })
        })
    }
    
  render() {
      const {posts, errorMsg} = this.state
    return (
      <div>
        <div>List of posts </div>
        {
            posts.length 
            ? posts.map(post => <div key={post.id}>{post.title}</div>)
            : null
        }
        {
            errorMsg ? <div>{errorMsg}</div>: null
        }
      </div>
    );
  }
}

export default PostList;
