import { useEffect, useState } from 'react'
import { Car } from './classes'
import { Container, VStack, useSteps } from '@chakra-ui/react'
import CustomStepper from './components/CustomStepper/CustomStepper'
import NavButtons from './components/NavButtons/NavButtons'
import Auctions from './components/Auctions/Auctions'
import Title from './components/Title/Title'
import Bets from './components/Bets/Bets'
import RacePlacement from './components/RacePlacement/RacePlacement'
import Winnings from './components/Winnings/Winnings'

const steps = [
	{ title: 'First', description: 'Auctions' },
	{ title: 'Second', description: 'Bets' },
	{ title: 'Third', description: 'Placements' },
	{ title: 'Fourth', description: 'Winnings' },
]

function App() {
	const [cars, setCars] = useState(null)
	const [bets, setBets] = useState([
		{ number: 1, title: 'BET 1', color: '', payout: { 1: 9, 2: 6, 3: 3 } },
		{ number: 2, title: 'BET 2', color: '', payout: { 1: 6, 2: 4, 3: 2 } },
		{ number: 3, title: 'BET 3', color: '', payout: { 1: 3, 2: 2, 3: 1 } },
	])
	const [placements, setPlacements] = useState([
		{ pos: 1, title: '1st', color: '', payout: 12 },
		{ pos: 2, title: '2nd', color: '', payout: 9 },
		{ pos: 3, title: '3rd', color: '', payout: 6 },
		{ pos: 4, title: '4th', color: '', payout: 4 },
		{ pos: 5, title: '5th', color: '', payout: 2 },
		{ pos: 6, title: '6th', color: '', payout: 0 },
	])
	const [activeBetIndex, setActiveBetIndex] = useState(0)

	function resetSheet() {
		setActiveStep(0)
		setActiveBetIndex(0)
		generateCars()
		setBets([
			{ number: 1, title: 'BET 1', color: '', payout: { 1: 9, 2: 6, 3: 3 } },
			{ number: 2, title: 'BET 2', color: '', payout: { 1: 6, 2: 4, 3: 2 } },
			{ number: 3, title: 'BET 3', color: '', payout: { 1: 3, 2: 2, 3: 1 } },
		])
		setPlacements([
			{ pos: 1, title: '1st', color: '', payout: 12 },
			{ pos: 2, title: '2nd', color: '', payout: 9 },
			{ pos: 3, title: '3rd', color: '', payout: 6 },
			{ pos: 4, title: '4th', color: '', payout: 4 },
			{ pos: 5, title: '5th', color: '', payout: 2 },
			{ pos: 6, title: '6th', color: '', payout: 0 },
		])
	}

	function calcTotals() {
		//* calculate auction total
		const auction = cars.reduce((acc, { bid }) => {
			return acc + bid
		}, 0)

		//* calculate racing total
		const ownedCarsColors = cars.filter(({ bid }) => bid > 0).map(({ color }) => color)
		const racing = placements.reduce(
			(acc, { color, payout }) => (ownedCarsColors.includes(color) ? acc + payout : acc),
			0
		)

		//* calculate bets
		const topThreePlacments = placements.filter(({ pos }) => pos < 4)

		const betting = bets.reduce((acc, bet) => {
			const betWinnings = topThreePlacments.reduce((acc, placment) => {
				return bet.color === placment.color && placment.color ? acc + bet.payout[placment.pos] : acc
			}, 0)

			return acc + betWinnings
		}, 0)

		// calculate total winnings
		const winning = racing + betting - auction

		return { auction, racing, betting, winning }
	}

	const { activeStep, setActiveStep } = useSteps({
		index: 0,
		count: steps.length,
	})

	function updateCarBid(carColor, newBid) {
		// bids can't be over 6
		const bid = isNaN(newBid) ? 0 : newBid > 6 ? 6 : newBid
		setCars((prevCars) => {
			return prevCars.map((car) => {
				if (car.color === carColor) {
					return { ...car, bid: bid }
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

	function generateCars() {
		const carNames = ['black', 'blue', 'green', 'yellow', 'orange', 'red']

		const carObjs = carNames.map((name) => new Car(name))
		setCars(carObjs)
	}

	useEffect(() => {
		generateCars()
	}, [])

	function renderComp() {
		switch (activeStep) {
			case 0:
				return <Auctions cars={cars} onBidChange={updateCarBid} />
			case 1:
				return (
					<Bets
						bets={bets}
						onBetColorChange={handleBetColorChange}
						cars={cars}
						activeBetIndex={activeBetIndex}
						setActiveBetIndex={setActiveBetIndex}
					/>
				)
			case 2:
				return (
					<RacePlacement
						placements={placements}
						onPlacementColorChange={handlePlacementChange}
						cars={cars}
					/>
				)
			case 3:
				return <Winnings calcTotals={calcTotals} />
			default:
				return null
		}
	}

	return (
		<>
			{cars && (
				<Container>
					<VStack p={8} spacing={8} minH={'100vh'} justify={'space-between'}>
						<VStack w={'full'} spacing={8}>
							<Title />
							<CustomStepper steps={steps} activeStep={activeStep} />
						</VStack>
						{renderComp()}
						<NavButtons
							activeStep={activeStep}
							stepForward={stepForward}
							stepBack={stepBack}
							disableBack={activeStep <= 0}
							disableForward={activeStep >= steps.length - 1}
							resetSheet={resetSheet}
						/>
					</VStack>
				</Container>
			)}
		</>
	)
}

export default App
