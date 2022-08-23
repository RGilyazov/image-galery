import Head from "next/head";
import Link from "next/link";

export const siteTitle = "Image gallery";

export default function Layout({
  children,
  home,
  backLink = "/",
  backLinkText = "← Back to home",
}: {
  children: React.ReactNode;
  home?: boolean;
  backLink?: string;
  backLinkText?: string;
}) {
  return (
    <div className="h-full flex flex-col">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="beautiful image gallery" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Link href="/">
        <header className="cursor-pointer text-center text-xl font-bold">
          {siteTitle}
        </header>
      </Link>
      <main className="flex flex-grow p-2 flex-col">{children}</main>
      {!home && (
        <Link href={backLink}>
          <a
            className="rounded-lg p-2 mb-2 ml-2 mr-2 w-fit text-white  bg-stone-500
           hover:bg-violet-900 transition-colors duration-1000 border-solid border-2 shadow-xl"
          >
            {backLinkText}
          </a>
        </Link>
      )}
    </div>
  );
}
