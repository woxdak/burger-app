
import './App.css';
import React, { Component } from 'react';
import Layout from './hok/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {

  render () {
    return (
      <div>
          <Layout>
            <BurgerBuilder></BurgerBuilder>
          </Layout>
          <h1>Hello I'm React</h1>
      </div>
    );
  }
}

export default App;


