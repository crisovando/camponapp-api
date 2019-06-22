export default `
extend type Mutation {
  addComment(
    comment: String!
    user_id: Int!
    post_id: Int!
  ): Comment
}
`;
