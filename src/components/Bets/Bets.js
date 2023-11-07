import { Box, HStack, Heading, Select, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { GiF1Car } from 'react-icons/gi'
import BettingPayouts from './BettingPayouts'
import Car from '../miscellaneous/Car'

function Bets({ bets, onBetColorChange, cars }) {
	const myCars = cars.filter(({ bid }) => bid)
	return (
		<VStack w={'full'} spacing={8}>
			<Stack w={'full'}>
				<Heading size={'sm'}>My Cars</Heading>
				{myCars.map((car) => (
					<HStack w={'full'} h={'50px'} p={2} key={car.color}>
						<Car name={car.name} color={car.color} />
						<Stack
							justify={'center'}
							h={'inherit'}
							bg={`${car.color}.100`}
							border={'2px solid red'}>
							<Text
								textAlign={'center'}
								minW={'50px'}
								fontSize={'xl'}
								fontWeight={'bold'}
								fontStyle={'italic'}>{`${car.bid} M`}</Text>
						</Stack>
					</HStack>
				))}
			</Stack>
			{bets.map((bet) => (
				<VStack w={'full'} key={bet.title}>
					<Heading fontStyle={'italic'} color={`${bet.color}.500`}>
						{bet.title}
					</Heading>
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
