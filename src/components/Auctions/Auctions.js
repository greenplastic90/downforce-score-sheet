import { VStack } from '@chakra-ui/react'
import React from 'react'
import BidInput from './BidInput'
import Payouts from '../Bets/Payouts'

const paypout = { 1: 12, 2: 9, 3: 6, 4: 4, 5: 2, 6: 0 }

function Auctions({ cars, onBidChange }) {
  return (
    <VStack w={'full'}>
      <Payouts payout={paypout} small={true} />
      {cars.map((car) => (
        <BidInput key={car.color} car={car} onBidChange={onBidChange} />
      ))}
    </VStack>
  )
}

export default Auctions
