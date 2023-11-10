import React from 'react'
import { Box, Text, HStack, VStack } from '@chakra-ui/react'

const splitOrdinalNumber = (number) => {
	const ordinals = { 1: 'st', 2: 'nd', 3: 'rd' }
	return { number, suffix: ordinals[number] }
}

function BettingPayouts({ payout }) {
	return (
		<HStack w={'full'} p={2} border={'3px solid'} borderColor={'gray.600'} borderRadius={'lg'}>
			<VStack w={'full'}>
				<HStack w={'full'} justify={'space-evenly'}>
					{Object.entries(payout).map(([position, amount]) => {
						const { number, suffix } = splitOrdinalNumber(position)
						return (
							<Box key={position} textAlign='center'>
								<Text>
									{number}
									<Text as='sup' fontSize='sm'>
										{suffix}
									</Text>
								</Text>
								<Text>${amount} M</Text>
							</Box>
						)
					})}
				</HStack>
			</VStack>
		</HStack>
	)
}

export default BettingPayouts
