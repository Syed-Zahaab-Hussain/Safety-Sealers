import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { productsArray } from "../cms/products";
import { useEffect, useState } from "react";

const ProductDescription = () => {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productsArray.find(
      (item) => item.name === productName.replace("-", " ")
    );
    setProduct(foundProduct);
  }, [productName]);

  // Responsive direction for Stack
  const stackDirection = useBreakpointValue({ base: "column", md: "row" });

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
        {product ? (
          <Heading color="text.white">{product.name}</Heading>
        ) : (
          <Heading color="text.white">Product not found</Heading>
        )}
      </Box>
      {/* Description */}
      <Box width="100%" p="4rem">
        {product && (
          <Card border="none">
            <Stack direction={stackDirection} spacing="4rem">
              <CardBody width={{ base: "100%", md: "50%" }}>
                {product.properties &&
                  product.properties.map((property, index) => (
                    <Box
                      key={index}
                      display="flex"
                      flexDirection="column"
                      gap="1rem"
                      mb={2}
                    >
                      <Box display="flex" gap="1rem" alignItems="center">
                        <Heading size="md">
                          {property.name}
                          <Box
                            width="2rem"
                            height=".3rem"
                            bg="background.main"
                            mt="1rem"
                          />
                        </Heading>
                      </Box>
                      <Box pl="1rem">
                        {property.explanations.map((explain, subIndex) => (
                          <Box
                            key={subIndex}
                            display="flex"
                            alignItems="center"
                            mb=".5rem"
                          >
                            <Text>&#8594;</Text>
                            <Text ml="0.5rem">{explain}</Text>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  ))}

                <Box mt="2rem">
                  <Heading size="md" mb="1rem">
                    {product.name}
                    <Box
                      width="2rem"
                      height=".3rem"
                      bg="background.main"
                      mt="1rem"
                    />
                  </Heading>

                  <Text>{product.description}</Text>
                </Box>
              </CardBody>
              <Box width={{ base: "100%", md: "50%" }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  objectFit="cover"
                  width="100%"
                />
              </Box>
            </Stack>
          </Card>
        )}
      </Box>
    </>
  );
};

export default ProductDescription;
