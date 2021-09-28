import { Flex } from '@chakra-ui/react'
import useDelay from '../hooks/useDelay'
import { motion } from 'framer-motion'

const MotionFlex = motion(Flex)
export default function Home() {
  const delay = useDelay(2000)
  return (
    <>
      {delay ? (
        'Loading...'
      ) : (
        <MotionFlex
          w="full"
          h="100vh"
          bg="red"
          justify="center"
          align="center"
          overflow="hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Flex
            position="absolute"
            w="full"
            h="100vh"
            zIndex="4"
            opacity=".9"
            bgGradient="radial(#151c49 0%, #000000 90%)"
          ></Flex>
          <video width="100%" autoPlay="autoplay" loop="loop" muted>
            <source src="/video/waves.mp4" />
          </video>
        </MotionFlex>
      )}
    </>
  )
}
