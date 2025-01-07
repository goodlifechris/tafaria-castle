 /* eslint-disable @typescript-eslint/no-explicit-any */ 
import graphqlClient from '../../graphql-client';
import { gql } from 'graphql-request';

const GET_POSTS_BY_CATEGORY = gql`
  query GetPostsByCategory($categoryName: String!) {
    categories(where: { name: { equals: $categoryName } }) {
      name
      image {
        url
      }
      id
      posts {
        createdAt
        title
        images {
          title
          image {
            url
          }
        }
        videos {
          title
          video {
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

type Image = {
  url: string;
};
type Video = {
  url: string;
};
type PostContent = {
  document: any;
};

type Post = {
  title: string;
  createdAt: string;
  images: {
    image: Image;
  }[];
  videos: {
    video: Video;
  }[];
  content: PostContent;
};

type Category = {
  name: string;
  image: Image;
  id: string;
  posts: Post[];
};

type FetchCategoryResponse = {
  categories: Category[];
};

export const fetchPostsByCategory = async (categoryName: string): Promise<Category | null> => {
  const data: FetchCategoryResponse = await graphqlClient.request(GET_POSTS_BY_CATEGORY, { categoryName });

  // Return the first matching category or null if none found
  return data.categories.length > 0 ? data.categories[0] : null;
};
