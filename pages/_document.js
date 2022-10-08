import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" data-theme="dark">
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>
            Get Free 25 $ Event
          </title>
          <meta
            property="og:title"
            content="Best Cryptocurrency Wallet | Ethereum Wallet | ERC20 Wallet | Trust Wallet"
          />
          <meta
            name="description"
            content="Trust Wallet is the best ethereum wallet and cryptocurrency wallet to store your favourite BEP2, ERC20 and ERC721, tokens. Download the Android Trust Wallet and iOS app today!"
          />
          <meta
            property="og:description"
            content="Trust Wallet is the best ethereum wallet and cryptocurrency wallet to store your favourite BEP2, ERC20 and ERC721, tokens. Download the Android Trust Wallet and iOS app today!"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:image"
            content="/assets/images/media/preview/horizontal_blue.png"
          />
          <meta name="twitter:creator" content="@trustwalletapp" />
          <meta property="og:locale" content="en" />
          <meta
            property="og:image"
            content="/assets/images/media/preview/horizontal_blue.png"
          />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="index.html" />
          <meta property="og:url" content="index.html" />
          <meta property="og:site_name" content="Trust Wallet" />
          <meta property="al:ios:app_name" content="Trust Wallet" />
          <meta property="al:ios:app_store_id" content="1288339409" />
          <meta property="al:ios:url" content="trust://" />
          <meta property="al:android:app_name" content="Trust Wallet" />
          <meta
            property="al:android:package"
            content="com.wallet.crypto.trustapp"
          />
          <meta property="al:android:url" content="index.html" />
          <link
            rel="shortcut icon"
            href="/assets/images/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/assets/images/favicon.png"
          />
          <meta
            name="apple-itunes-app"
            content="app-id=1288339409,affiliate-data=11l7ss"
          />
          <meta name="theme-color" content="#3375BB" />
          <script
            async
            defer
            data-domain="trustwallet.com"
            src="https://analytics.trustwallet.com/js/plausible.js"
          ></script>

          <noscript>Your browser does not support JavaScript!</noscript>
          <link
            rel="preload"
            href="/assets/fonts/IBMPlexSans/IBMPlexSans-Regular.woff2"
            as="font"
            type="font/woff2"
            crossorigin
          />
          <link
            rel="preload"
            href="/assets/fonts/IBMPlexSans/IBMPlexSans-Bold.woff2"
            as="font"
            type="font/woff2"
            crossorigin
          />
          <link
            rel="preload"
            href="/assets/fonts/IBMPlexSans/IBMPlexSans-Medium.woff2"
            as="font"
            type="font/woff2"
            crossorigin
          />
          <link rel="stylesheet" href="/assets/main.css" />
          <script type="text/javascript" src="/assets/js/platform.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
