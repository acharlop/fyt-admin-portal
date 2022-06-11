import {
  Editable,
  EditableInput,
  EditablePreview,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react'
import type {NextPage} from 'next'

import Table, {TH} from '~components/Table'
import {mockPrompts} from '~utils/mock'

const headers: TH[] = [{w: 20, text: 'Day #'}, 'Journal Prompt']

const Journal: NextPage = () => {
  return (
    <>
      <Text>
        These prompts can be edited anytime before an active tribe uses them.
        <br />
        After that they can only be edited for upcoming tribes.
      </Text>
      <Table headers={headers}>
        {mockPrompts().map((prompt, i) => (
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
      </Table>
    </>
  )
}

export default Journal
