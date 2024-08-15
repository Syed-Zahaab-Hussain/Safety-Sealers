import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const servicesArray = [
  "Fully Equipped with technical and qualified application team",
  "Application facility is available across Pakistan",
  "Strong supervision on-site, swift processing fulfillment of the commitment",
  "Immediate availability of dedicated teams for technical assistance",
  "Diversified experience  of application in industrial, commercial, and residential sectors",
  "Equipped with the latest tools and applications techniques",
  "Our area of expertise includes Roof waterproofing, Basement Waterproofing and Retaining Walls",
];
const Services = () => {
  return (
    <>
      {/* Heading */}
      <Box
        bg="background.main"
        h="200px"
        display="flex"
        alignItems="center"
        pl="3rem"
      >
        <Heading color="text.white">Application Services</Heading>
      </Box>
      {/* Services */}
      <Box>
        <Card minH="100vh" p={{ base: "1rem", md: "3rem" }}>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 8, md: 0 }}
            width="100%"
            height="100%"
          >
            <CardBody width={{ base: "100%", md: "50%" }}>
              <Heading mb={4}>What Makes Us Different</Heading>

              {servicesArray.map((service, index) => (
                <Box
                  key={index}
                  display="flex"
                  gap="1rem"
                  alignItems="flex-start"
                  mb={2}
                >
                  <Text>&#8594;</Text>
                  <Text> {service}</Text>
                </Box>
              ))}
            </CardBody>

            <CardFooter
              width={{ base: "100%", md: "50%" }}
              flexDirection="column"
              gap="2rem"
              alignItems={{ base: "center", md: "flex-start" }}
            >
              <Image
                width="100%"
                maxH={{ base: "300px", md: "100%" }}
                objectFit="cover"
                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Caffe Latte"
              />
            </CardFooter>
          </Stack>
        </Card>
      </Box>
    </>
  );
};

export default Services;
