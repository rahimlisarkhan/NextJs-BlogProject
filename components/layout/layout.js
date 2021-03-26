import { Fragment } from 'react'
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
         
         </>
    )
}

export default Layout
