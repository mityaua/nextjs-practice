import Head from "next/head"; // импорт компонента для хеда
import Link from "next/link"; // импорт компонента для внутренних ссылок

// Типизация пропсов для Layout
interface IProps {
  children: React.ReactElement[] | React.ReactElement;
  title?: string;
}

export default function Layout({ children, title = "Next App" }: IProps) {
  return (
    <>
      <Head>
        <title>{title} | Next.JS practice</title>
        <meta name="description" content="Next.JS description example" />
        <meta charSet="utf-8" />
      </Head>

      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>

      <main>{children}</main>

      {/* Пример встроенной таблицы стилей */}
      <style jsx>
        {`
          nav {
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            height: 60px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: #55aab3;
          }

          nav a {
            color: #fff;
            text-decoration: none;
          }

          main {
            margin-top: 60px;
            padding: 1rem;
          }
        `}
      </style>
    </>
  );
}
