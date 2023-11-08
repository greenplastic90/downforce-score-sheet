import { extendTheme } from '@chakra-ui/react'

const colors = {}

const fonts = {}

const components = {
	Heading: {
		baseStyle: {
			color: 'gray.600',
			textTransform: 'uppercase',
			fontWeight: 'bold',
			fontStyle: 'italic',
			fontSize: 'xl',
		},
	},
	Text: {
		baseStyle: {
			color: 'gray.600',
			textTransform: 'uppercase',
			fontWeight: 'bold',
			fontStyle: 'italic',
			fontSize: 'xl',
		},
	},
}

const theme = extendTheme({
	colors,
	fonts,
	components,
})

export default theme
