import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name='description'
            content='Hasib is a passionate self-taught Full Stack web developer from Bangladesh who develop web applications, mobile applications and desktop applications.'
          />
          {/* <meta name='image' content={seo.image} /> */}
          <meta property='og:title' content='Hasib' />
          <meta
            property='og:description'
            content='Hasib is a passionate self-taught Full Stack web developer from Bangladesh who develop web applications, mobile applications and desktop applications.'
          />
          {/* <meta property='og:image' content={seo.image} /> */}
          <meta property='og:url' content='https://muttakinhasib.github.io/' />
          <meta property='og:type' content='website' />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:creator' content='@MuttakinHasib' />
          <meta name='twitter:title' content='Hasib Molla' />
          <meta
            name='twitter:description'
            content='Hasib is a passionate self-taught Full Stack web developer from Bangladesh who develop web applications, mobile applications and desktop applications '
          />
          {/* <meta name='twitter:image' content={seo.image} /> */}
        </Head>
        <body className='bg-darkNavy'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
