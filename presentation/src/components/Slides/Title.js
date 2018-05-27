import React from 'react'
import styled from 'styled-components'
import slide from '../Slide'

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Header = styled.h2`
  font-size: 2.7em;
  color: ${props => props.color};
  padding: 0 20px;
  margin: 0;
`

const NameContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Text = styled.p`
  margin: 10px 0 0 0;
  padding: 5px;
  font-size: 1.6em;
  color: ${props => props.color};
`

function Title ({
  title = '',
  color = '',
  names = []
}) {
  return (
    <Container>
      <Header color={color}>{title}</Header>
      <NameContainer>
        <Text color={color}>Made by</Text>
        {names.map((name, i) => (
          <Text key={name + i} color={color}>{name}</Text>
        ))}
      </NameContainer>
    </Container>
  )
}

export default slide(Title)
