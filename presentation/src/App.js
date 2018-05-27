import React from 'react'
import Info from './components/Info'

function App () {
  return (
    <div>
      <Info
        title={'Hello darkness'}
        text='rem ipsum dolor amet pour-over organic mustache butcher prism stumptown occupy kogi direct trade sustainable. Crucifix irony banh mi, tofu humblebrag poutine vape fanny pack thundercats actually. Meggings DIY listicle cronut. Umami mustache shabby chic microdosing salvia selfies poke. Kombucha pitchfork iceland four dollar toast man bun polaroid tousled health goth subway tile kogi tofu bushwick vape post-ironic. Pabst cred synth scenester. Asymmetrical affogato banjo, roof party chicharrones williamsburg man braid brooklyn fanny pack.'
        code={`
          function test () {
            return 'test'
          }
        `}
        image='https://i.imgur.com/x8nLLVt.jpg'
      />
    </div>
  )
}

export default App
