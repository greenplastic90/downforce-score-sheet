import { Heading, Select, VStack } from '@chakra-ui/react'
import React from 'react'
import BettingPayouts from './BettingPayouts'
import MyCars from '../miscellaneous/MyCars'
import BetDisplay from './BetDisplay'

function Bets({ bets, onBetColorChange, cars }) {
	return (
		<VStack w={'full'} spacing={8}>
			<MyCars cars={cars} />
			<BetDisplay bets={bets} />

			{bets.map((bet) => (
				<VStack w={'full'} key={bet.title}>
					<Heading>{bet.title}</Heading>
					<BettingPayouts payout={bet.payout} color={bet.color} />
					<Select
						onChange={(e) => onBetColorChange(bet.title, e.target.value)}
						value={bet.color}
						placeholder='Select Car'
						colorScheme={'gray'}
						borderColor={'gray.500'}>
						{cars.map((car) => (
							<option key={car.color} value={car.color}>
								{car.name.toUpperCase()}
							</option>
						))}
					</Select>
				</VStack>
			))}
		</VStack>
	)
}

export default Bets
