import Head from 'next/head'
import fs from 'fs/promises'
import path from 'path'
import Layout from '../components/layout/layout';
import Button from '../components/ui/button'
import Link from 'next/link';

let HomePage = (props) => {

  const {products} = props
  
  console.log('====================================');
  console.log(products);
  console.log('====================================');
  return(
    <>
    <Head>
        <meta charset="UTF-8"/>
        <meta name="keywords" content="give a short or mid description about the content keywords of your website"/>
        <meta name="description" content="give a short or mid description about the contents of your website"/>
        <meta name="author" content="write the name of the author of the webpage"/>
        {/* <meta name="refresh" content="50"/> */}
        {/* <meta http-equi="refresh" content="5; url='write the url of your website'"/> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Nextjs Project</title>
    </Head>
    
      
    <Layout>

      <h1>Home page</h1>
      <ul>
          {products.map(el => ( 
             <li key={el.id} >
               <Button link={`/products/${el.id}`}>{el.title}</Button>
                {/* <Link href={`/${el.id}`}>el.title</Link> */}
             </li> )
           )}
      </ul>
    </Layout>
    
    </>
  )
}

export async function getStaticProps(context) {
  console.log('generate page...');
  const filePath =  path.join(process.cwd(),'data', 'dummy-backend.json'),
        jsonData = await fs.readFile(filePath),
        data = JSON.parse(jsonData);

  if(!data)
    return { redirect:{ destination:'/no-data'} }

  // if(data.product.length === 0)
  //   return { notFound:true }

  return{
    props: {
      products:data.product
    },

    revalidate:5
  
  }
}


export default HomePage;
