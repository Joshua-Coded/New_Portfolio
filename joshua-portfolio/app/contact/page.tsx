"use client";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  HStack,
  Icon,
  Link as ChakraLink,
  useToast,
  Flex,
} from '@chakra-ui/react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const toast = useToast()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const socialLinks = [
    {
      icon: FaYoutube,
      label: "YouTube",
      value: "@joshualana",
      href: "https://youtube.com/@joshualana",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Joshua Alana",
      href: "https://www.linkedin.com/in/joshua-a-5760b3196/",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "Joshua-Coded",
      href: "https://github.com/Joshua-Coded",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "joshuaalana1220@gmail.com",
      href: "mailto:joshuaalana1220@gmail.com",
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: 'Message sent!',
          description: "I'll get back to you soon.",
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top',
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Failed to send')
      }
    } catch {
      toast({
        title: 'Failed to send',
        description: 'Please try again or email me directly at joshuaalana1220@gmail.com',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box minH="100vh" pt={32} pb={20}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="flex-start" mb={16}>
          <Heading as="h1" fontSize={{ base: "4xl", md: "6xl" }} fontWeight="black" fontFamily="mono">
            <Text as="span" color="brand.secondary">&gt;</Text> Get_In_Touch
          </Heading>
          <Text fontSize="xl" color="whiteAlpha.800" maxW="3xl">
            Let's build something amazing together or just talk tech
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
          <Box>
            <Heading as="h2" size="lg" color="brand.primary" mb={6}>
              Send a Message
            </Heading>
            <Box
              as="form"
              onSubmit={handleSubmit}
              bg="rgba(30, 41, 59, 0.5)"
              backdropFilter="blur(10px)"
              borderWidth={1}
              borderColor="whiteAlpha.200"
              rounded="xl"
              p={8}
            >
              <VStack spacing={6}>
                <FormControl isRequired>
                  <FormLabel color="whiteAlpha.800">Name</FormLabel>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    bg="rgba(15, 23, 42, 0.5)"
                    borderColor="whiteAlpha.300"
                    _hover={{ borderColor: 'brand.primary' }}
                    _focus={{
                      borderColor: 'brand.primary',
                      boxShadow: '0 0 0 1px var(--chakra-colors-brand-primary)',
                    }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="whiteAlpha.800">Email</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    bg="rgba(15, 23, 42, 0.5)"
                    borderColor="whiteAlpha.300"
                    _hover={{ borderColor: 'brand.primary' }}
                    _focus={{
                      borderColor: 'brand.primary',
                      boxShadow: '0 0 0 1px var(--chakra-colors-brand-primary)',
                    }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="whiteAlpha.800">Subject</FormLabel>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    bg="rgba(15, 23, 42, 0.5)"
                    borderColor="whiteAlpha.300"
                    _hover={{ borderColor: 'brand.primary' }}
                    _focus={{
                      borderColor: 'brand.primary',
                      boxShadow: '0 0 0 1px var(--chakra-colors-brand-primary)',
                    }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="whiteAlpha.800">Message</FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={6}
                    bg="rgba(15, 23, 42, 0.5)"
                    borderColor="whiteAlpha.300"
                    _hover={{ borderColor: 'brand.primary' }}
                    _focus={{
                      borderColor: 'brand.primary',
                      boxShadow: '0 0 0 1px var(--chakra-colors-brand-primary)',
                    }}
                  />
                </FormControl>

                <Button
                  type="submit"
                  w="full"
                  size="lg"
                  bgGradient="linear(to-r, brand.primary, brand.secondary)"
                  color="brand.navy"
                  fontWeight="bold"
                  isLoading={isSubmitting}
                  _hover={{
                    transform: 'scale(1.02)',
                  }}
                  transition="all 0.2s"
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
          </Box>

          <VStack spacing={8} align="stretch">
            <Box>
              <Heading as="h2" size="lg" color="brand.primary" mb={6}>
                Connect With Me
              </Heading>
              <VStack spacing={4} align="stretch">
                {socialLinks.map((social) => (
                  <ChakraLink
                    key={social.label}
                    href={social.href}
                    isExternal
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Flex
                      align="center"
                      gap={4}
                      p={4}
                      bg="rgba(30, 41, 59, 0.5)"
                      borderWidth={1}
                      borderColor="whiteAlpha.200"
                      rounded="lg"
                      transition="all 0.2s"
                      _hover={{
                        borderColor: 'brand.primary',
                        transform: 'translateX(4px)',
                      }}
                    >
                      <Icon as={social.icon} boxSize={6} color="brand.primary" />
                      <Box flex={1}>
                        <Text fontWeight="bold" color="white">
                          {social.label}
                        </Text>
                        <Text fontSize="sm" color="whiteAlpha.600">
                          {social.value}
                        </Text>
                      </Box>
                    </Flex>
                  </ChakraLink>
                ))}
              </VStack>
            </Box>

            <Box
              bg="rgba(30, 41, 59, 0.5)"
              borderWidth={1}
              borderColor="rgba(34, 211, 238, 0.2)"
              rounded="xl"
              p={8}
            >
              <Text fontSize="lg" color="whiteAlpha.800" mb={4} fontStyle="italic">
                "Building technology that solves actual problems, engaging stakeholders,
                and constantly experimenting with new tools."
              </Text>
              <Text color="brand.primary" fontWeight="bold">
                - Joshua Alana
              </Text>
            </Box>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
