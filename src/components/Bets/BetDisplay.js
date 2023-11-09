import { HStack, Heading, Text, Stack } from '@chakra-ui/react'
import React from 'react'
import Car from '../miscellaneous/Car'
import CarsWrapper from '../miscellaneous/CarsWrapper'

function BetDisplay({ bets }) {
	return (
		<Stack w={'full'}>
			<Heading size={'sm'}>My Bets</Heading>
			{bets.map(({ number, title, color }) => (
				<>
					{color && (
						<CarsWrapper key={number}>
							<Car name={color === 'blackAlpha' ? 'black' : color} color={color} />
							<Stack justify={'center'} h={'inherit'} bg={`${color}.100`}>
								<Text textAlign={'center'} minW={'60px'}>
									{title}
								</Text>
							</Stack>
						</CarsWrapper>
					)}
				</>
			))}
		</Stack>
	)
}

export default BetDisplay
