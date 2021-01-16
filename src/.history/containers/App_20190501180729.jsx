import React, { useState } from 'react';
import GlobalStyles from './../styled/GlobalStyles';
import MainContainer from './MainContainer';

/*
class App extends Component {
  state = {
    items: [],
    isLoading: true
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(data => {
      this.setState({
        items: data.results,
        isLoading: false
      });
    });
  }

  render() {
    const {items, isLoading} = this.state;
    return isLoading ? <div>Loading</div> : (
      <main>

      </main>
    )
  }
}
*/

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <MainContainer/>
    </>
  )
}

export default App;
