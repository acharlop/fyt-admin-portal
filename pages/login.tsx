import {Box, Center, Flex, Heading, Link, Text} from '@chakra-ui/react'

import Head from 'components/layout/Head'
import LoginForm from 'components/forms/Login'
import type {NextPage} from 'next'
import ThemeToggle from 'components/ThemeToggle'

const Home: NextPage = () => {
  return (
    <div>
      <Head />

      <Center height='100vh'>
        <Box
          borderRadius='lg'
          shadow='lg'
          px='10'
          py='5'
          bg='white'
          color='gray.500'
        >
          <ThemeToggle />

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
    </div>
  )
}

export default Home
