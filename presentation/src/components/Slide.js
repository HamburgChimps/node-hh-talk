import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('${props => props.image}');
  background-size: cover;
  background-position: center top;
  position: absolute;
  left: 0;
  top: 0;
`

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0px 10px;
  background-color: ${props => props.background};
`

function slide (PassedComponent) {
  return function Slide (props) {
    const {
      show,
      color='white',
      background='rgba(0,0,0,0.7)',
      image=''
    } = props
    return (
      <Background className={show ? 'animated fadeIn' : 'animated fadeOut'} image={image}>
        <Container background={background}>
          <PassedComponent
            {...{
              ...props,
              show,
              color,
              background,
              image
            }}
          />
          <Nav color={color} />
        </Container>
      </Background>
    )
  }
}

export default slide
