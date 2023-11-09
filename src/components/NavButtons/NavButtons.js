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
			{console.log(activeStep)}
			{activeStep === 3 && (
				<Button colorScheme='orange' onClick={resetSheet} borderRadius={'none'}>
					Reset
				</Button>
			)}
			<HStack w={'full'}>
				<Button
					w={'full'}
					onClick={stepBack}
					isDisabled={disableBack}
					colorScheme={'blackAlpha'}
					borderRadius={'none'}>
					<MdArrowBack size={30} />
				</Button>
				<Button
					w={'full'}
					onClick={stepForward}
					isDisabled={disableForward}
					colorScheme={'blackAlpha'}
					borderRadius={'none'}>
					<MdArrowForward size={30} />
				</Button>
			</HStack>
		</VStack>
	)
}

export default NavButtons
