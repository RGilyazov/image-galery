import Layout from "../../components/layout";
import Head from "next/head";
import { getImageData } from "../../api_lib/images";
import { ImageData } from "../../api_lib/imagesTypes";
import GalleryImage from "../../components/galleryImage";

export async function getServerSideProps({ params }) {
  const imageData = await getImageData(params.id);
  return {
    props: imageData,
  };
}

export default function imagePage({ imageData }: { imageData: ImageData }) {
  return (
    <Layout>
      <Head>
        <title>{imageData.name}</title>
      </Head>
      <GalleryImage {...imageData}></GalleryImage>
    </Layout>
  );
}
