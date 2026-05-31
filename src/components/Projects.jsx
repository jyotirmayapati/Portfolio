import { useRef, useState } from "react";
import { Box, Flex, Text, HStack, VStack, Image, useColorModeValue } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import project1 from "../asserts/project-1.png";
import project2 from "../asserts/project-2.png";
import project3 from "../asserts/project-3.png";

const MotionBox = motion(Box);

const ease = [0.22, 1, 0.36, 1];

const PROJECTS = [
  {
    number: "01",
    title: "EcomExpress24",
    description: "E-commerce platform with authentication, product catalog, cart, and payment.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://ecom-express24.vercel.app",
    github: "https://github.com/rohit024b/EcomExpress24",
    image: project2,
  },
  {
    number: "02",
    title: "Zappos Clone",
    description: "Full-stack clone of Zappos with frontend and backend authentication system.",
    tech: ["React", "Node.js", "CSS"],
    link: "https://zappos-clone-uiw6.vercel.app",
    github: "https://github.com/jyotirmayapati/zappos-clone",
    image: project1,
  },
  {
    number: "03",
    title: "Sephora Clone",
    description: "Beauty e-commerce clone with login, signup, and full cart functionality.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://sephora-clone-79xi.vercel.app",
    github: "https://github.com/jyotirmayapati/SEPHORA-CLONE",
    image: project3,
  },
];

const ProjectRow = ({ project, delay, isInView, rowBorder, numColor, titleDefault, descColor, pillBorder, pillText, ghColor, ghHover }) => {
  const [hovered, setHovered] = useState(false);
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 });
  const rowRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    setImgPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <MotionBox
      ref={rowRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease }}
      borderTop="1px solid"
      borderColor={rowBorder}
      py={8}
      position="relative"
      overflow="hidden"
      cursor="pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={() => window.open(project.link, "_blank")}
    >
      <Flex align="center" justify="space-between" gap={6}>
        <HStack spacing={{ base: 5, md: 10 }} align="center" flex={1} minW={0}>
          <Text
            fontFamily="'JetBrains Mono', monospace"
            fontSize="11px"
            color={numColor}
            letterSpacing="0.1em"
            flexShrink={0}
          >
            {project.number}
          </Text>
          <VStack align="flex-start" spacing={1} minW={0}>
            <Text
              fontFamily="'Playfair Display', serif"
              fontSize={{ base: "26px", md: "40px", lg: "52px" }}
              fontWeight="400"
              color={hovered ? "#c8a97e" : titleDefault}
              letterSpacing="-0.02em"
              lineHeight="1"
              transition="color 0.3s ease"
              noOfLines={1}
            >
              {project.title}
            </Text>
            <Text
              fontFamily="'Inter', sans-serif"
              fontSize="13px"
              color={descColor}
              fontWeight="300"
              display={{ base: "none", md: "block" }}
            >
              {project.description}
            </Text>
          </VStack>
        </HStack>

        <HStack spacing={3} flexShrink={0} display={{ base: "none", md: "flex" }}>
          {project.tech.map((t) => (
            <Text
              key={t}
              fontFamily="'JetBrains Mono', monospace"
              fontSize="9px"
              letterSpacing="0.18em"
              textTransform="uppercase"
              color={pillText}
              border="1px solid"
              borderColor={pillBorder}
              px={3}
              py="5px"
            >
              {t}
            </Text>
          ))}
          <Text
            fontFamily="'JetBrains Mono', monospace"
            fontSize="10px"
            color={ghColor}
            ml={3}
            _hover={{ color: ghHover }}
            transition="color 0.25s"
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.github, "_blank");
            }}
          >
            GH →
          </Text>
        </HStack>
      </Flex>

      {/* Floating image */}
      <Box
        position="absolute"
        pointerEvents="none"
        zIndex={10}
        w="220px"
        h="140px"
        overflow="hidden"
        boxShadow="0 24px 72px rgba(0,0,0,0.35)"
        opacity={hovered ? 1 : 0}
        transition="opacity 0.35s ease"
        style={{ left: `${imgPos.x - 110}px`, top: `${imgPos.y - 70}px` }}
      >
        <Image src={project.image} alt={project.title} w="100%" h="100%" objectFit="cover" />
      </Box>
    </MotionBox>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const dividerLine = useColorModeValue("#e8e4de", "#161616");
  const rowBorder = useColorModeValue("#e2dfd9", "#161616");
  const headingPrimary = useColorModeValue("#0c0c0c", "#f5f5f5");
  const numColor = useColorModeValue("#c0bcb8", "#333");
  const titleDefault = useColorModeValue("#0c0c0c", "#f0f0f0");
  const descColor = useColorModeValue("#999", "#555");
  const pillBorder = useColorModeValue("#e0ddd8", "#1e1e1e");
  const pillText = useColorModeValue("#aaa", "#3a3a3a");
  const ghColor = useColorModeValue("#aaa", "#444");
  const ghHover = useColorModeValue("#c8a97e", "#c8a97e");

  return (
    <Box id="projects" py={{ base: 24, md: 36 }} px={{ base: 6, md: 10 }} ref={ref}>
      <Box maxW="1280px" mx="auto">
        <MotionBox
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          mb={16}
        >
          <HStack spacing={5} align="center" mb={10}>
            <Text
              fontFamily="'JetBrains Mono', monospace"
              fontSize="11px"
              letterSpacing="0.25em"
              textTransform="uppercase"
              color="#c8a97e"
              flexShrink={0}
            >
              [ 03 / Work ]
            </Text>
            <Box flex={1} h="1px" bg={dividerLine} />
          </HStack>
          <Text
            fontFamily="'Playfair Display', serif"
            fontSize={{ base: "34px", md: "50px" }}
            fontWeight="400"
            color={headingPrimary}
            lineHeight="1.18"
            letterSpacing="-0.01em"
          >
            Selected{" "}
            <Text as="span" fontStyle="italic" color="#c8a97e">
              projects.
            </Text>
          </Text>
        </MotionBox>

        <Box>
          {PROJECTS.map((project, i) => (
            <ProjectRow
              key={project.number}
              project={project}
              delay={0.08 + i * 0.08}
              isInView={isInView}
              rowBorder={rowBorder}
              numColor={numColor}
              titleDefault={titleDefault}
              descColor={descColor}
              pillBorder={pillBorder}
              pillText={pillText}
              ghColor={ghColor}
              ghHover={ghHover}
            />
          ))}
          <Box borderTop="1px solid" borderColor={rowBorder} />
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
