import React, { Component } from 'react'
import error from '../../assets/images/error.jpg'

export default class PageNotFound extends Component {
  render() {
    return (
      <div>
      
         <br/>
        <img src={error} alt="404"/>
      </div>
    )
  }
}
