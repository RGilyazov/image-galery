import Layout from "../../components/layout";
import Head from "next/head";
import { useRouter } from "next/router";
//import { useEffect } from "react";

export default function imagePage(props:{imageData:{title:string}}) {
  const router = useRouter();
  const query = router.query;

  //   useEffect(() => {
  //     if (!router.isReady) return;
  //   }, [router.isReady]);

  const { id } = router.query;

  return (
    <Layout home>
      <Head>
        <title>
          {props.imageData?.title ? props.imageData.title : "no title"}
        </title>
      </Head>
      <article>
        {id}
        <h1 className="text-red-600"> image should be here </h1>
      </article>
    </Layout>
  );
}
