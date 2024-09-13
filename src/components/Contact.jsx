import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box id="contact" py={20} px={4} textAlign="center">
      <Heading as="h2" size="xl" mb={6}>
        Contact Me
      </Heading>
      <Box maxWidth="600px" mx="auto">
        <FormControl id="name" isRequired mb={4}>
          <FormLabel>Your Name</FormLabel>
          <Input type="text" placeholder="Enter your name" />
        </FormControl>
        <FormControl id="email" isRequired mb={4}>
          <FormLabel>Your Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl id="message" isRequired mb={4}>
          <FormLabel>Your Message</FormLabel>
          <Textarea placeholder="Enter your message" rows={6} />
        </FormControl>
        <Button colorScheme="brand" size="lg">
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
