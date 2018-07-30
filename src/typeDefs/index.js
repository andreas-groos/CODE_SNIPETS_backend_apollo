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
  categories: [String]
}

type Snippet {
  snippetName: String
  category: String
  tags: String
  _id: ID
  description: String
  language: String
  code: String
  notes: String
  createdAt: String
  updatedAt: String
}

type Query {
  hello: String
  getUserInfo: User
}

type Mutation {
  # saveUser(token: String): User
  saveSnippet(snippetName: String,category: String, tags: String, description: String, language: String, code: String, notes: String): Snippet
}
`
export default typeDefs