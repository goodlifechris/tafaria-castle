/* eslint-disable @typescript-eslint/no-explicit-any */ 
import graphqlClient from '../../../graphql-client';
import { gql } from 'graphql-request';

const GET_POSTS_BY_CATEGORY = gql`
  query GetPostsByCategory($categoryName: String!) {
    categories(where: { name: { equals: $categoryName } }) {
      name
      description
      image {
        url
      }
      id
      posts(where: { status: { equals: "published" } }, orderBy: { priority: asc }) {
        id
        createdAt
        title
        priority
        images {
          title
          description
          id
          image {
            url
            width
            height
            id
            extension
            filesize
          }
        }
        videos {
          title
          description
          id
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
  width: number;
  height: number;
  id: string;
  extension: string;
  filesize: number;
};


type Video = {
  url: string;
};
type PostContent = {
  document: any;
};

export type Post = {
  id: string;
  title: string;
  createdAt: string;
  priority: number; 
  images: {
    description: string;
    id: string;
    title: string;
    image: Image;
  }[];
  videos: {
    description: string;
    id: string;
    title: string;
    video: Video;
  }[];
  content: PostContent;
};

type Category = {
  name: string;
  description: string;
  image: Image;
  id: string;
  posts: Post[];
  images:Image[];
  videos:Video[];
};

type FetchCategoryResponse = {
  categories: Category[];
};

export const fetchPostsByCategory = async (categoryName: string): Promise<Category | null> => {
  const data: FetchCategoryResponse = await graphqlClient.request(GET_POSTS_BY_CATEGORY, { categoryName });

  // Return the first matching category or null if none found
  return data.categories.length > 0 ? data.categories[0] : null;
};
