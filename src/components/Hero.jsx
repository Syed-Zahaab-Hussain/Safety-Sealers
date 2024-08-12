import { Box, Flex, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    fade: true,
    autoplay: true,
  };

  const slides = [
    {
      heading: "Welcome to Our Website",
      paragraph: "We provide the best services to our customers.",
    },
    {
      heading: "Innovative Solutions",
      paragraph: "Transforming ideas into reality with our expertise.",
    },
    {
      heading: "Join Our Community",
      paragraph: "Be part of something bigger and grow with us.",
    },
  ];

  return (
    <Box
      bg="#1888f1"
      py={10}
      //   display="flex"
      //   justifyContent="center"
      //   alignItems="center"
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Flex
            key={index}
            // display='flex'
            // direction="column"
            justify="center"
            align="center"
            height="400px"
            px={4}
          >
            <Box
              bg="#077ffb"
              color="text.white"
              borderRadius="lg"
              p={8}
              textAlign="center"
              width="70%"
              maxWidth="600px"
              animation="fadeInUp 1s ease-in-out"
            >
              <Text
                fontSize="2xl"
                fontWeight="bold"
                mb={4}
                className="slide-heading"
              >
                {slide.heading}
              </Text>
              <Text fontSize="lg" className="slide-paragraph">
                {slide.paragraph}
              </Text>
            </Box>
          </Flex>
        ))}
      </Slider>
    </Box>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <Box
      as="button"
      onClick={onClick}
      position="absolute"
      top="50%"
      right="10px"
      transform="translateY(-50%)"
      zIndex={1}
      bg="white"
      borderRadius="full"
      p={2}
      boxShadow="md"
    >
      <Text>&#9654;</Text>
    </Box>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <Box
      as="button"
      onClick={onClick}
      position="absolute"
      top="50%"
      left="10px"
      transform="translateY(-50%)"
      zIndex={1}
      bg="white"
      borderRadius="full"
      p={2}
      boxShadow="md"
    >
      <Text>&#9664;</Text>
    </Box>
  );
};

export default HeroSection;
