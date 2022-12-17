import './App.css';
import PostList from '../components/PostList';
import NavBar from '../components/NavBar';
import React, {Component} from 'react';



class App extends Component {
  constructor() {
    super()
    this.state = {
      users : [],
      posts : []
    }
  }

  componentDidMount() {
    const urls = [
      'https://jsonplaceholder.typicode.com/users',
      "https://jsonplaceholder.typicode.com/posts"
    ]
    const getData = async () => {
      const [user, post] = await Promise.all(
        urls.map(async (url) => {
          const resp = await fetch(url)
          return await resp.json()
        })
      );
      this.setState({users:user, posts:post})
    }
    getData()
  }

  render() {
    return (
      <div className="App">
          <NavBar/>
          <PostList users={this.state.users} posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
