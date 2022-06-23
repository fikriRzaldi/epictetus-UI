import React, { useState } from "react";
import Container from "../components/Container";
import CardPost from "../components/CardPost";
import Layout from "../components/Layout";
import mockPosts from "../utils/posts.json";
import SectionHeader from "../components/SectionHeader";
import Head from "next/head";

export default function posts() {
  const [posts, setPosts] = useState(mockPosts);

  return (
    <Layout>
      <Head>
        <title>Posts | Epictetus</title>
      </Head>
      <Container>
        <SectionHeader>UI Design</SectionHeader>
        {!posts.length ? (
          <div className="text-center py-28">
            <h1 className="text-6xl py-6">No result 😥</h1>
            <p className="text-xl text-white/60 md:w-6/12 w-full mx-auto">
              We couldn`t find any posts with the keyword `yahahahayuk`. Please
              try another keyword.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex -mx-4 mt-8 flex-wrap">
              {posts.map((post) => (
                <div className="md:w-4/12 w-full px-4 py-6" key={post.id}>
                  <CardPost {...post} />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Layout>
  );
}
