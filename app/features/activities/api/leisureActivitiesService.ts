import { gql } from 'graphql-request';
import graphqlClient from '@/graphql-client';
import { LeisureActivity } from '../types/leisureActivities'; // Create this type file if needed

const GET_LEISURE_ACTIVITIES = gql`
  query GET_LEISURE_ACTIVITIES {
    leisureActivities {
      priority
      name
      image {
        width
        url
        id
        height
        filesize
        extension
      }
      id
      description
    }
  }
`;

type FetchLeisureActivitiesResponse = {
  leisureActivities: LeisureActivity[];
};

export const fetchLeisureActivities = async (): Promise<LeisureActivity[]> => {
  const data: FetchLeisureActivitiesResponse = await graphqlClient.request(GET_LEISURE_ACTIVITIES);
  return data.leisureActivities;
};
