
import { GraphQLClient } from 'graphql-request';

const graphqlClient = new GraphQLClient(
    'https://www.tafaria.com/api/graphql',
    {
      headers: {
        'Content-Type': 'application/json', // Ensure the correct content type
        Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Replace with your actual token
      },
    }
  );

export default graphqlClient;
