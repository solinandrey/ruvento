import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script strategy="afterInteractive" id="preloaderScript">
          {`document.fonts.onloadingdone = () => { 
              setTimeout(() => {
                document.querySelector('.preloader').classList.add('loaded');
                setTimeout(() => {
                  document.querySelector('.preloader').classList.add('done');
                  setTimeout(() => {document.querySelector('.preloader').style.display = 'none';}, 500)
                }, 1000)
              }, 1500);
          };`}
        </Script>
        <div className="preloader">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#F25B19"
              strokeWidth="2"
              fill="none"
            ></circle>
          </svg>
        </div>
      </body>
    </Html>
  );
}
