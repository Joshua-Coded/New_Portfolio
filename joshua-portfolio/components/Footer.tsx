'use client'

import {
  Box,
  Container,
  Flex,
  HStack,
  Link as ChakraLink,
  Text,
  Divider,
  VStack,
  Icon,
} from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/joshua-a-5760b3196/',
    label: 'LinkedIn',
  },
  {
    icon: FaGithub,
    href: 'https://github.com/Joshua-Coded',
    label: 'GitHub',
  },
  {
    icon: FaEnvelope,
    href: 'mailto:alanajoshua535@gmail.com',
    label: 'Email',
  },
]

export default function Footer() {
  return (
    <Box as="footer" bg="white" borderTop="1px" borderColor="gray.200">
      <Container maxW="container.xl" py={12}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'flex-start', md: 'flex-start' }}
          gap={10}
          mb={10}
        >
          {/* Left: Brand */}
          <VStack align="flex-start" spacing={2} maxW="280px">
            <Text fontWeight="800" fontSize="md" color="gray.900" letterSpacing="-0.02em">
              Joshua Alana
            </Text>
            <Text fontSize="sm" color="gray.500" lineHeight="1.6">
              IT Consultant · M&E Specialist · Software Engineer
            </Text>
            <Flex align="center" gap={1.5} mt={1}>
              <Box w={2} h={2} rounded="full" bg="green.500" />
              <Text fontSize="xs" color="gray.500" fontWeight="500">
                Available for consultancy
              </Text>
            </Flex>
          </VStack>

          {/* Center: Nav Links */}
          <VStack align="flex-start" spacing={3}>
            <Text fontSize="xs" fontWeight="700" color="gray.400" letterSpacing="widest" textTransform="uppercase" mb={1}>
              Navigation
            </Text>
            {navLinks.map((link) => (
              <ChakraLink
                key={link.href}
                as={Link}
                href={link.href}
                fontSize="sm"
                color="gray.600"
                fontWeight="500"
                _hover={{ color: 'brand.primary', textDecoration: 'none' }}
                transition="color 0.15s"
              >
                {link.label}
              </ChakraLink>
            ))}
          </VStack>

          {/* Right: Social */}
          <VStack align="flex-start" spacing={3}>
            <Text fontSize="xs" fontWeight="700" color="gray.400" letterSpacing="widest" textTransform="uppercase" mb={1}>
              Connect
            </Text>
            {socialLinks.map((social) => (
              <ChakraLink
                key={social.label}
                href={social.href}
                isExternal
                display="flex"
                alignItems="center"
                gap={2}
                fontSize="sm"
                color="gray.600"
                fontWeight="500"
                _hover={{ color: 'brand.primary', textDecoration: 'none' }}
                transition="color 0.15s"
              >
                <Icon as={social.icon} boxSize={4} />
                {social.label}
              </ChakraLink>
            ))}
          </VStack>
        </Flex>

        <Divider borderColor="gray.100" mb={6} />

        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={3}
        >
          <Text fontSize="xs" color="gray.400">
            © {new Date().getFullYear()} Joshua Alana. All rights reserved.
          </Text>
          <Text fontSize="xs" color="gray.400">
            IT Consultant · AGRA · Nairobi, Kenya
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}
