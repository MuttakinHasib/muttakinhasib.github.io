import Head from 'next/head';
import { Container } from '../components';
import { About, Experience, Landing, Work } from '../components/sections';
const HomeScreen = () => {
  return (
    <>
      <Head>
        <title>Hasib - Full Stack Developer</title>
      </Head>
      <Container>
        <Landing />
        <About />
        <Experience />
        <Work />
      </Container>
    </>
  );
};

export default HomeScreen;
