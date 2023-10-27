import { useEffect, useState } from 'react'
import { Car } from './classes'
import { Button, HStack, VStack, useSteps } from '@chakra-ui/react'
import CustomStepper from './components/CustomStepper/CustomStepper'

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

	function stepForward() {
		setActiveStep(activeStep + 1)
	}
	function stepBack() {
		setActiveStep(activeStep - 1)
	}

	useEffect(() => {
		const carColors = ['black', 'blue', 'green', 'orange', 'red', 'yellow']

		const carObjs = carColors.map((color) => new Car(color))
		setCars(carObjs)
	}, [])

	return (
		<>
			{cars && (
				<VStack p={8}>
					<CustomStepper steps={steps} activeStep={activeStep} />
					<HStack>
						<Button onClick={stepBack} isDisabled={activeStep <= 0}>
							⬅️
						</Button>
						<Button onClick={stepForward} isDisabled={activeStep >= steps.length - 1}>
							➡️
						</Button>
					</HStack>
				</VStack>
			)}
		</>
	)
}

export default App
