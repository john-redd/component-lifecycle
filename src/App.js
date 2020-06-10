import React, { Component } from 'react'
import ComponentLifeCycle from './components/ComponentLifeCycle'
import ToggleMount from './components/ToggleMount'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isMounted: true
    }
  }

  toggleMount = () => {
    this.setState({
      isMounted: !this.state.isMounted
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.isMounted && <ComponentLifeCycle />}
        <ToggleMount
          isMounted={this.state.isMounted}
          toggleMount={this.toggleMount}
        />
      </div>
    )
  }
}

export default App
