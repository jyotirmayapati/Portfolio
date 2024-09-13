import { Box, Heading, SimpleGrid, Text, Stack, useColorModeValue } from "@chakra-ui/react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";

const skills = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
];

const Skills = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.200");
  const iconColor = useColorModeValue("brand.500", "brand.300");

  return (
    <Box id="skills" py={20} px={4} textAlign="center" bg={bgColor}>
      <Heading as="h2" size="xl" mb={6} color={textColor}>
        My Skills
      </Heading>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
        {skills.map((skill, index) => (
          <Stack
            key={index}
            alignItems="center"
            justifyContent="center"
          >
            <Box as={skill.icon} boxSize={12} color={iconColor} />
            <Text mt={2} fontSize="lg" fontWeight="bold" color={textColor}>
              {skill.name}
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
