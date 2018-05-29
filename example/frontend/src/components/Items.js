import React from 'react'
import styled from 'styled-components'
import { Query, Mutation } from 'react-apollo'
import { ITEMS, DELETE } from '../graphql'
import { StoreContext } from '../Store'

const Container = styled.div`
  width: 750px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:  20px auto;
  border-bottom: 1px solid grey;
`
const Title = styled.p`
  font-size: 1.3em;
  color: black;
  padding: 0 20px;
  margin: 16px 0;
  flex-grow: 1;
`

const Price = styled.p`
  font-size: 1.3em;
  color: black;
  padding: 0 20px;
  margin: 15px 0;
  flex-grow: 1;
  text-align: right;
`

function Item ({
  id,
  name,
  price,
  firstname,
  lastname
}) {
  return (
    <Mutation
      mutation={DELETE}
      variables={{input: { id }}}
      refetchQueries={[{ query: ITEMS, variables: { firstname, lastname } }]}
      >
      {(deleteItem, { data, error }) => (
        <Container onClick={deleteItem}>
          <Title>{name}</Title>
          <Price>€ {price}</Price>
        </Container>
      )}
    </Mutation>
  )
}

function Items () {
  return (
    <StoreContext.Consumer>
      {({ firstname, lastname }) => {
        if (!firstname || !lastname) return false
        return (
          <Query query={ITEMS} variables={{ firstname, lastname }}>
            {({ loading, error, data: { items = [] } = {} }) => {
              if (loading) return <p>Loading</p>
              if (error) return <p>{JSON.stringify(error)}</p>
              if (items.length === 0) return false
              return (
                <div>
                  {items.map(({ name, price, id }, i) => (
                    <Item
                      key={id}
                      id={id}
                      name={name}
                      price={price}
                      firstname={firstname}
                      lastname={lastname}
                    />
                  ))}
                </div>
              )
            }}
          </Query>
        )
      }}
    </StoreContext.Consumer>
  )
}

export default Items
