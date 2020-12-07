import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Token Designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/playground">
          <a>Playground</a>
        </Link>
      </main>
    </>
  );
}
