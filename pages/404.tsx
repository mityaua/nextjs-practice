// Кастомная страница 404
// https://nextjs.org/docs/advanced-features/custom-error-page#404-page

import Link from "next/link"; // Импорт компонента ссылки
import Layout from "../components/layout"; // Импорт компонента обёртки

import styles from "../styles/error.module.scss"; // Импорт модульного файла стилей

export default function ErrorPage() {
  return (
    <Layout>
      <h1 className={styles.error}>Error 404 - Page Not Found :(</h1>

      <p>
        Wanna{" "}
        <Link href="/">
          <a>go Home</a>
        </Link>
        ?
      </p>
    </Layout>
  );
}
