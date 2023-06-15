import { Box, Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormHelperText, FormLabel, Heading, Input } from "@chakra-ui/react"

const LoginPage = () => {
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                marginTop:'20'
            }}>
                <Card>
                    <CardHeader>
                        <Heading>Login</Heading>
                    </CardHeader>
                    <CardBody>
                        <form>
                            <FormControl isRequired>
                                <FormLabel>
                                    Matric number
                                </FormLabel>
                                <Input
                                type='number'
                                maxLength='6'/>
                                <FormHelperText>
                                    Please login with your matric number
                                </FormHelperText>
                            </FormControl>
                            <Button type='submit' colorScheme='whatsapp'sx={{
                                my:'5',
                                w:'100',
                            }}>
                                submit
                            </Button>
                        </form>
                    </CardBody>
                    <CardFooter></CardFooter>
                </Card>
            </Box>

        </>
    )
}

export default LoginPage

