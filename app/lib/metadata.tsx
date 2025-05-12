// lib/metadata/menu-metadata.ts
import { Metadata } from 'next';

interface MenuMetadataParams {
  name?: string;
  type?: string;
}

export const generateMenuMetadata = async (params: MenuMetadataParams): Promise<Metadata> => {
  const title = params.name || 'Menu';
  
  return {
    title: `${title} | Tafaria Castle`,
    description: `Explore ${title} at Tafaria Castle`,
    openGraph: {
      title: `${encodeURIComponent(title)} | Tafaria Castle`,
      description: `Discover ${title} at Tafaria Castle`,
      url: `https://tafaria.com/${encodeURIComponent(title)}/${params.type ? `&type=${params.type}` : ''}`,
      images: [
        {
          url: `https://tafaria.com/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${title} at Tafaria Castle`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Tafaria Castle`,
      description: `Discover ${title} at Tafaria Castle`,
      images: [`https://tafaria.com/images/og-image.jpg`],
    },
  };
};