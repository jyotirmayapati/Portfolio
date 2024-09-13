import { Box, Center, Image, Text, useColorModeValue } from "@chakra-ui/react";

const ProjectCard = ({ title, description, imageSrc, cardBgColor }) => {
  const textColor = useColorModeValue("gray.800", "gray.200");

  return (
    <Box
      bg={cardBgColor}
      borderRadius="md"
      boxShadow="md"
      p={5}
      textAlign="center"
    >
      <Image
        src={imageSrc}
        alt={title}
        borderRadius="md"
        mb={4}
        boxSize="150px"
        objectFit="cover"
        display="block"
        mx="auto"
      />
      <Text fontSize="lg" fontWeight="bold" color={textColor}>
        {title}
      </Text>
      <Text color={textColor} mt={2}>
        {description}
      </Text>
    </Box>
  );
};

export default ProjectCard;
