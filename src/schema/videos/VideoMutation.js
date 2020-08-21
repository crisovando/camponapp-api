export default `
extend type Mutation {
  singleUpload(file: Upload!): File
  removeVideo(id: String!): Boolean
}
`;
