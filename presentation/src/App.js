import React from 'react'
import StoreProvider from './Store'
import Slides from './components/Slides'

function App () {
  return (
    <StoreProvider numOfSlides={3}>
      <Slides />
    </StoreProvider>
  )
}

export default App
