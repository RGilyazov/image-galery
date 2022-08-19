import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const siteTitle = "image gallery";

export default function Layout({ children, home }: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="beautiful image gallery" />
        <meta name="og:title" content={siteTitle} />
       </Head>
      <header>
        the header
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
