import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { EmailIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaMapMarkerAlt } from "react-icons/fa";
import logo from "/logo.png";

const links = [
  { label: "home", path: "/" },
  {
    label: "about us",
    path: "/about-us",
    subLinks: [
      { label: "the group", path: "/about-us/the-group" },
      { label: "company profile", path: "/about-us/company-profile" },
      { label: "Enlistments", path: "/about-us/Enlistments" },
      { label: "certification", path: "/about-us/certification" },
    ],
  },
  {
    label: "products",
    path: "/safety-sealers/products",
  },
  { label: "services", path: "/services" },
  { label: "new & events", path: "/new&events" },
  { label: "projects", path: "/projects" },
  { label: "blog", path: "/blog" },
  { label: "careers", path: "/careers" },
  { label: "contact us", path: "/contact-us" },
];

const Navbar = () => {
  const [isMobile] = useMediaQuery("(min-width: 60em)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const textSize = useBreakpointValue({ base: "sm", md: "md" });
  const iconSize = useBreakpointValue({ base: 4, md: 5 });

  const handleDrawerOpen = () => setIsDrawerOpen(true);
  const handleDrawerClose = () => setIsDrawerOpen(false);

  return (
    <Box as="nav" bg="white">
      <Flex
        height="10rem"
        justifyContent="space-between"
        alignItems="center"
        px={4}
      >
        <Image src={logo} alt="Logo" width="150px" />
        {isMobile && (
          <Box flex={1} display="flex" justifyContent="center">
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
          </Box>
        )}
        {!isMobile && (
          <IconButton
            icon={isDrawerOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={isDrawerOpen ? handleDrawerClose : handleDrawerOpen}
            variant="outline"
            color="text.divider"
            fontSize="1.5rem"
          />
        )}
      </Flex>
      {isMobile && (
        <Flex
          as="header"
          bg="background.main"
          justifyContent="space-between"
          alignItems="center"
          py={4}
        >
          <Flex alignItems="center" gap={1}>
            {links.map((link, index) => (
              <Box key={index} position="relative" textTransform="capitalize">
                {link.subLinks ? (
                  <Menu>
                    <MenuButton
                      as={Text}
                      variant="ghost"
                      color="text.white"
                      _hover={{ textDecoration: "underline" }}
                      borderRight="2px solid #33587c"
                    >
                      {link.label}
                    </MenuButton>
                    <MenuList>
                      {link.subLinks.map((subLink, subIndex) => (
                        <MenuItem
                          key={subIndex}
                          as={Link}
                          to={subLink.path}
                          borderBottom="2px solid gray"
                        >
                          {subLink.label}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                ) : (
                  <Text
                    as={Link}
                    to={link.path}
                    color="text.white"
                    _hover={{ textDecoration: "underline" }}
                    borderRight="2px solid #33587c"
                    p={2}
                  >
                    {link.label}
                  </Text>
                )}
              </Box>
            ))}
          </Flex>
          <Flex alignItems="center" mx={2}>
            <EmailIcon mr={2} color="text.white" />
            <Text fontSize="lg" color="text.white">
              safetysealers@gmail.com
            </Text>
          </Flex>
        </Flex>
      )}

      <Drawer
        isOpen={isDrawerOpen}
        placement="left"
        onClose={handleDrawerClose}
      >
        <DrawerOverlay />
        <DrawerContent background="background.main" color="text.white">
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={4} textTransform="capitalize">
              {links.map((link, index) => (
                <Accordion key={index} allowToggle>
                  <AccordionItem border="none">
                    {link.subLinks ? (
                      <>
                        <AccordionButton>
                          <Box
                            flex="1"
                            textAlign="left"
                            textTransform="capitalize"
                          >
                            {link.label}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel
                          pb={4}
                          background="background.white"
                          color="text.alt"
                        >
                          <VStack align="stretch">
                            {link.subLinks.map((subLink, subIndex) => (
                              <Text
                                as={Link}
                                key={subIndex}
                                to={subLink.path}
                                onClick={handleDrawerClose}
                                borderBottom="1px solid gray"
                                my=".2rem"
                              >
                                {subLink.label}
                              </Text>
                            ))}
                          </VStack>
                        </AccordionPanel>
                      </>
                    ) : (
                      <AccordionButton
                        as={Link}
                        to={link.path}
                        onClick={handleDrawerClose}
                      >
                        <Box flex="1" textAlign="left">
                          {link.label}
                        </Box>
                      </AccordionButton>
                    )}
                  </AccordionItem>
                </Accordion>
              ))}
            </VStack>
            <Flex alignItems="center" mt={8}>
              <EmailIcon mr={2} />
              <Text fontSize="lg">safetysealers@gmail.com</Text>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
