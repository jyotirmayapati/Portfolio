import { Box, Flex, Heading, Image, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import myImage from '../asserts/Jyotirmaya.JPG'; // Ensure correct path to the image

const IntroSection = () => {
  const imageSize = useBreakpointValue({ base: "150px", md: "200px" }); // Circular image size
  const headingSize = useBreakpointValue({ base: "xl", md: "2xl" }); // Responsive heading size
  const textColor = useColorModeValue("gray.800", "white"); // Text color based on color mode

  return (
    <Flex
      as="section"
      direction="column"
      align="center"
      justify="center"
      py={20}
      px={4}
      maxW="1200px"
      mx="auto"
      textAlign="center"
    >
      <Box mb={8}>
        <Heading as="h1" size={headingSize} mb={4} color={textColor}>
          Welcome to My Portfolio
        </Heading>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={myImage}
            alt="Hero Image"
            borderRadius="full" // Makes the image circular
            boxShadow="xl" // Enhanced shadow for a more polished look
            objectFit="cover"
            width={imageSize}
            height={imageSize}
            border="4px solid" // Optional border for added emphasis
            borderColor="teal.500" // Color of the border
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default IntroSection;
