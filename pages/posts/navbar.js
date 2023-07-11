import Link from "next/link";
import Layout from "../../components/layout";
//import styles from "../posts/navbar.css";

export default function Navbar() {
  return (
    <Layout>
      <ul>
        <li>
          <Link className="active" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/posts/news">News</Link>
        </li>
        <li>
          <Link href="/posts/contact">Contact</Link>
        </li>
        <li>
          <Link href="/posts/about">About</Link>
        </li>
      </ul>
    </Layout>
  );
}
