import {Avatar, AvatarGroup, Td, Text, Tr} from '@chakra-ui/react'
import type {NextPage} from 'next'
import useEventCallback from 'use-event-callback'

import Table, {TH} from '~components/Table'
import {mockTribes} from '~utils/mock'

const headers: TH[] = ['tribe #', 'status', 'start', 'comrades']

const Tribes: NextPage = () => {
  const edit = useEventCallback((id: string) => {
    console.log('editing', id)
  })

  return (
    <>
      <Text>List of all tribes in the FYT system.</Text>
      <Table headers={headers}>
        {mockTribes()
          .reverse()
          .map((tribe) => (
            <Tr key={tribe.id} cursor='pointer' onClick={() => edit(tribe.id)}>
              <Td>{tribe.number}</Td>
              <Td textTransform='capitalize'>{tribe.status}</Td>
              <Td>{tribe.startDate.toLocaleDateString()}</Td>
              <Td>
                <AvatarGroup size='sm'>
                  {tribe.members.map((user) => (
                    <Avatar border='none' name={user.name} key={user.id} />
                  ))}
                </AvatarGroup>
              </Td>
            </Tr>
          ))}
      </Table>
    </>
  )
}

export default Tribes
