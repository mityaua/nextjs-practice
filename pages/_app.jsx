// Кастомная страница приложения
// https://nextjs.org/docs/advanced-features/custom-app

import "../styles/main.scss"; // Имопрт файла стилей

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
