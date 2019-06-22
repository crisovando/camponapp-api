export default `
  type Post {
    id: Int!
    titulo: String
    lat: Float!
    long: Float!
    fotos: [String]
    descripcion: String
    createdAt: Date
    user: User
    comments: [Comment]
  }
`;