import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff' />

          <meta name='image' content='/banner.png' />
          <meta property='og:title' content='Hasib Molla' />
          <meta
            name='description'
            content='Hasib is a passionate self-taught Full Stack web developer from Bangladesh who develop web applications, mobile applications and desktop applications.'
          />
          <meta
            property='og:description'
            content='Hasib is a passionate self-taught Full Stack web developer from Bangladesh who develop web applications, mobile applications and desktop applications.'
          />
          <meta property='og:image' content='/banner.png' />
          <meta property='og:url' content='https://muttakinhasib.github.io/' />
          <meta property='og:type' content='website' />
          
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:creator' content='@MuttakinHasib' />
          <meta name='twitter:title' content='Hasib Molla' />
          <meta
            name='twitter:description'
            content='Hasib is a passionate self-taught Full Stack web developer from Bangladesh who develop web applications, mobile applications and desktop applications '
          />
          <meta name='twitter:image' content='/banner.png' />

          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500&display=swap'
            rel='stylesheet'
          />
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
