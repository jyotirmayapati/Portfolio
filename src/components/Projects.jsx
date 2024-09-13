import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import project1 from "../asserts/project-1.png";
import project2 from "../asserts/project-2.png";

const Projects = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBgColor = useColorModeValue("white", "gray.700");
  const headingColor = useColorModeValue("gray.800", "white");

  return (
    <Box
      id="projects"
      as="section"
      py={20}
      px={4}
      bg={bgColor}
      borderRadius="md"
      boxShadow="md"
      maxW="1200px"
      mx="auto"
    >
      <Heading as="h2" size="xl" mb={8} textAlign="center" color={headingColor}>
        My Projects
      </Heading>
      <Center>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2 }}
          spacing={8}
          maxW="full"
          alignItems="start"
        >
          <ProjectCard
            title="Superhero Resume"
            description="Designed and developed Bruce Wayne's resume webpage using HTML, CSS, and JavaScript."
            imageSrc={project1}
            cardBgColor={cardBgColor}
          />
          <ProjectCard
            title="EcomExpress24"
            description="Designed a E-commerce website with login authentication, products page, cart, and payment page."
            imageSrc={project2}
            cardBgColor={cardBgColor}
          />
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default Projects;
