import React from 'react'
import { Box, Text, Divider, HStack } from '@chakra-ui/react'

const splitOrdinalNumber = (number) => {
	const ordinals = { 1: 'st', 2: 'nd', 3: 'rd' }
	return { number, suffix: ordinals[number] }
}

function BettingPayouts({ payout }) {
	return (
		<HStack w={'full'} justify={'space-evenly'} p={2} border={'3px solid'} borderRadius={'lg'}>
			{Object.entries(payout).map(([position, amount]) => {
				const { number, suffix } = splitOrdinalNumber(position)
				return (
					<Box key={position} textAlign='center'>
						<Text fontSize='xl' fontWeight='bold'>
							{number}
							<Text as='sup' fontSize='sm' fontWeight='bold'>
								{suffix}
							</Text>
						</Text>
						<Divider orientation='horizontal' borderWidth='2px' />
						<Text fontSize='lg' fontWeight='bold'>
							${amount} M
						</Text>
					</Box>
				)
			})}
		</HStack>
	)
}

export default BettingPayouts
