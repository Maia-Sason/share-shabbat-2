import Head from "next/head";

const Metadata = ({ title, description }) => {
  return (
    <Head>
      <title>ShareShabbat - {title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Metadata;
