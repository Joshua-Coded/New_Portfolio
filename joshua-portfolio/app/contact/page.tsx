"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
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
  Divider,
  Grid,
  GridItem,
} from "@chakra-ui/react";

interface FormData {
  name: string;
  organisation: string;
  email: string;
  subject: string;
  message: string;
}

const socialLinks = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Joshua Alana",
    href: "https://www.linkedin.com/in/joshua-a-5760b3196/",
    accent: "#0A66C2",
    accentBg: "#EFF6FF",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "Joshua-Coded",
    href: "https://github.com/Joshua-Coded",
    accent: "#24292E",
    accentBg: "#F6F8FA",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "alanajoshua535@gmail.com",
    href: "mailto:alanajoshua535@gmail.com",
    accent: "#1D4ED8",
    accentBg: "#EFF6FF",
  },
];

const openTo = [
  "Technology consultancy for development programs",
  "Data systems design and implementation",
  "M&E framework development",
  "Agricultural ICT advisory roles",
  "Research partnerships and collaborations",
  "Training and capacity-building engagements",
];

export default function Contact() {
  const toast = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    organisation: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "I'll respond within 48 hours.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        setFormData({
          name: "",
          organisation: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed");
      }
    } catch {
      toast({
        title: "Failed to send",
        description: "Please email me directly at alanajoshua535@gmail.com",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles = {
    bg: "white",
    borderColor: "gray.200",
    _hover: { borderColor: "brand.primary" },
    _focus: { borderColor: "brand.primary", boxShadow: "0 0 0 1px #1D4ED8" },
    color: "gray.800",
    fontSize: "sm",
    h: "44px",
    rounded: "lg",
  };

  return (
    <Box minH="100vh" bg="gray.50" pt={{ base: 28, md: 32 }} pb={20}>
      <Container maxW="container.xl">

        {/* Header */}
        <VStack spacing={4} align="flex-start" mb={16}>
          <Text
            fontSize="xs"
            fontWeight="700"
            color="brand.primary"
            letterSpacing="widest"
            textTransform="uppercase"
          >
            Let&apos;s Talk
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="800"
            color="gray.900"
            letterSpacing="-0.03em"
          >
            Get In Touch
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl" lineHeight="1.8">
            Whether you&apos;re looking for a technology partner, a consultant for
            your next development program, or want to discuss agricultural data
            systems — I&apos;d love to connect.
          </Text>
        </VStack>

        <Grid templateColumns={{ base: "1fr", lg: "1fr 380px" }} gap={12} alignItems="flex-start">

          {/* LEFT: Form */}
          <GridItem>
            <Box
              bg="white"
              borderWidth={1}
              borderColor="gray.200"
              rounded="2xl"
              p={{ base: 6, md: 8 }}
              boxShadow="sm"
            >
              <Heading
                as="h2"
                fontSize="xl"
                fontWeight="700"
                color="gray.900"
                mb={2}
              >
                Send a Message
              </Heading>
              <Text fontSize="sm" color="gray.500" mb={7} lineHeight="1.7">
                Fill in the form and I&apos;ll get back to you within 48 hours.
              </Text>

              <Box as="form" onSubmit={handleSubmit}>
                <VStack spacing={5}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="full">
                    <FormControl isRequired>
                      <FormLabel
                        color="gray.700"
                        fontSize="xs"
                        fontWeight="700"
                        textTransform="uppercase"
                        letterSpacing="wide"
                        mb={1.5}
                      >
                        Full Name
                      </FormLabel>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        {...inputStyles}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel
                        color="gray.700"
                        fontSize="xs"
                        fontWeight="700"
                        textTransform="uppercase"
                        letterSpacing="wide"
                        mb={1.5}
                      >
                        Organisation
                      </FormLabel>
                      <Input
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                        placeholder="IFAD, AGRA, World Bank…"
                        {...inputStyles}
                      />
                    </FormControl>
                  </SimpleGrid>

                  <FormControl isRequired>
                    <FormLabel
                      color="gray.700"
                      fontSize="xs"
                      fontWeight="700"
                      textTransform="uppercase"
                      letterSpacing="wide"
                      mb={1.5}
                    >
                      Email Address
                    </FormLabel>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@organisation.org"
                      {...inputStyles}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel
                      color="gray.700"
                      fontSize="xs"
                      fontWeight="700"
                      textTransform="uppercase"
                      letterSpacing="wide"
                      mb={1.5}
                    >
                      Enquiry Type
                    </FormLabel>
                    <Select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Select enquiry type"
                      bg="white"
                      borderColor="gray.200"
                      _hover={{ borderColor: "brand.primary" }}
                      _focus={{ borderColor: "brand.primary", boxShadow: "0 0 0 1px #1D4ED8" }}
                      color="gray.800"
                      fontSize="sm"
                      h="44px"
                      rounded="lg"
                    >
                      <option value="Consultancy / Project">
                        Consultancy / Project
                      </option>
                      <option value="M&E System Design">
                        M&amp;E System Design
                      </option>
                      <option value="Data Systems & Analytics">
                        Data Systems &amp; Analytics
                      </option>
                      <option value="Tech Product Development">
                        Tech Product Development
                      </option>
                      <option value="Partnership / Collaboration">
                        Partnership / Collaboration
                      </option>
                      <option value="General Enquiry">General Enquiry</option>
                    </Select>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel
                      color="gray.700"
                      fontSize="xs"
                      fontWeight="700"
                      textTransform="uppercase"
                      letterSpacing="wide"
                      mb={1.5}
                    >
                      Message
                    </FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, program context, or enquiry…"
                      rows={6}
                      bg="white"
                      borderColor="gray.200"
                      _hover={{ borderColor: "brand.primary" }}
                      _focus={{ borderColor: "brand.primary", boxShadow: "0 0 0 1px #1D4ED8" }}
                      color="gray.800"
                      fontSize="sm"
                      rounded="lg"
                      resize="vertical"
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    w="full"
                    h="48px"
                    bg="brand.primary"
                    color="white"
                    fontWeight="600"
                    fontSize="sm"
                    isLoading={isSubmitting}
                    loadingText="Sending…"
                    _hover={{
                      bg: "#1e40af",
                      transform: "translateY(-1px)",
                      boxShadow: "0 8px 24px rgba(29,78,216,0.3)",
                    }}
                    transition="all 0.2s"
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </Box>
          </GridItem>

          {/* RIGHT: Info */}
          <GridItem>
            <VStack spacing={5} align="stretch">

              {/* Connect cards */}
              <Box>
                <Text
                  fontSize="xs"
                  fontWeight="700"
                  color="gray.400"
                  letterSpacing="widest"
                  textTransform="uppercase"
                  mb={4}
                >
                  Connect
                </Text>
                <VStack spacing={3} align="stretch">
                  {socialLinks.map((social) => (
                    <ChakraLink
                      key={social.label}
                      href={social.href}
                      isExternal
                      _hover={{ textDecoration: "none" }}
                    >
                      <Flex
                        align="center"
                        gap={4}
                        p={4}
                        bg="white"
                        borderWidth={1}
                        borderColor="gray.200"
                        rounded="xl"
                        boxShadow="sm"
                        transition="all 0.2s"
                        _hover={{
                          borderColor: "blue.200",
                          boxShadow: "md",
                          transform: "translateX(3px)",
                        }}
                      >
                        <Flex
                          w={10}
                          h={10}
                          rounded="lg"
                          bg={social.accentBg}
                          align="center"
                          justify="center"
                          flexShrink={0}
                        >
                          <Icon
                            as={social.icon}
                            boxSize={4}
                            color={social.accent}
                          />
                        </Flex>
                        <Box>
                          <Text
                            fontWeight="600"
                            color="gray.900"
                            fontSize="sm"
                          >
                            {social.label}
                          </Text>
                          <Text fontSize="xs" color="gray.500">
                            {social.value}
                          </Text>
                        </Box>
                        <Icon
                          as={FaEnvelope}
                          boxSize={3}
                          color="gray.300"
                          ml="auto"
                        />
                      </Flex>
                    </ChakraLink>
                  ))}
                </VStack>
              </Box>

              {/* Availability + location */}
              <Box
                bg="white"
                borderWidth={1}
                borderColor="gray.200"
                rounded="xl"
                p={6}
                boxShadow="sm"
              >
                <Text
                  fontSize="xs"
                  fontWeight="700"
                  color="gray.400"
                  letterSpacing="widest"
                  textTransform="uppercase"
                  mb={4}
                >
                  Availability
                </Text>
                <VStack align="flex-start" spacing={3} mb={5}>
                  <Flex align="center" gap={3}>
                    <Flex
                      w={8}
                      h={8}
                      rounded="md"
                      bg="green.50"
                      align="center"
                      justify="center"
                    >
                      <Box w={2} h={2} rounded="full" bg="green.500" />
                    </Flex>
                    <Box>
                      <Text fontSize="sm" fontWeight="600" color="gray.900">
                        Available for Engagements
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        Consultancy & advisory roles
                      </Text>
                    </Box>
                  </Flex>
                  <Flex align="center" gap={3}>
                    <Flex
                      w={8}
                      h={8}
                      rounded="md"
                      bg="blue.50"
                      align="center"
                      justify="center"
                    >
                      <Icon as={FaMapMarkerAlt} boxSize={3.5} color="brand.primary" />
                    </Flex>
                    <Box>
                      <Text fontSize="sm" fontWeight="600" color="gray.900">
                        Nairobi, Kenya
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        Open to remote & travel
                      </Text>
                    </Box>
                  </Flex>
                  <Flex align="center" gap={3}>
                    <Flex
                      w={8}
                      h={8}
                      rounded="md"
                      bg="purple.50"
                      align="center"
                      justify="center"
                    >
                      <Icon as={FaClock} boxSize={3.5} color="purple.600" />
                    </Flex>
                    <Box>
                      <Text fontSize="sm" fontWeight="600" color="gray.900">
                        Responds within 48h
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        EAT timezone (UTC+3)
                      </Text>
                    </Box>
                  </Flex>
                </VStack>

                <Divider borderColor="gray.100" mb={5} />

                <Text
                  fontSize="xs"
                  fontWeight="700"
                  color="gray.400"
                  letterSpacing="widest"
                  textTransform="uppercase"
                  mb={3}
                >
                  Open to opportunities in
                </Text>
                <VStack align="flex-start" spacing={2}>
                  {openTo.map((item) => (
                    <Flex key={item} align="flex-start" gap={2}>
                      <Box
                        w={1.5}
                        h={1.5}
                        rounded="full"
                        bg="brand.secondary"
                        flexShrink={0}
                        mt={1.5}
                      />
                      <Text fontSize="xs" color="gray.600" lineHeight="1.6">
                        {item}
                      </Text>
                    </Flex>
                  ))}
                </VStack>
              </Box>

              {/* Quote */}
              <Box
                bg="gray.900"
                rounded="xl"
                p={6}
                position="relative"
                overflow="hidden"
              >
                <Box
                  position="absolute"
                  top="-30px"
                  right="-30px"
                  w="120px"
                  h="120px"
                  rounded="full"
                  bg="blue.600"
                  opacity={0.15}
                  filter="blur(30px)"
                  pointerEvents="none"
                />
                <Text
                  fontSize="sm"
                  color="gray.300"
                  mb={4}
                  fontStyle="italic"
                  lineHeight="1.8"
                  position="relative"
                >
                  &ldquo;Technology that does not serve people and communities
                  is just expensive noise.&rdquo;
                </Text>
                <Text color="brand.primary" fontWeight="700" fontSize="xs" position="relative">
                  — Joshua Alana
                </Text>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
