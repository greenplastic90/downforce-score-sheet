import { useEffect, useState } from 'react'
import { Car } from './classes'
import { Button, HStack, VStack, useSteps } from '@chakra-ui/react'
import CustomStepper from './components/CustomStepper/CustomStepper'
import NavButtons from './components/NavButtons/NavButtons'
import Auctions from './components/Auctions/Auctions'
import Title from './components/Title/Title'
import Bets from './components/Bets/Bets'

const steps = [
	{ title: 'First', description: 'Auctions' },
	{ title: 'Second', description: 'Bets' },
	{ title: 'Third', description: 'Race Placment' },
	{ title: 'Fourth', description: 'Score' },
]

function App() {
	const [cars, setCars] = useState(null)

	const { activeStep, setActiveStep } = useSteps({
		index: 0,
		count: steps.length,
	})

	function updateCarBid(carColor, newBid) {
		setCars((prevCars) => {
			return prevCars.map((car) => {
				if (car.color === carColor) {
					return { ...car, bid: newBid }
				}
				return car
			})
		})
	}

	function stepForward() {
		setActiveStep(activeStep + 1)
	}
	function stepBack() {
		setActiveStep(activeStep - 1)
	}

	useEffect(() => {
		const carColors = ['blackAlpha', 'blue', 'green', 'orange', 'red', 'yellow']

		const carObjs = carColors.map((color) => new Car(color))
		setCars(carObjs)
	}, [])

	function renderComp() {
		switch (activeStep) {
			case 0:
				return <Auctions cars={cars} onBidChange={updateCarBid} />
			case 1:
				return <Bets />
			// case 2:
			// 	return <RacePlacement /> // Assume you have a RacePlacement component
			// case 3:
			// 	return <Score /> // Assume you have a Score component
			default:
				return null
		}
	}

	return (
		<>
			{cars && (
				<VStack p={8} spacing={8} minH={'100vh'} justify={'space-between'}>
					<VStack w={'full'} spacing={8}>
						<Title />
						<CustomStepper steps={steps} activeStep={activeStep} />
					</VStack>
					{renderComp()}
					<NavButtons
						stepForward={stepForward}
						stepBack={stepBack}
						disableBack={activeStep <= 0}
						disableForward={activeStep >= steps.length - 1}
					/>
				</VStack>
			)}
		</>
	)
}

export default App
