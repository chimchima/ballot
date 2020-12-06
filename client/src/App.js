//import logo from './logo.svg';
import greeter from './artifacts/greeter.json';
import { Drizzle } from "@drizzle/store";
import React, { Component } from "react";
//import Ethereum from "node-metamask";
//ethereum = new Ethereum();
import Web3 from "web3";
var web3 = new Web3();
if (typeof window.ethereum !== 'undefined') {
  alert('MetaMask is installed!');
}

//import { DrizzleProvider } from 'drizzle-react';
//import './App.css';

/*const contractEventNotifier = store => next => action => {
  if (action.type === EventActions.EVENT_FIRED) {
    const contract = action.name
    const contractEvent = action.event.event
    const contractMessage = action.event.returnValues._message
    const display = `${contract}(${contractEvent}): ${contractMessage}`
 
    // interact with your service
    console.log('Contract event fired', display)
  }
  return next(action)
 }*/


 
const options = {
  contracts: [greeter],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
}

const drizzle = new Drizzle(options);

function App() {

  return (
    <div className="App">
      <h1>Helllllloo</h1>
    </div>
  );
  }

/*
const condition = true;

const App = () => {
  const innerContent = condition ? (
    <div>
      <h2><font color="#3AC1EF">Show me</font></h2>
      <p>Description</p>
    </div>
  ) : null;
  
  return (
    <div>
      <h1>This is always visible</h1>
      { innerContent }
    </div>
  );
};
*/ 
/*function App(){
  var __html = require('./index.html');
var template = { __html: __html };

React.module.exports = React.createClass({
  render: function() {
    return(
      <div dangerouslySetInnerHTML={template} />
    );
  }
});
}*/
export default App;
/*class ControlledFormComponent extends Component {  
  
  constructor(props) {  
    super(props);  
    this.state = {  
      studentName: ""  
    };  
    this.onNameChangeHandler = this.onNameChangeHandler.bind(this);  
  }  
  
  onNameChangeHandler(e){  
    this.setState({  
      studentName: e.target.value  
    })  
  }  
  
  render() {  
    return (  
      <div>  
        <h3>Controlled Component</h3>  
        <br />  
        <form>  
          <label>Student Name: </label>  
          <input   
              type="text" 
              class="123"  
              placeholder="enter student name"  
              onChange={this.onNameChangeHandler} />  
        </form>   
        <hr/>  
        <p>State of Component</p>        
          <pre>{JSON.stringify(this.state, null, 2) }</pre>       
      </div>  
    );  
  }  
}*/
  
//export default ControlledFormComponent;
