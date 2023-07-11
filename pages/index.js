import Head from "next/head";
import Navbar from "./posts/navbar";
import Image from "next/image";

const YourComponent = () => (
  <Image
    src="/images/weic2216b.jpg" // Route of the image file
    height={500}
    width={500}
    alt="Your Name"
  />
);
export default function Home() {
  return (
    <div>
      <Head>
        <title>Learn Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <YourComponent />
      </main>
      <footer></footer>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
