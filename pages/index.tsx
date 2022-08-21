import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { gatAllGalleriesData } from "../api_lib/images";
import GalleryPreview from "../components/galleryPreview";
import { GalleryData } from "../api_lib/imagesTypes";

export async function getStaticProps() {
  const galleriesData = await gatAllGalleriesData();
  return {
    props: {
      galleriesData,
    },
  };
}

export default function Home({ galleriesData }) {
  const result = (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>information about gallery</p>
      </section>
      <div className="flex flex-row justify-start flex-wrap border-2 bg-yellow-50 p-2 gap-2">
        {galleriesData.map((galleryData: GalleryData) => (
          <GalleryPreview
            width={500}
            height={500}
            id={galleryData.id}
            name={galleryData.name}
            description={galleryData.description}
            images={galleryData.images}
          />
        ))}
      </div>
    </Layout>
  );
  return result;
}
