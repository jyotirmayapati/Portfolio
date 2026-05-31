import { Box, Flex, Text, VStack, HStack, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import myImage from "../asserts/Jyotirmaya.JPG";

const MotionBox = motion(Box);

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

const Hero = () => {
  const bg = useColorModeValue("#f8f7f4", "#0a0a0a");
  const gridColor = useColorModeValue("rgba(0,0,0,0.035)", "rgba(255,255,255,0.025)");
  const namePrimary = useColorModeValue("#0c0c0c", "#f5f5f5");
  const descColor = useColorModeValue("#777", "#777");
  const offsetBorder = useColorModeValue("#dedad4", "#1e1e1e");
  const photoOverlay = useColorModeValue("rgba(248,247,244,0.15)", "rgba(10,10,10,0.45)");
  const scrollColor = useColorModeValue("#c0bcb8", "#383838");
  const btnOutlineColor = "#c8a97e";
  const btnSecondaryColor = useColorModeValue("#999", "#666");
  const btnSecondaryHover = useColorModeValue("#0c0c0c", "#f5f5f5");

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <Box id="home" minH="100vh" pt="80px" position="relative" overflow="hidden" bg={bg}>
      {/* Subtle grid */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage={`linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`}
        backgroundSize="72px 72px"
        pointerEvents="none"
      />

      <Flex
        maxW="1280px"
        mx="auto"
        px={{ base: 6, md: 10 }}
        minH="calc(100vh - 80px)"
        align="center"
        justify="space-between"
        direction={{ base: "column-reverse", lg: "row" }}
        gap={{ base: 14, lg: 0 }}
        pb={{ base: 20, lg: 0 }}
      >
        {/* Left */}
        <VStack align="flex-start" spacing={0} flex={1} maxW="560px">
          <MotionBox {...fadeUp(0)} mb={8}>
            <Text
              fontFamily="'JetBrains Mono', monospace"
              fontSize="11px"
              letterSpacing="0.28em"
              textTransform="uppercase"
              color="#c8a97e"
            >
              [ Frontend Developer ]
            </Text>
          </MotionBox>

          <VStack align="flex-start" spacing={0} mb={8}>
            <MotionBox {...fadeUp(0.12)}>
              <Text
                fontFamily="'Playfair Display', serif"
                fontSize={{ base: "58px", md: "80px", lg: "96px" }}
                fontWeight="400"
                lineHeight="0.95"
                color={namePrimary}
                letterSpacing="-0.025em"
              >
                Jyotirmaya
              </Text>
            </MotionBox>
            <MotionBox {...fadeUp(0.22)}>
              <Text
                fontFamily="'Playfair Display', serif"
                fontSize={{ base: "58px", md: "80px", lg: "96px" }}
                fontWeight="400"
                fontStyle="italic"
                lineHeight="1.05"
                color="#c8a97e"
                letterSpacing="-0.025em"
              >
                Pati.
              </Text>
            </MotionBox>
          </VStack>

          <MotionBox {...fadeUp(0.36)} w="52px" h="1px" bg={useColorModeValue("#d8d5cf", "#252525")} mb={8} />

          <MotionBox {...fadeUp(0.44)} mb={10} maxW="400px">
            <Text
              fontFamily="'Inter', sans-serif"
              fontSize="16px"
              lineHeight="1.85"
              color={descColor}
              fontWeight="300"
            >
              Crafting pixel-perfect, performant web experiences. Obsessed with
              interaction design, frontend architecture, and products that feel
              as precise as they look.
            </Text>
          </MotionBox>

          <MotionBox {...fadeUp(0.52)}>
            <HStack spacing={7} align="center">
              <Box
                as="button"
                px={8}
                py="13px"
                border="1px solid"
                borderColor={btnOutlineColor}
                color={btnOutlineColor}
                fontFamily="'JetBrains Mono', monospace"
                fontSize="10px"
                letterSpacing="0.22em"
                textTransform="uppercase"
                cursor="pointer"
                bg="transparent"
                _hover={{ bg: "#c8a97e", color: bg }}
                transition="all 0.3s ease"
                onClick={() => scrollTo("projects")}
              >
                View Work
              </Box>
              <Box
                as="button"
                color={btnSecondaryColor}
                fontFamily="'JetBrains Mono', monospace"
                fontSize="10px"
                letterSpacing="0.22em"
                textTransform="uppercase"
                cursor="pointer"
                bg="transparent"
                border="none"
                _hover={{ color: btnSecondaryHover }}
                transition="color 0.25s"
                onClick={() => scrollTo("contact")}
              >
                Get in touch →
              </Box>
            </HStack>
          </MotionBox>
        </VStack>

        {/* Right: Photo */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.2, ease }}
          position="relative"
          flexShrink={0}
          mt={{ base: 20, lg: 0 }}
        >
          <Box
            position="relative"
            w={{ base: "240px", md: "310px", lg: "370px" }}
            h={{ base: "300px", md: "390px", lg: "470px" }}
          >
            <Box
              position="absolute"
              top="18px"
              right="-18px"
              w="100%"
              h="100%"
              border="1px solid"
              borderColor={offsetBorder}
              zIndex={0}
            />
            <Box position="relative" zIndex={1} w="100%" h="100%" overflow="hidden">
              <Box
                as="img"
                src={myImage}
                alt="Jyotirmaya Pati"
                w="100%"
                h="100%"
                objectFit="cover"
                filter="grayscale(15%) contrast(1.06)"
                display="block"
              />
              <Box
                position="absolute"
                inset={0}
                bgGradient={`linear(to-t, ${photoOverlay} 0%, transparent 55%)`}
              />
            </Box>
          </Box>
        </MotionBox>
      </Flex>

      {/* Scroll indicator */}
      <MotionBox
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        display={{ base: "none", md: "flex" }}
        flexDirection="column"
        alignItems="center"
        gap={2}
      >
        <Text
          fontFamily="'JetBrains Mono', monospace"
          fontSize="9px"
          letterSpacing="0.3em"
          textTransform="uppercase"
          color={scrollColor}
        >
          Scroll
        </Text>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Box w="1px" h="44px" bgGradient={`linear(to-b, ${scrollColor}, transparent)`} />
        </motion.div>
      </MotionBox>
    </Box>
  );
};

export default Hero;
