import React from 'react'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/styles/hljs'
import slide from '../Slide'

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

const CodePre = styled.pre`
  overflow: hidden;
  width: 100%;
  height: 80vh;
  margin: 0;
  padding: 20px;
  font-size: 1.2em;
`

function CodeOnly ({
  title = '',
  code = '',
  color = '',
  language = 'javascript'
}) {
  return (
    <div>
      <Header color={color}>{title}</Header>
      <CodePre>
        <SyntaxHighlighter
          customStyle={{ minHeight: '73vh' }}
          language={language}
          style={github}
        >
          {code}
        </SyntaxHighlighter>
      </CodePre>
    </div>
  )
}

export default slide(CodeOnly)
