import { extendTheme } from '@chakra-ui/react'

const colors = {
	default: 'gray.600',
}

const fonts = {}

const components = {
	Heading: {
		baseStyle: {
			color: `${colors.default}`,
			textTransform: 'uppercase',
			fontWeight: 'bold',
			fontStyle: 'italic',
			fontSize: 'xl',
		},
	},
	Text: {
		baseStyle: {
			color: `${colors.default}`,
			textTransform: 'uppercase',
			fontWeight: 'bold',
			fontStyle: 'italic',
			fontSize: 'xl',
		},
	},
	Button: {
		baseStyle: {
			fontWeight: 'bold',
			fontStyle: 'italic',
			borderRadius: 'none',
			width: '100%',
		},
	},
}

const theme = extendTheme({
	colors,
	fonts,
	components,
})

export default theme
