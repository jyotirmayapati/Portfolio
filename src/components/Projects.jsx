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
import project3 from "../asserts/project-3.png"

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
          columns={{ base: 1, md: 3, lg: 3 }}
          spacing={8}
          maxW="full"
          alignItems="start"
        >
          <ProjectCard
            title={
              <a
                href="https://ecom-express24.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#0070f3",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                EcomExpress24
              </a>
            }
            description={
              <>
                Designed a E-commerce website with login authentication, products page, cart, and payment page with a team of 3. <br /><br/>
                <a
                  href="https://github.com/rohit024b/EcomExpress24"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#ff4500",
                    fontWeight: "bold",
                  }}
                >
                  🔗 View on GitHub
                </a>
              </>
            }
            imageSrc={project2}
            cardBgColor={cardBgColor}
          />
          <ProjectCard
            title={
              <a
                href="https://zappos-clone-uiw6.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#0070f3",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                Zappos Clone 🚀
              </a>
            }
            description={
              <>
                Cloned webpage of Zappos with frontend and backend of login and
                signup.
                <br />
                <br/>
                <br/>
                <a
                  href="https://github.com/jyotirmayapati/zappos-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#ff4500",
                    fontWeight: "bold",
                  }}
                >
                  🔗 View on GitHub
                </a>
              </>
            }
            imageSrc={project1}
            cardBgColor={cardBgColor}
          />
          <ProjectCard
            title={
              <a
                href="https://sephora-clone-79xi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#0070f3",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
               Sephora Clone 🚀
              </a>
            }
            description={
              <>
                Cloned webpage of Sephora with frontend and backend of login and
                signup and Cart functionality. <br /><br />
                <a
                  href="https://github.com/jyotirmayapati/SEPHORA-CLONE"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#ff4500",
                    fontWeight: "bold",
                  }}
                >
                  🔗 View on GitHub
                </a>
              </>
            }
            imageSrc={project3}
            cardBgColor={cardBgColor}
          />

        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default Projects;
