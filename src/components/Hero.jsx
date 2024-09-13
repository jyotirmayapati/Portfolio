import { motion } from "framer-motion";
import { Box, Heading, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import IntroSection from "./IntroSection";

const MotionBox = motion(Box);

const Hero = () => {
    const headingSize = useBreakpointValue({ base: "xl", md: "3xl" });
    const textSize = useBreakpointValue({ base: "lg", md: "xl" });

    return (
        <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            textAlign="center"
            py={{ base: 12, md: 24 }}
            px={4}
            bg={useColorModeValue("gray.50", "gray.800")}
            borderRadius="md"
            boxShadow="lg"
        >
            <IntroSection />
            <Heading
                as="h1"
                size={headingSize}
                mb={6}
                fontWeight="bold"
                color={useColorModeValue("gray.800", "white")}
                lineHeight="shorter"
            >
                Hello, I'm Your Jyotirmaya Pati
            </Heading>
            <Text
                fontSize={textSize}
                mb={6}
                color={useColorModeValue("gray.600", "gray.300")}
                maxW="md"
                mx="auto"
            >
                A Frontend Developer & Designer. Crafting beautiful and responsive web experiences.
            </Text>
        </MotionBox>
    );
};

export default Hero;
