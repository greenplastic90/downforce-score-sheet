import { HStack, NumberInput, NumberInputField, Stack } from '@chakra-ui/react'
import React from 'react'
import { GiF1Car } from 'react-icons/gi'

function BidInput({ car, onBidChange }) {
	function handleValueChange(valueAsString, valueAsNumber) {
		onBidChange(car.color, valueAsNumber)
	}
	return (
		<HStack>
			<Stack color={`${car.color}.500`}>
				<GiF1Car size={70} />
			</Stack>
			<NumberInput
				onChange={handleValueChange}
				value={car.bid}
				w={'full'}
				defaultValue={0}
				max={6}
				min={0}
				keepWithinRange={false}
				clampValueOnBlur={false}>
				<NumberInputField
					borderColor={`${car.color}.500`}
					color={`${car.color}.500`}
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
