import { HStack, Stack, Text } from '@chakra-ui/react'
import { GiF1Car } from 'react-icons/gi'
import React from 'react'

function Car({ name, color }) {
	return (
		<HStack w={'inherit'} h={'inherit'} bg={`${color}.100`} px={2}>
			<HStack>
				<Stack color={`${color}.600`}>
					<GiF1Car size={80} />
				</Stack>
				<Text
					casing={'uppercase'}
					color={'gray.600'}
					fontSize={'xl'}
					fontWeight={'bold'}
					fontStyle={'italic'}>
					{name}
				</Text>
			</HStack>
		</HStack>
	)
}

export default Car
