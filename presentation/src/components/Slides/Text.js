import React from 'react'
import styled from 'styled-components'
import slide from '../Slide'
import Markdown from './Markdown'

const Header = styled.h2`
  width: 100%;
  height: 10vh;
  font-size: 1.9em;
  display: flex;
  align-items: center;
  color: ${props => props.color};
  padding: 0 20px;
  margin: 0;
`

const TextSection = styled.p`
  overflow: auto;
  width: 100%;
  height: 80vh;
  margin: 0;
  padding: 20px;
  font-size: 1.4em;
  line-height: 2em;
  color: ${props => props.color};
`

function Text ({
  title = '',
  text = '',
  color = ''
}) {
  return (
    <div>
      <Header color={color}>{title}</Header>
      <TextSection color={color}>
        <Markdown text={text} color={color} />
      </TextSection>
    </div>
  )
}

export default slide(Text)
