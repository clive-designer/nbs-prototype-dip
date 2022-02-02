import Document, { Html, Head, Main, NextScript } from 'next/document'

class dipDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <link
            rel="preload"
            href="/assets/CabernetJFPro-Regular.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/CabernetJFPro-Regular.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/NBS-Bold.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/NBS-Bold.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/NBS-Light.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/NBS-Light.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="assets/NBS-Medium.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="assets/NBS-Medium.woff"
            as="font"
            crossOrigin=""
          />
          {/* <link href="https://dip.mortgages.nationwide.co.uk/assets/CabernetJFPro-Regular.woff2" rel="stylesheet" /> */}
          {/* <link href="https://dip.mortgages.nationwide.co.uk/assets/CabernetJFPro-Regular.woff2" rel="stylesheet" /> */}
          {/* <link href="https://dip.mortgages.nationwide.co.uk/assets/CabernetJFPro-Regular.woff" rel="stylesheet" /> */}
          {/* <link href="https://dip.mortgages.nationwide.co.uk/assets/NBS-Bold.woff2" rel="stylesheet" /> */}
          {/* <link href="https://dip.mortgages.nationwide.co.uk/assets/NBS-Bold.woff" rel="stylesheet" /> */}
          {/* <link href="https://dip.mortgages.nationwide.co.uk/assets/NBS-Light.woff2" rel="stylesheet" /> */}
          {/* <link href="https://dip.mortgages.nationwide.co.uk/assets/assets/NBS-Light.woff" rel="stylesheet" /> */}
          {/* <link href="https://dip.mortgages.nationwide.co.uk/assets/NBS-Medium.woff2" rel="stylesheet" /> */}
          {/* <link href="https://dip.mortgages.nationwide.co.uk/assets/NBS-Medium.woff" rel="stylesheet" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default dipDocument