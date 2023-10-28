import { Heading, Select, VStack } from '@chakra-ui/react'
import React from 'react'

function Bets({ bets, onBetColorChange, cars }) {
	return (
		<VStack w={'full'} spacing={4}>
			{bets.map((bet) => (
				<VStack w={'full'} key={bet.title}>
					<Heading color={`${bet.color}.500`}>{bet.title}</Heading>
					<Select
						onChange={(e) => onBetColorChange(bet.title, e.target.value)}
						placeholder='Select Car'
						color={bet.color}
						// bg={bet.color}
						colorScheme={bet.color}
						borderColor={bet.color}
						_focus={{
							borderColor: bet.color,
							boxShadow: `0 0 0 1px ${bet.color}`,
						}}
						_hover={{
							borderColor: bet.color,
						}}>
						{cars.map((car) => (
							<option key={car.color} value={car.color}>
								{car.color === 'blackAlpha' ? 'black' : car.color}
							</option>
						))}
					</Select>
				</VStack>
			))}
		</VStack>
	)
}

export default Bets
