import React from 'react'
import Linkify from 'react-linkify'
import styled from 'styled-components'

const Text = styled.p`
  a {
    color: ${props => props.color};
  }
`

function Markdown ({ text, color }) {
  const textArr = text.split('[br]')
  return (
    <Linkify>
      <Text color={color}>
        {textArr.map((str, i) => <p key={str + i}>{str}</p>)}
      </Text>
    </Linkify>
  )
}

export default Markdown
