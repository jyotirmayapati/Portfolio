import { useRef, useState } from "react";
import { Box, Flex, Text, HStack, VStack, useColorModeValue } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";

const MotionBox = motion(Box);

const ease = [0.22, 1, 0.36, 1];

const FormField = ({ label, type = "text", placeholder, isTextarea, borderDefault, borderFocus, inputColor, labelDefault }) => {
  const [focused, setFocused] = useState(false);

  const sharedStyle = {
    display: "block",
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${focused ? borderFocus : borderDefault}`,
    color: inputColor,
    fontFamily: "'Inter', sans-serif",
    fontSize: "16px",
    fontWeight: "300",
    padding: "12px 0",
    outline: "none",
    resize: "none",
    transition: "border-color 0.3s ease",
    boxSizing: "border-box",
  };

  return (
    <Box>
      <Text
        fontFamily="'JetBrains Mono', monospace"
        fontSize="9px"
        letterSpacing="0.22em"
        textTransform="uppercase"
        color={focused ? "#c8a97e" : labelDefault}
        mb={2}
        transition="color 0.3s"
      >
        {label}
      </Text>
      {isTextarea ? (
        <textarea
          placeholder={placeholder}
          rows={5}
          style={sharedStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          style={sharedStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      )}
    </Box>
  );
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const bg = useColorModeValue("#f2f1ee", "#080808");
  const dividerLine = useColorModeValue("#e8e4de", "#161616");
  const headingPrimary = useColorModeValue("#0c0c0c", "#f5f5f5");
  const borderDefault = useColorModeValue("#d8d5cf", "#1e1e1e");
  const inputColor = useColorModeValue("#0c0c0c", "#f5f5f5");
  const labelDefault = useColorModeValue("#b0aaa4", "#3a3a3a");
  const sidebarBorder = useColorModeValue("#e2dfd9", "#1a1a1a");
  const sidebarLabel = useColorModeValue("#b0aaa4", "#3a3a3a");
  const emailColor = useColorModeValue("#4a4a4a", "#c0c0c0");
  const socialColor = useColorModeValue("#999", "#666");
  const btnTextColor = useColorModeValue("#fff", "#0a0a0a");

  return (
    <Box id="contact" py={{ base: 24, md: 36 }} px={{ base: 6, md: 10 }} bg={bg} ref={ref}>
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
              [ 04 / Contact ]
            </Text>
            <Box flex={1} h="1px" bg={dividerLine} />
          </HStack>
          <Text
            fontFamily="'Playfair Display', serif"
            fontSize={{ base: "36px", md: "60px" }}
            fontWeight="400"
            color={headingPrimary}
            lineHeight="1.1"
            letterSpacing="-0.02em"
          >
            Let's build something{" "}
            <Text as="span" fontStyle="italic" color="#c8a97e">
              together.
            </Text>
          </Text>
        </MotionBox>

        <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 16, lg: 24 }} align="flex-start">
          {/* Form */}
          <MotionBox
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            flex={1}
          >
            <VStack spacing={10} align="stretch">
              <FormField
                label="Your Name"
                placeholder="John Doe"
                borderDefault={borderDefault}
                borderFocus="#c8a97e"
                inputColor={inputColor}
                labelDefault={labelDefault}
              />
              <FormField
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                borderDefault={borderDefault}
                borderFocus="#c8a97e"
                inputColor={inputColor}
                labelDefault={labelDefault}
              />
              <FormField
                label="Message"
                placeholder="Tell me about your project..."
                isTextarea
                borderDefault={borderDefault}
                borderFocus="#c8a97e"
                inputColor={inputColor}
                labelDefault={labelDefault}
              />
              <Box>
                <Box
                  as="button"
                  px={10}
                  py="14px"
                  bg="#c8a97e"
                  color={btnTextColor}
                  fontFamily="'JetBrains Mono', monospace"
                  fontSize="10px"
                  letterSpacing="0.22em"
                  textTransform="uppercase"
                  cursor="pointer"
                  fontWeight="500"
                  border="none"
                  _hover={{ bg: "#b89560" }}
                  transition="background 0.25s"
                >
                  Send Message
                </Box>
              </Box>
            </VStack>
          </MotionBox>

          {/* Sidebar */}
          <MotionBox
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.28, ease }}
            w={{ base: "100%", lg: "300px" }}
            flexShrink={0}
          >
            <VStack align="flex-start" spacing={0}>
              <Box borderTop="1px solid" borderColor={sidebarBorder} pt={7} pb={10} w="100%">
                <Text
                  fontFamily="'JetBrains Mono', monospace"
                  fontSize="9px"
                  letterSpacing="0.22em"
                  textTransform="uppercase"
                  color={sidebarLabel}
                  mb={3}
                >
                  Email
                </Text>
                <Text fontFamily="'Inter', sans-serif" fontSize="15px" color={emailColor} fontWeight="300">
                  jyotirmayapati70@email.com
                </Text>
              </Box>

              <Box borderTop="1px solid" borderColor={sidebarBorder} pt={7} w="100%">
                <Text
                  fontFamily="'JetBrains Mono', monospace"
                  fontSize="9px"
                  letterSpacing="0.22em"
                  textTransform="uppercase"
                  color={sidebarLabel}
                  mb={5}
                >
                  Social
                </Text>
                <VStack align="flex-start" spacing={4}>
                  {[
                    { label: "GitHub", url: "https://github.com/jyotirmayapati" },
                    { label: "LinkedIn", url: "https://www.linkedin.com/in/jyotirmaya-pati-17213a20b/" },
                    { label: "Twitter", url: "https://x.com/jyotirmayapati1" },
                  ].map((social) => (
                    <Text
                      key={social.label}
                      as="a"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      fontFamily="'Inter', sans-serif"
                      fontSize="15px"
                      color={socialColor}
                      fontWeight="300"
                      _hover={{ color: "#c8a97e" }}
                      transition="color 0.25s"
                    >
                      {social.label} →
                    </Text>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </MotionBox>
        </Flex>
      </Box>
    </Box>
  );
};

export default Contact;
