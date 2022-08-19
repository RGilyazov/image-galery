import Layout from "../../components/layout";
import Head from "next/head";
import { useRouter } from "next/router";
//import { useEffect } from "react";

export default function Post(props) {
  const router = useRouter();
  const query = router.query;

  //   useEffect(() => {
  //     if (!router.isReady) return;
  //   }, [router.isReady]);

  const { id } = router.query;

  return (
    <Layout>
      <Head>
        <title>
          {props.postData?.title ? props.postData.title : "no title"}
        </title>
      </Head>
      <article>
        {id}
        <h1> image should be here </h1>
      </article>
    </Layout>
  );
}
