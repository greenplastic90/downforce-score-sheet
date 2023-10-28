import { Text, VStack } from '@chakra-ui/react'
import React from 'react'

function TotalDisplay({ title, total, red = false }) {
	return (
		<VStack p={4}>
			<VStack
				w={'full'}
				h={10}
				justify={'center'}
				border={'1px solid'}
				borderRadius={'xl'}
				borderColor={red && 'red.500'}>
				<Text color={red && 'red.500'}>{`${total} M`}</Text>
			</VStack>

			<Text color={red && 'red.500'}>{title}</Text>
		</VStack>
	)
}

export default TotalDisplay
