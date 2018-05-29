import React from 'react'
import StoreProvider, { StoreContext } from './Store'
import styled from 'styled-components'
import Title from './components/Slides/Title'
import Code from './components/Slides/Code'
import CodeOnly from './components/Slides/CodeOnly'
import Text from './components/Slides/Text'
import config from './config'

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
`

function determineSlide (type) {
  switch (type) {
    case 'title':
      return Title
    case 'code':
      return Code
    case 'code-only':
      return CodeOnly
    case 'text':
      return Text
    default:
      return false
  }
}

function App () {
  return (
    <StoreProvider numOfSlides={config.length}>
      <StoreContext.Consumer>
        {({ index }) => (
          <Container>
            {config.map((slide, i) => {
              const SlideTemplate = determineSlide(slide.type)
              return (
                <SlideTemplate key={i} show={i === index} {...slide.content} />
              )
            })}
          </Container>
        )}
      </StoreContext.Consumer>
    </StoreProvider>
  )
}

export default App
