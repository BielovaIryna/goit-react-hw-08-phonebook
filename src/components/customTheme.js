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

			}),
			  variants: {
				custom: ({ colorMode }) => ({
				  bg: colorMode === "dark" ? "blue.200" : "blue.500",
				  padding: "8px"
				})
			  }
			},

			Input:{
				baseStyle: ({ colorMode }) => ({
					bg: colorMode === "dark" ? "pink.700" : "pink.100",
					color: colorMode === "dark" ? "white" : "pink.900",
					textTransform: "uppercase",
					size:'md'
	
				}),
				  variants: {
					custom: ({ colorMode }) => ({
					  bg: colorMode === "dark" ? "blue.200" : "blue.500",
					  padding: "8px"
					})
				  }
				},
			
		
}


export const customTheme =extendTheme({
	config,
	components
})
