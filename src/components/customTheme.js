const { extendTheme} = require("@chakra-ui/react");


const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
  }
const components ={
		Button:{
			baseStyle: ({ colorMode }) => ({
				bg: colorMode === "dark" ? "pink.700" : "pink.100",
				color: colorMode === "dark" ? "white" : "pink.900",
				textTransform: "uppercase",
				size:'md'

			})},
			IconButton: {
				baseStyle: ({ colorMode }) => ({
					bg: colorMode === "dark" ? "pink.700" : "pink.100",
					color: colorMode === "dark" ? "white" : "pink.900",
					textTransform: "uppercase",
					size:'md'
	
				})}

}


export const customTheme =extendTheme({
	config,
	components
})
