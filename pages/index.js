import Head from 'next/head';
import Commercial from '../components/layout/Commercial';

const DoorwayPage = () => {
  return (
    <>
      <Head>
        <title>Welcome!</title>
        <meta name='description' content='Welcome to Next Shopping Cart' />
      </Head>
      <Commercial />
    </>
  );
};

export default DoorwayPage;
