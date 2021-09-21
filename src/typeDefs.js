module.exports = /* GraphQL */`
  type Query {
    heroes: [Hero]!
    hero: Hero
  }

  type Hero {
    id: ID!
    name: String!
    age: Int
    friends: [Hero]
  }
`;