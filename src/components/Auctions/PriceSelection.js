import { HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function PriceSelection({ color, handleValueChange }) {
  return (
    <HStack wrap={'wrap'} justify={'center'}>
      {[0, 1, 2, 3, 4, 5, 6].map((value) => (
        <VStack
          key={value}
          onClick={() => handleValueChange(value)}
          cursor={'pointer'}
          bgColor={`${color}.200`}
          align={'center'}
          justify={'center'}
          border={'2px solid'}
          borderColor={`${color}.600`}
          p={2}
          // w={'60px'}
          // h={'60px'}
        >
          <Text>{`$${value} M`}</Text>
        </VStack>
      ))}
    </HStack>
  )
}

export default PriceSelection
