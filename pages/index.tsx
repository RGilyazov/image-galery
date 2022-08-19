import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>information about gallery</p>
      </section>
      <section className="h-full w-full">
        <h2 className="text-red-600">Blog</h2>
        <ul>
          <li>images would be here</li>
          <Link href={`/`}>
            <a>{"link to some image"}</a>
          </Link>
        </ul>
      </section>
    </Layout>
  );
}
