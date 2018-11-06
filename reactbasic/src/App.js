import React, { Component } from 'react';
import Header from './components/Header';
import SearchArea from './components/SearchArea';
import JSON from './db.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: JSON,
      filtered: []
    }
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  onChangeSearch(e) {
    console.log(e.target.value);
    const keyword = e.target.value;
    const filtered = this.state.search.filter(item => item.title.indexOf(keyword) > -1);

    this.setState({
      filtered
    })
  }

  render() {
    return (
      <div className="App">
        <Header onChangeSearch={this.onChangeSearch} />
        <SearchArea search={
          this.state.filtered.length === 0 ? 
          this.state.search 
          : this.state.filtered} />
      </div>
    );
  }
}

export default App;
