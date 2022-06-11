import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import {useRouter} from 'next/router'
import {useForm} from 'react-hook-form'
import storage from 'utils/localstorage'

import {EMAIL_REGEX} from '~constants/validation'

interface FormData {
  email: string
}

const LoginForm = () => {
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: {errors, isSubmitting, isValid},
  } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const onSubmit = (values: FormData): Promise<void> =>
    new Promise((resolve) => {
      setTimeout(() => {
        storage.set('email', values.email)
        router.replace('/')
        resolve()
      }, 1000)
    })

  const hasError = !!errors?.email

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex gap='5' direction='column'>
        <FormControl isRequired isInvalid={hasError}>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <Input
            autoFocus
            id='email'
            type='email'
            placeholder='admin@fyt.tribe'
            variant='filled'
            isInvalid={!!errors.email}
            errorBorderColor='crimson'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: EMAIL_REGEX,
                message: 'invalid email address',
              },
            })}
          />
          {hasError ? (
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          ) : (
            <FormHelperText>Enter an email to login</FormHelperText>
          )}
        </FormControl>
        <Button
          w='full'
          variant='solid'
          colorScheme='blue'
          isLoading={isSubmitting}
          type='submit'
          isDisabled={!isValid}
        >
          Login
        </Button>
      </Flex>
    </form>
  )
}

export default LoginForm
