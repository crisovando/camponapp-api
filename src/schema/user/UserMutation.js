export default `
type Mutation {
  singup(
    dni: Int!
    nombre: String!
    apellido: String!
    telefono: Int
    password: String!
  ): String,
  login(dni: Int!, password: String!): String
}
`;
