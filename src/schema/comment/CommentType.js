export default `
  type Comment {
    id: Int!
    user_id: Int!
    post_id: Int!
    comment: String!
    createdAt: Date
    user: User
  }
`;