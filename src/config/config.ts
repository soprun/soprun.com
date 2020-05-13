export default {
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost',
  schema: process.env.HOST_SCHEMA || 'http://',

  locale: 'en',
  trustProxy: '',

  title: 'React App',
  description: 'Web site created using create-react-app',
};
