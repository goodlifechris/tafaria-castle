 /* eslint-disable @typescript-eslint/no-explicit-any */ 
import graphqlClient from '../../../graphql-client';
import { gql } from 'graphql-request';

const GET_CATEGORIES = gql`
  query {
    categories(orderBy: { priority: asc }) {
      name
      slug
      description
      priority
      image {
        url
      }
      id
      posts {
        priority
        title
        updatedAt
        slug
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
  slug: string;
  description: string;
  priorrity:number;
  image: {
    url: string;
  };
  id: string;
  posts: {
    title: string;
    slug: string;
    updatedAt: string;
    priority: number;
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

// after fetching categories would like to get also a specific category
export const fetchCategories = async (): Promise<Category[]> => {
  const data: FetchCategoriesResponse = await graphqlClient.request(GET_CATEGORIES);
  return data.categories;
};