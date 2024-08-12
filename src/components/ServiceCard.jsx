import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

const ServiceCard = ({ heading, paragraph }) => {
  return (
    <Card width="350px">
      <Stack justify="center">
        <CardHeader>
          <Heading size="md">{heading}</Heading>
          <Box width="2rem" height=".3rem" bg="background.main" mt="1rem"></Box>
        </CardHeader>
        <CardBody>
          <Text>{paragraph}</Text>
        </CardBody>
        <CardFooter>
          <Button
            bg="background.button"
            color="text.white"
            fontWeight="xs"
            boxShadow="2xl"
            _hover={{ backgroundColor: "background.buttonHover" }}
            p="6"
          >
            Read More
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ServiceCard;
