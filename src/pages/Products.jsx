import {
  Box,
  Card,
  CardHeader,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { productsArray } from "../cms/products";

const Products = () => {
  return (
    <>
      <Box
        bg="background.main"
        h="200px"
        display="flex"
        alignItems="center"
        pl="3rem"
      >
        <Heading color="text.white">Waterproofing Solutions</Heading>
      </Box>

      {/* Show a list of products */}

      <Box p="3rem">
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          justifyItems="center"
          spacing="3rem"
        >
          {productsArray.map((product) => (
            <Link
              key={product.id}
              to={`/safety-sealers/products/${product.name.replace(" ", "-")}`}
            >
              <Card width="350px" h="380px">
                <Image src={product.image} height="80%" />
                <CardHeader>
                  <Heading size="md">{product.name}</Heading>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Products;
