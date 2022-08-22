import { getGalleryData, getAllGalleryIds } from "../../api_lib/images";
import { GalleryData } from "../../api_lib/imagesTypes";
import Layout from "../../components/layout";
import Gallery from "../../components/gallery";

export async function getStaticProps({ params }) {
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
export async function getStaticPaths() {
  const AllGalleryIds = await getAllGalleryIds();
  return {
    paths: AllGalleryIds,
    fallback: false,
  };
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
