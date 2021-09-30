import { VStack, Text } from '@chakra-ui/react'
import Image from 'next/image'
const Loading = () => {
  return (
    <VStack w="full" h="100vh" justify="center" align="center">
      <Text fontWeight="black">CARGANDO...</Text>
      <Image
        src="/images/record.gif"
        width="100"
        height="100"
        alt="Spinning loading record."
      />
    </VStack>
  )
}

export default Loading
