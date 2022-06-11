import {Button, Icon, useColorMode} from '@chakra-ui/react'
import {MoonIcon, SunIcon} from '@heroicons/react/solid'

const ThemeToggle = () => {
  const {colorMode, toggleColorMode} = useColorMode()

  const ButtonIcon = colorMode === 'light' ? MoonIcon : SunIcon

  return (
    <Button
      onClick={toggleColorMode}
      height={10}
      width={10}
      p={2}
      alignItems='center'
      justifyContent='center'
    >
      <Icon as={ButtonIcon} />
    </Button>
  )
}

export default ThemeToggle
