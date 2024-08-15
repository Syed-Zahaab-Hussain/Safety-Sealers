import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg="background.nav"
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
          bg="background.nav"
          color="text.white"
          maxWidth={["90%", "350px"]}
          w="100%"
          mb={[4, 0]}
          border="none"
          boxShadow="none"
        >
          <CardHeader>
            <Heading size="md">Corporate Office</Heading>
          </CardHeader>
          <CardBody>
            <VStack align="flex-start" spacing={2}>
              <HStack>
                <FaMapMarkerAlt />
                <Text>56/38-C, Jinnah Town,Quetta</Text>
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
          Copyright 2024 Safety Sealers. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
