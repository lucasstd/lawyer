import App from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

class MainApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const cookies = ctx && ctx.req ? ctx.req.headers.cookie : "";
    const isServer = !process.browser;
    const componentInitProps = Component.getInitialProps
      ? await Component.getInitialProps({ ...ctx, isServer })
      : {};
    return {
      cookies,
      pageProps: componentInitProps,
    };
  }

  render() {
    const { Component, pageProps, cookies, router } = this.props;
    const defaultTitle = "Advogada Daiana Staudt";
    return (
      <>
        <Head>
          <title>{defaultTitle}</title>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Advogada situada em porto alegre" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content={defaultTitle} />
        </Head>
        <Component router={router} {...pageProps} />
      </>
    );
  }
}

export default MainApp;
