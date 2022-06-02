const STORAGE_KEY = 'fyt-admin'

type Key = 'email'

const get = (key?: Key) => {
  const obj = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  return key ? obj[key] : obj
}

const set = (key: Key, value: string | number) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({...get(), [key]: value}))
}

const storage = {
  get,
  set,
}

export default storage
