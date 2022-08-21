import Layout from "../../components/layout";
import Head from "next/head";
import { getGalleryData } from "../../api_lib/images";
import { GalleryData } from "../../api_lib/imagesTypes";
import Gallery from "../../components/gallery";

export async function getServerSideProps({ params }) {
  const galleryData: GalleryData = await getGalleryData(params.id);
  return {
    props: {
      galleryData,
    },
  };
}

export default function Home({ galleryData }: { galleryData: GalleryData }) {
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
