import {Flex, Heading} from '@chakra-ui/react'
import React from 'react'

import ThemeToggle from './ThemeToggle'

const Header = () => {
  return (
    <Flex
      justifyContent='space-between'
      alignItems='center'
      p={4}
      // TODO border bottom on scroll
      // borderBottomColor='gray.100'
      // borderBottomWidth='1px'
      zIndex={3}
    >
      <Heading size='md'>FYT Admin</Heading>
      <ThemeToggle />
    </Flex>
  )
}

export default Header
