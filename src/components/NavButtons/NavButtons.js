import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

function NavButtons({ stepForward, stepBack, disableForward, disableBack }) {
	return (
		<HStack width={'full'}>
			<Button w={'full'} onClick={stepBack} isDisabled={disableBack} colorScheme={'blue'}>
				<MdArrowBack />
			</Button>
			<Button w={'full'} onClick={stepForward} isDisabled={disableForward} colorScheme={'blue'}>
				<MdArrowForward />
			</Button>
		</HStack>
	)
}

export default NavButtons
