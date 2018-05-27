import React, { Component } from 'react'

export const StoreContext = React.createContext()

class StoreProvider extends Component {
  constructor () {
    super()
    this.state = { index: 0 }
    this.up = this.up.bind(this)
    this.down = this.down.bind(this)
  }

  up () {
    if (this.props.numOfSlides - 1 > this.state.index) {
      this.setState(prevState => ({ index: prevState.index + 1 }))
    }
  }

  down () {
    if (this.state.index > 0) {
      this.setState(prevState => ({ index: prevState.index - 1 }))
    }
  }

  render () {
    const { index } = this.state
    const up = this.up
    const down = this.down

    return (
      <StoreContext.Provider value={{ index, up, down }}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}

export default StoreProvider
