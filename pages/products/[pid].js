import path from 'path';
import fs from 'fs/promises';
import Loading from '../../components/ui/loading'
import Layout from '../../components/layout/layout';



export default function ProductDetailPage(props){
    const {loadedProduct} = props

    if(!loadedProduct)
        return <Loading/>

    return(
        <Layout>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </Layout>
    )
}


async function getData(){
    const filePath = path.join(process.cwd(),'data', 'dummy-backend.json'),
          jsonData = await fs.readFile(filePath),
          data = JSON.parse(jsonData);

    return data
}

export async function getStaticProps(context){
    
    const { params } = context,
          data = await getData(),
          product = data.product.find(el => el.id === params.pid);

    if(!product)
        return {notFound:true}

    return{
        props:{
            loadedProduct:product
        }
    }
}


export async function getStaticPaths(){

    const data = await getData(),
          ids = data.product.map(product => product.id),
          pathsWithParams = ids.map(id => ({params:{ pid: id}}));

    return{
        paths:pathsWithParams,
        fallback:true,
    };
}

