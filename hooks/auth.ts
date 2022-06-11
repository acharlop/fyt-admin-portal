import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import storage from 'utils/localstorage'

const useAuth = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const auth = !!storage.get('email')
    if (!auth && router.asPath !== '/login') router.push('/login')
    if (auth && router.asPath === '/login') router.replace('/')
    setIsAuth(auth)
    setIsLoading(false)
  }, [router])

  return {isAuth, isLoading}
}

export default useAuth
