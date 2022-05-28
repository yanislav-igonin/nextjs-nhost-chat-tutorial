import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { NhostNextProvider } from '@nhost/nextjs'
import { nhost } from '@lib/nhost'
import { NhostApolloProvider } from '@nhost/react-apollo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NhostNextProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>
        <Component {...pageProps} />
        <Toaster />
      </NhostApolloProvider>
    </NhostNextProvider>
  )
}

export default MyApp
