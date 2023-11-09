import { HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Car from './Car'

function MyCars({ cars }) {
	const myCars = cars.filter(({ bid }) => bid).sort((a, b) => b.bid - a.bid)
	return (
		<>
			{myCars.length > 0 && (
				<Stack w={'full'}>
					<Heading size={'sm'}>My Cars</Heading>
					{myCars.map((car) => (
						<HStack w={'full'} h={'50px'} key={car.color}>
							<Car name={car.name} color={car.color} />
							<Stack
								justify={'center'}
								h={'inherit'}
								bg={`${car.color}.100`}
								border={'2px solid red'}>
								<Text textAlign={'center'} minW={'60px'}>{`$${car.bid} M`}</Text>
							</Stack>
						</HStack>
					))}
				</Stack>
			)}
		</>
	)
}

export default MyCars
