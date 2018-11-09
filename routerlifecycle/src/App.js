import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import Home from './components/Home';
import Posts from './components/Posts';
import Profiles from './components/Profiles';
import PostItem from './components/PostItem';
import Life from './components/Life';
import Conditional from './components/Conditional';

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
              <Link to="/lifes">Lifes</Link>
              <Link to="/conditional">Conditional</Link>
            </header>
            <Switch>
              <Route path="/posts/:id" component={PostItem} />
              <Route path="/profiles" component={Profiles} />
              <Route path="/posts" component={Posts} />
              <Route path="/lifes" component={Life} />
              <Route path="/conditional" component={Conditional} />
              <Route path="/" exact component={Home} />
              <Route render={() => <h2>Oh oops. 404</h2>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
