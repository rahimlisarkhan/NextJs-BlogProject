import Head from 'next/head'
import Layout from '../components/layout/layout';

let HomePage = (props) => {

  console.log(props);
  return(
    <>
    <Head>
        <meta charset="UTF-8"/>
        <meta name="keywords" content="give a short or mid description about the content keywords of your website"/>
        <meta name="description" content="give a short or mid description about the contents of your website"/>
        <meta name="author" content="write the name of the author of the webpage"/>
        {/* <meta name="refresh" content="50"/> */}
        <meta http-equi="refresh" content="5; url='write the url of your website'"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Nextjs Project</title>
    </Head>
    
      
    <Layout>
      <h1>Home page</h1>
    </Layout>
    
    </>
  )
}

export async function getStaticProps() {

  return{
    props: {
      products:[{id:'1',name:'Product 1'}]
    }
  }
}


export default HomePage;
