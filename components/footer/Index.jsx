import { Flex, Text, Link } from '@chakra-ui/react'
import { AiOutlineCoffee } from 'react-icons/ai'
const Index = () => {
  return (
    <Flex
      position="fixed"
      px={{ base: '5', lg: '96' }}
      py="2"
      w="full"
      minH="10"
      zIndex="10"
      transition=".4s all"
      bottom="0"
    >
      <Flex w="full" color="white" px="2" align="center" justify="space-around">
        <Text
          fontSize={{ base: '10px', sm: '14px' }}
          w={{ base: '70%', sm: '100%' }}
        >
          {'Si disfrutas el stream considera invitarnos a un café :)'}
        </Text>
        <Link href="https://ko-fi.com/amilkar" target="_blank">
          <AiOutlineCoffee />
        </Link>
      </Flex>
    </Flex>
  )
}

export default Index
