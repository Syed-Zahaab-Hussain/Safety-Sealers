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
  Divider,
} from "@chakra-ui/react";
import { EmailIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaMapMarkerAlt } from "react-icons/fa";
import logo from "/Nav-logo.png";

const links = [
  { label: "home", path: "/" },
  {
    label: "about us",
    path: "/safety-sealers/about-us",
    subLinks: [
      { label: "the group", path: "/safety-sealers/about-us/the-group" },
      {
        label: "company profile",
        path: "/safety-sealers/about-us/company-profile",
      },
      // { label: "Enlistments", path: "/safety-sealers/about-us/Enlistments" },
      // {
      //   label: "certification",
      //   path: "/safety-sealers/about-us/certification",
      // },
    ],
  },
  { label: "products", path: "/safety-sealers/products" },
  { label: "services", path: "/safety-sealers/services" },
  { label: "news & events", path: "/safety-sealers/news-events" },
  { label: "projects", path: "/safety-sealers/projects" },
  { label: "blog", path: "/safety-sealers/blog" },
  { label: "contact us", path: "/safety-sealers/contact-us" },
];

const Navbar = () => {
  const [isMobile] = useMediaQuery("(min-width: 61em)");
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
          bg="background.nav"
          justifyContent="space-between"
          alignItems="center"
          py={4}
        >
          <Flex alignItems="center">
            {links.map((link, index) => (
              <Flex key={index} alignItems="center">
                {link.subLinks ? (
                  <Menu>
                    <MenuButton>
                      <Text
                        textTransform="capitalize"
                        color="text.white"
                        _hover={{ textDecoration: "underline" }}
                      >
                        {link.label}
                      </Text>
                    </MenuButton>
                    <MenuList>
                      {link.subLinks.map((subLink, subIndex) => (
                        <Box key={subIndex}>
                          <MenuItem as={Link} to={subLink.path}>
                            {subLink.label}
                          </MenuItem>
                          {subIndex < link.subLinks.length - 1 && (
                            <Divider orientation="horizontal" />
                          )}
                        </Box>
                      ))}
                    </MenuList>
                  </Menu>
                ) : (
                  <Text
                    as={Link}
                    to={link.path}
                    color="text.white"
                    _hover={{ textDecoration: "underline" }}
                    p={2}
                    textTransform="capitalize"
                  >
                    {link.label}
                  </Text>
                )}
                {index < links.length - 1 && (
                  <Divider
                    orientation="vertical"
                    height="20px"
                    borderColor="text.white"
                    mx={2}
                  />
                )}
              </Flex>
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
                          <Box flex="1" textAlign="left">
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
                              <Box key={subIndex}>
                                <Text
                                  as={Link}
                                  to={subLink.path}
                                  onClick={handleDrawerClose}
                                  my=".2rem"
                                >
                                  {subLink.label}
                                </Text>
                                {subIndex < link.subLinks.length - 1 && (
                                  <Divider orientation="horizontal" />
                                )}
                              </Box>
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
