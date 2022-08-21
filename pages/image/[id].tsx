import Layout from "../../components/layout";
import Head from "next/head";
import { getImageData } from "../../api_lib/images";
import { ImageData } from "../../api_lib/imagesTypes";
import GalleryImage from "../../components/galleryImage";

export async function getServerSideProps({ params }) {
  try {
    const imageData = await getImageData(params.id);
    return {
      props: imageData,
    };
  } catch (e) {
    return {
      props: { imageData: null },
    };
  }
}

export default function imagePage({ imageData }: { imageData: ImageData }) {
  if (!imageData) return <h1>image not found!</h1>;
  return (
    <Layout>
      <Head>
        <title>{imageData.name}</title>
      </Head>
      <GalleryImage {...imageData}></GalleryImage>
    </Layout>
  );
}
