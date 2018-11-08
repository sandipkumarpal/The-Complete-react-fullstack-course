import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './components/Home';
import Posts from './components/Posts';
import Profiles from './components/Profiles';
import PostItem from './components/PostItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <header>
              <Link to="/">Home</Link>
              <Link to="/posts">Posts</Link>
              <Link to={{
                pathname: "/profiles",
              }}>Profiles</Link>
            </header>
            <Route path="/" exact component={Home} />
            <Route path="/posts" exact component={Posts} />
            <Route path="/posts/:id" component={PostItem} />
            <Route path="/profiles" component={Profiles} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
