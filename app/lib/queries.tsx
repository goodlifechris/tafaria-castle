 /* eslint-disable @typescript-eslint/no-explicit-any */ 
import graphqlClient from '../../graphql-client';
import { gql } from 'graphql-request';

const GET_CATEGORIES = gql`
  query {
  categories {
    name
    image {
      url
    }
    id
    posts {
      title
      images {
        image {
          url
        }
      }
      content {
        document
      }
    }
  }
}
`;

type Category = {
  name: string;
  image: {
    url: string;
  };
  id: string;
  posts: {
    title: string;
    images: {
      image: {
        url: string;
      };
    }[];
    content: {
      document: any;
    };
  }[];
};

type FetchCategoriesResponse = {
  categories: Category[];
};

export const fetchCategories = async (): Promise<Category[]> => {
  const data: FetchCategoriesResponse = await graphqlClient.request(GET_CATEGORIES);
  return data.categories;
};