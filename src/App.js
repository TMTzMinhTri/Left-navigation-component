import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {MyContext} from './context/myContext'
import DataProvider from './context/myContext'

import ListItem from './components/listItem'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      value : ''
    }
    this.inputElement = React.createRef();
  }
  componentDidMount () {
    this.inputElement.current.focus();
  }
  render() {
    return (
      <DataProvider>
        <div className="App">
          <input type = 'text' ref = {this.inputElement} onChange = {(e) => this.setState({value: e.target.value})}/>
          <MyContext.Consumer>
          {
            ({Add}) => (

              <button onClick ={() => Add(this.state.value)}>Add data</button>
            )
          }
        </MyContext.Consumer>
          <ol>
            <ListItem />
          </ol>
        </div>
        
      </DataProvider>
    );
  }
}

export default App;
