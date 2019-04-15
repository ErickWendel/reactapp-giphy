import React, { Component } from 'react';
// import logo from './logo.svg';
import './components/assets/bootstrap.min.css';
import './App.css';

import { Container } from 'react-bootstrap';
import { GiphySvc } from './giphySvc';
// import Table from './components/Table';
import Card from './components/Card';
import SearchComponent from './components/Search';
class App extends Component {
  constructor() {
    super();
    this.svc = new GiphySvc();
  }
  state = {
    gifs: [],
    search: '',
  };

  async handleChangeSerch({ search }) {
    if (search.length < 2) return;
    console.log('searching...');
    const data = await this.svc.search(search);
    console.log('searched!...', data.length);

    this.setState({
      ...this.state,
      search: search,
      gifs: data,
    });
  }
  async componentDidMount() {
    const data = await this.svc.search();
    console.log('data', data);
    this.setState({
      gifs: data,
    });
  }
  render() {
    return (
      <Container fluid>
        <br />
        <SearchComponent onSearch={i => this.handleChangeSerch(i)} />
        <Container fluid>
          <Card gifs={this.state.gifs} />
        </Container>
      </Container>
    );
  }
}

export default App;
