/* eslint-disable @typescript-eslint/no-explicit-any */
import graphqlClient from '../../../graphql-client';
import { gql } from 'graphql-request';

// Define the GET_POSTS query to fetch posts, including images, content, and categories.
const GET_POSTS = gql`
  query {
    posts(orderBy: { priority: asc }) {
      priority
      images {
        image {
          url
          width
          height
          id
        }
      }
      author {
        name
      }
      title
      id
      createdAt
      content {
        document
      }
      categories {
        name
      }
    }
  }
`;

const GET_POST_BY_ID = gql`
  query GetPostById($id: ID!) {
    post(where: { id: $id }) {
      title
      images {
        image {
          url
          width
          height
          id
        }
      }
      author {
        name
      }
      createdAt
      content {
        document
      }
      categories {
        name
      }
      videos {
        id
        title
        video {
          url
        }
        description
    }
    }
  }
`;

export type Post = {
  images: {
    image: {
      url: string;
      width: number;
      height: number;
      id: string;
    };
  }[];
  author: {
    name: string;
  };
  title:string;
  id:string;
  priority:number;
  createdAt: string;
  content: {
    document: any; // Document content is dynamic, so we use `any` for flexibility
  };
  categories: {
    name: string;
  }[];
  videos :{
    id:string;
    title:string;
    video: {
      url:string;
    }
    description:string;
  }[]
};

type FetchPostsResponse = {
  posts: Post[];
};

export const fetchPosts = async (): Promise<Post[]> => {
  const data: FetchPostsResponse = await graphqlClient.request(GET_POSTS);
  return data.posts;
};


type FetchPostByIdResponse = {
  post: Post;
};

export const fetchPostById = async (id: string): Promise<Post> => {
  const data: FetchPostByIdResponse = await graphqlClient.request(GET_POST_BY_ID, { id });
  return data.post;
};