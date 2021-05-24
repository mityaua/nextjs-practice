// Главная страница приложения

import Layout from "../components/layout"; // импорт компонента обёртки

export default function Index() {
  return (
    <Layout title={"Home page"}>
      <h1>Hello Next.JS!</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius adipisci doloremque cumque magnam nam! Error quam quas et
        commodi doloribus laborum at, cupiditate perspiciatis repellat facilis, deleniti deserunt dolorum?
      </p>
    </Layout>
  );
}
