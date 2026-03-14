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
    { icon: FaLinkedin, label: "LinkedIn", value: "Joshua Alana", href: "https://www.linkedin.com/in/joshua-a-5760b3196/" },
    { icon: FaGithub, label: "GitHub", value: "Joshua-Coded", href: "https://github.com/Joshua-Coded" },
    { icon: FaEnvelope, label: "Email", value: "joshuaalana1220@gmail.com", href: "mailto:joshuaalana1220@gmail.com" },
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
        toast({ title: 'Message sent!', description: "I'll respond within 48 hours.", status: 'success', duration: 5000, isClosable: true, position: 'top' })
        setFormData({ name: '', organisation: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Failed')
      }
    } catch {
      toast({ title: 'Failed to send', description: 'Please email me directly at joshuaalana1220@gmail.com', status: 'error', duration: 5000, isClosable: true, position: 'top' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputStyles = {
    bg: "white",
    borderColor: "gray.300",
    _hover: { borderColor: 'brand.primary' },
    _focus: { borderColor: 'brand.primary', boxShadow: '0 0 0 1px #2563EB' },
    color: "gray.800",
  }

  return (
    <Box minH="100vh" bg="gray.50" pt={32} pb={20}>
      <Container maxW="container.xl">
        <VStack spacing={4} align="flex-start" mb={16}>
          <Text fontSize="xs" fontWeight="700" color="brand.primary" letterSpacing="widest" textTransform="uppercase">
            Let's Talk
          </Text>
          <Heading as="h1" fontSize={{ base: "4xl", md: "5xl" }} fontWeight="800" color="gray.900" letterSpacing="-0.02em">
            Get In Touch
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl" lineHeight="tall">
            Whether you're looking for a technology partner, a consultant for your next program,
            or want to discuss agricultural data systems — I'd love to connect.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
          {/* Form */}
          <Box>
            <Heading as="h2" size="md" fontWeight="700" color="gray.900" mb={6}>
              Send a Message
            </Heading>
            <Box
              as="form"
              onSubmit={handleSubmit}
              bg="white"
              borderWidth={1}
              borderColor="gray.200"
              rounded="xl"
              p={8}
              boxShadow="sm"
            >
              <VStack spacing={5}>
                <FormControl isRequired>
                  <FormLabel color="gray.700" fontSize="sm" fontWeight="600">Full Name</FormLabel>
                  <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" {...inputStyles} />
                </FormControl>

                <FormControl>
                  <FormLabel color="gray.700" fontSize="sm" fontWeight="600">Organisation</FormLabel>
                  <Input name="organisation" value={formData.organisation} onChange={handleChange} placeholder="IFAD, AGRA, AU, NGO..." {...inputStyles} />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="gray.700" fontSize="sm" fontWeight="600">Email</FormLabel>
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@organisation.org" {...inputStyles} />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="gray.700" fontSize="sm" fontWeight="600">Enquiry Type</FormLabel>
                  <Select name="subject" value={formData.subject} onChange={handleChange} placeholder="Select enquiry type" {...inputStyles}>
                    <option value="Consultancy / Project">Consultancy / Project</option>
                    <option value="M&E System Design">M&E System Design</option>
                    <option value="Data Systems & Analytics">Data Systems & Analytics</option>
                    <option value="Tech Product Development">Tech Product Development</option>
                    <option value="Partnership / Collaboration">Partnership / Collaboration</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="gray.700" fontSize="sm" fontWeight="600">Message</FormLabel>
                  <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Describe your project or enquiry..." rows={6} {...inputStyles} />
                </FormControl>

                <Button
                  type="submit"
                  w="full"
                  size="lg"
                  bg="brand.primary"
                  color="white"
                  fontWeight="semibold"
                  isLoading={isSubmitting}
                  _hover={{ bg: 'blue.700', transform: 'translateY(-1px)', boxShadow: 'md' }}
                  transition="all 0.2s"
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
          </Box>

          {/* Right column */}
          <VStack spacing={6} align="stretch">
            <Box>
              <Heading as="h2" size="md" fontWeight="700" color="gray.900" mb={5}>
                Connect
              </Heading>
              <VStack spacing={3} align="stretch">
                {socialLinks.map((social) => (
                  <ChakraLink key={social.label} href={social.href} isExternal _hover={{ textDecoration: 'none' }}>
                    <Flex
                      align="center"
                      gap={4}
                      p={4}
                      bg="white"
                      borderWidth={1}
                      borderColor="gray.200"
                      rounded="lg"
                      boxShadow="sm"
                      transition="all 0.2s"
                      _hover={{ borderColor: 'blue.300', boxShadow: 'md', transform: 'translateX(3px)' }}
                    >
                      <Flex w={9} h={9} rounded="lg" bg="blue.50" align="center" justify="center" flexShrink={0}>
                        <Icon as={social.icon} boxSize={4} color="brand.primary" />
                      </Flex>
                      <Box>
                        <Text fontWeight="600" color="gray.900" fontSize="sm">{social.label}</Text>
                        <Text fontSize="xs" color="gray.500">{social.value}</Text>
                      </Box>
                    </Flex>
                  </ChakraLink>
                ))}
              </VStack>
            </Box>

            <Box bg="white" borderWidth={1} borderColor="gray.200" rounded="xl" p={7} boxShadow="sm">
              <Heading as="h3" size="sm" fontWeight="700" color="gray.900" mb={4}>
                Open to opportunities in:
              </Heading>
              <VStack align="flex-start" spacing={2}>
                {[
                  "Technology consultancy for development programs",
                  "Data systems design and implementation",
                  "M&E framework development",
                  "Agricultural ICT advisory roles",
                  "Research partnerships and collaborations",
                ].map((item) => (
                  <Flex key={item} align="center" gap={2}>
                    <Box w={1.5} h={1.5} rounded="full" bg="brand.secondary" flexShrink={0} />
                    <Text fontSize="sm" color="gray.600">{item}</Text>
                  </Flex>
                ))}
              </VStack>
            </Box>

            <Box bg="blue.50" borderWidth={1} borderColor="blue.100" rounded="xl" p={7}>
              <Text fontSize="md" color="gray.700" mb={3} fontStyle="italic" lineHeight="tall">
                "Technology that does not serve people and communities is just expensive noise."
              </Text>
              <Text color="brand.primary" fontWeight="700" fontSize="sm">— Joshua Alana</Text>
            </Box>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
