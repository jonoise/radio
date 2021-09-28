import { Flex, Text, Button, VStack } from '@chakra-ui/react'
import useDelay from '../hooks/useDelay'
import { motion } from 'framer-motion'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Index'
import Head from 'next/head'
import { useRef } from 'react'
const MotionFlex = motion(Flex)
export default function Home() {
  const delay = useDelay(2000)
  const innerColor = '151c49'
  const outerColor = '000001'
  const streamRef = useRef()
  const playStream = () => {
    streamRef.current.volume = 0.2
    streamRef.current.play()
  }
  return (
    <>
      <Head>
        <title>Radio One</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {delay ? (
        'Loading...'
      ) : (
        <>
          <Navbar />
          <MotionFlex
            w="full"
            h="100vh"
            bg="blue"
            justify="center"
            align="center"
            overflow="hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <VStack
              position="absolute"
              justify="center"
              align="center"
              w="full"
              h="100vh"
              zIndex="6"
              opacity=".9"
              bgGradient={`radial(#${innerColor} 0%, #${outerColor} 90%)`}
            >
              <Text color="#fee" fontFamily="Orbitron" fontWeight="900">
                Estamos en vivo
              </Text>
              <Button onClick={playStream}>Escuchar</Button>
            </VStack>
            <Flex position="absolute" w="full" h="100vh" zIndex="5"></Flex>
            <video className="videoStyle" autoPlay="autoplay" loop="loop" muted>
              <source src="/video/waves.mp4" />
            </video>
            <audio ref={streamRef} src="https://lfhh.radioca.st/stream"></audio>
          </MotionFlex>
          <Footer />
        </>
      )}
    </>
  )
}
