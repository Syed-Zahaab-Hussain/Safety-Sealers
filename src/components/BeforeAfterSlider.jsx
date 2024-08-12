import Slider from "react-slick";
import {
  Box,
  Image,
  Text,
  Flex,
  useMediaQuery,
  IconButton,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      aria-label="next slide"
      icon={<ChevronRightIcon />}
      onClick={onClick}
      position="absolute"
      right={2}
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
    />
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      aria-label="previous slide"
      icon={<ChevronLeftIcon />}
      onClick={onClick}
      position="absolute"
      left={2}
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
    />
  );
};

const BeforeAfterSlider = ({ images }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box maxWidth="1200px" margin="auto" padding={4} position="relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} padding={2}>
            <Flex direction={isLargerThan768 ? "row" : "column"} gap={4}>
              <Box flex={1}>
                <Image
                  src={image.before}
                  alt="Before"
                  objectFit="cover"
                  width="100%"
                  height="300px"
                />
                <Text textAlign="center" fontWeight="bold" mt={2}>
                  Before
                </Text>
              </Box>
              <Box flex={1}>
                <Image
                  src={image.after}
                  alt="After"
                  objectFit="cover"
                  width="100%"
                  height="300px"
                />
                <Text textAlign="center" fontWeight="bold" mt={2}>
                  After
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default BeforeAfterSlider;
