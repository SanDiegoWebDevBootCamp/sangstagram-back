const { gql } = require('apollo-server-express');

const typeDefs = gql`

  scalar Date
  scalar Time
  scalar DateTime

  type Company {
    name: String!,
    catchPhrase: String,
    bs: String
  }

  type Geocode {
    lat: Float!,
    lon: Float!
  }

  type Address {
    street: String!,
    suite: String,
    city: String!,
    zipcode: String!,
    geo: Geocode
  }

  type User {
    id: ID!,
    name: String!,
    username: String!,
    email: String!,
    avatar: String,
    address: Address,
    phone: String,
    website: String,
    company: Company,
    following: [User]!
    followers: [User]!
  }
  
  type Comment {
    id: ID!,
    comment: String!,
    user: User!,
    date: DateTime!
  }

  type Post {
    id: ID!,
    photoUrl: String!,
    caption: String!,
    user: User!,
    isPublic: Boolean!,
    likes: Int!,
    datePublished: DateTime!,
    comments: [Comment]!
  }

  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book],
    posts: [Post],
    following: [User]
  }

  type Mutation {
    addNewPost(photo: Upload!, caption: String!): Post!,
  }
`;

module.exports = typeDefs;
