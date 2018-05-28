import React from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import { ITEMS } from '../graphql'
import { StoreContext } from '../Store'

const Container = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f44336;
`
const Title = styled.h2`
  font-size: 4em;
  color: white;
  padding: 0 20px;
  margin: 0;
`

const Price = styled.h2`
  font-size: 4em;
  color: white;
  padding: 0 20px;
  margin: 0;
`

function Items ({ title, price }) {
  return (
    <StoreContext.Consumer>
      {({ firstname, lastname }) => (
        <Query query={ITEMS} variables={{ firstname, lastname }}>
          {({ loading, error, data: { items = [] } = {} }) => {
            if (loading) return <p>Loading</p>
            if (error) return <p>{JSON.stringify(error)}</p>
            if (items.length === 0) return false
            return (
              <div>
                {items.map(({ name, price }) => (
                  <Container>
                    <Title>{name}</Title>
                    <Price>{price}</Price>
                  </Container>
                ))}
              </div>
            )
          }}
        </Query>
      )}}
    </StoreContext.Consumer>
  )
}

export default Items
