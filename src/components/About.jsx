import { useRef } from "react";
import { Box, Flex, Text, VStack, HStack, useColorModeValue } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";

const MotionBox = motion(Box);

const ease = [0.22, 1, 0.36, 1];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const border = useColorModeValue("#e2dfd9", "#1a1a1a");
  const labelColor = useColorModeValue("#b0aaa4", "#444");
  const headingPrimary = useColorModeValue("#0c0c0c", "#f5f5f5");
  const bodyColor = useColorModeValue("#6a6a6a", "#777");
  const detailPrimary = useColorModeValue("#0c0c0c", "#e8e8e8");
  const detailMuted = useColorModeValue("#999", "#555");
  const dividerLine = useColorModeValue("#e8e4de", "#161616");

  const SidebarBlock = ({ label, children, delay }) => (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease }}
      w="100%"
      borderTop="1px solid"
      borderColor={border}
      pt={7}
    >
      <Text
        fontFamily="'JetBrains Mono', monospace"
        fontSize="10px"
        letterSpacing="0.22em"
        textTransform="uppercase"
        color={labelColor}
        mb={4}
      >
        {label}
      </Text>
      {children}
    </MotionBox>
  );

  return (
    <Box id="about" py={{ base: 24, md: 36 }} px={{ base: 6, md: 10 }} ref={ref}>
      <Box maxW="1280px" mx="auto">
        {/* Section label */}
        <MotionBox
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          mb={16}
        >
          <HStack spacing={5} align="center">
            <Text
              fontFamily="'JetBrains Mono', monospace"
              fontSize="11px"
              letterSpacing="0.25em"
              textTransform="uppercase"
              color="#c8a97e"
              flexShrink={0}
            >
              [ 01 / About ]
            </Text>
            <Box flex={1} h="1px" bg={dividerLine} />
          </HStack>
        </MotionBox>

        <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 16, lg: 24 }} align="flex-start">
          {/* Left */}
          <VStack align="flex-start" spacing={8} flex={1}>
            <MotionBox
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.08, ease }}
            >
              <Text
                fontFamily="'Playfair Display', serif"
                fontSize={{ base: "34px", md: "50px" }}
                fontWeight="400"
                lineHeight="1.18"
                color={headingPrimary}
                letterSpacing="-0.01em"
              >
                I build interfaces people{" "}
                <Text as="span" fontStyle="italic" color="#c8a97e">
                  love to use.
                </Text>
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.18, ease }}
              maxW="480px"
            >
              <Text fontFamily="'Inter', sans-serif" fontSize="16px" lineHeight="1.9" color={bodyColor} fontWeight="300">
                I'm a frontend developer passionate about creating seamless
                digital experiences. I sit at the intersection of design and
                engineering — obsessing over every detail, from layout precision
                to micro-interaction timing.
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.28, ease }}
              maxW="480px"
            >
              <Text fontFamily="'Inter', sans-serif" fontSize="16px" lineHeight="1.9" color={bodyColor} fontWeight="300">
                With experience across the full JavaScript ecosystem, I
                specialise in React and modern tooling — always chasing the
                perfect balance of performance and aesthetics that makes a
                product truly feel crafted.
              </Text>
            </MotionBox>
          </VStack>

          {/* Right: Sidebar */}
          <VStack align="flex-start" spacing={0} w={{ base: "100%", lg: "320px" }} flexShrink={0}>
            <SidebarBlock label="Education" delay={0.18}>
              <Text fontFamily="'Inter', sans-serif" fontSize="18px" fontWeight="400" color={detailPrimary} mb={1}>
                B.Tech Computer Science
              </Text>
              <Text fontFamily="'Inter', sans-serif" fontSize="13px" color={detailMuted}>
                Bachelor of Technology
              </Text>
            </SidebarBlock>

            <Box h={7} />

            <SidebarBlock label="Interests" delay={0.28}>
              <VStack align="flex-start" spacing="10px">
                {["Traveling", "Photography", "Gaming", "Open Source"].map((item) => (
                  <Text key={item} fontFamily="'Inter', sans-serif" fontSize="15px" color={bodyColor} fontWeight="300">
                    {item}
                  </Text>
                ))}
              </VStack>
            </SidebarBlock>

            <Box h={7} />

            <SidebarBlock label="Based in" delay={0.38}>
              <Text fontFamily="'Inter', sans-serif" fontSize="18px" color={detailPrimary}>
                India
              </Text>
            </SidebarBlock>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
