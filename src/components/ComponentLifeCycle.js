import React, { Component } from 'react'

class ComponentLifeCycle extends Component {
  // MOUNTING - First phase of component lifecycle
  // MOUNTING - Step 1- constructor()
  constructor() {
    super()
    this.state = {
      rerenders: 0
    }
  }
  // MOUNTING - Step 2 - render()
  // See render below

  // MOUNTING - Step 3 - componentDidMount()
  componentDidMount() {
    console.log('%cThe component just mounted', 'color: green')
  }

  // UPDATING - Second phase of component lifecycle
  // An update can be caused by changes to props or state.
  // UPDATING- Step 1 - render()

  render() {
    if (this.state.rerenders === 0) {
      console.log('First Render')
    } else {
      console.log(`${this.state.rerenders} rerender`)
    }
    return (
      <div>
        <button
          onClick={() => this.setState({ rerenders: this.state.rerenders + 1 })}
        >
          Update State
        </button>
      </div>
    )
  }

  //UPDATING - Step 2 - componentDidUpdate()
  componentDidUpdate() {
    console.log(
      '%cThe component just updated because of either a change in state or a change in props!', 'color: blue'
    )
  }

  // UNMOUNTING - Third phase of component lifecycle
  // UNMOUNTING - Step 1 - componentWillUnmount()
  componentWillUnmount() {
    console.log('%cThe component is about to unmount from the DOM', "color: red")
  }
}

export default ComponentLifeCycle
