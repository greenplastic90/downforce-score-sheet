import { HStack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import TotalDisplay from './TotalDisplay'

function Winnings({ calcTotals }) {
	const [totals, setTotals] = useState({ racing: 0, betting: 0, auction: 0, winning: 0 })

	useEffect(() => {
		const calculatedTotals = calcTotals()
		setTotals(calculatedTotals)
	}, [calcTotals])
	return (
		<VStack spacing={8}>
			<HStack justify={'c'}>
				<TotalDisplay title={'Racing Total'} total={totals.racing} />
				<Text>+</Text>
				<TotalDisplay title={'Betting Total'} total={totals.betting} />
				<Text>-</Text>
				<TotalDisplay title={'Auction Total'} total={totals.auction} red={true} />
			</HStack>
			<Text>=</Text>
			<TotalDisplay title={'Total Winnings'} total={totals.winning} />
		</VStack>
	)
}

export default Winnings
