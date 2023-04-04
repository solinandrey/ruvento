import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import useFontFaceObserver from 'use-font-face-observer';
import { useEffect } from "react";

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
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script strategy="afterInteractive" id="preloaderScript">
          {/* {`document.fonts.onloadingdone = () => { 
              setTimeout(() => {
                document.querySelector('.preloader').classList.add('loaded');
                console.log('heellllloo');
                setTimeout(() => {
                  document.querySelector('.preloader').classList.add('done');
                  setTimeout(() => {document.querySelector('.preloader').style.display = 'none';}, 500)
                }, 500)
              }, 1000);
          };`} */}
        </Script>
        <div className="preloader">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 1080 1080"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <polygon points="316.32,677.88 413.67,775.23 347.43,775.23 250.08,677.88 450.5,477.47 284.21,305.76 350.45,305.76     516.73,477.47   " />
              </g>
              <g>
                <polygon points="432.38,677.88 529.72,775.23 463.49,775.23 366.14,677.88 566.56,477.47 400.27,305.76 466.5,305.76     632.79,477.47   " />
              </g>
              <polygon
                className="st0"
                points="395.06,479.58 271.52,593.52 271.52,355.65  "
                fill="#F25B19"
              />
              <path d="M829.52,305.76v469.47H589.01c0-0.96-29.68-26.57-101.67-98.57c31.88-31.74,168.01-165.51,200.04-197.32   c-1.98-2.2-155.96-173.59-155.96-173.59C611.63,305.76,749.37,305.76,829.52,305.76z" />

              <rect
                x="738.01"
                y="674.73"
                transform="matrix(0.7071 0.7071 -0.7071 0.7071 717.2354 -334.1576)"
                className="st1 st13"
                fill="#FCFCFC"
                width="47.93"
                height="47.93"
              />

              <rect
                x="738.01"
                y="513.12"
                transform="matrix(0.7071 0.7071 -0.7071 0.7071 602.956 -381.4936)"
                className="st1 st12"
                fill="#FCFCFC"
                width="47.93"
                height="47.93"
              />

              <rect
                x="738.01"
                y="351.5"
                transform="matrix(0.7071 0.7071 -0.7071 0.7071 488.6767 -428.8297)"
                className="st1 st11"
                fill="#FCFCFC"
                width="47.93"
                height="47.93"
              />
            </g>
          </svg>
        </div>
      </body>
    </Html>
  );
}
