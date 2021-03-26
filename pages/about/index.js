import Header from "../../components/layout/header";
import Head from 'next/head'


let AboutPage = () => {
  return (
    <>
       <Head>
            <meta charset="UTF-8"/>
            <meta name="keywords" content="give a short or mid description about the content keywords of your website"/>
            <meta name="description" content="give a short or mid description about the contents of your website"/>
            <meta name="author" content="write the name of the author of the webpage"/>
            {/* <meta name="refresh" content="50"/> */}
            <meta http-equi="refresh" content="5; url='write the url of your website'"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>

      <Layout>
        <h1>About page</h1>
      </Layout>
    </>
  );
};

export default AboutPage;
