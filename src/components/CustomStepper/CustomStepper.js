import React from 'react'
import {
	Heading,
	Step,
	StepIcon,
	StepIndicator,
	StepSeparator,
	StepStatus,
	Stepper,
	VStack,
} from '@chakra-ui/react'

function CustomStepper({ steps, activeStep }) {
	const activeStepText = steps[activeStep].description
	return (
		<VStack w={'full'}>
			<Stepper w={'full'} size='sm' colorScheme='gray' index={activeStep} gap='0'>
				{steps.map((step, index) => (
					<Step key={index} gap='0'>
						<StepIndicator>
							<StepStatus complete={<StepIcon />} />
						</StepIndicator>
						<StepSeparator _horizontal={{ ml: '0' }} />
					</Step>
				))}
			</Stepper>
			<Heading>
				Step {activeStep + 1}: <b>{activeStepText}</b>
			</Heading>
		</VStack>
	)
}

export default CustomStepper
