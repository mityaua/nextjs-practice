// Страница About (как индексная)

import Router from "next/router";
import Layout from "../../components/layout"; // импорт компонента обёртки

export default function About() {
  const goPostsHandler = () => {
    Router.push("/posts");
  };

  const goBackHandler = () => {
    Router.push("/");
  };

  return (
    <Layout title={"About page"}>
      <h1>About page</h1>

      <button type="button" onClick={goPostsHandler}>
        Go to posts
      </button>

      <button type="button" onClick={goBackHandler}>
        Go back to home
      </button>
    </Layout>
  );
}
