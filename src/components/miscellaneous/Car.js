import { HStack, Stack, Text } from '@chakra-ui/react'
import { GiF1Car } from 'react-icons/gi'
import React from 'react'

function Car({ name, color }) {
	return (
		<HStack w={'inherit'} h={'inherit'} bg={`${color}.200`} px={2}>
			<HStack>
				<Stack color={`${color}.600`}>
					<GiF1Car size={80} />
				</Stack>
				<Text>{name}</Text>
			</HStack>
		</HStack>
	)
}

export default Car
