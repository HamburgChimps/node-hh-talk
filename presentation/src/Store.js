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
    this.setState(prevState => ({ index: prevState.index + 1 }))
  }

  down () {
    this.setState(prevState => ({ index: prevState.index - 1 }))
  }

  render () {
    const { numOfSlides } = this.props
    const { index } = this.state
    const up = this.up
    const down = this.down
    const showUp = numOfSlides - 1 > index
    const showDown = index > 0
    return (
      <StoreContext.Provider
        value={{
          index,
          up,
          down,
          showUp,
          showDown
        }}
      >
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}

export default StoreProvider
