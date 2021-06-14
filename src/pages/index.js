import Head from 'next/head';
import { useState } from 'react';
import { Container, Side } from '../components';
import Loader from '../components/Loader';
import {
  About,
  Contact,
  Experience,
  Landing,
  Work,
} from '../components/sections';

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Head>
        <title>Hasib - Full Stack Developer</title>
      </Head>
      {loading && <Loader {...{ loading, setLoading }} />}

      {!loading && (
        <>
          <Container>
            <Landing />
            <About />
            <Experience />
            <Work />
            <Contact />
          </Container>
          <Side />
        </>
      )}
    </>
  );
};

export default HomeScreen;
