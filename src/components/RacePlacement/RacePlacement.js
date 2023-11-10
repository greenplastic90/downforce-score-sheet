import { VStack, Select, HStack, Text, Stack, Button } from '@chakra-ui/react'
import React from 'react'
import Car from '../miscellaneous/Car'
import CarsWrapper from '../miscellaneous/CarsWrapper'

function RacePlacement({ placements, onPlacementColorChange, cars }) {
	function findCarbyColor(color) {
		return cars.find((car) => car.color === color)
	}

	function getAvailableCars(currentColor) {
		const selectedColors = placements.map((p) => p.color)
		return cars.filter((car) => !selectedColors.includes(car.color) || car.color === currentColor)
	}

	// Function to reset all colors
	function resetAllColors() {
		placements.forEach((placement) => onPlacementColorChange(placement.title, ''))
	}

	return (
		<Stack w={'full'} spacing={4}>
			{placements.map((placement) => {
				const availableCars = getAvailableCars(placement.color)

				return (
					<Stack w={'full'} key={placement.title}>
						<HStack>
							<Text textAlign={'center'} minW={'60px'}>
								{placement.title}
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

			<Button colorScheme='red' onClick={resetAllColors} borderRadius={'none'}>
				Reset Placements
			</Button>
		</Stack>
	)
}

export default RacePlacement
