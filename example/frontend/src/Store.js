import React, { Component } from 'react'

export const StoreContext = React.createContext()

class StoreProvider extends Component {
  constructor () {
    super()
    this.state = { }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    const { firstname, lastname } = this.state
    const handleChange = this.handleChange
    return (
      <StoreContext.Provider
        value={{
          firstname,
          lastname,
          handleChange
        }}
      >
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}

export default StoreProvider
