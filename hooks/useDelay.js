import { useEffect, useState } from 'react'

const useDelay = (delay) => {
  const [_delay, setDelay] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setDelay(false)
    }, delay)
  }, [delay])

  return _delay
}

export default useDelay
