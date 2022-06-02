import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react'

import {EMAIL_REGEX} from 'contants/validation'
import {useForm} from 'react-hook-form'

interface FormData {
  email: string
}

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: {errors, isSubmitting, isValid},
  } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const onSubmit = (values: FormData): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

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
