const baseUrl: string = `http://localhost:${process.env.PORT || 3000}`;

const clientUrl: string = process.env.API_CLIENT_URL || baseUrl;
const clientHost: string = clientUrl.replace(/http:\/\/|https:\/\//g, "");

const serverUrl: string = process.env.API_SERVER_URL || baseUrl;
const serverHost: string = serverUrl.replace(/http:\/\/|https:\/\//g, "");

export default {
  title: 'React App',
  description: 'Web site created using create-react-app',

  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl,
    clientHost,

    // API URL to be used in the server-side code
    serverUrl,
    serverHost,
  },
};
