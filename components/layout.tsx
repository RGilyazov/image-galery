import Head from "next/head";
import Link from "next/link";

export const siteTitle = "image gallery";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="h-full flex flex-col">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="beautiful image gallery" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className="text-center text-xl font-bold">Image gallery</header>
      <main className="h-full flex flex-grow p-2 flex-col">{children}</main>
      {!home && (
        <Link href="/">
          <a className="rounded-lg p-2 m-2 w-fit text-white  bg-stone-500 hover:bg-blue-800 border-solid border-2">
            ← Back to home
          </a>
        </Link>
      )}
    </div>
  );
}
