import Layout from "../../components/layout";
import Head from "next/head";
import { getGalleryData } from "../../api_lib/images";
import { GalleryData } from "../../api_lib/imagesTypes";
import Gallery from "../../components/gallery";

export async function getServerSideProps({ params }) {
  try {
    const galleryData: GalleryData = await getGalleryData(params.id);
    return {
      props: {
        galleryData,
      },
    };
  } catch (e) {
    return {
      props: { galleryData: null },
    };
  }
}

export default function Home({ galleryData }: { galleryData: GalleryData }) {
  if (!galleryData) return <h1>gallery not found!</h1>;
  const result = (
    <Layout>
      <Gallery
        images={galleryData.images}
        name={galleryData.name}
        id={galleryData.id}
        description={galleryData.description}
      />
    </Layout>
  );
  return result;
}
