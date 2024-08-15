import {
  Box,
  Card,
  CardHeader,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

const projectsArray = [
  {
    name: "Projects",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDu9tBwK-QGYrGPcBjd6EYYJ8PPrxpfbKEmg&shttps://i.dawn.com/primary/2022/05/62964245d8042.jpg",
  },
  {
    name: "Projects",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDu9tBwK-QGYrGPcBjd6EYYJ8PPrxpfbKEmg&shttps://i.dawn.com/primary/2022/05/62964245d8042.jpg",
  },
  {
    name: "Projects",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDu9tBwK-QGYrGPcBjd6EYYJ8PPrxpfbKEmg&shttps://i.dawn.com/primary/2022/05/62964245d8042.jpg",
  },
  {
    name: "Projects",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDu9tBwK-QGYrGPcBjd6EYYJ8PPrxpfbKEmg&shttps://i.dawn.com/primary/2022/05/62964245d8042.jpg",
  },
  {
    name: "Projects",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDu9tBwK-QGYrGPcBjd6EYYJ8PPrxpfbKEmg&shttps://i.dawn.com/primary/2022/05/62964245d8042.jpg",
  },
];
const Projects = () => {
  return (
    <>
      <Box
        bg="background.main"
        h="200px"
        display="flex"
        alignItems="center"
        pl="3rem"
      >
        <Heading color="text.white">Projects</Heading>
      </Box>

      <Box p="4rem">
        <Heading size="md" mb={4}>
          Completed Projects
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
          {projectsArray.map((news, index) => (
            <Card key={index} minWidth="250px">
              <CardHeader>
                <Heading size="sm">{`${news.name}`}</Heading>
              </CardHeader>
              <Image
                alt={`News ${news.name} Image`}
                src={news.image}
                width="100%"
                height="200px"
                objectFit="cover"
              />
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Projects;
