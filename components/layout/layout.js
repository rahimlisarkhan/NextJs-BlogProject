import { Fragment } from 'react'
import Footer from './footer'
import Header from './header'


const Layout = (props) => {
    
    return (
        <>
        <Header/>
        
        <Fragment>
           <main className='event-container'>
                {props.children}
           </main>
        </Fragment>
        
        <Footer/>
         </>
    )
}

export default Layout
