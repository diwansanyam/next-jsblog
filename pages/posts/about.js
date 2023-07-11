import Link from "next/link";
import Head from "next/head";
export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <h1>this is about</h1>
      <h2>
        <Link href="/">BAck to home</Link>
      </h2>
    </>
  );
}
