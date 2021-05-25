// Кастомная страница приложения
// https://nextjs.org/docs/advanced-features/custom-app

import NextNprogress from "nextjs-progressbar";

import "../styles/main.scss"; // Имопрт файла стилей

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNprogress color="#FF6F91" startPosition={0.3} stopDelayMs={200} height="3" />

      <Component {...pageProps} />
    </>
  );
}
