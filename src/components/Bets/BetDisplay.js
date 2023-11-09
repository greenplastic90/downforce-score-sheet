import { Heading, Text, Stack } from '@chakra-ui/react'
import React from 'react'
import Car from '../miscellaneous/Car'
import CarsWrapper from '../miscellaneous/CarsWrapper'

function BetDisplay({ bets }) {
	function betWasMade() {
		return bets.some(({ color }) => color)
	}
	return (
		<>
			{betWasMade() && (
				<Stack w={'full'}>
					<Heading size={'sm'}>My Bets</Heading>
					{bets.map(({ number, title, color }) => (
						<React.Fragment key={number}>
							{color && (
								<CarsWrapper>
									<Car name={color === 'blackAlpha' ? 'black' : color} color={color} />
									<Stack justify={'center'} h={'inherit'} bg={`${color}.100`}>
										<Text textAlign={'center'} minW={'60px'}>
											{title}
										</Text>
									</Stack>
								</CarsWrapper>
							)}
						</React.Fragment>
					))}
				</Stack>
			)}
		</>
	)
}

export default BetDisplay
