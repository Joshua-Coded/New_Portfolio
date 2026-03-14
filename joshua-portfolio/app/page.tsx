"use client";
import Link from "next/link";
import {
  FaDatabase, FaChartBar, FaUsers, FaSeedling,
  FaCheckCircle, FaArrowRight,
} from "react-icons/fa";
import {
  Box, Container, Heading, Text, Button, HStack,
  VStack, SimpleGrid, Icon, Flex, Badge, Divider, Grid, GridItem,
} from '@chakra-ui/react'

const pillars = [
  {
    icon: FaSeedling,
    title: "Agricultural Technology",
    description: "Digital platforms and data systems that drive food security programs across Sub-Saharan Africa.",
    accent: "#1D4ED8",
    accentBg: "#EFF6FF",
    link: "/work",
  },
  {
    icon: FaDatabase,
    title: "Data & M&E Systems",
    description: "End-to-end monitoring frameworks and data pipelines that measure program performance at scale.",
    accent: "#059669",
    accentBg: "#F0FDF4",
    link: "/work",
  },
  {
    icon: FaChartBar,
    title: "Impact Analytics",
    description: "Translating complex agricultural data into evidence-based insights for decision-makers and donors.",
    accent: "#7C3AED",
    accentBg: "#F5F3FF",
    link: "/expertise",
  },
  {
    icon: FaUsers,
    title: "Stakeholder Engagement",
    description: "Connecting governments, NGOs, development partners, and the private sector around shared goals.",
    accent: "#D97706",
    accentBg: "#FFFBEB",
    link: "/expertise",
  },
]

const stats = [
  { value: "15+", label: "African Countries", sub: "Active programs" },
  { value: "5M+", label: "Farmers Reached", sub: "Program beneficiaries" },
  { value: "100+", label: "Stakeholders", sub: "Partners engaged" },
  { value: "$50M+", label: "Programs", sub: "Investments supported" },
]

const trustedBy = ["AGRA", "African Union", "IFAD", "World Bank", "FAO", "GIZ"]

export default function Home() {
  return (
    <Box>

      {/* ── HERO ─────────────────────────────────────────── */}
      <Box bg="white" pt={{ base: 28, md: 36 }} pb={{ base: 16, md: 24 }} borderBottom="1px" borderColor="gray.100">
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: '1fr', lg: '1fr 420px' }} gap={16} alignItems="center">
            <GridItem>
              {/* availability badge */}
              <Flex align="center" gap={2} mb={6}>
                <Box w={2} h={2} rounded="full" bg="green.500" />
                <Text fontSize="sm" color="gray.500" fontWeight="500">
                  Available for consultancy & partnerships
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
                Joshua Alana
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.500"
                maxW="540px"
                lineHeight="1.8"
                mb={8}
              >
                IT Consultant building technology, data systems, and M&E frameworks
                that power agricultural transformation across Africa.
              </Text>

              {/* role pills */}
              <HStack spacing={2} flexWrap="wrap" mb={10}>
                {["IT Consultant @ AGRA", "Software Engineer", "M&E Specialist"].map((r) => (
                  <Badge
                    key={r}
                    px={3}
                    py={1.5}
                    rounded="full"
                    bg="gray.100"
                    color="gray.600"
                    fontWeight="500"
                    fontSize="xs"
                  >
                    {r}
                  </Badge>
                ))}
              </HStack>

              <HStack spacing={3} flexWrap="wrap">
                <Button
                  as={Link}
                  href="/work"
                  size="lg"
                  bg="brand.primary"
                  color="white"
                  px={8}
                  h="52px"
                  fontSize="sm"
                  _hover={{ bg: '#1e40af', transform: 'translateY(-1px)', boxShadow: '0 8px 24px rgba(29,78,216,0.3)' }}
                  transition="all 0.2s"
                  rightIcon={<FaArrowRight size={13} />}
                >
                  View My Work
                </Button>
                <Button
                  as={Link}
                  href="/contact"
                  size="lg"
                  variant="outline"
                  borderColor="gray.200"
                  color="gray.700"
                  px={8}
                  h="52px"
                  fontSize="sm"
                  _hover={{ borderColor: 'brand.primary', color: 'brand.primary', bg: '#EFF6FF' }}
                  transition="all 0.2s"
                >
                  Get In Touch
                </Button>
              </HStack>
            </GridItem>

            {/* ── Right: impact card ── */}
            <GridItem display={{ base: 'none', lg: 'block' }}>
              <Box
                bg="gray.900"
                color="white"
                rounded="2xl"
                p={8}
                position="relative"
                overflow="hidden"
              >
                {/* background glow */}
                <Box
                  position="absolute"
                  top="-60px"
                  right="-60px"
                  w="200px"
                  h="200px"
                  rounded="full"
                  bg="blue.600"
                  opacity={0.15}
                  filter="blur(40px)"
                  pointerEvents="none"
                />
                <Box
                  position="absolute"
                  bottom="-40px"
                  left="-40px"
                  w="150px"
                  h="150px"
                  rounded="full"
                  bg="green.500"
                  opacity={0.12}
                  filter="blur(40px)"
                  pointerEvents="none"
                />

                <Text fontSize="xs" fontWeight="700" color="gray.400" letterSpacing="widest" textTransform="uppercase" mb={6}>
                  Impact at a Glance
                </Text>

                <SimpleGrid columns={2} spacing={6} mb={6}>
                  {stats.map((s) => (
                    <Box key={s.label}>
                      <Heading fontSize="2xl" fontWeight="800" color="white" letterSpacing="-0.02em">
                        {s.value}
                      </Heading>
                      <Text fontSize="sm" color="gray.300" fontWeight="600" mt={0.5}>{s.label}</Text>
                      <Text fontSize="xs" color="gray.500">{s.sub}</Text>
                    </Box>
                  ))}
                </SimpleGrid>

                <Divider borderColor="gray.700" mb={6} />

                <Flex align="center" gap={2}>
                  <Icon as={FaCheckCircle} color="green.400" boxSize={4} />
                  <Text fontSize="sm" color="gray.300">Currently at AGRA, Nairobi</Text>
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* ── TRUSTED BY ──────────────────────────────────── */}
      <Box py={10} bg="gray.50" borderBottom="1px" borderColor="gray.100">
        <Container maxW="container.xl">
          <Flex align="center" gap={{ base: 6, md: 12 }} flexWrap="wrap" justify={{ base: 'center', md: 'flex-start' }}>
            <Text fontSize="xs" fontWeight="700" color="gray.400" letterSpacing="widest" textTransform="uppercase" flexShrink={0}>
              Ecosystem
            </Text>
            {trustedBy.map((org) => (
              <Text key={org} fontSize="sm" fontWeight="600" color="gray.400" letterSpacing="-0.01em">
                {org}
              </Text>
            ))}
          </Flex>
        </Container>
      </Box>

      {/* ── EXPERTISE PILLARS ───────────────────────────── */}
      <Box py={24} bg="white">
        <Container maxW="container.xl">
          <VStack align="flex-start" spacing={3} mb={14}>
            <Text fontSize="xs" fontWeight="700" color="brand.primary" letterSpacing="widest" textTransform="uppercase">
              Core Capabilities
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "42px" }}
              fontWeight="800"
              color="gray.900"
              letterSpacing="-0.025em"
              lineHeight="1.1"
            >
              Technology built for<br />development impact
            </Heading>
            <Text fontSize="md" color="gray.500" maxW="480px" lineHeight="1.8" pt={1}>
              Practical solutions for organisations working at the frontier of African agricultural development.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            {pillars.map((p) => (
              <Box
                key={p.title}
                as={Link}
                href={p.link}
                bg="white"
                borderWidth={1}
                borderColor="gray.200"
                rounded="xl"
                p={7}
                position="relative"
                overflow="hidden"
                transition="all 0.2s"
                _hover={{
                  borderColor: p.accent,
                  boxShadow: `0 4px 24px ${p.accent}18`,
                  transform: 'translateY(-2px)',
                  textDecoration: 'none',
                }}
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  h: '3px',
                  bg: p.accent,
                  opacity: 0,
                  transition: 'opacity 0.2s',
                }}
              >
                <Flex
                  w={10}
                  h={10}
                  rounded="lg"
                  bg={p.accentBg}
                  align="center"
                  justify="center"
                  mb={5}
                >
                  <Icon as={p.icon} boxSize={4} color={p.accent} />
                </Flex>

                <Heading as="h3" fontSize="md" fontWeight="700" color="gray.900" mb={2}>
                  {p.title}
                </Heading>
                <Text color="gray.500" fontSize="sm" lineHeight="1.8" mb={5}>
                  {p.description}
                </Text>
                <Flex align="center" gap={1.5} color={p.accent} fontSize="sm" fontWeight="600">
                  <Text>Learn more</Text>
                  <FaArrowRight size={11} />
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ── CTA ─────────────────────────────────────────── */}
      <Box py={20} bg="gray.900" position="relative" overflow="hidden">
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="600px"
          h="300px"
          bgGradient="radial(ellipse, blue.800 0%, transparent 70%)"
          opacity={0.4}
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
              Let's build something that matters
            </Heading>
            <Text fontSize="md" color="gray.400" maxW="480px" lineHeight="1.8">
              Open to consultancy, partnerships, and technology projects
              with development organisations across Africa.
            </Text>
            <Button
              as={Link}
              href="/contact"
              size="lg"
              bg="white"
              color="gray.900"
              fontWeight="700"
              px={10}
              h="52px"
              fontSize="sm"
              _hover={{ bg: '#F8FAFC', transform: 'translateY(-1px)', boxShadow: '0 8px 32px rgba(255,255,255,0.15)' }}
              transition="all 0.2s"
              rightIcon={<FaArrowRight size={13} />}
            >
              Start a Conversation
            </Button>
          </VStack>
        </Container>
      </Box>

    </Box>
  )
}
