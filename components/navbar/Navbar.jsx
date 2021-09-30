import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  Collapse,
  Stack,
  Link,
} from '@chakra-ui/react'
import Image from 'next/image'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { handleQueryMessage } from './handleMessage'
import { FaTimes } from 'react-icons/fa'

const NAV_ITEMS = ['']

const Navbar = ({ streamRef }) => {
  const router = useRouter()
  const { isOpen, onToggle } = useDisclosure()

  const [message, setMessage] = useState(null)
  useEffect(() => {
    // Check query for errors
    handleQueryMessage(router.asPath, setMessage)
  }, [router.asPath, setMessage])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 70) {
        setBlackBg(true)
      } else {
        if (isOpen) {
          return
        } else {
          setBlackBg(false)
        }
      }
    })
  }, [isOpen])

  const playStream = () => {
    streamRef.current.volume = 0.2
    streamRef.current.play()
  }

  return (
    <>
      <Flex
        position="fixed"
        zIndex="10"
        minH="60px"
        direction="column"
        w="full"
        bg={isOpen ? '#f5c000' : null}
      >
        {message && (
          <DisplayMessage setMessage={setMessage}>{message}</DisplayMessage>
        )}

        <Flex
          px={{ base: '5', lg: '96' }}
          py="2"
          w="full"
          transition=".4s all"
          // bg={blackBg ? '#f5c000' : null}
        >
          <Flex justify="space-between" w="full" align="center">
            <Logo />
            {/* <Flex
              flex={{ base: 'full', lg: 'auto' }}
              ml={{ base: -2 }}
              display={{ base: 'flex', lg: 'none' }}
            >
              <IconButton
                color="white"
                onClick={onToggle}
                bg="none"
                className="disableFocus"
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                aria-label={'Toggle Navigation'}
              />
            </Flex> */}
            {/* <HStack spacing="3">
              <Menubar NAV_ITEMS={NAV_ITEMS} blackBg={blackBg} />
            </HStack> */}

            <Flex
              w="6rem"
              h="2rem"
              bg="blue.600"
              justify="center"
              align="center"
              rounded="sm"
              color="white"
              cursor="pointer"
              onClick={playStream}
            >
              <Text fontSize="12px" fontWeight="black">
                Escuchar
              </Text>
            </Flex>
            <Flex
              position="absolute"
              top="60px"
              left="0"
              w="full"
              minH="100vh"
              transition=".5s all"
              bg={'#fff2bc'}
              opacity={isOpen ? '1' : '0'}
              color="#1a1a1a"
              justify="center"
              display={isOpen ? 'block' : 'none'}
            >
              {/* <Collapse in={isOpen} animateOpacity>
                <MobileNav NAV_ITEMS={NAV_ITEMS} />
              </Collapse> */}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default Navbar

const Logo = () => {
  return (
    <Box w={{ base: '220px', lg: '350px' }} my="2">
      <Image
        src="/images/logo-radio.png"
        width="100%"
        height="15px"
        alt="Radio logo"
      />
      {/* <Image src="https://user-images.githubusercontent.com/71573508/130567876-96301de4-4511-4ffb-8c07-cac75cb8c027.png" /> */}
    </Box>
  )
}

const Menubar = ({ NAV_ITEMS }) => {
  return (
    <HStack
      fontFamily="Montserrat"
      fontWeight="700"
      spacing="12"
      fontSize="14px"
      color="white"
      display={{ base: 'none', lg: 'flex' }}
    >
      {NAV_ITEMS.map((navItem, key) => (
        <Link key={key} href={`${navItem.split(' ').join('-').toLowerCase()}`}>
          <Text>{navItem}</Text>
        </Link>
      ))}
    </HStack>
  )
}

const MobileNav = ({ NAV_ITEMS }) => {
  return (
    <Stack
      p={10}
      display={{ lg: 'none' }}
      textAlign="center"
      justify="center"
      align="center"
      fontSize="35px"
      spacing="5"
    >
      {NAV_ITEMS.map((navItem, key) => (
        <Link key={key} href={`${navItem.split(' ').join('-').toLowerCase()}`}>
          <Text>{navItem}</Text>
        </Link>
      ))}
    </Stack>
  )
}

const DisplayMessage = ({ setMessage, children }) => {
  const [showMessage, setShowMessage] = useState(false)
  const [displayMessage, setDisplayMessage] = useState(false)

  useEffect(() => {
    const showMessageTimeout = setTimeout(() => {
      setShowMessage(true)
    }, 700)
    return () => clearTimeout(showMessageTimeout)
  }, [])

  useEffect(() => {
    const displayMessage = setTimeout(() => {
      setDisplayMessage(true)
    }, 1200)
    return () => clearTimeout(displayMessage)
  }, [])

  const closeError = () => {
    setMessage(null)
  }

  return (
    <Flex
      px={{ base: '5', lg: '40' }}
      py={'0'}
      w="full"
      minH={showMessage ? '30px' : '0px'}
      transition=".5s ease"
      bg="red.300"
      justify="center"
      align="center"
    >
      <Flex
        h={displayMessage ? '30px' : '0px'}
        opacity={displayMessage ? 1 : 0}
        transition="1s all"
        w="full"
        justify="space-between"
        align="center"
        fontWeight="bold"
        color="black"
      >
        <Text>{children}</Text>
        <Flex
          color="#1a1a1a"
          display={displayMessage ? 'block' : 'none'}
          transition=".3s all"
          _hover={{ color: 'white' }}
          onClick={closeError}
          cursor="pointer"
        >
          <FaTimes />
        </Flex>
      </Flex>
    </Flex>
  )
}
