import {Grid, GridItem} from '@chakra-ui/react'
import {PropsWithChildren} from 'react'

import Footer from './Footer'
import Header from './Header'
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
      <GridItem p='4' area='main' as='main' overflowY='scroll'>
        {children}
      </GridItem>
      <GridItem p='4' area='footer' as='footer'>
        <Footer />
      </GridItem>
    </Grid>
  )
}

export default Layout
