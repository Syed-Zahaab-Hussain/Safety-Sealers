import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const blogFAQArray = [
  {
    name: "what is the name of the something",
    description: "lorem ipsum dolor sit amet, consectetajsaksjfklnusdfnasdne",
  },
  {
    name: "pipe is broken",
    description: "lorem ipsum dolor sit amet, consectetajsaksjfklnusdfnasdne",
  },
  {
    name: "hello world",
    description: "lorem ipsum dolor sit amet, consectetajsaksjfklnusdfnasdne",
  },
  {
    name: "ASDFSDUIHFAS",
    description: "lorem ipsum dolor sit amet, consectetajsaksjfklnusdfnasdne",
  },
  {
    name: "ASDJFLSDIweu23823",
    description: "lorem ipsum dolor sit amet, consectetajsaksjfklnusdfnasdne",
  },
];
const Blog = () => {
  return (
    <>
      <Box
        bg="background.main"
        h="200px"
        display="flex"
        alignItems="center"
        pl="3rem"
      >
        <Heading color="text.white">Blog</Heading>
      </Box>

      <Box p="4rem">
        <Accordion>
          {blogFAQArray.map((FAQ) => (
            <AccordionItem key={FAQ.name}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {FAQ.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{FAQ.description}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </>
  );
};

export default Blog;
