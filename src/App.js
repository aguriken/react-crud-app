import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  handleAddCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }
  handleMinusCount = () => {
    this.setState((prevState) => ({
      count: prevState.count -1
    }))
  }
  render() {
    return (
      <React.Fragment>
        count: {this.state.count}
        <button onClick={this.handleAddCount}>+1</button>
        <button onClick={this.handleMinusCount}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
