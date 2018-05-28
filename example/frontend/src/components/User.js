import React from 'react'
import styled from 'styled-components'
import { StoreContext } from '../Store'

const Container = styled.div`
  width: 100%;
  max-width: 750px;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`
const Input = styled.input`
  flex-grow: 1;
  margin: 0px 10px;
  border: 1px solid #ccc;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
`

function User () {
  return (
    <StoreContext.Consumer>
      {({ handleChange, firstname, lastname }) => (
        <Container>
          <Input
            placeholder='First Name'
            name='firstname'
            value={firstname}
            onChange={handleChange}
            />
          <Input
            placeholder='Last Name'
            name='lastname'
            value={lastname}
            onChange={handleChange}
          />
        </Container>
      )}
    </StoreContext.Consumer>
  )
}

export default User
