import {
  Button,
  HStack,
  Heading,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import Car from '../miscellaneous/Car'
import CarsWrapper from '../miscellaneous/CarsWrapper'
import PriceSelection from './PriceSelection'

function BidInput({ car, onBidChange }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  function handleValueChange(value) {
    onBidChange(car.color, value)
    onClose()
  }

  return (
    <CarsWrapper>
      <Car name={car.name} color={car.color} />
      <Button
        onClick={onOpen}
        border={car.bid ? '2px solid' : ''}
        borderColor={car.bid ? `${car.color}.600` : ''}
        variant={'buy'}
        bgColor={`${car.color}.200`}
        colorScheme={car.color}
        w={'80px'}
        h={'inherit'}>
        {car.bid ? `$${car.bid} M` : 'Buy'}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <VStack p={4}>
            <Heading>Price</Heading>
            <PriceSelection color={car.color} handleValueChange={handleValueChange} />
          </VStack>
        </ModalContent>
      </Modal>
    </CarsWrapper>
  )
}

export default BidInput
