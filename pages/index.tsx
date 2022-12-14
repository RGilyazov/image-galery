import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { gatAllGalleriesData } from "../api_lib/images";
import { GalleryData } from "../api_lib/imagesTypes";
import GalleryPreview from "../components/galleryPreview";

export async function getStaticProps() {
  const galleriesData = await gatAllGalleriesData();
  return {
    props: {
      galleriesData,
    },
  };
}

export default function Home({
  galleriesData,
}: {
  galleriesData: GalleryData[];
}) {
  const result = (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex-grow flex flex-row justify-center flex-wrap border-2 rounded-lg bg-white p-2 gap-2 overflow-hidden shadow-inner">
        {galleriesData.map((galleryData: GalleryData) => (
          <GalleryPreview
            key={galleryData.id}
            width={500}
            height={500}
            {...galleryData}
          />
        ))}
      </div>
    </Layout>
  );
  return result;
}
