import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { theGroupCardsArray } from "../../cms/theGroup";

const TheGroup = () => {
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
        <Heading color="text.white">The Group</Heading>
      </Box>
      {/* Content */}
      <Box p="4rem">
        <Text mb="1rem">
          Roof Line Group has become the most trusted and renowned name in
          <strong> Modified Bituminous Waterproofing Membrane</strong> industry
          in Pakistan, The Group has started its journey in 2015 with technical
          and financial collaboration of MFN Investment Group Australia.
        </Text>
        <Text mb="1rem">
          Our Board of Directors possesses 20 years of professional knowledge,
          industrial experience and international exposure. Their profound
          acumen has led us to develop the extensive range of quality products
          for both Commercial and Residential users. It is all about the focused
          and committed approach of the management that Roofline has achieved a
          distinct position in market, with years of waterproofing expertise in
          industrial, public sector and residential projects, the company has
          invested in modern and state of the art manufacturing technologies to
          produce reliable and long-lasting products in accordance with the
          local market needs and international trends. Our excellence is our
          quality and commitment, which has evolved Roofline a trustworthy brand
          for Customers.
        </Text>
        <Text mb="1rem">
          With years of success and consistent growth ROOF LINE GROUP is now
          comprises of the following companies:
        </Text>

        <Box mt="2rem">
          {theGroupCardsArray.map((company, index) => (
            <Flex key={index} align="center" gap=".5rem">
              <Text>&#8594;</Text>
              <Text fontWeight="bold">{company.heading}</Text>
            </Flex>
          ))}
        </Box>
      </Box>

      <Box>
        {theGroupCardsArray.map((content, index) => (
          <Card minH="100vh" p={{ base: "1rem", md: "3rem" }} key={index}>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: 8, md: 0 }}
              width="100%"
              height="100%"
            >
              <CardBody width={{ base: "100%", md: "50%" }}>
                <Heading as="h3" size="md" mb="3rem">
                  {content.heading}
                </Heading>
                <Text>{content.paragraph}</Text>
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
                  src={content.image}
                  alt={content.heading}
                />
              </CardFooter>
            </Stack>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default TheGroup;
