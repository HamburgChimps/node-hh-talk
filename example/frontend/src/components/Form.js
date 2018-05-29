import React, { Component } from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { CREATE, ITEMS } from '../graphql'
import { StoreContext } from '../Store'

const Container = styled.form`
  width: 100%;
  max-width: 750px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px auto;
`
const Input = styled.input`
  flex-grow: 1
  margin: 0px 10px;
  border: 1px solid #ccc;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
`

const Button = styled.button`
  flex-grow: 1
  margin: 0px 10px;
  border: 1px solid #ccc;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: white;
  color: black;
`

class Form extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      price: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClose (e) {
    this.setState({
      name: '',
      price: ''
    })
  }

  render () {
    const { name, price } = this.state
    return (
      <StoreContext.Consumer>
        {({ firstname, lastname }) => (
          <Mutation
            mutation={CREATE}
            variables={{input: {
              name,
              price,
              user: {
                firstname,
                lastname
              }
            }}}
            refetchQueries={[{ query: ITEMS, variables: { firstname, lastname } }]}
            onCompleted={this.handleClose}
            >
            {(create, { data, error }) => (
              <Container onSubmit={(e) => {
                e.preventDefault()
                create()
              }}>
                <Input
                  placeholder='Name'
                  name='name'
                  value={name}
                  onChange={this.handleChange}
                  />
                <Input
                  placeholder='Price'
                  type='number'
                  name='price'
                  value={price}
                  onChange={this.handleChange}
                />
                <Button type='submit' disabled={!firstname || !lastname}>
                  Add
                </Button>
              </Container>
            )}
          </Mutation>
        )}
      </StoreContext.Consumer>
    )
  }
}

export default Form
