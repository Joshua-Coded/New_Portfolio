"use client";

import Link from "next/link";
import {
  FaDatabase,
  FaChartBar,
  FaUsers,
  FaSeedling,
  FaArrowRight,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  SimpleGrid,
  Icon,
  Flex,
  Grid,
  GridItem,
  HStack,
  Divider,
  Badge,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { TechMarquee } from "@/components/TechMarquee";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionSimpleGrid = motion(SimpleGrid);
const MotionGrid = motion(Grid);
const MotionVStack = motion(VStack);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const staggerFast = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const heroStagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const services = [
  {
    icon: FaSeedling,
    title: "Agricultural Technology",
    description:
      "Digital platforms and data systems that drive food security programs across Sub-Saharan Africa.",
    accent: "#60A5FA",
    accentBg: "rgba(96,165,250,0.1)",
    link: "/expertise",
  },
  {
    icon: FaDatabase,
    title: "Data & M&E Systems",
    description:
      "End-to-end monitoring frameworks and data pipelines that measure program performance at scale.",
    accent: "#34D399",
    accentBg: "rgba(52,211,153,0.1)",
    link: "/expertise",
  },
  {
    icon: FaChartBar,
    title: "Impact Analytics",
    description:
      "Translating complex agricultural data into evidence-based insights for decision-makers and donors.",
    accent: "#A78BFA",
    accentBg: "rgba(167,139,250,0.1)",
    link: "/expertise",
  },
  {
    icon: FaUsers,
    title: "Stakeholder Platforms",
    description:
      "Connecting governments, NGOs, development partners, and the private sector around shared data goals.",
    accent: "#FBBF24",
    accentBg: "rgba(251,191,36,0.1)",
    link: "/expertise",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand your program context, data landscape, and stakeholder needs through structured workshops.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Architect systems and frameworks precisely aligned to your development goals and organisational capacity.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Build, test, and deploy with thorough documentation and capacity-building support for your teams.",
  },
];

const credentials = [
  { label: "Role", value: "IT Consultant · AGRA" },
  { label: "Location", value: "Kigali, Rwanda" },
  { label: "Focus", value: "AFS Forum (AFSF)" },
  { label: "Status", value: "Available for engagements" },
];

const impactStats = [
  { to: 8, suffix: "", label: "Deployed Platforms" },
  { to: 5, suffix: "+", label: "Countries Reached" },
  { to: 6000, suffix: "+", label: "Expected Attendees" },
  { to: 200, suffix: "+", label: "Certified Members" },
];

export default function Home() {
  return (
    <Box>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <Box
        position="relative"
        bg="#0B1120"
        pt={{ base: 28, md: 36 }}
        pb={{ base: 20, md: 28 }}
        overflow="hidden"
      >
        <Box
          position="absolute" inset={0}
          bgImage="radial-gradient(ellipse 80% 60% at 60% 0%, rgba(29,78,216,0.25) 0%, transparent 60%),
                   radial-gradient(ellipse 50% 40% at 10% 80%, rgba(5,150,105,0.15) 0%, transparent 55%)"
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
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 420px" }}
            gap={16}
            alignItems="center"
          >
            {/* LEFT */}
            <GridItem>
              <MotionVStack
                align="flex-start"
                spacing={0}
                initial="hidden"
                animate="show"
                variants={heroStagger}
              >
                <MotionBox variants={fadeUp} mb={7}>
                  <Flex align="center" gap={2}>
                    <Box w={2} h={2} rounded="full" bg="green.400" flexShrink={0}
                      sx={{ animation: "pulse 2s infinite" }}
                    />
                    <Text fontSize="sm" color="gray.400" fontWeight="500">
                      Available for engagements
                    </Text>
                  </Flex>
                </MotionBox>

                <MotionBox variants={fadeUp} mb={7}>
                  <Heading
                    as="h1"
                    fontSize={{ base: "4xl", md: "58px", lg: "68px" }}
                    fontWeight="800"
                    color="white"
                    lineHeight="1.05"
                    letterSpacing="-0.03em"
                  >
                    Building{" "}
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
                      Technology
                    </Box>
                    {" "}for{"\n"}Development Impact
                  </Heading>
                </MotionBox>

                <MotionBox variants={fadeUp} mb={10}>
                  <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    color="gray.400"
                    maxW="520px"
                    lineHeight="1.8"
                  >
                    IT Consultant at AGRA designing data systems, M&amp;E
                    frameworks, and agricultural technology solutions across Africa.
                  </Text>
                </MotionBox>

                <MotionBox variants={fadeUp}>
                  <HStack spacing={3} flexWrap="wrap">
                    <Button
                      as={Link}
                      href="/expertise"
                      size="lg"
                      bgGradient="linear(135deg, #1D4ED8, #2563EB)"
                      color="white"
                      px={8}
                      h="52px"
                      fontSize="sm"
                      fontWeight="600"
                      _hover={{
                        bgGradient: "linear(135deg, #1e40af, #1D4ED8)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 32px rgba(29,78,216,0.4)",
                      }}
                      transition="all 0.2s"
                      rightIcon={<FaArrowRight size={12} />}
                    >
                      View My Services
                    </Button>
                    <Button
                      as={Link}
                      href="/contact"
                      size="lg"
                      variant="outline"
                      borderColor="whiteAlpha.300"
                      color="gray.300"
                      px={8}
                      h="52px"
                      fontSize="sm"
                      fontWeight="600"
                      _hover={{
                        borderColor: "whiteAlpha.600",
                        color: "white",
                        bg: "whiteAlpha.100",
                      }}
                      transition="all 0.2s"
                    >
                      Get In Touch
                    </Button>
                  </HStack>
                </MotionBox>
              </MotionVStack>
            </GridItem>

            {/* RIGHT: Profile card */}
            <GridItem display={{ base: "none", lg: "block" }}>
              <MotionBox
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] } as any}
              >
                <MotionBox
                  bg="rgba(255,255,255,0.04)"
                  backdropFilter="blur(20px)"
                  border="1px solid rgba(255,255,255,0.08)"
                  rounded="2xl"
                  p={7}
                  position="relative"
                  overflow="hidden"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" } as any}
                >
                  <Box
                    position="absolute" top="-60px" right="-60px"
                    w="200px" h="200px" rounded="full"
                    bg="blue.600" opacity={0.12} filter="blur(60px)"
                    pointerEvents="none"
                  />
                  <Box
                    position="absolute" bottom="-40px" left="-40px"
                    w="160px" h="160px" rounded="full"
                    bg="green.500" opacity={0.08} filter="blur(40px)"
                    pointerEvents="none"
                  />

                  <Flex align="center" gap={4} mb={6}>
                    <Box position="relative">
                      <Box
                        w="72px" h="72px" rounded="full"
                        flexShrink={0}
                        border="2px solid rgba(255,255,255,0.1)"
                        bgImage="url('/Joshua_Alana.jpg')"
                        bgSize="cover"
                        bgPosition="center"
                      />
                      <Box
                        position="absolute" bottom={0} right={0}
                        w={4} h={4} rounded="full" bg="green.400"
                        border="2px solid" borderColor="gray.900"
                      />
                    </Box>
                    <Box>
                      <Text fontWeight="700" fontSize="lg" color="white" letterSpacing="-0.01em">
                        Joshua Alana
                      </Text>
                      <Text fontSize="sm" color="gray.400" mt={0.5}>
                        IT Consultant & Software Engineer
                      </Text>
                    </Box>
                  </Flex>

                  <Divider borderColor="whiteAlpha.100" mb={5} />

                  <VStack align="flex-start" spacing={3} mb={6}>
                    {credentials.map((c) => (
                      <Flex key={c.label} justify="space-between" w="full">
                        <Text fontSize="xs" color="gray.500" fontWeight="600" textTransform="uppercase" letterSpacing="wide">
                          {c.label}
                        </Text>
                        <Text fontSize="xs" color="gray.300" fontWeight="500" textAlign="right" maxW="55%">
                          {c.value}
                        </Text>
                      </Flex>
                    ))}
                  </VStack>

                  <Divider borderColor="whiteAlpha.100" mb={5} />

                  <Flex gap={3} justify="center">
                    <Flex
                      as="a" href="https://www.linkedin.com/in/joshua-a-5760b3196/" target="_blank"
                      w={9} h={9} rounded="lg" bg="whiteAlpha.100"
                      align="center" justify="center"
                      _hover={{ bg: "blue.600" }} transition="all 0.2s"
                    >
                      <Icon as={FaLinkedin} boxSize={4} color="gray.300" />
                    </Flex>
                    <Flex
                      as="a" href="https://github.com/Joshua-Coded" target="_blank"
                      w={9} h={9} rounded="lg" bg="whiteAlpha.100"
                      align="center" justify="center"
                      _hover={{ bg: "gray.600" }} transition="all 0.2s"
                    >
                      <Icon as={FaGithub} boxSize={4} color="gray.300" />
                    </Flex>
                    <Flex
                      as="a" href="mailto:opportunityjobs290@gmail.com"
                      w={9} h={9} rounded="lg" bg="whiteAlpha.100"
                      align="center" justify="center"
                      _hover={{ bg: "brand.primary" }} transition="all 0.2s"
                    >
                      <Icon as={FaEnvelope} boxSize={4} color="gray.300" />
                    </Flex>
                    <Flex align="center" gap={1.5} ml="auto">
                      <Icon as={FaMapMarkerAlt} boxSize={3} color="gray.500" />
                      <Text fontSize="xs" color="gray.500">Kigali, Rwanda</Text>
                    </Flex>
                  </Flex>
                </MotionBox>
              </MotionBox>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* ── TECH MARQUEE ─────────────────────────────────────────── */}
      <TechMarquee />

      {/* ── IMPACT STATS ─────────────────────────────────────────── */}
      <Box py={20} bg="#0B1120" borderTop="1px solid rgba(255,255,255,0.05)" borderBottom="1px solid rgba(255,255,255,0.05)">
        <Container maxW="container.xl">
          <MotionSimpleGrid
            columns={{ base: 2, md: 4 }}
            spacing={{ base: 10, md: 8 }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerFast}
          >
            {impactStats.map((stat) => (
              <MotionBox key={stat.label} variants={fadeUp} textAlign="center">
                <Text
                  fontSize={{ base: "4xl", md: "52px" }}
                  fontWeight="800"
                  bgGradient="linear(135deg, white, gray.400)"
                  bgClip="text"
                  color="transparent"
                  letterSpacing="-0.04em"
                  lineHeight="1"
                  mb={2}
                >
                  <AnimatedCounter to={stat.to} suffix={stat.suffix} />
                </Text>
                <Text fontSize="sm" color="gray.500" fontWeight="500">
                  {stat.label}
                </Text>
              </MotionBox>
            ))}
          </MotionSimpleGrid>
        </Container>
      </Box>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <Box py={24} bg="#F8F7F4">
        <Container maxW="container.xl">
          <MotionBox
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            mb={14}
          >
            <MotionBox variants={fadeUp}>
              <VStack align="flex-start" spacing={3}>
                <Text fontSize="xs" fontWeight="700" color="brand.primary"
                  letterSpacing="widest" textTransform="uppercase">
                  Services
                </Text>
                <Heading
                  as="h2"
                  fontSize={{ base: "3xl", md: "44px" }}
                  fontWeight="800"
                  color="gray.900"
                  letterSpacing="-0.03em"
                  lineHeight="1.1"
                >
                  How I Help Organisations
                </Heading>
                <Text fontSize="md" color="gray.500" maxW="480px" lineHeight="1.8" pt={1}>
                  Practical technology and data solutions for development
                  programmes across Africa.
                </Text>
              </VStack>
            </MotionBox>
          </MotionBox>

          <MotionSimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={5}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {services.map((s) => (
              <MotionBox
                key={s.title}
                variants={fadeUp}
                bg="white"
                borderWidth={1}
                borderColor="gray.100"
                rounded="2xl"
                p={7}
                transition="all 0.25s"
                _hover={{
                  boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                  transform: "translateY(-4px)",
                  borderColor: "gray.200",
                }}
              >
                <Flex
                  w="48px" h="48px" rounded="xl"
                  bg={s.accentBg}
                  align="center" justify="center" mb={5}
                  border="1px solid"
                  borderColor={s.accentBg}
                >
                  <Icon as={s.icon} boxSize={5} color={s.accent} />
                </Flex>
                <Heading as="h3" fontSize="md" fontWeight="700" color="gray.900" mb={2}>
                  {s.title}
                </Heading>
                <Text color="gray.500" fontSize="sm" lineHeight="1.8" mb={5}>
                  {s.description}
                </Text>
                <Flex
                  as={Link} href={s.link}
                  align="center" gap={1.5}
                  color={s.accent} fontSize="sm" fontWeight="600"
                  _hover={{ textDecoration: "none", gap: 3 }}
                  transition="gap 0.15s"
                >
                  Learn more <FaArrowRight size={11} />
                </Flex>
              </MotionBox>
            ))}
          </MotionSimpleGrid>
        </Container>
      </Box>

      {/* ── PROCESS ──────────────────────────────────────────────── */}
      <Box py={24} bg="white">
        <Container maxW="container.xl">
          <MotionGrid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={16}
            alignItems="center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <GridItem>
              <MotionBox variants={fadeUp}>
                <Text fontSize="xs" fontWeight="700" color="brand.primary"
                  letterSpacing="widest" textTransform="uppercase" mb={4}>
                  Approach
                </Text>
                <Heading
                  as="h2"
                  fontSize={{ base: "3xl", md: "44px" }}
                  fontWeight="800"
                  color="gray.900"
                  letterSpacing="-0.03em"
                  lineHeight="1.1"
                  mb={5}
                >
                  How I Work
                </Heading>
                <Text fontSize="md" color="gray.500" lineHeight="1.9" maxW="400px">
                  Every engagement follows a structured methodology designed to
                  deliver measurable outcomes — from the first workshop to the
                  final handover.
                </Text>
              </MotionBox>
            </GridItem>

            <GridItem>
              <VStack spacing={5} align="stretch">
                {processSteps.map((step, i) => (
                  <MotionBox
                    key={step.number}
                    variants={fadeUp}
                    custom={i}
                  >
                    <Flex
                      gap={5}
                      p={6}
                      bg="gray.50"
                      rounded="xl"
                      borderWidth={1}
                      borderColor="gray.100"
                      align="flex-start"
                      transition="all 0.2s"
                      _hover={{ bg: "white", boxShadow: "0 8px 32px rgba(0,0,0,0.06)", borderColor: "gray.200" }}
                    >
                      <Flex
                        w={10} h={10} rounded="full"
                        bgGradient="linear(135deg, #1D4ED8, #2563EB)"
                        align="center" justify="center" flexShrink={0}
                      >
                        <Text fontSize="xs" fontWeight="800" color="white">
                          {step.number}
                        </Text>
                      </Flex>
                      <Box>
                        <Text fontWeight="700" color="gray.900" fontSize="md" mb={1}>
                          {step.title}
                        </Text>
                        <Text fontSize="sm" color="gray.500" lineHeight="1.8">
                          {step.description}
                        </Text>
                      </Box>
                    </Flex>
                  </MotionBox>
                ))}
              </VStack>
            </GridItem>
          </MotionGrid>
        </Container>
      </Box>

      {/* ── LIVE WORK ── */}
      <Box py={20} bg="#0F172A" borderTop="1px solid rgba(255,255,255,0.05)">
        <Container maxW="container.xl">
          <MotionFlex
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'flex-start', md: 'center' }}
            justify="space-between"
            gap={6}
            mb={10}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 } as any}
          >
            <Box>
              <Text fontSize="xs" fontWeight="700" color="blue.400" letterSpacing="widest" textTransform="uppercase" mb={3}>Live Platforms</Text>
              <Heading as="h2" fontSize={{ base: '3xl', md: '44px' }} fontWeight="800" color="white" letterSpacing="-0.03em">
                8 Deployed Projects
              </Heading>
            </Box>
            <ChakraLink as={Link} href="/projects" display="inline-flex" alignItems="center" gap={2} color="gray.400" fontSize="sm" fontWeight="600" _hover={{ color: 'white', textDecoration: 'none' }} transition="color 0.15s" flexShrink={0}>
              View all projects <Icon as={FaArrowRight} boxSize={3} />
            </ChakraLink>
          </MotionFlex>
          <MotionSimpleGrid
            columns={{ base: 1, sm: 2, lg: 4 }}
            spacing={4}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {[
              { name: 'AFSF Community of Practice', category: 'Community Platform', accent: '#16a34a' },
              { name: 'AFSF Commitments Tracker', category: 'M&E / Data', accent: '#2563eb' },
              { name: 'AFSF Forum 2026 Registration', category: 'Event Platform', accent: '#7C3AED' },
              { name: 'Food Safety Certification', category: 'Certification', accent: '#D97706' },
              { name: 'HavenBridge Development', category: 'Property Dev', accent: '#b45309' },
              { name: 'AFS DealRoom', category: 'FinTech / AI', accent: '#0D9488' },
              { name: 'Swift Trading Services', category: 'Corporate', accent: '#DC2626' },
              { name: 'Student Opportunity Board', category: 'EdTech / Web3', accent: '#7C3AED' },
            ].map((p) => (
              <MotionBox
                key={p.name}
                variants={fadeUp}
                as={Link}
                href="/projects"
                p={5}
                rounded="xl"
                bg="rgba(255,255,255,0.04)"
                border="1px solid rgba(255,255,255,0.07)"
                transition="all 0.2s"
                _hover={{ bg: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.12)', transform: 'translateY(-2px)' }}
                display="block"
              >
                <Text fontSize="xs" fontWeight="700" color={p.accent} mb={2} textTransform="uppercase" letterSpacing="wide">{p.category}</Text>
                <Text fontSize="sm" fontWeight="600" color="gray.300" lineHeight="1.5">{p.name}</Text>
              </MotionBox>
            ))}
          </MotionSimpleGrid>
        </Container>
      </Box>

      {/* ── CTA STRIP ────────────────────────────────────────────── */}
      <Box py={24} bg="#F8F7F4">
        <Container maxW="container.xl">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 } as any}
          >
            <Box
              bg="#0B1120"
              rounded="3xl"
              p={{ base: 10, md: 16 }}
              position="relative"
              overflow="hidden"
              textAlign="center"
            >
              <Box
                position="absolute" inset={0}
                bgImage="radial-gradient(ellipse 60% 70% at 50% 0%, rgba(29,78,216,0.3) 0%, transparent 65%)"
                pointerEvents="none"
                rounded="3xl"
              />
              <Box
                position="absolute" inset={0}
                bgImage="linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)"
                bgSize="40px 40px"
                pointerEvents="none"
                rounded="3xl"
              />
              <VStack spacing={6} position="relative">
                <Badge
                  px={4} py={1.5} rounded="full"
                  bg="whiteAlpha.100" color="gray.300"
                  fontSize="xs" fontWeight="600" letterSpacing="wide"
                  textTransform="uppercase" backdropFilter="blur(8px)"
                  border="1px solid rgba(255,255,255,0.08)"
                >
                  Open to Engagements
                </Badge>
                <Heading
                  as="h2"
                  fontSize={{ base: "3xl", md: "48px" }}
                  fontWeight="800"
                  color="white"
                  letterSpacing="-0.03em"
                  lineHeight="1.1"
                  maxW="600px"
                >
                  Ready to work{" "}
                  <Box
                    as="span"
                    bgGradient="linear(135deg, #60A5FA, #34D399)"
                    bgClip="text"
                    color="transparent"
                  >
                    together?
                  </Box>
                </Heading>
                <Text fontSize="md" color="gray.400" maxW="440px" lineHeight="1.8">
                  Open to consultancy engagements, partnerships, and advisory
                  roles with development organisations across Africa.
                </Text>
                <HStack spacing={4} flexWrap="wrap" justify="center" pt={2}>
                  <Button
                    as={Link}
                    href="/contact"
                    size="lg"
                    bgGradient="linear(135deg, #1D4ED8, #2563EB)"
                    color="white"
                    fontWeight="700"
                    px={8}
                    h="52px"
                    fontSize="sm"
                    _hover={{
                      bgGradient: "linear(135deg, #1e40af, #1D4ED8)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 32px rgba(29,78,216,0.5)",
                    }}
                    transition="all 0.2s"
                    rightIcon={<FaArrowRight size={12} />}
                  >
                    Start a Conversation
                  </Button>
                  <Button
                    as={Link}
                    href="/work"
                    size="lg"
                    variant="outline"
                    borderColor="whiteAlpha.200"
                    color="gray.300"
                    px={8}
                    h="52px"
                    fontSize="sm"
                    _hover={{
                      borderColor: "whiteAlpha.400",
                      color: "white",
                      bg: "whiteAlpha.100",
                    }}
                    transition="all 0.2s"
                  >
                    View My Work
                  </Button>
                </HStack>
              </VStack>
            </Box>
          </MotionBox>
        </Container>
      </Box>

    </Box>
  );
}
