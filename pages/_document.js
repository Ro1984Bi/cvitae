import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <title>CV</title>
        <meta name="description" content="Rodrigo Bilbao Freelancer"/>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css " rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
