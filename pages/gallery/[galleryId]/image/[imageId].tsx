import Head from "next/head";
import Link from "next/link";
import { getImageData, getAllImagesIds } from "../../../../api_lib/images";
import { ImageData } from "../../../../api_lib/imagesTypes";
import Layout from "../../../../components/layout";
import GalleryImage from "../../../../components/galleryImage";

export async function getStaticProps({ params }) {
  try {
    const imageData = getImageData(params.imageId, params.galleryId);
    return {
      props: imageData,
    };
  } catch (e) {
    return {
      props: { imageData: null },
    };
  }
}

export async function getStaticPaths() {
  const AllImagesIds = getAllImagesIds();
  return {
    paths: AllImagesIds,
    fallback: false,
  };
}

export default function imagePage({ imageData }: { imageData: ImageData }) {
  if (!imageData) return <h1>image not found!</h1>;
  return (
    <Layout
      backLink={`/gallery/${imageData.galleryId}`}
      backLinkText=" ← Back to gallery"
    >
      <Head>
        <title>{imageData.name}</title>
      </Head>
      <GalleryImage {...imageData}></GalleryImage>
    </Layout>
  );
}
