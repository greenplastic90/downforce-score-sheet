import React from 'react'
import {
	Box,
	Stack,
	Step,
	StepDescription,
	StepIcon,
	StepIndicator,
	StepNumber,
	StepSeparator,
	StepStatus,
	StepTitle,
	Stepper,
	Text,
} from '@chakra-ui/react'

function CustomStepper({ steps, activeStep }) {
	const activeStepText = steps[activeStep].description
	return (
		<Stack w={'full'}>
			<Stepper size='sm' index={activeStep} gap='0'>
				{steps.map((step, index) => (
					<Step key={index} gap='0'>
						<StepIndicator>
							<StepStatus complete={<StepIcon />} />
						</StepIndicator>
						<StepSeparator _horizontal={{ ml: '0' }} />
					</Step>
				))}
			</Stepper>
			<Text>
				Step {activeStep + 1}: <b>{activeStepText}</b>
			</Text>
		</Stack>
	)
}

export default CustomStepper
