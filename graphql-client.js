
import { GraphQLClient } from 'graphql-request';

const graphqlClient = new GraphQLClient(
//  'http://209.38.189.197:3003/api/graphql',
  'https://app.tafaria.com/api/graphql',
  {
      headers: {
        'Content-Type': 'application/json', // Ensure the correct content type
        Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Replace with your actual token
      },
    }
  );

export default graphqlClient;
