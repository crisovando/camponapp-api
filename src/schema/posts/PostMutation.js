export default `
type Mutation {
  addPost(
    titulo: String!
    descripcion: String!
  ): Post
}
`;
