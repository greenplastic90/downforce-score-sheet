import { useEffect, useState } from 'react'
import { Car } from './classes'
import { VStack, useSteps } from '@chakra-ui/react'
import CustomStepper from './components/CustomStepper/CustomStepper'
import NavButtons from './components/NavButtons/NavButtons'
import Auctions from './components/Auctions/Auctions'
import Title from './components/Title/Title'
import Bets from './components/Bets/Bets'
import RacePlacement from './components/RacePlacement/RacePlacement'

const steps = [
	{ title: 'First', description: 'Auctions' },
	{ title: 'Second', description: 'Bets' },
	{ title: 'Third', description: 'Race Placment' },
	{ title: 'Fourth', description: 'Score' },
]
const bettingPayouts = {
	1: { 1: 9, 2: 6, 3: 3 },
	2: { 1: 6, 2: 4, 3: 2 },
	3: { 1: 3, 2: 2, 3: 1 },
}

function App() {
	const [cars, setCars] = useState(null)
	const [bets, setBets] = useState([
		{ title: 'BET 1', color: '' },
		{ title: 'BET 2', color: '' },
		{ title: 'BET 3', color: '' },
	])
	const [placements, setPlacements] = useState([
		{ title: '1st', color: '' },
		{ title: '2nd', color: '' },
		{ title: '3rd', color: '' },
		{ title: '4th', color: '' },
		{ title: '5th', color: '' },
		{ title: '6th', color: '' },
	])

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
	function handleBetColorChange(betTitle, selectedColor) {
		setBets((prevBets) =>
			prevBets.map((bet) => (bet.title === betTitle ? { ...bet, color: selectedColor } : bet))
		)
	}
	function handlePlacementChange(placementTitle, selectedColor) {
		setPlacements((prevPlacements) =>
			prevPlacements.map((placement) =>
				placement.title === placementTitle ? { ...placement, color: selectedColor } : placement
			)
		)
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
				return <Bets bets={bets} onBetColorChange={handleBetColorChange} cars={cars} />
			case 2:
				return (
					<RacePlacement
						placements={placements}
						onPlacementColorChange={handlePlacementChange}
						cars={cars}
					/>
				)

			// 	return <Score /> // Assume you have a Score component
			default:
				return null
		}
	}

	return (
		<>
			{cars && (
				<VStack bg={'gray.300'} p={8} spacing={8} minH={'100vh'} justify={'space-between'}>
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
