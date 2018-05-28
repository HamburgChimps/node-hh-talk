import React from 'react'
import StoreProvider from './Store'
import Header from './components/Header'
import User from './components/User'
import Form from './components/Form'
import Items from './components/Items'

function App () {
  return (
    <StoreProvider>
      <Header title='Shopping List' />
      <User />
      <Form />
      <Items />
    </StoreProvider>
  )
}

export default App
