import 'styles/globals.css'

import {ChakraProvider} from '@chakra-ui/react'
import type {AppProps} from 'next/app'
import {Fragment} from 'react'

import useAuth from '~hooks/auth'
import Layout from '~layout/Layout'
import theme from '~styles/theme'

const MyApp = ({Component, pageProps}: AppProps) => {
  const {isLoading, isAuth} = useAuth()

  if (isLoading && !isAuth) {
    return <div>loading</div>
  }

  const Wrapper = isAuth ? Layout : Fragment

  return (
    <ChakraProvider theme={theme}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ChakraProvider>
  )
}

export default MyApp
