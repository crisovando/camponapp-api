export default `
extend type Mutation {
  singup(
    dni: Int!
    nombre: String!
    apellido: String!
    telefono: Int
    password: String!
    foto: Upload
  ): String,
  login(dni: Int!, password: String!): String
}
`;
