export type OfferImage = {
    height: number;
    filesize: number;
    extension: string;
    url: string;
    id: string;
    width: number;
  };
  
  export type Offer = {
    image: OfferImage;
    name: string;
    description: string;
    id: string;
    priority: number;
    slug: string;
  };