import { HStack, NumberInput, NumberInputField } from '@chakra-ui/react'
import React from 'react'
import Car from '../miscellaneous/Car'

function BidInput({ car, onBidChange }) {
	function handleValueChange(valueAsString, valueAsNumber) {
		onBidChange(car.color, valueAsNumber)
	}
	const carName = car.color === 'blackAlpha' ? 'black' : car.color
	return (
		<HStack w={'full'} h={'50px'}>
			<Car name={carName} color={car.color} />
			<NumberInput
				h={'inherit'}
				maxW={'80px'}
				onChange={handleValueChange}
				value={car.bid}
				defaultValue={0}
				max={6}
				min={0}
				keepWithinRange={false}
				clampValueOnBlur={false}>
				<NumberInputField
					h={'inherit'}
					textAlign={'end'}
					fontWeight={'bold'}
					border={'2px solid'}
					borderRadius={'none'}
					bg={`${car.color}.100`}
					borderColor={'red.600'}
					_focus={{
						borderColor: `${car.color}.700`,
						boxShadow: `0 0 0 1px ${car.color}.700`,
					}}
					_hover={{
						borderColor: `${car.color}.600`,
					}}
				/>
			</NumberInput>
		</HStack>
	)
}

export default BidInput
