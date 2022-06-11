import {Avatar, Flex, Td, Text, Tr} from '@chakra-ui/react'
import type {NextPage} from 'next'
import useEventCallback from 'use-event-callback'

import Table, {TH} from '~components/Table'
import {mockUsers} from '~utils/mock'

const headers: TH[] = ['name', 'phone', 'tribe #']

const Comrades: NextPage = () => {
  const edit = useEventCallback((id: string) => {
    console.log('editing', id)
  })

  return (
    <>
      <Text>List of all users in the FYT system.</Text>
      <Table headers={headers}>
        {mockUsers().map((user) => (
          <Tr
            key={user.id}
            cursor='pointer'
            onClick={() => edit(user.id)}
            _hover={{bg: 'teal.200'}}
            _odd={{
              _hover: {bg: 'teal.200 !important'},
            }}
          >
            <Td>
              <Flex gap='2' alignItems='center'>
                <Avatar name={user.name} size='sm' />
                <Text> {user.name}</Text>
              </Flex>
            </Td>
            <Td>{user.phone}</Td>
            <Td>{user.tribe}</Td>
          </Tr>
        ))}
      </Table>
    </>
  )
}

export default Comrades
