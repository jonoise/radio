import { useEffect, useState } from 'react'
import { MotionFlex, MotionText } from '../motion/components'
import { Text } from '@chakra-ui/react'
const WeAreLive = ({ showLoading }) => {
  const [weAreLive, setWeAreLive] = useState(false)
  const loadingTime = 4000

  useEffect(() => {
    if (showLoading && !weAreLive) {
      const timeout = setTimeout(() => {
        setWeAreLive(true)
      }, loadingTime)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [showLoading, weAreLive])

  if (weAreLive) return <Live />
  if (!weAreLive) return <Loading />
}

export default WeAreLive

const Loading = () => {
  return (
    <MotionFlex
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      color="white"
      fontSize="12px"
      fontWeight="semibold"
    >
      <MotionText
        animate={{
          opacity: [0, 1, 0],
          transition: {
            duration: 1,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
            loop: Infinity,
            repeatDelay: 1,
          },
        }}
      >
        Cargando...
      </MotionText>
    </MotionFlex>
  )
}

const Live = () => {
  return (
    <MotionFlex
      h="20px"
      p="2"
      justify="center"
      align="center"
      bg="red"
      rounded="sm"
      animate={{
        opacity: [0, 1, 0],
        transition: {
          duration: 1,
          ease: 'easeInOut',
          times: [0, 0.5, 1],
          loop: Infinity,
          repeatDelay: 1,
        },
      }}
    >
      <Text
        color="white"
        fontWeight="semibold"
        fontSize={{ base: '8px', lg: '12px' }}
      >
        En vivo
      </Text>
    </MotionFlex>
  )
}
