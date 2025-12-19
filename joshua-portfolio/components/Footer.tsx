import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

import {
  Box,
  Container,
  Flex,
  HStack,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react'

export default function Footer() {
  const socialLinks = [
    { icon: FaYoutube, href: 'https://youtube.com/@joshualana', label: 'YouTube' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/joshua-a-5760b3196/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/Joshua-Coded', label: 'GitHub' },
    { icon: FaEnvelope, href: 'mailto:joshuaalana1220@gmail.com', label: 'Email' },
  ]

  return (
    <Box as="footer" borderTop="1px" borderColor="whiteAlpha.200" py={12}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={6}
        >
          <Text fontFamily="mono" color="whiteAlpha.600">
            <Text as="span" color="brand.primary">$</Text> joshua.alana --version 2025
          </Text>

          <HStack spacing={6}>
            {socialLinks.map((social, i) => (
              <ChakraLink
                key={i}
                href={social.href}
                isExternal
                aria-label={social.label}
                color="whiteAlpha.600"
                _hover={{ color: 'brand.primary' }}
                transition="color 0.2s"
              >
                <social.icon size={24} />
              </ChakraLink>
            ))}
          </HStack>

          <Text fontSize="sm" color="whiteAlpha.500">
            © {new Date().getFullYear()} Joshua Alana
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}
