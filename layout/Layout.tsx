import {Badge, Grid, GridItem, Heading, Icon, Tooltip} from '@chakra-ui/react'
import {InformationCircleIcon} from '@heroicons/react/solid'
import {useRouter} from 'next/router'
import {PropsWithChildren} from 'react'

import Footer from './Footer'
import Header from './Header'
import PageTitle from './PageTitle'
import Sidebar from './Sidebar'

const templateAreas = `
"header header"
"nav main"
"nav footer"`

const Layout = ({children}: PropsWithChildren<unknown>) => {
  return (
    <Grid
      templateAreas={templateAreas}
      gridTemplateRows={'72px 1fr 50px'}
      gridTemplateColumns={'200px 1fr'}
      h='100vh'
      gap='1'
      fontWeight='bold'
    >
      <GridItem area='header' as='header'>
        <Header />
      </GridItem>
      <GridItem p='4' area='nav' as='nav'>
        <Sidebar />
      </GridItem>
      <GridItem
        py='2'
        px='4'
        area='main'
        as='main'
        overflowY='scroll'
        // border='1px solid white'
      >
        <PageTitle />
        {children}
      </GridItem>
      <GridItem p='4' area='footer' as='footer'>
        <Footer />
      </GridItem>
    </Grid>
  )
}

export default Layout
