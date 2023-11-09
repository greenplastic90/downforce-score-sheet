import { Heading, Select, VStack } from '@chakra-ui/react'
import React from 'react'
import BettingPayouts from './BettingPayouts'
import MyCars from '../miscellaneous/MyCars'

function Bets({ bets, onBetColorChange, cars }) {
	return (
		<VStack w={'full'} spacing={8}>
			<MyCars cars={cars} />
			{bets.map((bet) => (
				<VStack w={'full'} key={bet.title}>
					<Heading>{bet.title}</Heading>
					<BettingPayouts payout={bet.payout} color={bet.color} />
					<Select
						onChange={(e) => onBetColorChange(bet.title, e.target.value)}
						value={bet.color}
						placeholder='Select Car'
						color={bet.color}
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
								{car.name}
							</option>
						))}
					</Select>
				</VStack>
			))}
		</VStack>
	)
}

export default Bets
