import { Box, Heading, Text, Stack } from "@chakra-ui/react";

const About = () => {
  return (
    <Box id="about" py={20} px={4} textAlign="center">
      <Heading as="h2" size="xl" mb={6}>
        About Me
      </Heading>
      <Text fontSize="lg" mb={4}>
        I'm a passionate Frontend Developer with experience in building
        responsive and accessible web applications using modern web technologies.
      </Text>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={10}
        alignItems="center"
        justify="center"
        mt={10}
      >
        <Box>
          <Heading as="h3" size="md" mb={2}>
            Education
          </Heading>
          <Text>Bachelor's degree in Computer Science.</Text>
        </Box>
        <Box>
          <Heading as="h3" size="md" mb={2}>
            Hobbies
          </Heading>
          <Text>Traveling, Photography, and Gaming.</Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
