import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import { getAllImagesData } from "../api_lib/images";
import Image from "next/image";
import Gallery from "../components/gallery";

export async function getStaticProps() {
  const allImagesData = getAllImagesData();
  return {
    props: {
      allImagesData,
    },
  };
}

export default function Home({ allImagesData }) {
  const result = (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>information about gallery</p>
      </section>
      <Gallery images={allImagesData} />
    </Layout>
  );
  return result;
}
