import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('${props => props.image}');
  background-size: cover;
  background-position: center top;
`

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0px 10px;
  background-color: ${props => props.background};
`

function Slide ({
  color,
  background='rgba(0,0,0,0.7)',
  image='',
  children
}) {
  return (
    <Background image={image}>
      <Container background={background}>
        {children}
        <Nav color={color} />
      </Container>
    </Background>
  )
}

export default Slide
