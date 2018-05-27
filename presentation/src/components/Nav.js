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
  ${props => props.onlyOne ? `
  position: absolute;
  right: 30px;
  bottom: 30px;
  ` : ''}
`

function Nav ({ color }) {
  return (
    <StoreContext.Consumer>
      {({ up, down, showUp, showDown }) => (
        <Container>
          {showDown && (
            <Button
              onClick={down}
              color={color}
            >
              <Icon name={'chevron-left'} />
            </Button>
          )}
          {showUp && (
            <Button
              onClick={up}
              color={color}
              onlyOne={!showDown}
            >
              <Icon name={'chevron-right'} />
            </Button>
          )}
        </Container>
      )}
    </StoreContext.Consumer>
  )
}

export default Nav
