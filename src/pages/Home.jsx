import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { useState } from "react";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { FaMapMarkerAlt } from "react-icons/fa";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

const serviceArray = [
  {
    heading: "Welcome to Roofline",
    paragraph:
      "ROOFLINE Group is a leading manufacturer of SBS & APP waterproofing membranes, Bitumen Emulsion of different grades in Pakistan. We Provide high-quality products & Waterproofing services to our customers",
  },
  {
    heading: "RoofGrip",
    paragraph:
      "ROOFGRIP is our Brand name for Modified Bituminous Water Proofing Membrane. It is vastly used for flat, low slope concrete roofs, parapet walls, floor slabs, bridge decks, foundations, basements, etc.",
  },
  {
    heading: "Our Services",
    paragraph:
      "With extensive experience, the company is in a unique position to offer comprehensive and tailored waterproofing solutions for commercial, industry, and residential structures.",
  },
];

const differenceArray = [
  {
    paragraph:
      "Pakistan’s #1 Modified Bituminous Waterproofing Membranes Brand",
  },
  {
    paragraph:
      "Roofgrip® waterproofing membranes are high quality, manufactured from bitumen, modified with selected grades of elastomers SBS ( Styrene Butadiene Styrene ) and Plastomers APP ( Atactic Polypropylene ).",
  },
  {
    paragraph:
      " Wide product range of bituminous waterproofing membranes comprises of Torch Applied, Self Adhesive Membrane and primers.",
  },
  {
    paragraph:
      " Reliable Waterproofing Solutions for Roof Waterproofing, Retaining Walls Waterproofing, Basement Waterproofing, DPC Waterproofing of Industrial, Commercial and Residential Structures.",
  },
  {
    paragraph:
      " Continuous Research and Development policy for sustainable waterproofing products and to provide effective leakage and seepage solutions",
  },
  {
    paragraph: " Our mission is to make Pakistan a seepage free nation.",
  },
];

const beforeAfterImages = [
  {
    id: 1,
    before: "/before & after/image 1 before.webp",
    after: "/before & after/image 1 after.webp",
    title: "Living Room Renovation",
  },
  {
    id: 2,
    before: "/before & after/image 2 before.webp",
    after: "/before & after/image 2 after.webp",
    title: "Living Room Renovation",
  },
  {
    id: 3,
    before: "/before & after/image 3 before.webp",
    after: "/before & after/image 3 after.webp",
    title: "Living Room Renovation",
  },
];

const Home = () => {
  // const [showAfter, setShowAfter] = useState({});

  // const toggleImage = (id) => {
  //   setShowAfter((prev) => ({ ...prev, [id]: !prev[id] }));
  // };
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
        // my='3rem'
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

      {/* Footer */}
      <Box
        bg="background.main"
        minH="400px"
        w="100%"
        display="flex"
        flexDirection="column"
      >
        <Flex
          width="100%"
          direction={["column", "row"]}
          align="center"
          justify="center"
          flex="1"
          p={4}
        >
          <Card
            bg="background.main"
            color="text.white"
            maxWidth={["90%", "350px"]}
            w="100%"
            mb={[4, 0]}
          >
            <CardHeader>
              <Heading size="md">Corporate Office</Heading>
            </CardHeader>
            <CardBody>
              <VStack align="flex-start" spacing={2}>
                <HStack>
                  <FaMapMarkerAlt />
                  <Text>Quetta</Text>
                </HStack>
                <HStack>
                  <PhoneIcon />
                  <Text>+92 313 239491834</Text>
                </HStack>
                <HStack>
                  <EmailIcon />
                  <Text>safetysealers@gmail.com</Text>
                </HStack>
              </VStack>
            </CardBody>
          </Card>
        </Flex>

        <Flex
          bg="background.white"
          justify="center"
          align="center"
          minH="20%"
          p={4}
        >
          <Text textAlign="center">
            Copyright 2020 Safety Sealers. All rights reserved.
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
