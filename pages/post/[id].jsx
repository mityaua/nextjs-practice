// Динамический роутинг для постов

import { useRouter } from "next/router";
import Layout from "../../components/layout"; // импорт компонента обёртки

export default function Post() {
  const router = useRouter();

  return (
    <Layout>
      <h1>Post {router.query.id}</h1>
    </Layout>
  );
}
