import {
  gql
} from 'apollo-server-express'

const typeDefs = gql` 
type User {
  displayName: String
  uid: String
}

type Tag {
  tagName: String
}

type Query {
  hello: String
  getUserInfo(token: String): User
}

type Mutation {
  saveUser(token: String): User
}
`
export default typeDefs