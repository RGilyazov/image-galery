import Layout from "../../components/layout";
import Head from "next/head";
import Image from "next/image";
import { getImageData } from "../../api_lib/images";

export async function getServerSideProps({ params }) {
  const imageData = await getImageData(params.id);
  return {
    props: {
      ...imageData,
    },
  };
}

export default function imagePage(props: {
  imageData: { name: string; src: string; description: string };
}) {
  console.log(props.imageData);
  return (
    <Layout>
      <Head>
        <title>{props.imageData.name}</title>
      </Head>
      <article className="max-h-full w-full flex flex-col items-center content-center">
        <img
          className="max-h-[90vh] max-w-[90vw] object-contain"
          src={props.imageData.src}
        />
        <p>{props.imageData.description}</p>
      </article>
    </Layout>
  );
}

// return (
//   <Layout>
//     <Head>
//       <title>
//         {props.imageData?.name ? props.imageData.name : "no title"}
//       </title>
//     </Head>
//     <article className="aspect-auto overflow-hidden bg-black image-wrapper max-h-full">
//       <Image
//         alt=""
//         src={props.imageData.src}
//         objectFit="cover"
//         className="group-hover:opacity-70"
//         layout="intrinsic"
//         width="400"
//         height="400"
//       />
//     </article>
//   </Layout>
// );
