import gql from 'graphql-tag'

export const ITEMS = gql`
  query items ($firstname: String!, $lastname: String!) {
    items(firstname: $firstname, lastname: $lastname) {
      id
      name
      price
    }
  }
`
