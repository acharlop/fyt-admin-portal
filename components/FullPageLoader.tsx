import {CircularProgress, Flex} from '@chakra-ui/react'

const FullPageLoader = () => {
  return (
    <Flex w='100vw' h='100vh' alignItems='center' justifyContent='center'>
      <CircularProgress
        isIndeterminate
        capIsRound
        value={30}
        size='120px'
        color='#123456'
      />
    </Flex>
  )
}

export default FullPageLoader
