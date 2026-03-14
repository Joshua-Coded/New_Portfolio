"use client";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

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
  Icon,
  Link as ChakraLink,
  useToast,
  Flex,
  Select,
} from '@chakra-ui/react'

interface FormData {
  name: string
  organisation: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const toast = useToast()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    organisation: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const socialLinks = [
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          description: "Thank you for reaching out. I'll respond within 48 hours.",
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top',
        })
        setFormData({ name: '', organisation: '', email: '', subject: '', message: '' })
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
            Whether you're looking for a technology partner, a consultant for your next program,
            or want to discuss agricultural data systems — I'd love to connect.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
          {/* Form */}
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
              <VStack spacing={5}>
                <FormControl isRequired>
                  <FormLabel color="whiteAlpha.800">Full Name</FormLabel>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    bg="rgba(15, 23, 42, 0.5)"
                    borderColor="whiteAlpha.300"
                    _hover={{ borderColor: 'brand.primary' }}
                    _focus={{ borderColor: 'brand.primary', boxShadow: '0 0 0 1px var(--chakra-colors-brand-primary)' }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel color="whiteAlpha.800">Organisation</FormLabel>
                  <Input
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    placeholder="IFAD, AGRA, AU, NGO..."
                    bg="rgba(15, 23, 42, 0.5)"
                    borderColor="whiteAlpha.300"
                    _hover={{ borderColor: 'brand.primary' }}
                    _focus={{ borderColor: 'brand.primary', boxShadow: '0 0 0 1px var(--chakra-colors-brand-primary)' }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="whiteAlpha.800">Email</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@organisation.org"
                    bg="rgba(15, 23, 42, 0.5)"
                    borderColor="whiteAlpha.300"
                    _hover={{ borderColor: 'brand.primary' }}
                    _focus={{ borderColor: 'brand.primary', boxShadow: '0 0 0 1px var(--chakra-colors-brand-primary)' }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="whiteAlpha.800">Enquiry Type</FormLabel>
                  <Select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Select enquiry type"
                    bg="rgba(15, 23, 42, 0.5)"
                    borderColor="whiteAlpha.300"
                    _hover={{ borderColor: 'brand.primary' }}
                    _focus={{ borderColor: 'brand.primary', boxShadow: '0 0 0 1px var(--chakra-colors-brand-primary)' }}
                  >
                    <option value="Consultancy / Project">Consultancy / Project</option>
                    <option value="M&E System Design">M&E System Design</option>
                    <option value="Data Systems & Analytics">Data Systems & Analytics</option>
                    <option value="Tech Product Development">Tech Product Development</option>
                    <option value="Partnership / Collaboration">Partnership / Collaboration</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="whiteAlpha.800">Message</FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project or enquiry..."
                    rows={6}
                    bg="rgba(15, 23, 42, 0.5)"
                    borderColor="whiteAlpha.300"
                    _hover={{ borderColor: 'brand.primary' }}
                    _focus={{ borderColor: 'brand.primary', boxShadow: '0 0 0 1px var(--chakra-colors-brand-primary)' }}
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
                  _hover={{ transform: 'scale(1.02)' }}
                  transition="all 0.2s"
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
          </Box>

          {/* Right column */}
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading as="h2" size="lg" color="brand.primary" mb={6}>
                Connect
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
              borderColor="rgba(59, 130, 246, 0.2)"
              rounded="xl"
              p={8}
            >
              <Heading as="h3" size="md" color="brand.secondary" mb={4}>
                Open to opportunities in:
              </Heading>
              <VStack align="flex-start" spacing={2} color="whiteAlpha.800" fontSize="sm">
                {[
                  "Technology consultancy for development programs",
                  "Data systems design and implementation",
                  "M&E framework development",
                  "Agricultural ICT advisory roles",
                  "Research partnerships and collaborations",
                ].map((item) => (
                  <Text key={item}>→ {item}</Text>
                ))}
              </VStack>
            </Box>

            <Box
              bg="rgba(30, 41, 59, 0.5)"
              borderWidth={1}
              borderColor="rgba(59, 130, 246, 0.2)"
              rounded="xl"
              p={8}
            >
              <Text fontSize="lg" color="whiteAlpha.800" mb={4} fontStyle="italic">
                "Technology that does not serve people and communities is just expensive noise."
              </Text>
              <Text color="brand.primary" fontWeight="bold">
                — Joshua Alana
              </Text>
            </Box>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
