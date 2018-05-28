import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f44336;
`
const Title = styled.h2`
  font-size: 4em;
  color: white;
  padding: 0 20px;
  margin: 0;
`

function Header ({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}

export default Header
