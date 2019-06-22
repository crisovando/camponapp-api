export default `
  extend type Query {
    posts: [Post]
    detailPost(postId: Int!): Post
  }
`;