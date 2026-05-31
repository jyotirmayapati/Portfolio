import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const borderColor = useColorModeValue("#e8e4de", "#141414");
  const textLeft = useColorModeValue("#c0bcb8", "#333");
  const textRight = useColorModeValue("#d8d5cf", "#282828");

  return (
    <Box borderTop="1px solid" borderColor={borderColor} py={7} px={{ base: 6, md: 10 }}>
      <Flex
        maxW="1280px"
        mx="auto"
        justify="space-between"
        align="center"
        direction={{ base: "column", md: "row" }}
        gap={3}
      >
        <Text fontFamily="'JetBrains Mono', monospace" fontSize="10px" letterSpacing="0.15em" color={textLeft}>
          © 2026 Jyotirmaya Pati
        </Text>
        <Text fontFamily="'JetBrains Mono', monospace" fontSize="10px" letterSpacing="0.15em" color={textRight}>
          Designed &amp; built with precision
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
