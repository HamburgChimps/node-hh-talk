import React from 'react'
import StoreProvider, { StoreContext } from './Store'
import styled from 'styled-components'
import Title from './components/Slides/Title'
import Code from './components/Slides/Code'
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


// <Title
// show={index === 0}
// title='Example Talk'
// names={['@chopmann', '@jacobtheevans']}
// image=''
// />
// <Code
// show={index === 1}
// title={'Hello darkness'}
// text='rem ipsum dolor[br] amet pour-over organic mustache butcher prism github.com/jacobtheevans stumptown occupy kogi direct trade sustainable. Crucifix irony banh mi, tofu humblebrag poutine vape fanny pack thundercats actually. Meggings DIY listicle cronut. Umami mustache shabby chic microdosing salvia selfies poke. Kombucha pitchfork iceland four dollar toast man bun polaroid tousled health goth subway tile kogi tofu bushwick vape post-ironic. Pabst cred synth scenester. Asymmetrical affogato banjo, roof party chicharrones williamsburg man braid brooklyn fanny pack.'
// code={`
//   function test () {
//     return 'test'
//   }
// `}
// image='https://i.imgur.com/x8nLLVt.jpg'
// />
// <Code
// show={index === 2}
// title={'I have come to talk to you again'}
// text='rem ipsum dolor amet pour-over organic mustache butcher prism stumptown occupy kogi direct trade sustainable. Crucifix irony banh mi, tofu humblebrag poutine vape fanny pack thundercats actually. Meggings DIY listicle cronut. Umami mustache shabby chic microdosing salvia selfies poke. Kombucha pitchfork iceland four dollar toast man bun polaroid tousled health goth subway tile kogi tofu bushwick vape post-ironic. Pabst cred synth scenester. Asymmetrical affogato banjo, roof party chicharrones williamsburg man braid brooklyn fanny pack.'
// code={`
//   function testlarge () {
//     return 'test'
//     return 'test'
//     return 'test'
//     return 'test'
//   }
// `}
// image='https://i.imgur.com/x8nLLVt.jpg'
// />
// <Text show={index === 3}
// title={'Because a vision softly creeping'}
// text='rem ipsum dolor jacobtheevans.com[br] amet pour-over organic mustache butcher prism stumptown occupy kogi direct trade sustainable. Crucifix irony banh mi, tofu humblebrag poutine vape fanny pack thundercats actually. Meggings DIY listicle cronut. Umami mustache shabby chic microdosing salvia selfies poke. Kombucha pitchfork iceland four dollar toast man bun polaroid tousled health goth subway tile kogi tofu bushwick vape post-ironic. Pabst cred synth scenester. Asymmetrical affogato banjo, roof party chicharrones williamsburg man braid brooklyn fanny pack.'
// image='https://i.imgur.com/x8nLLVt.jpg'
// />
