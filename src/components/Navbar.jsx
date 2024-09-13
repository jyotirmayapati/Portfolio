import { Box, Flex, Link, HStack, IconButton, Text, useColorModeValue, useBreakpointValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaHome, FaUser, FaProjectDiagram, FaCog, FaEnvelope } from "react-icons/fa";
import ColorModeSwitcher from "./ColorModeSwitcher";

const Navbar = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const displayText = useBreakpointValue({ base: "none", md: "inline" });

  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box as="nav" bg={bgColor} py={4} boxShadow="md">
      <Flex justifyContent="space-between" alignItems="center" maxW="1200px" mx="auto" px={4}>
        <HStack spacing={8}>
          <Link onClick={() => handleLinkClick('home')} color={textColor} display="flex" alignItems="center">
            <FaHome size="1.2em" />
            <Text ml={2} display={displayText}>Home</Text>
          </Link>
          <Link onClick={() => handleLinkClick('about')} color={textColor} display="flex" alignItems="center">
            <FaUser size="1.2em" />
            <Text ml={2} display={displayText}>About</Text>
          </Link>
          <Link onClick={() => handleLinkClick('projects')} color={textColor} display="flex" alignItems="center">
            <FaProjectDiagram size="1.2em" />
            <Text ml={2} display={displayText}>Projects</Text>
          </Link>
          <Link onClick={() => handleLinkClick('skills')} color={textColor} display="flex" alignItems="center">
            <FaCog size="1.2em" />
            <Text ml={2} display={displayText}>Skills</Text>
          </Link>
          <Link onClick={() => handleLinkClick('contact')} color={textColor} display="flex" alignItems="center">
            <FaEnvelope size="1.2em" />
            <Text ml={2} display={displayText}>Contact</Text>
          </Link>
        </HStack>
        <HStack spacing={4}>
          <IconButton
            as="a"
            href="https://github.com/jyotirmayapati"
            aria-label="GitHub"
            icon={<FaGithub size="1.5em" />}
            isRound
            variant="ghost"
            color={textColor}
            _hover={{ bg: useColorModeValue("gray.200", "gray.600") }}
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/jyotirmaya-pati-17213a20b/"
            aria-label="LinkedIn"
            icon={<FaLinkedin size="1.5em" />}
            isRound
            variant="ghost"
            color={textColor}
            _hover={{ bg: useColorModeValue("gray.200", "gray.600") }}
          />
          <IconButton
            as="a"
            href="https://x.com/jyotirmayapati1"
            aria-label="Twitter"
            icon={<FaTwitter size="1.5em" />}
            isRound
            variant="ghost"
            color={textColor}
            _hover={{ bg: useColorModeValue("gray.200", "gray.600") }}
          />
          <ColorModeSwitcher />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
