import { HStack } from '@chakra-ui/react'
import React from 'react'

function CarsWrapper({ children }) {
	return (
		<HStack w={'full'} h={'50px'}>
			{children}
		</HStack>
	)
}

export default CarsWrapper
