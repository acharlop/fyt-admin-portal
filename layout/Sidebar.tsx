import {Center, Flex, Icon, useColorModeValue} from '@chakra-ui/react'
import {PencilAltIcon, UserGroupIcon, UserIcon} from '@heroicons/react/solid'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {FC} from 'react'

type SidebarLink = {
  LinkIcon: FC
  label: string
}

const sidebarLinks: SidebarLink[] = [
  {
    LinkIcon: UserIcon,
    label: 'comrades',
  },
  {
    LinkIcon: UserGroupIcon,
    label: 'tribes',
  },
  {
    LinkIcon: PencilAltIcon,
    label: 'journal',
  },
]

const isActive = (label: string, asPath: string) => `/${label}` === asPath

const Sidebar = () => {
  const {asPath} = useRouter()
  const linkColor = useColorModeValue('gray.900', 'whiteAlpha.900')

  return (
    <Flex direction='column' gap='3'>
      {sidebarLinks.map(({label, LinkIcon}) => (
        <Link href={`/${label}`} passHref key={label}>
          <Flex
            as='a'
            align='center'
            fontSize='sm'
            fontWeight='semibold'
            transitionProperty='colors'
            transitionDuration='200ms'
            color={isActive(label, asPath) ? linkColor : 'gray.500'}
            _hover={{color: linkColor}}
            textTransform='uppercase'
          >
            <Center w='6' h='6' bg='teal.400' rounded='base' mr='3' p='1'>
              <Icon as={LinkIcon} fill='white' />
            </Center>
            {label}
          </Flex>
        </Link>
      ))}
    </Flex>
  )
}

export default Sidebar
