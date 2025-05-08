import { gql } from 'graphql-request';
import graphqlClient from '@/graphql-client';
import { Offer } from '../types/offers';

const GET_OFFERS = gql`
  query GET_OFFERS {
    offers {
      image {
        height
        filesize
        extension
        url
        id
        width
      }
      name
      description
      id
      priority
      slug
    }
  }
`;

type FetchOffersResponse = {
  offers: Offer[];
};

export const fetchOffers = async (): Promise<Offer[]> => {
  const data: FetchOffersResponse = await graphqlClient.request(GET_OFFERS);
  return data.offers;
};