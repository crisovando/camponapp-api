export default `
scalar Upload

extend type Mutation {
  addPost(
    titulo: String!
    descripcion: String
    user_id: Int!
    lat: Float!
    long: Float!
    fotos: [Upload]
  ): Post
}
`;
