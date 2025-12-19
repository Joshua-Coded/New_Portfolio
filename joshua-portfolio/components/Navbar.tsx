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
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Work' },
    { href: '/content', label: 'Content' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      w="full"
      bg="rgba(15, 23, 42, 0.8)"
      backdropFilter="blur(10px)"
      borderBottom="1px"
      borderColor="whiteAlpha.200"
      zIndex={1000}
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <ChakraLink
            as={Link}
            href="/"
            fontFamily="mono"
            fontSize="xl"
            fontWeight="bold"
            _hover={{ textDecoration: 'none' }}
          >
            <Text as="span" color="brand.primary">$</Text> joshua.alana
          </ChakraLink>

          <HStack as="nav" spacing={8} display={{ base: 'none', md: 'flex' }}>
            {links.map((link) => (
              <ChakraLink
                key={link.href}
                as={Link}
                href={link.href}
                color="whiteAlpha.800"
                fontWeight="medium"
                _hover={{
                  color: 'brand.primary',
                  textDecoration: 'none',
                }}
                transition="color 0.2s"
              >
                {link.label}
              </ChakraLink>
            ))}
          </HStack>

          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle Navigation"
            display={{ md: 'none' }}
            onClick={onToggle}
            variant="ghost"
            color="whiteAlpha.800"
            _hover={{ bg: 'whiteAlpha.100' }}
          />
        </Flex>

        {isOpen && (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              {links.map((link) => (
                <ChakraLink
                  key={link.href}
                  as={Link}
                  href={link.href}
                  color="whiteAlpha.800"
                  _hover={{
                    color: 'brand.primary',
                    textDecoration: 'none',
                  }}
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
