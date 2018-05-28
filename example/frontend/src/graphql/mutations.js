import gql from 'graphql-tag'

export const CREATE = gql`
  mutation createItem ($input: CreateItemInput!) {
    createItem(input: $input) {
      success
      message
    }
  }
`
