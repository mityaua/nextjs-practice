// Динамический роутинг для постов + TypeScript

import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import { NextPageContext } from "next"; // для описания типа контекста ctx

import Layout from "../../components/layout"; // импорт компонента обёртки

import { IPost } from "../../interfaces/Post.interface"; // импорт интерфейса поста

// Описываем пропсы для Post (обьект с интерфейсом IPost)
interface IProps {
  post: IPost;
}

export default function Post({ post: serverPost }: IProps) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const res = await fetch(`http://localhost:7777/posts/${router.query.id}`);
      const data: IPost = await res.json();
      setPost(data);
    }

    if (!serverPost) {
      load();
    }
  }, []);

  // Разметка не типизируется
  if (!post) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  // Разметка не типизируется
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

// Расширение интерфейса NextPageContext для описания типа контекста ctx
interface IPostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

// https://nextjs.org/docs/api-reference/data-fetching/getInitialProps#context-object
Post.getInitialProps = async ({ query, req }: IPostNextPageContext) => {
  if (!req) {
    return { post: null };
  }

  const res = await fetch(`${process.env.API_URL}/${query.id}`);
  const post: IPost = await res.json();

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
