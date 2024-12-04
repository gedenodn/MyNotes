import { Card, CardBody, CardFooter, CardHeader, Divider, Heading, Text } from '@chakra-ui/react'


export default function Note({}) {
    return (
        <Card variant="filled">
        <CardHeader>
          <Heading size="md">note</Heading>
        </CardHeader>
        <Divider borderColor={"gray"}/>
        <CardBody>
          <Text>text notes</Text>
        </CardBody>
        <Divider borderColor={"gray"}/>

        <CardFooter>
          create date
        </CardFooter>
        </Card> 
    )
}