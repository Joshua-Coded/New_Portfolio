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

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()

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
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      zIndex={1000}
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <ChakraLink
            as={Link}
            href="/"
            fontWeight="800"
            fontSize="lg"
            color="gray.900"
            letterSpacing="-0.02em"
            _hover={{ textDecoration: 'none', color: 'brand.primary' }}
            transition="color 0.2s"
          >
            Joshua Alana
          </ChakraLink>

          <HStack as="nav" spacing={8} display={{ base: 'none', md: 'flex' }}>
            {links.map((link) => (
              <ChakraLink
                key={link.href}
                as={Link}
                href={link.href}
                color="gray.600"
                fontWeight="medium"
                fontSize="sm"
                _hover={{ color: 'brand.primary', textDecoration: 'none' }}
                transition="color 0.2s"
              >
                {link.label}
              </ChakraLink>
            ))}
          </HStack>

          <HStack spacing={3} display={{ base: 'none', md: 'flex' }}>
            <Button
              as={Link}
              href="/contact"
              size="sm"
              bg="brand.primary"
              color="white"
              fontWeight="semibold"
              px={5}
              _hover={{ bg: 'blue.700' }}
            >
              Contact
            </Button>
          </HStack>

          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle Navigation"
            display={{ md: 'none' }}
            onClick={onToggle}
            variant="ghost"
            color="gray.600"
          />
        </Flex>

        {isOpen && (
          <Box pb={4} display={{ md: 'none' }} bg="white">
            <Stack as="nav" spacing={1}>
              {[...links, { href: '/contact', label: 'Contact' }].map((link) => (
                <ChakraLink
                  key={link.href}
                  as={Link}
                  href={link.href}
                  display="block"
                  px={3}
                  py={2}
                  rounded="md"
                  color="gray.700"
                  fontWeight="medium"
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
