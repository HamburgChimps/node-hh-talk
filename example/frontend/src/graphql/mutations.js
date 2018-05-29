import gql from 'graphql-tag'

export const CREATE = gql`
  mutation createItem ($input: CreateItemInput!) {
    createItem(input: $input) {
      success
    }
  }
`

export const DELETE = gql`
  mutation deleteItem ($input: DeleteItemInput!) {
    deleteItem(input: $input) {
      success
    }
  }
`
