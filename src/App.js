import React, { Component } from 'react'
import Input from './Input';
import 'bootstrap/dist/css/bootstrap.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Input validator="isEmail"/>
        <Input validator="isBoolean"/>
        <Input validator="isEmail" className="meow"/>
      </div>
    )
  }
}
