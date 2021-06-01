import Head from 'next/head';
import { Container, Side } from '../components';
import {
  About,
  Contact,
  Experience,
  Landing,
  Work,
} from '../components/sections';
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
        <Contact />
      </Container>
      <Side />
    </>
  );
};

export default HomeScreen;
