import Head from 'next/head'
import Header from '../components/Header'


let HomePage = () => {

  return(
    <>
    <Head>
      <title>Nextjs Project</title>
    </Head>
    
    <Header/>
    <main>
      <h1>Home page</h1>
    </main>
    </>
  )
}

export default HomePage;
