import {
  Table as UITable,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import {PropsWithChildren, useState} from 'react'

import {isString} from '~utils/assertions'

type THwW = {
  text: string
  w: string | number
}

export type TH = string | THwW

interface Props extends PropsWithChildren<unknown> {
  headers: TH[]
}

const Table = ({headers, children}: Props) => {
  const [scrolled, setScrolled] = useState(false)

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    setScrolled(event.currentTarget.scrollTop > 4)
  }

  return (
    <TableContainer
      mt='6'
      height='70vh'
      overflowY='auto'
      onScroll={scrollHandler}
    >
      <UITable variant='striped' colorScheme='teal' position='relative'>
        <Thead
          position='sticky'
          top='0'
          zIndex='2'
          shadow={scrolled ? 'sm' : undefined}
          bg={scrolled ? 'teal' : 'transparent'}
          _light={{color: scrolled ? 'white' : 'gray.600'}}
        >
          <Tr>
            {headers.map((header, index) => (
              <Th
                key={index}
                color='inherit'
                textTransform='capitalize'
                w={isString(header) ? 'auto' : header.w}
              >
                {isString(header) ? header : header.text}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody overflowY='scroll' maxH='100%'>
          {children}
        </Tbody>
      </UITable>
    </TableContainer>
  )
}

export default Table
