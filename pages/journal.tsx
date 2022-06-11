import {
  Editable,
  EditableInput,
  EditablePreview,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import {useViewportScroll} from 'framer-motion'
import type {NextPage} from 'next'
import {useEffect, useRef, useState} from 'react'

const mockPrompts = Array.from({length: 90}, (_, i) => `Prompt for day ${i}`)

const Journal: NextPage = () => {
  const [scrolled, setScrolled] = useState(false)

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    setScrolled(event.currentTarget.scrollTop > 4)
  }

  return (
    <>
      <Text>
        These prompts can be edited anytime before an active tribe uses them.
        <br />
        After that they can only be edited for upcoming tribes.
      </Text>
      <TableContainer
        mt='6'
        height='70vh'
        overflowY='auto'
        onScroll={scrollHandler}
      >
        <Table variant='striped' colorScheme='teal' position='relative'>
          <Thead
            position='sticky'
            top='0'
            zIndex='2'
            shadow={scrolled ? 'sm' : undefined}
            bg={scrolled ? 'teal' : 'transparent'}
            _light={{color: scrolled ? 'white' : 'gray.600'}}
          >
            <Tr>
              <Th color='inherit' w='20'>
                Day #
              </Th>
              <Th color='inherit'>Journal Prompt</Th>
            </Tr>
          </Thead>
          <Tbody overflowY='scroll' maxH='100%'>
            {mockPrompts.map((prompt, i) => (
              <Tr key={i}>
                <Td>{i + 1}</Td>
                <Td fontWeight='normal'>
                  <Editable defaultValue={prompt} variant='filled'>
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Journal
