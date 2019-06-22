export default `
  extend type Query {
    comments(post_id: Int!): [Comment]
  }
`;