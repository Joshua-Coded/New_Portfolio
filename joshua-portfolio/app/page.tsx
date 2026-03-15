"use client";

import Link from "next/link";
import {
  FaDatabase,
  FaChartBar,
  FaUsers,
  FaSeedling,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  SimpleGrid,
  Icon,
  Flex,
  Divider,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const services = [
  {
    icon: FaSeedling,
    title: "Agricultural Technology",
    description:
      "Digital platforms and data systems that drive food security programs across Sub-Saharan Africa.",
    accent: "#1D4ED8",
    accentBg: "#EFF6FF",
    link: "/expertise",
  },
  {
    icon: FaDatabase,
    title: "Data & M&E Systems",
    description:
      "End-to-end monitoring frameworks and data pipelines that measure program performance at scale.",
    accent: "#059669",
    accentBg: "#F0FDF4",
    link: "/expertise",
  },
  {
    icon: FaChartBar,
    title: "Impact Analytics",
    description:
      "Translating complex agricultural data into evidence-based insights for decision-makers and donors.",
    accent: "#7C3AED",
    accentBg: "#F5F3FF",
    link: "/expertise",
  },
  {
    icon: FaUsers,
    title: "Stakeholder Platforms",
    description:
      "Connecting governments, NGOs, development partners, and the private sector around shared data goals.",
    accent: "#D97706",
    accentBg: "#FFFBEB",
    link: "/expertise",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand your program context, data landscape, and stakeholder needs through structured workshops and document review.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Architect systems, frameworks, and tools precisely aligned to your development goals and organisational capacity.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Build, test, and deploy with thorough documentation and capacity-building support for your in-house teams.",
  },
];

const metrics = [
  { value: "15+", label: "African Countries", sub: "Active programs" },
  { value: "5M+", label: "Farmers Reached", sub: "Program beneficiaries" },
  { value: "100+", label: "Stakeholders Engaged", sub: "Partners & governments" },
  { value: "$50M+", label: "Programs Supported", sub: "Investment portfolios" },
];

const techStack = ["Python", "Next.js", "PostgreSQL", "Power BI", "KoboToolbox", "Docker"];

const credentials = [
  "African Leadership University Alumni",
  "M&E & Data Systems Expert",
  "15+ Countries, $50M+ Programs",
];

export default function Home() {
  return (
    <Box>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <Box
        bg="white"
        pt={{ base: 28, md: 36 }}
        pb={{ base: 16, md: 24 }}
        borderBottom="1px"
        borderColor="gray.100"
      >
        <Container maxW="container.xl">
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 440px" }}
            gap={16}
            alignItems="center"
          >
            {/* LEFT */}
            <GridItem>
              {/* Availability badge */}
              <Flex align="center" gap={2} mb={6}>
                <Box w={2} h={2} rounded="full" bg="green.500" flexShrink={0} />
                <Text fontSize="sm" color="gray.500" fontWeight="500">
                  Available for engagements
                </Text>
              </Flex>

              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "56px", lg: "64px" }}
                fontWeight="800"
                color="gray.900"
                lineHeight="1.05"
                letterSpacing="-0.03em"
                mb={6}
              >
                Building Technology for Development Impact
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.600"
                maxW="560px"
                lineHeight="1.8"
                mb={10}
              >
                IT Consultant at AGRA designing data systems, M&amp;E
                frameworks, and agricultural technology solutions across
                Africa.
              </Text>

              <HStack spacing={3} flexWrap="wrap">
                <Button
                  as={Link}
                  href="/expertise"
                  size="lg"
                  bg="brand.primary"
                  color="white"
                  px={8}
                  h="52px"
                  fontSize="sm"
                  fontWeight="600"
                  _hover={{
                    bg: "#1e40af",
                    transform: "translateY(-1px)",
                    boxShadow: "0 8px 24px rgba(29,78,216,0.3)",
                  }}
                  transition="all 0.2s"
                  rightIcon={<FaArrowRight size={13} />}
                >
                  View My Services
                </Button>
                <Button
                  as={Link}
                  href="/work"
                  size="lg"
                  variant="outline"
                  borderColor="gray.200"
                  color="gray.700"
                  px={8}
                  h="52px"
                  fontSize="sm"
                  fontWeight="600"
                  _hover={{
                    borderColor: "brand.primary",
                    color: "brand.primary",
                    bg: "#EFF6FF",
                  }}
                  transition="all 0.2s"
                >
                  See My Work
                </Button>
              </HStack>
            </GridItem>

            {/* RIGHT: Profile card */}
            <GridItem display={{ base: "none", lg: "block" }}>
              <Box
                bg="gray.900"
                color="white"
                rounded="2xl"
                p={8}
                position="relative"
                overflow="hidden"
              >
                {/* Background glows */}
                <Box
                  position="absolute"
                  top="-60px"
                  right="-60px"
                  w="200px"
                  h="200px"
                  rounded="full"
                  bg="blue.600"
                  opacity={0.15}
                  filter="blur(50px)"
                  pointerEvents="none"
                />
                <Box
                  position="absolute"
                  bottom="-40px"
                  left="-40px"
                  w="160px"
                  h="160px"
                  rounded="full"
                  bg="green.500"
                  opacity={0.1}
                  filter="blur(40px)"
                  pointerEvents="none"
                />

                {/* Avatar */}
                <Flex align="center" gap={4} mb={6}>
                  <Flex
                    w="72px"
                    h="72px"
                    rounded="full"
                    bg="brand.primary"
                    align="center"
                    justify="center"
                    flexShrink={0}
                  >
                    <Text
                      fontWeight="800"
                      fontSize="2xl"
                      color="white"
                      letterSpacing="-0.02em"
                    >
                      JA
                    </Text>
                  </Flex>
                  <Box>
                    <Text fontWeight="700" fontSize="lg" color="white" letterSpacing="-0.01em">
                      Joshua Alana
                    </Text>
                    <Text fontSize="sm" color="gray.400">
                      IT Consultant · AGRA
                    </Text>
                  </Box>
                </Flex>

                <Divider borderColor="gray.700" mb={6} />

                {/* Credentials */}
                <VStack align="flex-start" spacing={3} mb={6}>
                  {credentials.map((cred) => (
                    <Flex key={cred} align="center" gap={3}>
                      <Icon as={FaCheckCircle} color="green.400" boxSize={4} flexShrink={0} />
                      <Text fontSize="sm" color="gray.300">
                        {cred}
                      </Text>
                    </Flex>
                  ))}
                </VStack>

                <Divider borderColor="gray.700" mb={5} />

                <Text fontSize="xs" color="gray.500">
                  alanajoshua535@gmail.com
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* ── ECOSYSTEM STRIP ────────────────────────────────────────── */}
      <Box
        py={8}
        bg="gray.50"
        borderTop="1px"
        borderBottom="1px"
        borderColor="gray.100"
      >
        <Container maxW="container.xl">
          <Flex
            align="center"
            gap={{ base: 6, md: 10 }}
            flexWrap="wrap"
            justify={{ base: "center", md: "flex-start" }}
          >
            <Text
              fontSize="xs"
              fontWeight="700"
              color="gray.400"
              letterSpacing="widest"
              textTransform="uppercase"
              flexShrink={0}
            >
              Tech Stack
            </Text>
            {techStack.map((item) => (
              <Text
                key={item}
                fontSize="sm"
                fontWeight="600"
                color="gray.400"
                letterSpacing="-0.01em"
              >
                {item}
              </Text>
            ))}
          </Flex>
        </Container>
      </Box>

      {/* ── SERVICES ───────────────────────────────────────────────── */}
      <Box py={24} bg="white">
        <Container maxW="container.xl">
          <VStack align="flex-start" spacing={3} mb={14}>
            <Text
              fontSize="xs"
              fontWeight="700"
              color="brand.primary"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              Services
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "42px" }}
              fontWeight="800"
              color="gray.900"
              letterSpacing="-0.025em"
              lineHeight="1.1"
            >
              How I Help Organisations
            </Heading>
            <Text
              fontSize="md"
              color="gray.600"
              maxW="480px"
              lineHeight="1.8"
              pt={1}
            >
              Practical technology and data solutions for international
              development programs across Africa.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            {services.map((s) => (
              <Box
                key={s.title}
                bg="white"
                borderWidth={1}
                borderColor="gray.200"
                borderTop={`3px solid ${s.accent}`}
                rounded="xl"
                p={7}
                transition="all 0.2s"
                _hover={{
                  boxShadow: "md",
                  borderColor: s.accent,
                  transform: "translateY(-2px)",
                }}
              >
                <Flex
                  w="40px"
                  h="40px"
                  rounded="lg"
                  bg={s.accentBg}
                  align="center"
                  justify="center"
                  mb={5}
                >
                  <Icon as={s.icon} boxSize={4} color={s.accent} />
                </Flex>

                <Heading
                  as="h3"
                  fontSize="md"
                  fontWeight="700"
                  color="gray.900"
                  mb={2}
                >
                  {s.title}
                </Heading>
                <Text
                  color="gray.600"
                  fontSize="sm"
                  lineHeight="1.8"
                  mb={5}
                >
                  {s.description}
                </Text>
                <Flex
                  as={Link}
                  href={s.link}
                  align="center"
                  gap={1.5}
                  color={s.accent}
                  fontSize="sm"
                  fontWeight="600"
                  _hover={{ textDecoration: "none", gap: 2.5 }}
                  transition="gap 0.15s"
                >
                  <Text>Learn more</Text>
                  <FaArrowRight size={11} />
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ── PROCESS ────────────────────────────────────────────────── */}
      <Box py={20} bg="gray.50">
        <Container maxW="container.xl">
          <VStack align={{ base: "flex-start", md: "center" }} spacing={3} mb={14}>
            <Text
              fontSize="xs"
              fontWeight="700"
              color="brand.primary"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              Approach
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "42px" }}
              fontWeight="800"
              color="gray.900"
              letterSpacing="-0.025em"
              lineHeight="1.1"
              textAlign={{ base: "left", md: "center" }}
            >
              How I Work
            </Heading>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {processSteps.map((step) => (
              <Box
                key={step.number}
                bg="white"
                borderWidth={1}
                borderColor="gray.200"
                rounded="xl"
                p={7}
                boxShadow="sm"
              >
                <Flex
                  w="48px"
                  h="48px"
                  rounded="full"
                  bg="brand.primary"
                  align="center"
                  justify="center"
                  mb={5}
                >
                  <Text
                    fontSize="sm"
                    fontWeight="800"
                    color="white"
                    letterSpacing="-0.02em"
                  >
                    {step.number}
                  </Text>
                </Flex>
                <Heading
                  as="h3"
                  fontSize="lg"
                  fontWeight="700"
                  color="gray.900"
                  mb={3}
                >
                  {step.title}
                </Heading>
                <Text fontSize="sm" color="gray.600" lineHeight="1.8">
                  {step.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ── IMPACT METRICS ─────────────────────────────────────────── */}
      <Box py={20} bg="white">
        <Container maxW="container.xl">
          <VStack align={{ base: "flex-start", md: "center" }} spacing={3} mb={14}>
            <Text
              fontSize="xs"
              fontWeight="700"
              color="brand.primary"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              Track Record
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "42px" }}
              fontWeight="800"
              color="gray.900"
              letterSpacing="-0.025em"
              textAlign={{ base: "left", md: "center" }}
            >
              Development Reach
            </Heading>
          </VStack>

          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} textAlign="center">
            {metrics.map((m) => (
              <Box key={m.label}>
                <Heading
                  as="div"
                  fontSize={{ base: "4xl", md: "48px" }}
                  fontWeight="800"
                  color="brand.primary"
                  letterSpacing="-0.03em"
                  lineHeight="1"
                  mb={2}
                >
                  {m.value}
                </Heading>
                <Text fontWeight="700" color="gray.900" fontSize="sm" mb={1}>
                  {m.label}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {m.sub}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ── CTA STRIP ──────────────────────────────────────────────── */}
      <Box py={20} bg="gray.900" position="relative" overflow="hidden">
        {/* Radial glow */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="700px"
          h="320px"
          bgGradient="radial(ellipse, blue.800 0%, transparent 70%)"
          opacity={0.45}
          pointerEvents="none"
        />
        <Container maxW="container.xl" position="relative">
          <VStack spacing={6} textAlign="center">
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "40px" }}
              fontWeight="800"
              color="white"
              letterSpacing="-0.025em"
              lineHeight="1.1"
            >
              Ready to work together?
            </Heading>
            <Text
              fontSize="md"
              color="gray.400"
              maxW="520px"
              lineHeight="1.8"
            >
              Open to consultancy engagements, partnerships, and advisory
              roles with development organisations.
            </Text>
            <HStack spacing={4} flexWrap="wrap" justify="center">
              <Button
                as={Link}
                href="/contact"
                size="lg"
                bg="white"
                color="gray.900"
                fontWeight="700"
                px={8}
                h="52px"
                fontSize="sm"
                _hover={{
                  bg: "#F8FAFC",
                  transform: "translateY(-1px)",
                  boxShadow: "0 8px 32px rgba(255,255,255,0.2)",
                }}
                transition="all 0.2s"
                rightIcon={<FaArrowRight size={13} />}
              >
                Start a Conversation
              </Button>
              <Button
                as="a"
                href="#"
                size="lg"
                variant="outline"
                borderColor="gray.600"
                color="gray.300"
                px={8}
                h="52px"
                fontSize="sm"
                _hover={{
                  borderColor: "gray.400",
                  color: "white",
                  bg: "whiteAlpha.100",
                }}
                transition="all 0.2s"
              >
                Download CV
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
