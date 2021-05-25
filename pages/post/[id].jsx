// Динамический роутинг для постов

import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import Layout from "../../components/layout"; // импорт компонента обёртки

export default function Post({ post: serverPost }) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const res = await fetch(`http://localhost:7777/posts/${router.query.id}`);
      const data = await res.json();
      setPost(data);
    }

    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>{post.title}</h1>

      <hr />

      <p>{post.body}</p>

      <Link href="/posts">
        <a>Back to Posts</a>
      </Link>
    </Layout>
  );
}

// https://nextjs.org/docs/api-reference/data-fetching/getInitialProps#context-object
Post.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return { post: null };
  }

  const res = await fetch(`http://localhost:7777/posts/${query.id}`);
  const post = await res.json();

  return {
    post,
  };
};

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
// export async function getServerSideProps({ query, req }) {
//   // if (!req) {
//   //   return { post: null };
//   // }

//   const res = await fetch(`http://localhost:7777/posts/${query.id}`);
//   const post = await res.json();

//   return { props: { post } };
// }
