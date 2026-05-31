import { useState } from "react";
import { Box, Flex, Text, HStack, Link, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

const MotionBox = motion(Box);

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Work", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const NavLink = ({ label, id }) => {
  const [hovered, setHovered] = useState(false);
  const textColor = useColorModeValue("#555", "#666");
  const textHover = useColorModeValue("#0c0c0c", "#f5f5f5");

  return (
    <Box
      position="relative"
      cursor="pointer"
      onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      pb="2px"
    >
      <Text
        fontFamily="'JetBrains Mono', monospace"
        fontSize="11px"
        letterSpacing="0.18em"
        textTransform="uppercase"
        color={hovered ? textHover : textColor}
        transition="color 0.25s ease"
        userSelect="none"
      >
        {label}
      </Text>
      <Box
        position="absolute"
        bottom={0}
        left={0}
        height="1px"
        bg="#c8a97e"
        width={hovered ? "100%" : "0%"}
        transition="width 0.3s cubic-bezier(0.22, 1, 0.36, 1)"
      />
    </Box>
  );
};

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navBg = useColorModeValue("rgba(248,247,244,0.88)", "rgba(10,10,10,0.82)");
  const borderColor = useColorModeValue("#e8e4de", "#161616");
  const logoColor = useColorModeValue("#0c0c0c", "#f5f5f5");
  const socialColor = useColorModeValue("#999", "#444");
  const socialHover = useColorModeValue("#0c0c0c", "#f5f5f5");
  const toggleColor = useColorModeValue("#888", "#555");
  const toggleHover = useColorModeValue("#0c0c0c", "#f5f5f5");

  return (
    <MotionBox
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      borderBottom="1px solid"
      borderColor={borderColor}
      backdropFilter="blur(24px)"
      bg={navBg}
    >
      <Flex
        maxW="1280px"
        mx="auto"
        px={{ base: 6, md: 10 }}
        py={5}
        justify="space-between"
        align="center"
      >
        <Text
          fontFamily="'Playfair Display', serif"
          fontSize="20px"
          fontWeight="400"
          color={logoColor}
          letterSpacing="0.04em"
          cursor="pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          userSelect="none"
        >
          JP
        </Text>

        <HStack spacing={10} display={{ base: "none", md: "flex" }}>
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.id} {...item} />
          ))}
        </HStack>

        <HStack spacing={6}>
          <Link
            href="https://github.com/jyotirmayapati"
            isExternal
            fontFamily="'JetBrains Mono', monospace"
            fontSize="10px"
            letterSpacing="0.18em"
            textTransform="uppercase"
            color={socialColor}
            _hover={{ color: socialHover }}
            transition="color 0.25s"
            display={{ base: "none", md: "block" }}
          >
            Github
          </Link>
          <Link
            href="https://www.linkedin.com/in/jyotirmaya-pati-17213a20b/"
            isExternal
            fontFamily="'JetBrains Mono', monospace"
            fontSize="10px"
            letterSpacing="0.18em"
            textTransform="uppercase"
            color={socialColor}
            _hover={{ color: socialHover }}
            transition="color 0.25s"
            display={{ base: "none", md: "block" }}
          >
            LinkedIn
          </Link>

          {/* Theme toggle */}
          <Box
            as="button"
            onClick={toggleColorMode}
            color={toggleColor}
            _hover={{ color: toggleHover }}
            transition="color 0.25s"
            bg="transparent"
            border="none"
            cursor="pointer"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={1}
          >
            {colorMode === "dark" ? <FiSun size="15px" /> : <FiMoon size="15px" />}
          </Box>
        </HStack>
      </Flex>
    </MotionBox>
  );
};

export default Navbar;
