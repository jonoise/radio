import { useEffect, useState } from 'react'
import { MotionFlex, MotionText } from '../motion/components'
import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
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
      animate={{ x: 0, opacity: 1, transition: { type: 'spring' } }}
      color="white"
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
      h="30px"
      justify="center"
      align="center"
      ml="-10"
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
      <Image
        src="/images/live.svg"
        alt="We Are Live"
        width="50px"
        height="20px"
      />
    </MotionFlex>
  )
}
