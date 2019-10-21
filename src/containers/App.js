import React, {Component} from 'react'
import {Button, message} from 'antd'
import {HashRouter,BrowserRouter,Route,Switch} from 'react-router-dom' 

class App extends Component {
  render() {
    return (
      <Button type='primary' onClick={this.handleClick}>学习</Button>
    )
  }
}

export default App

/*
应用根组件
 */
