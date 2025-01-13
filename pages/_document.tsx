import { IconContext } from '@react-icons/all-files';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang="en">
          <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="favicon-2.png" />
            <link rel="manifest" href="/manifest.json" />

            {/* Google Tag Manager */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-40VPG21T3R"></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-40VPG21T3R');
                `,
              }}
            />
          </Head>

          <body>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                /** Inlined version of noflash.js from use-dark-mode */
                ;(function () {
                  var storageKey = 'darkMode';
                  var classNameDark = 'dark-mode';
                  var classNameLight = 'light-mode';
                  function setClassOnDocumentBody(darkMode) {
                    document.body.classList.add(darkMode ? classNameDark : classNameLight);
                    document.body.classList.remove(darkMode ? classNameLight : classNameDark);
                  }
                  var preferDarkQuery = '(prefers-color-scheme: dark)';
                  var mql = window.matchMedia(preferDarkQuery);
                  var supportsColorSchemeQuery = mql.media === preferDarkQuery;
                  var localStorageTheme = null;
                  try {
                    localStorageTheme = localStorage.getItem(storageKey);
                  } catch (err) {}
                  var localStorageExists = localStorageTheme !== null;
                  if (localStorageExists) {
                    localStorageTheme = JSON.parse(localStorageTheme);
                  }
                  if (localStorageExists) {
                    setClassOnDocumentBody(localStorageTheme);
                  } else if (supportsColorSchemeQuery) {
                    setClassOnDocumentBody(mql.matches);
                    localStorage.setItem(storageKey, mql.matches);
                  } else {
                    var isDarkMode = document.body.classList.contains(classNameDark);
                    localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
                  }
                })();
                `,
              }}
            />
            <Main />
            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    );
  }
}
