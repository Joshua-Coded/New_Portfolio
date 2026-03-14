'use client'

import {
  Box, Flex, HStack, Link as ChakraLink, IconButton,
  useDisclosure, Stack, Container, Text, Button,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()
  const pathname = usePathname()

  const links = [
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Work' },
    { href: '/expertise', label: 'Expertise' },
    { href: '/projects', label: 'Projects' },
  ]

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      w="full"
      bg="rgba(255,255,255,0.92)"
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
            letterSpacing="-0.02em"
            _hover={{ textDecoration: 'none', color: 'brand.primary' }}
            transition="color 0.15s"
          >
            Joshua Alana
          </ChakraLink>

          {/* Desktop links */}
          <HStack as="nav" spacing={1} display={{ base: 'none', md: 'flex' }}>
            {links.map((link) => {
              const active = pathname === link.href
              return (
                <ChakraLink
                  key={link.href}
                  as={Link}
                  href={link.href}
                  px={4}
                  py={2}
                  rounded="md"
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

          {/* CTA */}
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
              _hover={{ bg: '#1e40af', boxShadow: '0 4px 12px rgba(29,78,216,0.3)' }}
              transition="all 0.15s"
            >
              Contact
            </Button>
          </HStack>

          <IconButton
            size="sm"
            icon={isOpen ? <CloseIcon boxSize={3} /> : <HamburgerIcon boxSize={4} />}
            aria-label="Toggle Navigation"
            display={{ md: 'none' }}
            onClick={onToggle}
            variant="ghost"
            color="gray.600"
          />
        </Flex>

        {/* Mobile menu */}
        {isOpen && (
          <Box pb={4} display={{ md: 'none' }} bg="white" borderTop="1px" borderColor="gray.100" mt={1}>
            <Stack spacing={1} px={1}>
              {[...links, { href: '/contact', label: 'Contact' }].map((link) => (
                <ChakraLink
                  key={link.href}
                  as={Link}
                  href={link.href}
                  display="block"
                  px={3}
                  py={2.5}
                  rounded="md"
                  color="gray.700"
                  fontWeight="500"
                  fontSize="sm"
                  _hover={{ color: 'brand.primary', bg: 'blue.50', textDecoration: 'none' }}
                  onClick={onToggle}
                >
                  {link.label}
                </ChakraLink>
              ))}
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  )
}
