// import { Box, Heading } from "@chakra-ui/react";

// const ThankYou = () => {
//   return (
//     <>
//       <Box
//         bg="background.main"
//         h="200px"
//         display="flex"
//         alignItems="center"
//         pl="3rem"
//         mb="4rem"
//       >
//         <Heading color="text.white">Thank You</Heading>
//       </Box>
//     </>
//   );
// };

// export default ThankYou;

import { Box, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">
          Thank You!
        </Text>
        <Text fontSize="xl">
          Your message has been successfully sent. We will get back to you as
          soon as possible.
        </Text>
        <Button
          as={Link}
          to="/"
          bg="background.main"
          color="text.white"
          size="lg"
          mt={6}
        >
          Back to Home
        </Button>
      </VStack>
    </Box>
  );
};

export default ThankYou;
