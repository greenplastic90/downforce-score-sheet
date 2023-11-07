import { HStack, NumberInput, NumberInputField, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { GiF1Car } from 'react-icons/gi'

function BidInput({ car, onBidChange }) {
	function handleValueChange(valueAsString, valueAsNumber) {
		onBidChange(car.color, valueAsNumber)
	}
	const carName = car.color === 'blackAlpha' ? 'black' : car.color
	return (
		<HStack h={'40px'}>
			<HStack h={'inherit'} bg={`${car.color}.100`} px={2}>
				<HStack minW={'150px'}>
					<Stack color={`${car.color}.600`}>
						<GiF1Car size={50} />
					</Stack>
					<Text casing={'uppercase'} color={'gray.600'} fontWeight={'bold'} fontStyle={'italic'}>
						{carName}
					</Text>
				</HStack>
			</HStack>
			<NumberInput
				h={'inherit'}
				onChange={handleValueChange}
				value={car.bid}
				defaultValue={0}
				max={6}
				min={0}
				keepWithinRange={false}
				clampValueOnBlur={false}>
				<NumberInputField
					textAlign={'center'}
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
