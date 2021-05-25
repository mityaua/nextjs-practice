// Страница всех постов
import { useState, useEffect } from "react";
import Link from "next/link";

import Layout from "../components/layout"; // импорт компонента обёртки

export default function Posts({ posts: serverPost }) {
  const [posts, setPosts] = useState(serverPost);

  useEffect(() => {
    async function load() {
      const res = await fetch("http://localhost:7777/posts");
      const json = await res.json();

      setPosts(json);
    }

    if (!serverPost) {
      load();
    }
  }, []);

  if (!posts) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  return (
    <Layout title={"Post page"}>
      <h1>Post page</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

// https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
Posts.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return { posts: null };
  }

  const res = await fetch("http://localhost:7777/posts");
  const posts = await res.json();

  return {
    posts,
  };
};
