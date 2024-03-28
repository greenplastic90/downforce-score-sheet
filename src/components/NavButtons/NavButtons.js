import { Button, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

function NavButtons({
  activeStep,
  stepForward,
  stepBack,
  disableForward,
  disableBack,
  resetSheet,
}) {
  return (
    <VStack w={'full'}>
      {activeStep === 3 && (
        <Button colorScheme='orange' onClick={resetSheet}>
          Reset Sheet
        </Button>
      )}
      <HStack w={'full'}>
        <Button onClick={stepBack} isDisabled={disableBack} colorScheme={'blackAlpha'}>
          <MdArrowBack size={30} />
        </Button>
        <Button onClick={stepForward} isDisabled={disableForward} colorScheme={'blackAlpha'}>
          <MdArrowForward size={30} />
        </Button>
      </HStack>
    </VStack>
  )
}

export default NavButtons
