import Head from 'next/head'
import fs from 'fs/promises'
import path from 'path'
import Layout from '../components/layout/layout';

let HomePage = (props) => {

  const {products} = props

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
      <ul>
          {products.map(el => <li key={el.id} >{el.name}</li>)}
      </ul>
    </Layout>
    
    </>
  )
}

export async function getStaticProps() {
  console.log('generate page...');

  const filePath =  path.join(process.cwd(),'data', 'dummy-backend.json'),
        jsonData = await fs.readFile(filePath),
        data = JSON.parse(jsonData);

  return{
    props: {
      products:data.product
    },

    revalidate:5
  }
}


export default HomePage;
