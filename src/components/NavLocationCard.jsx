import { Box, Text, Flex, Icon, useBreakpointValue } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

const NavLocationCard = () => {
  const textSize = useBreakpointValue({ base: "sm", md: "md" });
  const iconSize = useBreakpointValue({ base: 4, md: 5 });

  return (
    <Flex alignItems="flex-start" gap={2}>
      <Box>
        <Icon as={FaMapMarkerAlt} color="#6c98e1" boxSize={iconSize} />
      </Box>
      <Box color="gray.600">
        <Text fontWeight="bold" fontSize={textSize}>
          Head Office
        </Text>
        <Text fontSize={textSize}>56/38-C, Jinnah Town, Quetta</Text>
        <Text fontSize={textSize}>Phone: +92 313 6781867</Text>
      </Box>
    </Flex>
  );
};

export default NavLocationCard;
