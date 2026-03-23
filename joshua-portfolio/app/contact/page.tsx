"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
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
  Badge,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

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
    accent: "#60A5FA",
    hoverBg: "blue.600",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "Joshua-Coded",
    href: "https://github.com/Joshua-Coded",
    accent: "#E2E8F0",
    hoverBg: "gray.600",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "opportunityjobs290@gmail.com",
    href: "mailto:opportunityjobs290@gmail.com",
    accent: "#34D399",
    hoverBg: "green.600",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
        setFormData({ name: "", organisation: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed");
      }
    } catch {
      toast({
        title: "Failed to send",
        description: "Please email me directly at opportunityjobs290@gmail.com",
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
    bg: "gray.50",
    borderColor: "gray.200",
    _hover: { borderColor: "blue.400", bg: "white" },
    _focus: { borderColor: "blue.500", boxShadow: "0 0 0 1px #3B82F6", bg: "white" },
    color: "gray.800",
    fontSize: "sm",
    h: "46px",
    rounded: "lg",
    transition: "all 0.2s",
  };

  return (
    <Box minH="100vh" bg="#F8F7F4">

      {/* ── DARK HERO ─────────────────────────────────────────────── */}
      <Box
        position="relative"
        bg="#0B1120"
        pt={{ base: 28, md: 36 }}
        pb={{ base: 14, md: 18 }}
        overflow="hidden"
      >
        <Box
          position="absolute" inset={0}
          bgImage="radial-gradient(ellipse 80% 60% at 60% 0%, rgba(29,78,216,0.25) 0%, transparent 60%),
                   radial-gradient(ellipse 50% 40% at 5% 90%, rgba(5,150,105,0.15) 0%, transparent 55%)"
          pointerEvents="none"
        />
        <Box
          position="absolute" inset={0}
          bgImage="linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)"
          bgSize="60px 60px"
          pointerEvents="none"
        />
        <Container maxW="container.xl" position="relative">
          <MotionBox initial="hidden" animate="show" variants={stagger}>
            <MotionBox variants={fadeUp}>
              <Flex align="center" gap={2} mb={4}>
                <Box w={2} h={2} rounded="full" bg="green.400"
                  sx={{ animation: "pulse 2s infinite" }}
                />
                <Text fontSize="xs" fontWeight="700" color="blue.400" letterSpacing="widest" textTransform="uppercase">
                  Let&apos;s Talk
                </Text>
              </Flex>
            </MotionBox>
            <MotionBox variants={fadeUp}>
              <Heading
                as="h1"
                fontSize={{ base: "5xl", md: "7xl" }}
                fontWeight="800"
                color="white"
                letterSpacing="-0.04em"
                lineHeight="0.95"
                mb={6}
              >
                Get In{" "}
                <Box
                  as="span"
                  bgGradient="linear(135deg, #60A5FA, #34D399)"
                  bgClip="text"
                  color="transparent"
                  sx={{
                    backgroundSize: "200% 100%",
                    animation: "shimmer 4s linear infinite",
                    "@keyframes shimmer": {
                      "0%": { backgroundPosition: "0% 50%" },
                      "100%": { backgroundPosition: "200% 50%" },
                    },
                  }}
                >
                  Touch
                </Box>
              </Heading>
            </MotionBox>
            <MotionBox variants={fadeUp}>
              <Text fontSize="lg" color="gray.400" maxW="540px" lineHeight="1.8">
                Whether you&apos;re looking for a technology partner or want to discuss
                agricultural data systems — I&apos;d love to connect.
              </Text>
            </MotionBox>
          </MotionBox>
        </Container>
      </Box>

      {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
      <Box bg="#F8F7F4" py={16}>
        <Container maxW="container.xl">
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 380px" }}
            gap={12}
            alignItems="flex-start"
          >

            {/* ── LEFT: Form ───────────────────────────────────────── */}
            <GridItem>
              <MotionBox
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeLeft}
              >
                <Box
                  bg="white"
                  borderWidth={1}
                  borderColor="gray.100"
                  rounded="2xl"
                  p={{ base: 6, md: 10 }}
                  boxShadow="0 4px 24px rgba(0,0,0,0.06)"
                  position="relative"
                  overflow="hidden"
                >
                  <Box
                    position="absolute" top="-60px" right="-60px"
                    w="200px" h="200px" rounded="full"
                    bg="blue.400" opacity={0.04} filter="blur(60px)"
                    pointerEvents="none"
                  />

                  <Heading as="h2" fontSize="xl" fontWeight="800" color="gray.900" mb={1} letterSpacing="-0.02em">
                    Send a Message
                  </Heading>
                  <Text fontSize="sm" color="gray.500" mb={8} lineHeight="1.7">
                    Fill in the form and I&apos;ll get back to you within 48 hours.
                  </Text>

                  <Box as="form" onSubmit={handleSubmit}>
                    <VStack spacing={5}>
                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="full">
                        <FormControl isRequired>
                          <FormLabel
                            color="gray.600" fontSize="xs" fontWeight="700"
                            textTransform="uppercase" letterSpacing="wide" mb={1.5}
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
                            color="gray.600" fontSize="xs" fontWeight="700"
                            textTransform="uppercase" letterSpacing="wide" mb={1.5}
                          >
                            Organisation
                          </FormLabel>
                          <Input
                            name="organisation"
                            value={formData.organisation}
                            onChange={handleChange}
                            placeholder="Organisation or company"
                            {...inputStyles}
                          />
                        </FormControl>
                      </SimpleGrid>

                      <FormControl isRequired>
                        <FormLabel
                          color="gray.600" fontSize="xs" fontWeight="700"
                          textTransform="uppercase" letterSpacing="wide" mb={1.5}
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
                          color="gray.600" fontSize="xs" fontWeight="700"
                          textTransform="uppercase" letterSpacing="wide" mb={1.5}
                        >
                          Enquiry Type
                        </FormLabel>
                        <Select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Select enquiry type"
                          bg="gray.50"
                          borderColor="gray.200"
                          _hover={{ borderColor: "blue.400", bg: "white" }}
                          _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px #3B82F6", bg: "white" }}
                          color="gray.800"
                          fontSize="sm"
                          h="46px"
                          rounded="lg"
                          transition="all 0.2s"
                        >
                          <option value="Consultancy / Project">Consultancy / Project</option>
                          <option value="M&E System Design">M&amp;E System Design</option>
                          <option value="Data Systems & Analytics">Data Systems &amp; Analytics</option>
                          <option value="Tech Product Development">Tech Product Development</option>
                          <option value="Partnership / Collaboration">Partnership / Collaboration</option>
                          <option value="General Enquiry">General Enquiry</option>
                        </Select>
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel
                          color="gray.600" fontSize="xs" fontWeight="700"
                          textTransform="uppercase" letterSpacing="wide" mb={1.5}
                        >
                          Message
                        </FormLabel>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe your project, program context, or enquiry…"
                          rows={6}
                          bg="gray.50"
                          borderColor="gray.200"
                          _hover={{ borderColor: "blue.400", bg: "white" }}
                          _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px #3B82F6", bg: "white" }}
                          color="gray.800"
                          fontSize="sm"
                          rounded="lg"
                          resize="vertical"
                          transition="all 0.2s"
                        />
                      </FormControl>

                      <Button
                        type="submit"
                        w="full"
                        h="52px"
                        bgGradient="linear(135deg, #1D4ED8, #2563EB)"
                        color="white"
                        fontWeight="700"
                        fontSize="sm"
                        isLoading={isSubmitting}
                        loadingText="Sending…"
                        rightIcon={<FaArrowRight size={12} />}
                        _hover={{
                          bgGradient: "linear(135deg, #1e40af, #1D4ED8)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 12px 32px rgba(29,78,216,0.4)",
                        }}
                        transition="all 0.2s"
                      >
                        Send Message
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </MotionBox>
            </GridItem>

            {/* ── RIGHT: Info sidebar ──────────────────────────────── */}
            <GridItem>
              <MotionVStack
                spacing={5}
                align="stretch"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={stagger}
              >

                {/* Social links — dark glassmorphism */}
                <MotionBox variants={fadeRight}>
                  <Box
                    bg="#0D1627"
                    border="1px solid rgba(255,255,255,0.08)"
                    rounded="2xl"
                    p={6}
                    position="relative"
                    overflow="hidden"
                  >
                    <Box
                      position="absolute" top="-50px" right="-50px"
                      w="160px" h="160px" rounded="full"
                      bg="blue.600" opacity={0.1} filter="blur(50px)"
                      pointerEvents="none"
                    />
                    <Text
                      fontSize="xs" fontWeight="700" color="gray.500"
                      letterSpacing="widest" textTransform="uppercase" mb={4}
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
                            align="center" gap={4} p={3.5}
                            bg="whiteAlpha.50"
                            border="1px solid rgba(255,255,255,0.06)"
                            rounded="xl"
                            transition="all 0.2s"
                            _hover={{
                              bg: "whiteAlpha.100",
                              borderColor: "rgba(255,255,255,0.12)",
                              transform: "translateX(4px)",
                            }}
                          >
                            <Flex
                              w={9} h={9} rounded="lg"
                              bg="whiteAlpha.100"
                              align="center" justify="center" flexShrink={0}
                            >
                              <Icon as={social.icon} boxSize={4} color={social.accent} />
                            </Flex>
                            <Box>
                              <Text fontWeight="600" color="gray.200" fontSize="sm">
                                {social.label}
                              </Text>
                              <Text fontSize="xs" color="gray.500" mt={0.5}>
                                {social.value}
                              </Text>
                            </Box>
                            <Icon as={FaArrowRight} boxSize={3} color="gray.600" ml="auto" />
                          </Flex>
                        </ChakraLink>
                      ))}
                    </VStack>
                  </Box>
                </MotionBox>

                {/* Availability card — dark */}
                <MotionBox variants={fadeRight}>
                  <Box
                    bg="#0D1627"
                    border="1px solid rgba(255,255,255,0.08)"
                    rounded="2xl"
                    p={6}
                    position="relative"
                    overflow="hidden"
                  >
                    <Box
                      position="absolute" bottom="-40px" left="-40px"
                      w="140px" h="140px" rounded="full"
                      bg="green.500" opacity={0.08} filter="blur(40px)"
                      pointerEvents="none"
                    />
                    <Text
                      fontSize="xs" fontWeight="700" color="gray.500"
                      letterSpacing="widest" textTransform="uppercase" mb={4}
                    >
                      Availability
                    </Text>
                    <VStack align="flex-start" spacing={4} mb={5}>
                      <Flex align="center" gap={3}>
                        <Flex w={8} h={8} rounded="md" bg="rgba(52,211,153,0.1)" align="center" justify="center">
                          <Box w={2} h={2} rounded="full" bg="green.400"
                            sx={{ animation: "pulse 2s infinite" }}
                          />
                        </Flex>
                        <Box>
                          <Text fontSize="sm" fontWeight="600" color="gray.200">
                            Available for Engagements
                          </Text>
                          <Text fontSize="xs" color="gray.500">Consultancy &amp; advisory roles</Text>
                        </Box>
                      </Flex>
                      <Flex align="center" gap={3}>
                        <Flex w={8} h={8} rounded="md" bg="rgba(96,165,250,0.1)" align="center" justify="center">
                          <Icon as={FaMapMarkerAlt} boxSize={3.5} color="blue.400" />
                        </Flex>
                        <Box>
                          <Text fontSize="sm" fontWeight="600" color="gray.200">Kigali, Rwanda</Text>
                          <Text fontSize="xs" color="gray.500">Open to remote &amp; travel</Text>
                        </Box>
                      </Flex>
                      <Flex align="center" gap={3}>
                        <Flex w={8} h={8} rounded="md" bg="rgba(167,139,250,0.1)" align="center" justify="center">
                          <Icon as={FaClock} boxSize={3.5} color="purple.400" />
                        </Flex>
                        <Box>
                          <Text fontSize="sm" fontWeight="600" color="gray.200">Responds within 48h</Text>
                          <Text fontSize="xs" color="gray.500">EAT timezone (UTC+3)</Text>
                        </Box>
                      </Flex>
                    </VStack>

                    <Divider borderColor="whiteAlpha.100" mb={5} />

                    <Text
                      fontSize="xs" fontWeight="700" color="gray.500"
                      letterSpacing="widest" textTransform="uppercase" mb={3}
                    >
                      Open to
                    </Text>
                    <VStack align="flex-start" spacing={2}>
                      {openTo.map((item) => (
                        <Flex key={item} align="flex-start" gap={2.5}>
                          <Icon as={FaCheckCircle} boxSize={3} color="green.400" flexShrink={0} mt={0.5} />
                          <Text fontSize="xs" color="gray.400" lineHeight="1.6">
                            {item}
                          </Text>
                        </Flex>
                      ))}
                    </VStack>
                  </Box>
                </MotionBox>

                {/* Quote — dark with gradient text */}
                <MotionBox variants={fadeRight}>
                  <Box
                    bg="#0B1120"
                    borderLeft="3px solid"
                    borderLeftColor="blue.500"
                    rounded="xl"
                    p={6}
                    position="relative"
                    overflow="hidden"
                  >
                    <Box
                      position="absolute" top="-30px" right="-30px"
                      w="120px" h="120px" rounded="full"
                      bg="blue.600" opacity={0.12} filter="blur(40px)"
                      pointerEvents="none"
                    />
                    <Text
                      fontSize="sm" color="gray.300" mb={4}
                      fontStyle="italic" lineHeight="1.8" position="relative"
                    >
                      &ldquo;Technology that does not serve people and communities
                      is just expensive noise.&rdquo;
                    </Text>
                    <Text
                      bgGradient="linear(135deg, #60A5FA, #34D399)"
                      bgClip="text"
                      color="transparent"
                      fontWeight="700"
                      fontSize="xs"
                      position="relative"
                    >
                      — Joshua Alana
                    </Text>
                  </Box>
                </MotionBox>

              </MotionVStack>
            </GridItem>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}
