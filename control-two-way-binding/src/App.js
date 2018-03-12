import React, { Component } from 'react';
import logo from './logo.svg';
import {RawInput} from './RawInput';
import {LoginForm} from './LoginForm';
import {DynamicFieldsForm} from './DynamicFieldsForm';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
       <RawInput name='Jack Sparrow' gender='male' />
       <LoginForm name='Jack Sparrow' gender='male' />
       <hr />
       <DynamicFieldsForm />
      </div>
    );
  }
}

export default App;
