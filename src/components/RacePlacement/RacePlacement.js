import { Select, HStack, Text, Stack, Button } from '@chakra-ui/react'
import React from 'react'
import Car from '../miscellaneous/Car'
import CarsWrapper from '../miscellaneous/CarsWrapper'

function RacePlacement({ placements, onPlacementColorChange, cars }) {
	// Function to find a car by its color
	function findCarbyColor(color) {
		return cars.find((car) => car.color === color)
	}

	function getAvailableCars(currentColor) {
		const selectedColors = placements.map((p) => p.color)
		return cars.filter((car) => !selectedColors.includes(car.color) || car.color === currentColor)
	}

	function resetAllColors() {
		placements.forEach((placement) => onPlacementColorChange(placement.title, ''))
	}

	// Function to split number and suffix
	function splitNumberAndSuffix(pos) {
		const suffixes = ['th', 'st', 'nd', 'rd']
		const v = pos % 100
		const suffix = suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]
		return { number: pos, suffix }
	}

	return (
		<Stack w={'full'} spacing={4}>
			{placements.map((placement) => {
				const availableCars = getAvailableCars(placement.color)
				const { number, suffix } = splitNumberAndSuffix(placement.pos)

				return (
					<Stack w={'full'} key={placement.title}>
						<HStack>
							<Text>
								{number}
								<Text as='sup' fontSize='sm' fontWeight='bold'>
									{suffix}
								</Text>
							</Text>
							{placement.color ? (
								<CarsWrapper>
									<Car name={findCarbyColor(placement.color)?.name} color={placement.color} />
								</CarsWrapper>
							) : (
								<Select
									onChange={(e) => onPlacementColorChange(placement.title, e.target.value)}
									value={placement.color}
									placeholder='Select Car'
									colorScheme={'gray'}
									border={'3px solid'}
									borderColor={'gray.600'}>
									{availableCars.map((car) => (
										<option key={car.color} value={car.color}>
											{car.name.toUpperCase()}
										</option>
									))}
								</Select>
							)}
						</HStack>
					</Stack>
				)
			})}

			<Button colorScheme='orange' onClick={resetAllColors}>
				Reset Placements
			</Button>
		</Stack>
	)
}

export default RacePlacement
