import { VStack } from '@chakra-ui/react'
import React from 'react'
import BidInput from './BidInput'

function Auctions({ cars, onBidChange }) {
  return (
    <VStack w={'full'}>
      {cars.map((car) => (
        <BidInput key={car.color} car={car} onBidChange={onBidChange} />
      ))}
    </VStack>
  )
}

export default Auctions
