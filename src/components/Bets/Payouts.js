import React from 'react'
import { Box, Text, HStack, VStack, Heading } from '@chakra-ui/react'

const splitOrdinalNumber = (number) => {
  const ordinals = { 1: 'st', 2: 'nd', 3: 'rd', 4: 'th', 5: 'th', 6: 'th' }
  return { number, suffix: ordinals[number] }
}

function Payouts({ payout, small = false }) {
  return (
    <HStack w={'full'} p={2} border={'3px solid'} borderColor={'gray.600'} borderRadius={'lg'}>
      <VStack w={'full'}>
        <Heading size={'sm'}>Payouts</Heading>
        <HStack w={'full'} justify={'space-evenly'}>
          {Object.entries(payout).map(([position, amount]) => {
            const { number, suffix } = splitOrdinalNumber(position)
            return (
              <Box key={position} textAlign='center'>
                <Text fontSize={small ? 'sm' : 'md'}>
                  {number}
                  <Text as='sup' fontSize={small ? '10px' : 'sm'}>
                    {suffix}
                  </Text>
                </Text>
                <Text fontSize={small ? 'xs' : 'md'}>${amount} M</Text>
              </Box>
            )
          })}
        </HStack>
      </VStack>
    </HStack>
  )
}

export default Payouts
