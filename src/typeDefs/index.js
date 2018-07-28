import {
  gql
} from 'apollo-server-express'

const typeDefs = gql` 
type User {
  displayName: String
  uid: String
  createdAt: String
  updatedAt: String
  snippets: [Snippet]
}

type Snippet {
  snippetName: String
  tags: [String]
  _id: ID!
  description: String
  language: String
  code: String
  notes: String
  createdAt: String
  updatedAt: String
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