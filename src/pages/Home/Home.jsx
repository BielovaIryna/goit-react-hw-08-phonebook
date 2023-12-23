import { MainContainer } from "components/MainContainer"

const { Heading } = require("@chakra-ui/react")

 const Home =()=>{
	return (
		<MainContainer>
		<Heading as = "h1" size='3xl' textTransform='uppercase' textAlign='center'>Your phonebook is waiting for you</Heading>
		</MainContainer>
	)
 }
 export default Home