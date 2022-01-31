import { UserProvider } from '@auth0/nextjs-auth0';

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
