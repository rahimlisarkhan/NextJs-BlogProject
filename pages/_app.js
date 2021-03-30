import { Provider } from 'react-redux'
import { useStore } from '../redux-store/store'

import '../sass/globals.scss'
import 'tailwindcss/tailwind.css'


export default function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState)
  
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }












  // import { createWrapper } from 'next-redux-wrapper'

// import { Provider } from 'react-redux'
// import { useStore } from '../redux-store/store'


// import '../sass/globals.scss'
// import 'tailwindcss/tailwind.css'


// export default function App({ Component, pageProps }) {
//     const store = useStore(pageProps.initialReduxState)
  
//     return (
//       <Provider store={store}>
//         <Component {...pageProps} />
//       </Provider>
//     )
//   }
