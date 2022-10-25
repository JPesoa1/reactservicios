import React, { Component } from 'react'
import benze from '../../assets/images/benzemahome.jpg'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>HOME</h1>
        <br/>
        <img src={benze} alt="benzema"/>
      </div>
    )
  }
}
