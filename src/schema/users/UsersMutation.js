export default `
type Mutation {
  addUser(
    nombre: String!
    apellido: String!
  ): User
}
`;
