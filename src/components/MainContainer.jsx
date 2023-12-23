
import { Container } from "@chakra-ui/react"

export const MainContainer =({children})=>{
	return(
		<Container as ='div' maxW='container.xl' p={[2, 4, 6, 8]}>
			{children}
		</Container>

	)
}