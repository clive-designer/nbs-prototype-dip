import { UserProvider } from '@auth0/nextjs-auth0';
import Layout from '../components/layout/Layout';

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <h1>Auth0 prototype</h1>
        <p>This prototype was used for user testing - 10th Feb 2022</p>
        {/* To show the content of this app uncommment line 13 below */}
      {/* <Component {...pageProps} /> */}
      </Layout>
    </UserProvider>
  )
}

export default MyApp
