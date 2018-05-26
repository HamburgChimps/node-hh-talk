import React from 'react'
import styled from 'styled-components'

const Header = styled.h2`
  width: 100%;
  height: 10vh;
  font-size: 1.5em;
  display: flex;
  justifiy-content: center;
  color: ${props => props.color | 'white'}
`

const TwoColumns = styled.div`
  width: 100%;
  height:
`

function Info ({ title }) {
  return (
    <div>
      <Header>{title}</Header>
    </div>
  )
}

export default Info
