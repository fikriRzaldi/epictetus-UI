import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import FeaturedPost from "../components/FeaturedPost";
import CardPost from "../components/CardPost";
import Container from "../components/Container";
import Layout from "../components/Layout";
import mockPosts from "../utils/posts.json";

export default function Home() {
  const [posts, setPosts] = useState(mockPosts);
  return (
    <Layout>
      <Head>
        <title>Home | Epictetus</title>
      </Head>
      <Container>
        <FeaturedPost />
        <div className="flex -mx-4 mt-8 flex-wrap">
          {posts.map((post) => (
            <div className="md:w-4/12 w-full px-4 py-6" key={post.id}>
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
