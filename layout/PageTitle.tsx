import {Badge, Flex, Heading, Icon, Tooltip} from '@chakra-ui/react'
import {InformationCircleIcon} from '@heroicons/react/solid'
import {useRouter} from 'next/router'

const PageTitle = () => {
  const {asPath} = useRouter()

  if (asPath === '/') return null

  return (
    <Heading as='h1' textTransform='capitalize' lineHeight='1' mt='4' mb='1'>
      {asPath.replaceAll('/', ' ').trim()}
      <Badge
        colorScheme='teal'
        letterSpacing='wider'
        ml='3'
        cursor='pointer'
        h='6'
        borderRadius='4'
        alignItems='center'
      >
        <Flex alignItems='center' h='full'>
          <div>alpha</div>
          <Tooltip label='This means that the data is not stored anywhere'>
            <Icon as={InformationCircleIcon} ml='2' h='4' w='4' />
          </Tooltip>
        </Flex>
      </Badge>
    </Heading>
  )
}

export default PageTitle
