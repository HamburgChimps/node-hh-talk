import React from 'react'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/styles/hljs'
import slide from './Slide'

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

const ColumnsContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Text = styled.p`
  overflow: auto;
  width: 50%;
  height: 80vh;
  margin: 0;
  padding: 20px;
  font-size: 1.2em;
  line-height: 2em;
  color: ${props => props.color};
`
const Code = styled.pre`
  overflow: auto;
  width: 50%;
  height: 85vh;
  margin: 0;
  padding: 20px;
  font-size: 1.2em;
`

function Info ({
  title = '',
  text = '',
  code = '',
  color = ''
}) {
  return (
    <div>
      <Header color={color}>{title}</Header>
      <ColumnsContainer>
        <Text color={color}>{text}</Text>
        <Code>
          <SyntaxHighlighter
            customStyle={{minHeight: '75vh'}}
            language='javascript'
            style={github}
          >
            {code}
          </SyntaxHighlighter>
        </Code>
      </ColumnsContainer>
    </div>
  )
}

export default slide(Info)
