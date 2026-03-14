import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Box,
  Container,
  Flex,
  HStack,
  Link as ChakraLink,
  Text,
  Divider,
} from '@chakra-ui/react'

export default function Footer() {
  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/joshua-a-5760b3196/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/Joshua-Coded', label: 'GitHub' },
    { icon: FaEnvelope, href: 'mailto:joshuaalana1220@gmail.com', label: 'Email' },
  ]

  return (
    <Box as="footer" bg="white" borderTop="1px" borderColor="gray.200">
      <Container maxW="container.xl" py={10}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={6}
        >
          <Text fontWeight="700" color="gray.900" letterSpacing="-0.01em">
            Joshua Alana
          </Text>

          <HStack spacing={6}>
            {socialLinks.map((social) => (
              <ChakraLink
                key={social.label}
                href={social.href}
                isExternal
                aria-label={social.label}
                color="gray.400"
                _hover={{ color: 'brand.primary' }}
                transition="color 0.2s"
              >
                <social.icon size={20} />
              </ChakraLink>
            ))}
          </HStack>

          <Text fontSize="sm" color="gray.400">
            © {new Date().getFullYear()} Joshua Alana
          </Text>
        </Flex>

        <Divider my={6} borderColor="gray.100" />

        <Text fontSize="xs" color="gray.400" textAlign="center">
          IT Consultant · Software Engineer · M&E Specialist
        </Text>
      </Container>
    </Box>
  )
}
