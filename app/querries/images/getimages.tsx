import graphqlClient from '../../../graphql-client';
import { gql } from 'graphql-request';

const GET_IMAGES = gql`
  query GET_IMAGES {
    images {
      description
      id
      image {
        url
        width
        id
        height
        extension
        filesize
      }
      title
    }
  }
`;


const GET_SINGLE_IMAGE = gql`
  query GET_SINGLE_IMAGE($id: ID!) {
    image(where: { id: $id }) {
      description
      id
      image {
        url
        width
        id
        height
        extension
        filesize
      }
      title
    }
  }
`;

export type Image = {
  description: string;
  id: string;
  image: {
    url: string;
    width: number;
    height: number;
    id: string;
    extension: string;
    filesize: number;
  };
  title: string;
};



type FetchImagesResponse = {
  images: Image[];
};


type FetchSingleImageResponse = {
  image: Image;
};

export const fetchImages = async (): Promise<Image[]> => {
  const data: FetchImagesResponse = await graphqlClient.request(GET_IMAGES);
  return data.images;
};

// Fetch a single image by ID
export const fetchSingleImage = async (id: string): Promise<Image> => {
  const data: FetchSingleImageResponse = await graphqlClient.request(GET_SINGLE_IMAGE, { id });
  return data.image;
};