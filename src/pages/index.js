import Head from 'next/head';
import { Container } from '../components';
import { About, Landing } from '../components/sections';
const HomeScreen = () => {
  return (
    <>
      <Head>
        <title>Hasib - Full Stack Developer</title>
      </Head>
      <Container>
        <Landing />
        <About />
      </Container>
    </>
  );
};

export default HomeScreen;
