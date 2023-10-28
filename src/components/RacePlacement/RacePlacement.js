import { VStack, Select, HStack, Heading } from '@chakra-ui/react'
import React from 'react'

function RacePlacement({ placements, onPlacementColorChange, cars }) {
	return (
		<VStack w={'full'} spacing={4}>
			{placements.map((placement) => (
				<HStack w={'full'} key={placement.title}>
					<Heading color={`${placement.color}.500`}>{placement.title}</Heading>
					<Select
						onChange={(e) => onPlacementColorChange(placement.title, e.target.value)}
						placeholder='Select Car'
						color={placement.color}
						borderColor={placement.color}
						_focus={{
							borderColor: placement.color,
							boxShadow: `0 0 0 1px ${placement.color}`,
						}}
						_hover={{
							borderColor: placement.color,
						}}>
						{cars.map((car) => (
							<option key={car.color} value={car.color} style={{ color: `${placement.color}.500` }}>
								{car.color === 'blackAlpha' ? 'black' : car.color}
							</option>
						))}
					</Select>
				</HStack>
			))}
		</VStack>
	)
}

export default RacePlacement
