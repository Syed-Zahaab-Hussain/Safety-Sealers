import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { differenceArray, serviceArray, beforeAfterImages } from "../cms/home";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <Box>
        <Hero />
      </Box>
      {/* Show Service Cards */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={8}
        justifyItems="center"
        py={6}
        bg="#edf3f8"
      >
        {serviceArray.map((service) => (
          <ServiceCard
            key={service.heading}
            heading={service.heading}
            paragraph={service.paragraph}
          />
        ))}
      </SimpleGrid>

      {/* Card to tell the difference */}
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

              {differenceArray.map((difference) => (
                <Box
                  key={difference.paragraph}
                  display="flex"
                  gap="1rem"
                  alignItems="flex-start"
                  mb={2}
                >
                  <Text>&#8594;</Text>
                  <Text> {difference.paragraph}</Text>
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
              <Button
                bg="background.button"
                color="text.white"
                fontWeight="xs"
                boxShadow="2xl"
                _hover={{ backgroundColor: "background.buttonHover" }}
                p="6"
                width={{ base: "100%", sm: "200px" }}
              >
                Check DP Application
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </Box>

      {/* Show before & After images */}
      <Box my="3rem">
        <Heading>Our Renovation Projects</Heading>
        <BeforeAfterSlider images={beforeAfterImages} />
      </Box>
    </>
  );
};

export default Home;
