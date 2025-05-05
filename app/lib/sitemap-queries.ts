// lib/sitemap-queries.ts
import graphqlClient from '../../graphql-client';
import { gql } from 'graphql-request';

const GET_ALL_CATEGORIES_FOR_SITEMAP = gql`
  query GetAllCategoriesForSitemap {
    categories {
      name
      slug
      posts(where: { status: { equals: "published" } }) {
        id
        slug
        updatedAt
        images {
          image {
            url
          }
        }
        videos {
          video {
            url
          }
        }
      }
    }
  }
`;

type SitemapCategory = {
  name: string;
  slug: string;
  posts: {
    id: string;
    slug: string;
    updatedAt: string;
    images: { image: { url: string } }[];
    videos: { video: { url: string } }[];
  }[];
};

type SitemapData = {
  categories: SitemapCategory[];
};

export const fetchSitemapData = async (): Promise<SitemapData> => {
  return graphqlClient.request(GET_ALL_CATEGORIES_FOR_SITEMAP);
};