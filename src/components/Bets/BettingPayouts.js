import React from 'react'
import { Box, Text, Divider, HStack, VStack } from '@chakra-ui/react'

const splitOrdinalNumber = (number) => {
	const ordinals = { 1: 'st', 2: 'nd', 3: 'rd' }
	return { number, suffix: ordinals[number] }
}

function BettingPayouts({ payout, color }) {
	const carName = color === 'blackAlpha' ? 'black' : color
	return (
		<HStack w={'full'} p={2} border={'3px solid'} borderRadius={'lg'} bg={`${color}.500`}>
			<VStack w={'full'}>
				<HStack w={'full'} justify={'space-evenly'}>
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
				{/* {color && (
					<Text casing={'uppercase'} color={'gray.600'} fontWeight={'bold'}>
						{carName}
					</Text>
				)} */}
			</VStack>
		</HStack>
	)
}

export default BettingPayouts
