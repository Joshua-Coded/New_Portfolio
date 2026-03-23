"use client";

import Link from "next/link";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Badge,
  Flex,
  Grid,
  GridItem,
  Divider,
  Icon,
  HStack,
  Button,
} from "@chakra-ui/react";
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaArrowRight,
  FaCode,
  FaChartBar,
  FaClipboardList,
  FaServer,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionSimpleGrid = motion(SimpleGrid);
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

const staggerFast = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const timeline = [
  {
    period: "2024 – Present",
    title: "IT Consultant",
    organisation: "AGRA — Alliance for a Green Revolution in Africa",
    location: "Kigali, Rwanda",
    accent: "#60A5FA",
    accentBg: "rgba(96,165,250,0.08)",
    description:
      "Leading the development of technology products, data management systems, and monitoring & evaluation frameworks that track program performance across multiple African countries under the AFS Forum (AFSF).",
  },
  {
    period: "2024",
    title: "Software Engineering Graduate",
    organisation: "African Leadership University",
    location: "Kigali, Rwanda",
    accent: "#34D399",
    accentBg: "rgba(52,211,153,0.08)",
    description:
      "Specialized in low-level systems engineering, artificial intelligence & machine learning, full-stack web development, and blockchain technologies. Built a strong academic foundation in technology applied to African development contexts.",
  },
  {
    period: "2022 – 2024",
    title: "Research & Development Projects",
    organisation: "Independent & Academic",
    location: "Remote / Africa",
    accent: "#A78BFA",
    accentBg: "rgba(167,139,250,0.08)",
    description:
      "Designed data collection tools, automated reporting pipelines, and analytical dashboards applied to public health, agriculture, and education sectors. Collaborated with faculty and external organisations on applied technology research.",
  },
];

const skills: { category: string; items: string[]; accent: string; accentBg: string; icon: typeof FaCode }[] = [
  {
    category: "Programming",
    items: ["Python", "JavaScript", "TypeScript", "R", "SQL", "C"],
    accent: "#60A5FA",
    accentBg: "rgba(96,165,250,0.1)",
    icon: FaCode,
  },
  {
    category: "Data & Analytics",
    items: ["Power BI", "Tableau", "PostgreSQL", "TensorFlow", "Statistical Modeling"],
    accent: "#34D399",
    accentBg: "rgba(52,211,153,0.1)",
    icon: FaChartBar,
  },
  {
    category: "M&E Tools",
    items: ["KoboToolbox", "ODK", "DHIS2", "Excel (Advanced)", "Impact Assessment"],
    accent: "#FBBF24",
    accentBg: "rgba(251,191,36,0.1)",
    icon: FaClipboardList,
  },
  {
    category: "Infrastructure",
    items: ["Next.js", "Node.js", "Docker", "AWS", "Git", "CI/CD"],
    accent: "#A78BFA",
    accentBg: "rgba(167,139,250,0.1)",
    icon: FaServer,
  },
];

const impactStats = [
  { to: 8, suffix: "", label: "Deployed Platforms" },
  { to: 5, suffix: "+", label: "Countries Reached" },
  { to: 6000, suffix: "+", label: "Expected Attendees" },
  { to: 200, suffix: "+", label: "Certified Members" },
];

export default function About() {
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
              <Text
                fontSize="xs" fontWeight="700" color="blue.400"
                letterSpacing="widest" textTransform="uppercase" mb={4}
              >
                Background
              </Text>
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
                About{" "}
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
                  Me
                </Box>
              </Heading>
            </MotionBox>
            <MotionBox variants={fadeUp}>
              <Text fontSize="lg" color="gray.400" maxW="540px" lineHeight="1.8">
                A technology professional at the intersection of software engineering,
                data science, and agricultural development.
              </Text>
            </MotionBox>
          </MotionBox>
        </Container>
      </Box>

      {/* ── IMPACT STATS ─────────────────────────────────────────── */}
      <Box
        py={16}
        bg="#0B1120"
        borderTop="1px solid rgba(255,255,255,0.05)"
        borderBottom="1px solid rgba(255,255,255,0.05)"
      >
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

      {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
      <Box bg="#F8F7F4" py={16}>
        <Container maxW="container.xl">

          {/* Two-column: Bio + Profile Card */}
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 360px" }}
            gap={12}
            mb={20}
            alignItems="flex-start"
          >
            {/* LEFT: Bio */}
            <GridItem>
              <MotionVStack
                align="flex-start"
                spacing={5}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={stagger}
              >
                <MotionBox variants={fadeLeft}>
                  <Text fontSize="md" color="gray.600" lineHeight="1.9">
                    Joshua Alana is an IT Consultant and Software Engineer currently
                    at the{" "}
                    <Text as="span" color="brand.primary" fontWeight="600">
                      Alliance for a Green Revolution in Africa (AGRA)
                    </Text>
                    , where he leads the development of technology products, data
                    management systems, and monitoring &amp; evaluation frameworks
                    under the AFS Forum (AFSF) across Sub-Saharan Africa.
                  </Text>
                </MotionBox>
                <MotionBox variants={fadeLeft}>
                  <Text fontSize="md" color="gray.600" lineHeight="1.9">
                    A graduate of{" "}
                    <Text as="span" color="brand.secondary" fontWeight="600">
                      African Leadership University
                    </Text>{" "}
                    with a degree in Software Engineering, Joshua brings deep
                    technical expertise in full-stack development, machine learning,
                    and systems architecture. He has applied this foundation to
                    build scalable data pipelines, automated reporting tools, and
                    stakeholder management platforms that serve some of Africa&apos;s
                    most complex development programs.
                  </Text>
                </MotionBox>
                <MotionBox variants={fadeLeft}>
                  <Text fontSize="md" color="gray.600" lineHeight="1.9">
                    His approach combines rigorous technical execution with a nuanced
                    understanding of the African development context — designing
                    solutions that are practical in low-connectivity environments,
                    aligned with international M&amp;E standards, and built for
                    long-term organizational adoption. He is passionate about
                    evidence-based decision making and the role that well-designed
                    information systems play in driving agricultural transformation.
                  </Text>
                </MotionBox>

                <MotionBox variants={fadeLeft} w="full">
                  <Box
                    w="full"
                    bg="#0B1120"
                    borderLeft="4px solid"
                    borderLeftColor="blue.500"
                    rounded="xl"
                    p={7}
                    position="relative"
                    overflow="hidden"
                    mt={2}
                  >
                    <Box
                      position="absolute" top="-40px" right="-40px"
                      w="160px" h="160px" rounded="full"
                      bg="blue.600" opacity={0.1} filter="blur(50px)"
                      pointerEvents="none"
                    />
                    <Text
                      fontSize="md"
                      fontStyle="italic"
                      color="gray.300"
                      lineHeight="1.9"
                      mb={4}
                      position="relative"
                    >
                      &ldquo;Technology that does not serve people and communities
                      is just expensive noise. Every system I build must trace a
                      clear line back to development impact.&rdquo;
                    </Text>
                    <Text
                      bgGradient="linear(135deg, #60A5FA, #34D399)"
                      bgClip="text"
                      color="transparent"
                      fontWeight="700"
                      fontSize="sm"
                      position="relative"
                    >
                      — Joshua Alana
                    </Text>
                  </Box>
                </MotionBox>
              </MotionVStack>
            </GridItem>

            {/* RIGHT: Profile card */}
            <GridItem>
              <MotionBox
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeRight}
              >
                <MotionBox
                  bg="#0D1627"
                  border="1px solid rgba(255,255,255,0.08)"
                  rounded="2xl"
                  p={8}
                  position="sticky"
                  top="96px"
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

                  {/* Avatar + name */}
                  <Flex align="center" gap={4} mb={5}>
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

                  <Flex align="center" gap={2} mb={5}>
                    <Box w={2} h={2} rounded="full" bg="green.400"
                      sx={{ animation: "pulse 2s infinite" }}
                    />
                    <Text fontSize="xs" color="green.400" fontWeight="600">
                      Available for Engagements
                    </Text>
                  </Flex>

                  <Divider borderColor="whiteAlpha.100" mb={5} />

                  <VStack align="flex-start" spacing={4} mb={6}>
                    {[
                      { icon: FaMapMarkerAlt, label: "Location", value: "Kigali, Rwanda" },
                      { icon: FaBuilding, label: "Organisation", value: "AGRA" },
                      { icon: FaEnvelope, label: "Email", value: "opportunityjobs290@gmail.com" },
                      { icon: FaLinkedin, label: "LinkedIn", value: "in/joshua-a-5760b3196" },
                    ].map((item) => (
                      <Flex key={item.label} align="center" gap={3}>
                        <Flex
                          w={8} h={8} rounded="md"
                          bg="whiteAlpha.100"
                          align="center" justify="center" flexShrink={0}
                        >
                          <Icon as={item.icon} boxSize={3.5} color="gray.400" />
                        </Flex>
                        <Box>
                          <Text fontSize="xs" color="gray.500" fontWeight="600" textTransform="uppercase" letterSpacing="wide">
                            {item.label}
                          </Text>
                          <Text fontSize="sm" color="gray.300" mt={0.5}>
                            {item.value}
                          </Text>
                        </Box>
                      </Flex>
                    ))}
                  </VStack>

                  <Divider borderColor="whiteAlpha.100" mb={5} />

                  <Flex gap={3}>
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
                  </Flex>
                </MotionBox>
              </MotionBox>
            </GridItem>
          </Grid>

          {/* ── PROFESSIONAL TIMELINE ─────────────────────────────── */}
          <Box mb={20}>
            <MotionBox
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              mb={10}
            >
              <Text
                fontSize="xs" fontWeight="700" color="brand.primary"
                letterSpacing="widest" textTransform="uppercase" mb={3}
              >
                Experience
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="800"
                color="gray.900"
                letterSpacing="-0.025em"
              >
                Professional Journey
              </Heading>
            </MotionBox>

            <VStack spacing={0} align="stretch">
              {timeline.map((item, i) => (
                <MotionFlex
                  key={item.period}
                  gap={6}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } as any}
                >
                  <Flex direction="column" align="center" minW="20px">
                    <Box
                      w={3} h={3} rounded="full"
                      bgGradient={`linear(135deg, ${item.accent}, ${item.accent}aa)`}
                      mt={1} flexShrink={0}
                      border="2px solid"
                      borderColor={item.accent}
                      boxShadow={`0 0 10px ${item.accent}66`}
                    />
                    {i < timeline.length - 1 && (
                      <Box w="1px" flex={1} bg="gray.200" my={1} />
                    )}
                  </Flex>

                  <Box
                    pb={10} flex={1}
                    bg="white"
                    borderWidth={1}
                    borderColor="gray.100"
                    borderLeft="3px solid"
                    borderLeftColor={item.accent}
                    rounded="xl"
                    p={6}
                    mb={6}
                    boxShadow="sm"
                    _hover={{ boxShadow: "0 12px 40px rgba(0,0,0,0.07)", borderColor: item.accent }}
                    transition="all 0.2s"
                    position="relative"
                    overflow="hidden"
                  >
                    <Box
                      position="absolute" top="-30px" right="-30px"
                      w="100px" h="100px" rounded="full"
                      bg={item.accent} opacity={0.04} filter="blur(30px)"
                      pointerEvents="none"
                    />
                    <Text
                      fontWeight="600" fontSize="xs"
                      color={item.accent}
                      textTransform="uppercase" letterSpacing="wide" mb={1}
                    >
                      {item.period}
                    </Text>
                    <Heading as="h3" fontSize="lg" fontWeight="700" color="gray.900" mb={1}>
                      {item.title}
                    </Heading>
                    <Flex align="center" gap={3} mb={4} flexWrap="wrap">
                      <Text color="gray.700" fontWeight="600" fontSize="sm">
                        {item.organisation}
                      </Text>
                      <Text color="gray.400" fontSize="xs">·</Text>
                      <Text color="gray.500" fontSize="xs">{item.location}</Text>
                    </Flex>
                    <Text color="gray.600" fontSize="sm" lineHeight="1.9">
                      {item.description}
                    </Text>
                  </Box>
                </MotionFlex>
              ))}
            </VStack>
          </Box>

          {/* ── SKILLS ────────────────────────────────────────────── */}
          <Box>
            <MotionBox
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              mb={10}
            >
              <Text
                fontSize="xs" fontWeight="700" color="brand.primary"
                letterSpacing="widest" textTransform="uppercase" mb={3}
              >
                Technical Stack
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="800"
                color="gray.900"
                letterSpacing="-0.025em"
              >
                Skills &amp; Tools
              </Heading>
            </MotionBox>

            <MotionSimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={5}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              {skills.map((s) => (
                <MotionBox
                  key={s.category}
                  variants={fadeUp}
                  bg="white"
                  borderWidth={1}
                  borderColor="gray.100"
                  rounded="2xl"
                  p={7}
                  boxShadow="sm"
                  transition="all 0.25s"
                  _hover={{
                    boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                    transform: "translateY(-4px)",
                    borderColor: "gray.200",
                  }}
                  position="relative"
                  overflow="hidden"
                >
                  <Box
                    position="absolute" top="-30px" right="-30px"
                    w="100px" h="100px" rounded="full"
                    bg={s.accent} opacity={0.05} filter="blur(30px)"
                    pointerEvents="none"
                  />
                  <Flex
                    w="44px" h="44px" rounded="xl"
                    bg={s.accentBg}
                    align="center" justify="center" mb={5}
                    border="1px solid"
                    borderColor={s.accentBg}
                  >
                    <Icon as={s.icon} boxSize={5} color={s.accent} />
                  </Flex>
                  <Text fontWeight="700" color="gray.900" fontSize="md" mb={4}>
                    {s.category}
                  </Text>
                  <Flex flexWrap="wrap" gap={2}>
                    {s.items.map((skill) => (
                      <Badge
                        key={skill}
                        px={3} py={1}
                        rounded="full"
                        bg="gray.50"
                        color="gray.700"
                        fontWeight="500"
                        fontSize="xs"
                        border="1px solid"
                        borderColor="gray.100"
                        _hover={{ bg: s.accentBg, color: s.accent, borderColor: s.accentBg }}
                        transition="all 0.2s"
                        cursor="default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </Flex>
                </MotionBox>
              ))}
            </MotionSimpleGrid>
          </Box>
        </Container>
      </Box>

      {/* ── CTA ──────────────────────────────────────────────────── */}
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
                  Let&apos;s build something{" "}
                  <Box
                    as="span"
                    bgGradient="linear(135deg, #60A5FA, #34D399)"
                    bgClip="text"
                    color="transparent"
                  >
                    meaningful
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
                    Get In Touch
                  </Button>
                  <Button
                    as={Link}
                    href="/projects"
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
