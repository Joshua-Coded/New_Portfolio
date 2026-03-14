'use client'

import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  Stack,
  Container,
  Text,
  Button,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/projects', label: 'Projects' },
]

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()
  const pathname = usePathname()

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      w="full"
      bg="rgba(255,255,255,0.95)"
      backdropFilter="blur(12px)"
      borderBottom="1px"
      borderColor="gray.100"
      zIndex={1000}
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">

          {/* Logo */}
          <ChakraLink
            as={Link}
            href="/"
            fontWeight="800"
            fontSize="md"
            color="gray.900"
            letterSpacing="-0.025em"
            _hover={{ textDecoration: 'none', color: 'brand.primary' }}
            transition="color 0.15s"
          >
            Joshua Alana
          </ChakraLink>

          {/* Desktop Nav Links */}
          <HStack as="nav" spacing={1} display={{ base: 'none', md: 'flex' }}>
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <ChakraLink
                  key={link.href}
                  as={Link}
                  href={link.href}
                  px={4}
                  py={1.5}
                  rounded="full"
                  fontSize="sm"
                  fontWeight={active ? '600' : '500'}
                  color={active ? 'brand.primary' : 'gray.600'}
                  bg={active ? 'blue.50' : 'transparent'}
                  _hover={{ color: 'brand.primary', bg: 'blue.50', textDecoration: 'none' }}
                  transition="all 0.15s"
                >
                  {link.label}
                </ChakraLink>
              )
            })}
          </HStack>

          {/* Desktop CTA */}
          <HStack spacing={3} display={{ base: 'none', md: 'flex' }}>
            <Button
              as={Link}
              href="/contact"
              size="sm"
              bg="brand.primary"
              color="white"
              fontWeight="600"
              px={5}
              h="36px"
              fontSize="sm"
              rounded="md"
              _hover={{ bg: '#1e40af', boxShadow: '0 4px 14px rgba(29,78,216,0.35)', transform: 'translateY(-1px)' }}
              transition="all 0.15s"
            >
              Contact
            </Button>
          </HStack>

          {/* Mobile Hamburger */}
          <IconButton
            size="sm"
            icon={isOpen ? <CloseIcon boxSize={3} /> : <HamburgerIcon boxSize={4} />}
            aria-label="Toggle Navigation"
            display={{ md: 'none' }}
            onClick={onToggle}
            variant="ghost"
            color="gray.600"
            _hover={{ bg: 'gray.100' }}
          />
        </Flex>

        {/* Mobile Menu */}
        {isOpen && (
          <Box
            pb={4}
            display={{ md: 'none' }}
            bg="white"
            borderTop="1px"
            borderColor="gray.100"
            mt={1}
          >
            <Stack spacing={1} px={1}>
              {[...navLinks, { href: '/contact', label: 'Contact' }].map((link) => {
                const active = pathname === link.href
                return (
                  <ChakraLink
                    key={link.href}
                    as={Link}
                    href={link.href}
                    display="block"
                    px={3}
                    py={2.5}
                    rounded="md"
                    color={active ? 'brand.primary' : 'gray.700'}
                    fontWeight={active ? '600' : '500'}
                    fontSize="sm"
                    bg={active ? 'blue.50' : 'transparent'}
                    _hover={{ color: 'brand.primary', bg: 'blue.50', textDecoration: 'none' }}
                    onClick={onToggle}
                  >
                    {link.label}
                  </ChakraLink>
                )
              })}
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  )
}
