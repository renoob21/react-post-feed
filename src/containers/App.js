import './App.css';
import PostList from '../components/PostList';
import React, {Component} from 'react';
import users from '../db/users';
import posts from '../db/posts';


class App extends Component {
  constructor() {
    super()
    this.state = {
      users : users,
      posts : posts
    }
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(req => req.json())
  //     .then(user => this.setState({users : user}));
  //   console.log(this.state);
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(req => req.json())
  //     .then(postsList => this.setState({posts : postsList}))
    
  //   console.log(this.state);
  // }

  render() {
    return (
      <div className="App">
          <PostList users={this.state.users} posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
