import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { injectGlobal } from 'styled-components'
import { ApolloProvider } from 'react-apollo'
import client from './client'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }
  * {
    box-sizing: border-box
  }
`

function Root () {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
