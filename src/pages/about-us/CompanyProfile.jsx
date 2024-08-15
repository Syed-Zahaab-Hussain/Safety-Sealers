import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const CompanyProfile = () => {
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
        <Heading color="text.white">Company Profile</Heading>
      </Box>

      {/* Content */}

      <Box>
        <Card
          minH="80vh"
          p={{ base: "1rem", md: "3rem" }}
          border="none"
          boxShadow="none"
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 8, md: 0 }}
            width="100%"
            height="100%"
          >
            <CardBody width={{ base: "100%", md: "50%" }}>
              <Text>
                Roofline manufactures
                <strong> Modified Bituminous Waterproofing Membrane</strong>
                under the trademark of <strong>ROOFGRIP®</strong>. Our wide
                product range comprises of Torch Applied, Self-Adhesive Modified
                Bitumen Membranes and Primers. ROOFGRIP® water proofing
                membranes are high quality, manufactured from bitumen, modified
                with selected high grade elastomers SBS (Styrene Butadiene
                Styrene) and Plastomers APP (Atactic Polypropylene). The
                compound with additives are coated on to the reinforcement which
                is not proof non-woven polyester fabric to the required
                thickness which supersedes in quality and durability to other
                locally available membranes. Our products are applicable for
                concealed and exposed waterproofing purposes.
              </Text>
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
                src="https://thumbs.dreamstime.com/z/vision-goal-action-success-business-strategy-ladder-arrow-text-84946026.jpg"
                alt="success image"
              />
            </CardFooter>
          </Stack>
        </Card>
      </Box>

      <Box>
        <Text mb="1rem">
          The company has achieved many milestones over the years and proudly
          exhibits that our products have been utilized at various mega public /
          private sector projects in Pakistan, we are striving hard for our
          social responsibility to create awareness for public at large and to
          facilitate them with modern waterproofing techniques.
        </Text>

        <Text fontWeight="bold">
          The company is honored to become first Pakistani company is this
          segment for obtaining Pakistan Standards certificat
        </Text>
      </Box>

      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={8}
        // justifyItems="center"
        p={6}
        m='2rem'
      >
        {/* 1st column */}
        <Box width="100%" display="grid" gap="2rem">
          <Box display="grid" gap="1rem">
            <Heading as="h2" mb="1rem">
              Vision:
            </Heading>
            <Text>
              To become the first choice of Architects, Consultants, Contractors
              and Residential Customers for Durable and Long Lasting Water
              Proofing Treatment.
            </Text>
          </Box>
          <Box display="grid" gap="1rem">
            <Heading as="h2" mb="1rem">
              Mission:
            </Heading>
            <Text>
              <strong>Creating awareness:</strong> Use of suitable means of
              communication to reach out at every possible customer.
            </Text>
            <Text>
              <strong>People:</strong> Attract and Develop highly committed team
              of individual to meet the customer expectations.
            </Text>
            <Text>
              <strong>Way Forward:</strong> progressively building customer base
              and their retention.
            </Text>
            <Text>
              <strong>Research and Development:</strong> Product
              competitiveness, optimum use of resources, latest manufacturing
              and scientific techniques, cost cutting, sustainable quality and
              customization of products according to customer needs.
            </Text>
          </Box>
        </Box>

        {/* 2st column */}

        <Box width="100%" display="grid" gap="2rem">
          <Box display="grid" gap="1rem">
            <Heading as="h2" mb="1rem">
              Core Values:
            </Heading>
            <Text>Customers as our first priority</Text>
            <Text>Commitment and excellence in everything we do</Text>
            <Text>
              Social Responsibility for enrichment of lives of the community
              where we operate
            </Text>
            <Text>Integrity and Respect for our customers and each other</Text>
            <Text>Zero tolerance on quality</Text>
          </Box>

          <Box display="grid" gap="1rem">
            <Heading>QHSE Policy:</Heading>
            <Text>
              Roof Line (PVT) LTD. believes excellence in Quality, Health &
              Safety and Environmental. This responsibility lies with both the
              management and employees in all functions. Roof Line strives hard
              to provide a Safe and Healthy working environment, to avoid
              adverse impact to the environment and the communities.
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default CompanyProfile;
