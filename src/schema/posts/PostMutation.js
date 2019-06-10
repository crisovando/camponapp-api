export default `
type Mutation {
  addPost(
    titulo: String!
    descripcion: String
    user_id: Int!
    lat: Float!
    long: Float!
  ): Post
}
`;
