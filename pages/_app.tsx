import '../styles/globals.css'

import type {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import theme from 'styles/theme'
import useAuth from 'hooks/auth'

function MyApp({Component, pageProps}: AppProps) {
  const {isLoading, isAuth} = useAuth()

  if (isLoading && !isAuth) {
    return <div>loading</div>
  }

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
