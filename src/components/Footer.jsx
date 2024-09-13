import { Box, Text, Link, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <Box bg="brand.500" py={6} mt={20}>
            <Flex justifyContent="center" alignItems="center">
                <Link href="https://github.com/yourgithub" isExternal mx={2}>
                    <FaGithub color="white" size="1.5em" />
                </Link>
                <Link href="https://linkedin.com/in/yourlinkedin" isExternal mx={2}>
                    <FaLinkedin color="white" size="1.5em" />
                </Link>
                <Link href="https://twitter.com/yourtwitter" isExternal mx={2}>
                    <FaTwitter color="white" size="1.5em" />
                </Link>
            </Flex>
            <Text color="white" textAlign="center" mt={4}>
                © {new Date().getFullYear()} Your Name. All rights reserved.
            </Text>
        </Box>
    );
};

export default Footer;
