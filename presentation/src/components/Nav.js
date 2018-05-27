import React from 'react'
import Icon from 'react-fontawesome'
import styled from 'styled-components'
import { StoreContext } from '../Store'

const Container = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`
const Button = styled.div`
  font-size: 2em;
  color: ${props => props.color};
  cursor: pointer;
  display: flex;
  align-items: center;
`

function Nav ({ color }) {
  return (
    <StoreContext.Consumer>
      {({ up, down }) => (
        <Container>
          <Button onClick={down} color={color}>
            <Icon name={'chevron-left'} />
          </Button>
          <Button onClick={up} color={color}>
            <Icon name={'chevron-right'} />
          </Button>
        </Container>
      )}
    </StoreContext.Consumer>
  )
}

export default Nav
