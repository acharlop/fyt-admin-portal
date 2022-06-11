import {Box, Center, Flex, Heading, Link, Text} from '@chakra-ui/react'
import type {NextPage} from 'next'

import LoginForm from '~components/forms/LoginForm'
import Head from '~layout/Head'

const Home: NextPage = () => {
  return (
    <>
      <Head />

      <Center h={{base: 'auto', md: '100vh'}} mt={{base: '5', md: '0'}}>
        <Box
          borderRadius='lg'
          shadow='lg'
          px='10'
          py='5'
          bg='white'
          color='gray.500'
        >
          <Flex gap='5' direction='column'>
            <Heading as='h1' size='xl'>
              FYT Admin panel
              <br />
              Login page
            </Heading>
            <Text noOfLines={3}>
              For admins only.
              <br />
              Please see&nbsp;
              <Link isExternal color='blue'>
                this page
              </Link>
              &nbsp;otherwise.
            </Text>
            <LoginForm />
          </Flex>
        </Box>
      </Center>
    </>
  )
}

export default Home
