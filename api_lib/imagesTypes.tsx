export type ImageData = {
  id: string;
  src: string;
  description: string;
  name: string;
  href: string;
};

export type GalleryData = {
  description: string;
  name: string;
  id: string;
  images: ImageData[];
};
