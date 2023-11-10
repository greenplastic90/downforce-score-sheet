import React, { useEffect, useState } from 'react'
import { Heading, Select, VStack } from '@chakra-ui/react'
import BettingPayouts from './BettingPayouts'
import MyCars from '../miscellaneous/MyCars'
import BetDisplay from './BetDisplay'

function Bets({ bets, onBetColorChange, cars, activeBetIndex, setActiveBetIndex }) {
	const handleColorChange = (title, newColor) => {
		onBetColorChange(title, newColor)

		// Automatically move to the next bet when a color is selected
		const betIndex = bets.findIndex((bet) => bet.title === title)
		if (betIndex === bets.length - 1) {
			// If it's the last bet, do not show any more bets.
			setActiveBetIndex(bets.length)
		} else if (betIndex >= 0 && betIndex < bets.length - 1) {
			// Move to the next bet
			setActiveBetIndex(betIndex + 1)
		}
	}

	return (
		<VStack w={'full'} spacing={8}>
			<MyCars cars={cars} />
			<BetDisplay bets={bets} />

			{bets.map(({ number, color, title, payout }, betIndex) => (
				<React.Fragment key={number}>
					{activeBetIndex === betIndex && (
						<VStack w={'full'}>
							<Heading>{title}</Heading>
							<BettingPayouts payout={payout} color={color} />
							<Select
								onChange={(e) => handleColorChange(title, e.target.value)}
								value={color}
								placeholder='Select Car'
								colorScheme={'gray'}
								border={'3px solid'}
								borderColor={'gray.600'}>
								{cars.map((car) => (
									<option key={car.name} value={car.color}>
										{car.name.toUpperCase()}
									</option>
								))}
							</Select>
						</VStack>
					)}
				</React.Fragment>
			))}

			{activeBetIndex >= bets.length && <Heading>All bets are set!</Heading>}
		</VStack>
	)
}

export default Bets
