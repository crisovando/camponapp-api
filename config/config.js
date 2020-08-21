export default {
  env: process.env.NODE_ENV || 'development',
  server: {
    port: process.env.PORT || 8080,
  },
  google: {
    projectId: 'camponapp',
    bucket: 'camponapp-bucket',
  },
};