import { useRef, useState } from "react";
import { Box, Flex, Text, HStack, useColorModeValue } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";

const MotionBox = motion(Box);

const ease = [0.22, 1, 0.36, 1];

const FRONTEND = [
  { name: "React.js", level: "Expert" },
  { name: "JavaScript (ES6+)", level: "Expert" },
  { name: "HTML5 / CSS3", level: "Expert" },
  { name: "TypeScript", level: "Proficient" },
  { name: "Framer Motion", level: "Proficient" },
];

const TOOLS = [
  { name: "Node.js", level: "Proficient" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Git / GitHub", level: "Expert" },
  { name: "Chakra UI", level: "Expert" },
  { name: "Vercel / Netlify", level: "Proficient" },
];

const SkillRow = ({ name, level, delay, isInView, rowBorder, textDefault, levelDefault, textHover, levelHover }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <MotionBox
      initial={{ opacity: 0, x: -16 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease }}
      borderTop="1px solid"
      borderColor={rowBorder}
      pt={5}
      pb={5}
      cursor="default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Flex justify="space-between" align="center" mb={3}>
        <Text
          fontFamily="'Inter', sans-serif"
          fontSize={{ base: "18px", md: "22px" }}
          fontWeight="300"
          color={hovered ? textHover : textDefault}
          letterSpacing="-0.01em"
          transition="color 0.25s ease"
        >
          {name}
        </Text>
        <Text
          fontFamily="'JetBrains Mono', monospace"
          fontSize="9px"
          letterSpacing="0.2em"
          textTransform="uppercase"
          color={hovered ? "#c8a97e" : levelDefault}
          transition="color 0.25s ease"
        >
          {level}
        </Text>
      </Flex>
      <Box
        h="1px"
        bg="#c8a97e"
        width={hovered ? "100%" : "0%"}
        transition="width 0.4s cubic-bezier(0.22, 1, 0.36, 1)"
      />
    </MotionBox>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const bg = useColorModeValue("#f2f1ee", "#080808");
  const dividerLine = useColorModeValue("#e8e4de", "#161616");
  const rowBorder = useColorModeValue("#e2dfd9", "#161616");
  const catLabel = useColorModeValue("#c0bcb8", "#3a3a3a");
  const headingPrimary = useColorModeValue("#0c0c0c", "#f5f5f5");
  const textDefault = useColorModeValue("#4a4a4a", "#c0c0c0");
  const textHover = useColorModeValue("#0c0c0c", "#f5f5f5");
  const levelDefault = useColorModeValue("#bbb", "#3a3a3a");

  return (
    <Box id="skills" py={{ base: 24, md: 36 }} px={{ base: 6, md: 10 }} bg={bg} ref={ref}>
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
              [ 02 / Skills ]
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
            Technologies I{" "}
            <Text as="span" fontStyle="italic" color="#c8a97e">
              work with.
            </Text>
          </Text>
        </MotionBox>

        <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 12, lg: 16 }}>
          <Box flex={1}>
            <Text
              fontFamily="'JetBrains Mono', monospace"
              fontSize="9px"
              letterSpacing="0.22em"
              textTransform="uppercase"
              color={catLabel}
              mb={4}
            >
              Frontend
            </Text>
            {FRONTEND.map((skill, i) => (
              <SkillRow
                key={skill.name}
                {...skill}
                delay={0.06 + i * 0.06}
                isInView={isInView}
                rowBorder={rowBorder}
                textDefault={textDefault}
                textHover={textHover}
                levelDefault={levelDefault}
              />
            ))}
            <Box borderTop="1px solid" borderColor={rowBorder} />
          </Box>

          <Box flex={1}>
            <Text
              fontFamily="'JetBrains Mono', monospace"
              fontSize="9px"
              letterSpacing="0.22em"
              textTransform="uppercase"
              color={catLabel}
              mb={4}
            >
              Tools &amp; Backend
            </Text>
            {TOOLS.map((skill, i) => (
              <SkillRow
                key={skill.name}
                {...skill}
                delay={0.06 + i * 0.06}
                isInView={isInView}
                rowBorder={rowBorder}
                textDefault={textDefault}
                textHover={textHover}
                levelDefault={levelDefault}
              />
            ))}
            <Box borderTop="1px solid" borderColor={rowBorder} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Skills;
