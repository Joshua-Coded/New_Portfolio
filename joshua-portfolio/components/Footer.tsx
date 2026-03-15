'use client'

import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
  VStack,
  HStack,
  Icon,
  Link as ChakraLink,
  Divider,
  Badge,
} from '@chakra-ui/react'
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaArrowRight,
} from 'react-icons/fa'
import Link from 'next/link'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/joshua-a-5760b3196/',
    label: 'LinkedIn',
    color: '#0A66C2',
  },
  {
    icon: FaGithub,
    href: 'https://github.com/Joshua-Coded',
    label: 'GitHub',
    color: '#fff',
  },
  {
    icon: FaEnvelope,
    href: 'mailto:alanajoshua535@gmail.com',
    label: 'Email',
    color: '#60A5FA',
  },
]

export default function Footer() {
  return (
    <Box as="footer" bg="#0B1120" position="relative" overflow="hidden">
      {/* Background glow */}
      <Box
        position="absolute" top="-100px" left="50%"
        transform="translateX(-50%)"
        w="800px" h="300px"
        bgGradient="radial(ellipse, rgba(29,78,216,0.15) 0%, transparent 70%)"
        pointerEvents="none"
      />
      <Box
        position="absolute" inset={0}
        bgImage="linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)"
        bgSize="60px 60px"
        pointerEvents="none"
      />

      <Container maxW="container.xl" position="relative">

        {/* Top CTA band */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          borderBottom="1px solid rgba(255,255,255,0.07)"
          py={10}
          gap={5}
        >
          <Box>
            <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="800"
              color="white" letterSpacing="-0.025em" mb={1}>
              Open to new engagements
            </Text>
            <Text fontSize="sm" color="gray.500">
              Consultancy, advisory roles, and development technology projects across Africa.
            </Text>
          </Box>
          <ChakraLink
            as={Link}
            href="/contact"
            display="inline-flex"
            alignItems="center"
            gap={2}
            bgGradient="linear(135deg, #1D4ED8, #2563EB)"
            color="white"
            px={7}
            py={3.5}
            rounded="xl"
            fontSize="sm"
            fontWeight="700"
            flexShrink={0}
            _hover={{
              bgGradient: 'linear(135deg, #1e40af, #1D4ED8)',
              textDecoration: 'none',
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 32px rgba(29,78,216,0.4)',
            }}
            transition="all 0.2s"
          >
            Start a Conversation
            <Icon as={FaArrowRight} boxSize={3.5} />
          </ChakraLink>
        </Flex>

        {/* Main footer grid */}
        <Grid
          templateColumns={{ base: '1fr', md: '2fr 1fr 1fr' }}
          gap={{ base: 10, md: 16 }}
          py={14}
          borderBottom="1px solid rgba(255,255,255,0.06)"
        >
          {/* Brand column */}
          <GridItem>
            <Text fontWeight="800" fontSize="xl" color="white"
              letterSpacing="-0.03em" mb={3}>
              Joshua Alana
            </Text>
            <Text fontSize="sm" color="gray.500" lineHeight="1.9" maxW="300px" mb={6}>
              IT Consultant at AGRA building technology products and data
              systems for agricultural transformation across Sub-Saharan Africa
              under the AFS Forum (AFSF).
            </Text>

            {/* Availability */}
            <Flex align="center" gap={2} mb={6}>
              <Box w={2} h={2} rounded="full" bg="green.400" flexShrink={0}
                sx={{ animation: 'pulse 2s infinite' }} />
              <Text fontSize="xs" color="green.400" fontWeight="600">
                Available for engagements
              </Text>
            </Flex>

            {/* Social icons */}
            <HStack spacing={3}>
              {socialLinks.map((s) => (
                <ChakraLink
                  key={s.label}
                  href={s.href}
                  isExternal
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w={9}
                  h={9}
                  rounded="lg"
                  bg="whiteAlpha.100"
                  border="1px solid rgba(255,255,255,0.07)"
                  _hover={{
                    bg: 'whiteAlpha.200',
                    borderColor: 'rgba(255,255,255,0.15)',
                    transform: 'translateY(-2px)',
                    textDecoration: 'none',
                  }}
                  transition="all 0.2s"
                  aria-label={s.label}
                >
                  <Icon as={s.icon} boxSize={4} color="gray.400" />
                </ChakraLink>
              ))}
            </HStack>
          </GridItem>

          {/* Navigation */}
          <GridItem>
            <Text fontSize="xs" fontWeight="700" color="gray.600"
              letterSpacing="widest" textTransform="uppercase" mb={5}>
              Navigation
            </Text>
            <VStack align="flex-start" spacing={3}>
              {navLinks.map((link) => (
                <ChakraLink
                  key={link.href}
                  as={Link}
                  href={link.href}
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="500"
                  _hover={{ color: 'white', textDecoration: 'none' }}
                  transition="color 0.15s"
                >
                  {link.label}
                </ChakraLink>
              ))}
            </VStack>
          </GridItem>

          {/* Contact info */}
          <GridItem>
            <Text fontSize="xs" fontWeight="700" color="gray.600"
              letterSpacing="widest" textTransform="uppercase" mb={5}>
              Contact
            </Text>
            <VStack align="flex-start" spacing={4}>
              <Flex align="flex-start" gap={3}>
                <Flex w={7} h={7} rounded="md" bg="whiteAlpha.100"
                  align="center" justify="center" flexShrink={0} mt={0.5}>
                  <Icon as={FaMapMarkerAlt} boxSize={3} color="gray.500" />
                </Flex>
                <Box>
                  <Text fontSize="sm" color="gray.300" fontWeight="500">Nairobi, Kenya</Text>
                  <Text fontSize="xs" color="gray.600">EAT · UTC+3</Text>
                </Box>
              </Flex>
              <Flex align="flex-start" gap={3}>
                <Flex w={7} h={7} rounded="md" bg="whiteAlpha.100"
                  align="center" justify="center" flexShrink={0} mt={0.5}>
                  <Icon as={FaEnvelope} boxSize={3} color="gray.500" />
                </Flex>
                <Box>
                  <ChakraLink
                    href="mailto:alanajoshua535@gmail.com"
                    fontSize="sm" color="gray.300" fontWeight="500"
                    _hover={{ color: 'white', textDecoration: 'none' }}
                    transition="color 0.15s"
                  >
                    alanajoshua535@gmail.com
                  </ChakraLink>
                  <Text fontSize="xs" color="gray.600">Responds within 48h</Text>
                </Box>
              </Flex>
              <Flex align="flex-start" gap={3}>
                <Flex w={7} h={7} rounded="md" bg="whiteAlpha.100"
                  align="center" justify="center" flexShrink={0} mt={0.5}>
                  <Icon as={FaLinkedin} boxSize={3} color="gray.500" />
                </Flex>
                <Box>
                  <ChakraLink
                    href="https://www.linkedin.com/in/joshua-a-5760b3196/"
                    isExternal
                    fontSize="sm" color="gray.300" fontWeight="500"
                    _hover={{ color: 'white', textDecoration: 'none' }}
                    transition="color 0.15s"
                  >
                    LinkedIn Profile
                  </ChakraLink>
                  <Text fontSize="xs" color="gray.600">in/joshua-a-5760b3196</Text>
                </Box>
              </Flex>
            </VStack>
          </GridItem>
        </Grid>

        {/* Bottom bar */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          py={6}
          gap={3}
        >
          <Text fontSize="xs" color="gray.600">
            © {new Date().getFullYear()} Joshua Alana. All rights reserved.
          </Text>
          <HStack spacing={4} divider={<Text color="gray.700">·</Text>}>
            <Text fontSize="xs" color="gray.600">IT Consultant</Text>
            <Text fontSize="xs" color="gray.600">AGRA · AFSF</Text>
            <Text fontSize="xs" color="gray.600">Nairobi, Kenya</Text>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
