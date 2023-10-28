import { Box, HStack, Heading, Select, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { GiF1Car } from 'react-icons/gi'

function Bets({ bets, onBetColorChange, cars }) {
	const myCars = cars.filter(({ bid }) => bid)
	return (
		<VStack w={'full'} spacing={4}>
			<VStack>
				<Heading size={'sm'}>My Cars</Heading>
				{myCars.map((car) => (
					<HStack key={car.color}>
						<Box color={`${car.color}.500`}>
							<GiF1Car size={50} />
						</Box>
						<Text color={`${car.color}.500`}>{`${car.bid} M`}</Text>
					</HStack>
				))}
			</VStack>
			{bets.map((bet) => (
				<VStack w={'full'} key={bet.title}>
					<Heading color={`${bet.color}.500`}>{bet.title}</Heading>
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
