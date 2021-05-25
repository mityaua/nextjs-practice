// Страница всех постов + TypeScript

import { useState, useEffect } from "react";
import Link from "next/link";
import { NextPageContext } from "next"; // для описания типа контекста ctx

import Layout from "../components/layout"; // импорт компонента обёртки

import { IPost } from "../interfaces/Post.interface"; // импорт интерфейса поста

// Описываем пропсы для Posts (массив обьектов с интерфейсом IPost)
interface IProps {
  posts: IPost[];
}

export default function Posts({ posts: serverPost }: IProps) {
  const [posts, setPosts] = useState(serverPost);

  useEffect(() => {
    async function load() {
      const res = await fetch("http://localhost:7777/posts");
      const json: IPost[] = await res.json();

      setPosts(json);
    }

    if (!serverPost) {
      load();
    }
  }, []);

  // Разметка не типизируется
  if (!posts) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  // Разметка не типизируется
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
Posts.getInitialProps = async ({ req, query }: NextPageContext) => {
  if (!req) {
    return { posts: null };
  }

  const res = await fetch(`${process.env.API_URL}/posts`);
  const posts: IPost[] = await res.json();

  return {
    posts,
  };
};
