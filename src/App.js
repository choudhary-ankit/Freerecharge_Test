import React, { Component } from 'react'
import Homepage from './Component/Homepage/Homepage'
import Payment from './Component/Paymentpage/Payment'
import {Route} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Route path ="/" exact component={Homepage}></Route>
        <Route path = "/payment" component = {Payment}></Route>
        <Route path = "/Homepage" component = {Homepage}></Route>
      </div>
    )
  }
}
