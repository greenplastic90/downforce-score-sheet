import { Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Car from './Car'
import CarsWrapper from './CarsWrapper'

function MyCars({ cars }) {
	const myCars = cars.filter(({ bid }) => bid).sort((a, b) => b.bid - a.bid)
	return (
		<>
			{myCars.length > 0 && (
				<Stack w={'full'}>
					<Heading size={'sm'}>My Cars</Heading>
					{myCars.map(({ name, color, bid }) => (
						<CarsWrapper key={color}>
							<Car name={name} color={color} />
							<Stack justify={'center'} h={'inherit'} bg={`${color}.100`} border={'2px solid red'}>
								<Text textAlign={'center'} minW={'60px'}>{`$${bid} M`}</Text>
							</Stack>
						</CarsWrapper>
					))}
				</Stack>
			)}
		</>
	)
}

export default MyCars
