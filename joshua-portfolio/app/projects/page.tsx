'use client'

import Image from 'next/image'
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Icon,
  Link as ChakraLink,
  Badge,
  Grid,
  GridItem,
  VStack,
} from '@chakra-ui/react'
import {
  FaExternalLinkAlt,
  FaUsers,
  FaCheckCircle,
  FaChartLine,
  FaClipboardList,
  FaBuilding,
  FaLeaf,
  FaGraduationCap,
  FaCompass,
  FaBolt,
} from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)
const MotionVStack = motion(VStack)

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const allProjects = [
  {
    id: 1,
    icon: FaChartLine,
    category: 'M&E / Data Systems',
    accent: '#2563eb',
    gradientFrom: '#1e3a8a',
    gradientTo: '#2563eb',
    title: 'AFSF Monitoring & Evaluation Platform',
    subtitle: 'CAADP-Aligned Commitment Tracking — AFS Forum',
    description:
      'A full-stack M&E platform for the African Food Systems Forum, tracking commitments, CAADP-aligned indicators, and results across 65+ partner organisations. The public-facing commitment tracker — used by 5,000+ visitors — includes a live implementation-status dashboard, filterable commitment explorer, and per-commitment detail pages with progress timelines and strategic-objective alignment. Also powers an internal operations suite (budgets, inventory, purchase requests) and partnership/waiver management dashboards for AFSF staff.',
    stats: [
      { value: '65+', label: 'Partner Organisations' },
      { value: '5,000+', label: 'Public Visitors' },
      { value: '<2s', label: 'Tracker Load Time' },
    ],
    tech: ['Next.js', 'Chakra UI', 'Neon Postgres', 'Vercel'],
    href: 'https://me-platform-jf7p.vercel.app/tracker',
    image: '/projects/afsf-me-landing.png',
  },
  {
    id: 2,
    icon: FaCompass,
    category: 'Marketplace / Travel',
    accent: '#059669',
    gradientFrom: '#052e16',
    gradientTo: '#059669',
    title: 'IDTM Rwanda',
    subtitle: 'Local Tourism Marketplace',
    description:
      "A full-stack marketplace connecting Rwanda's local guides, artisans, food hosts, and homestay providers directly with travelers — removing the \"no marketing budget\" barrier that keeps genuine local experiences invisible next to big platforms with professional photography and ad spend. Multi-role accounts let a single login hold visitor, provider, and ambassador access with a dashboard switcher, and an ambassador program lets trusted local reps onboard and manage listings for non-tech-savvy providers.",
    stats: [
      { value: '94', label: 'Lighthouse Performance' },
      { value: '100', label: 'Accessibility Score' },
      { value: '3-in-1', label: 'Visitor / Provider / Ambassador' },
    ],
    tech: ['Next.js 15', 'TypeScript', 'Drizzle ORM', 'NextAuth v5'],
    href: 'https://www.idtmarkets.com',
    image: '/projects/idtm-hero.png',
  },
  {
    id: 3,
    icon: FaUsers,
    category: 'Community Platform',
    accent: '#16a34a',
    gradientFrom: '#14532d',
    gradientTo: '#16a34a',
    title: 'AFSF Community of Practice',
    subtitle: "Thematic Platforms for Africa's Food Systems",
    description:
      'A dedicated collaboration space for AFSF partners to connect, share resources, and advance food systems initiatives across the African continent. Features 9 thematic platforms covering the full spectrum of agricultural transformation.',
    stats: [
      { value: '9', label: 'Thematic Platforms' },
      { value: '5-step', label: 'Onboarding Flow' },
      { value: 'Pan-Africa', label: 'Coverage' },
    ],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    href: 'https://thematic-platform-k1h1.vercel.app/',
    image: '/projects/thematic-platform.png',
  },
  {
    id: 4,
    icon: FaClipboardList,
    category: 'Event Platform',
    accent: '#7C3AED',
    gradientFrom: '#4c1d95',
    gradientTo: '#7c3aed',
    title: 'Africa Food Systems Forum 2026',
    subtitle: 'Event Registration System',
    description:
      'End-to-end event registration platform for the premier African agriculture and food systems gathering. Manages delegate registration, session tracking, and attendance for a 5-day summit in Kigali.',
    stats: [
      { value: '6,000+', label: 'Expected Attendees' },
      { value: '50+', label: 'Countries' },
      { value: '100+', label: 'Speakers' },
    ],
    tech: ['Next.js', 'TypeScript', 'Form Management', 'Email Automation'],
    href: 'https://afsf-event-registration-system.vercel.app/',
    image: '/projects/event-registration.png.png',
  },
  {
    id: 5,
    icon: FaLeaf,
    category: 'Certification Platform',
    accent: '#D97706',
    gradientFrom: '#78350f',
    gradientTo: '#d97706',
    title: 'AFSF Food Safety Certification',
    subtitle: 'Certification Made Simple',
    description:
      'Empowers farmers and food partners with internationally recognised certifications — covering GAP, Organic Farming, Farm Hygiene, Soil Health, HACCP, and Food Processing Standards across Africa\'s supply chain.',
    stats: [
      { value: '200+', label: 'Certified Members' },
      { value: '6', label: 'Programs' },
      { value: '98%', label: 'Satisfaction' },
    ],
    tech: ['React', 'PostgreSQL', 'Document Management', 'PDF Generation'],
    href: 'https://afsf-food-cerfitication-platform-vg.vercel.app/',
    image: '/projects/food-certification.png',
  },
  {
    id: 6,
    icon: FaBuilding,
    category: 'Property Development',
    accent: '#b45309',
    gradientFrom: '#102a43',
    gradientTo: '#243b53',
    title: 'HavenBridge Development',
    subtitle: 'Building Communities. Delivering Impact.',
    description:
      'A values-led property development platform bridging institutional capability with community insight to deliver dignified, culturally-aligned housing solutions — from modular homes and childcare centres to aged care and community housing.',
    stats: [
      { value: '150+', label: 'Projects Delivered' },
      { value: '25+', label: 'Gov. Partnerships' },
      { value: 'A+', label: 'Industry Rating' },
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'CMS Integration'],
    href: 'https://haven-bridge-beta.vercel.app/',
    image: '/projects/haven-bridge.png',
  },
  {
    id: 7,
    icon: FaChartLine,
    category: 'FinTech / Investment',
    accent: '#0D9488',
    gradientFrom: '#134e4a',
    gradientTo: '#0d9488',
    title: 'African Food Systems DealRoom',
    subtitle: 'Connecting MSMEs and Investors Through AI & Blockchain',
    description:
      'An interactive investment matchmaking dashboard connecting African food systems MSMEs with investors. Leverages AI and blockchain to facilitate transparent deal flow and accelerate investment into food systems value chains.',
    stats: [
      { value: 'AI', label: 'Powered Matching' },
      { value: 'Blockchain', label: 'Verified Deals' },
      { value: 'Pan-Africa', label: 'Coverage' },
    ],
    tech: ['React', 'AI/ML', 'Blockchain', 'Data Dashboard'],
    href: 'https://afsf-dealroom-platform.vercel.app/',
    image: '/projects/deal-room-hero.png',
  },
  {
    id: 8,
    icon: FaBolt,
    category: 'Task Marketplace',
    accent: '#EA580C',
    gradientFrom: '#1e1b4b',
    gradientTo: '#4338ca',
    title: 'Zana',
    subtitle: "Africa's Short-Task Marketplace",
    description:
      "Connects African businesses with skilled professionals for short-duration work — design, social media, video, research, writing, and AI annotation — that would otherwise get assigned through WhatsApp groups with no contract or guaranteed payment. Escrowed payments lock funds when a task is posted and release to the worker's mobile money within minutes of approval, no bank account needed.",
    stats: [
      { value: '96+', label: 'Active Professionals' },
      { value: '4 min', label: 'Avg. Payout Time' },
      { value: '100%', label: 'Escrow Protected' },
    ],
    tech: ['Next.js', 'TypeScript', 'Mobile Money API', 'Escrow Payments'],
    href: 'https://useopportunityboard.com/',
    image: '/projects/zana-hero.png',
  },
  {
    id: 9,
    icon: FaCheckCircle,
    category: 'Corporate Platform',
    accent: '#DC2626',
    gradientFrom: '#1a0a0a',
    gradientTo: '#7f1d1d',
    title: 'Swift Trading Services',
    subtitle: 'Telecommunications Excellence — Rwanda & Africa',
    description:
      'Corporate platform for a premier telecommunications infrastructure and network consultancy. Showcases solutions across street lighting, electrical systems, telecom equipment supply, and machinery services across Africa.',
    stats: [
      { value: '4', label: 'Service Verticals' },
      { value: 'Rwanda', label: 'HQ Market' },
      { value: 'B2B', label: 'Enterprise Focus' },
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'E-Commerce'],
    href: 'https://swift-trading-services.vercel.app/',
    image: '/projects/swift-trading.png',
  },
]

export default function Projects() {
  return (
    <Box minH="100vh" bg="#F8F7F4">

      {/* HERO */}
      <Box
        position="relative"
        bg="white"
        pt={{ base: 32, md: 40 }}
        pb={{ base: 16, md: 20 }}
        overflow="hidden"
      >
        <Box
          position="absolute" inset={0}
          bgImage="radial-gradient(ellipse 70% 50% at 50% 0%, rgba(29,78,216,0.08) 0%, transparent 65%)"
          pointerEvents="none"
        />
        <Box
          position="absolute" inset={0}
          bgImage="linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)"
          bgSize="60px 60px"
          pointerEvents="none"
        />
        <Container maxW="container.xl" position="relative">
          <MotionFlex
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'flex-start', md: 'flex-end' }}
            justify="space-between"
            gap={6}
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <MotionBox variants={fadeUp}>
              <Box>
                <Text fontSize="xs" fontWeight="700" color="blue.600"
                  letterSpacing="widest" textTransform="uppercase" mb={4}>
                  Selected Work
                </Text>
                <Heading
                  as="h1"
                  fontSize={{ base: '5xl', md: '7xl' }}
                  fontWeight="800" color="gray.900"
                  letterSpacing="-0.04em" lineHeight="0.95" mb={6}
                >
                  Projects
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="520px" lineHeight="1.8">
                  Live platforms deployed across Africa — from agricultural data
                  infrastructure and investment marketplaces to event systems
                  and community platforms.
                </Text>
              </Box>
            </MotionBox>
            <MotionBox variants={fadeUp}>
              <Box textAlign={{ base: 'left', md: 'right' }} flexShrink={0}>
                <Text fontSize="5xl" fontWeight="800" color="gray.900" letterSpacing="-0.04em">
                  {allProjects.length}
                </Text>
                <Text fontSize="sm" color="gray.600" fontWeight="500">Live Platforms</Text>
              </Box>
            </MotionBox>
          </MotionFlex>
        </Container>
      </Box>

      {/* PROJECT LIST */}
      <Box pb={24}>
        <Container maxW="container.xl">
          <VStack spacing={0} align="stretch">
            {allProjects.map((project, idx) => {
              const isEven = idx % 2 === 0
              return (
                <MotionBox
                  key={project.id}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] } as any}
                  borderTop="1px solid #E2E8F0"
                  py={{ base: 12, md: 16 }}
                  _last={{ borderBottom: '1px solid #E2E8F0' }}
                >
                  <Grid
                    templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
                    gap={{ base: 8, md: 14 }}
                    alignItems="center"
                  >
                    {/* Content */}
                    <GridItem order={{ base: 2, lg: isEven ? 1 : 2 }}>
                      <Flex align="center" gap={3} mb={5}>
                        <Text fontSize="xs" fontWeight="800" color="gray.600" letterSpacing="widest">
                          {String(idx + 1).padStart(2, '0')}
                        </Text>
                        <Box w="24px" h="1px" bg="gray.300" />
                        <Badge
                          px={3} py={1} rounded="full"
                          bg="gray.100" color="gray.600"
                          fontSize="xs" fontWeight="600"
                        >
                          {project.category}
                        </Badge>
                      </Flex>

                      <Heading
                        as="h2"
                        fontSize={{ base: '3xl', md: '4xl' }}
                        fontWeight="800" color="gray.900"
                        letterSpacing="-0.03em" lineHeight="1.1" mb={3}
                      >
                        {project.title}
                      </Heading>

                      <Text fontSize="xs" color="gray.500" fontWeight="600" mb={5}
                        textTransform="uppercase" letterSpacing="wide">
                        {project.subtitle}
                      </Text>

                      <Text fontSize="md" color="gray.600" lineHeight="1.9" mb={8}>
                        {project.description}
                      </Text>

                      {/* Stats */}
                      <Flex gap={8} mb={8} flexWrap="wrap">
                        {project.stats.map((stat) => (
                          <Box key={stat.label}>
                            <Text
                              fontSize="2xl" fontWeight="800"
                              color={project.accent}
                              letterSpacing="-0.025em" lineHeight="1" mb={1}
                            >
                              {stat.value}
                            </Text>
                            <Text fontSize="xs" color="gray.500" fontWeight="500"
                              textTransform="uppercase" letterSpacing="wide">
                              {stat.label}
                            </Text>
                          </Box>
                        ))}
                      </Flex>

                      {/* Tech */}
                      <Flex flexWrap="wrap" gap={2} mb={8}>
                        {project.tech.map((t) => (
                          <Badge key={t} px={3} py={1} rounded="full"
                            bg="gray.100" color="gray.600"
                            fontWeight="500" fontSize="xs">
                            {t}
                          </Badge>
                        ))}
                      </Flex>

                      {/* CTA */}
                      <ChakraLink
                        href={project.href} isExternal
                        display="inline-flex" alignItems="center" gap={3}
                        color="gray.900" fontWeight="700" fontSize="sm"
                        _hover={{ textDecoration: 'none', gap: '20px' }}
                        transition="gap 0.2s"
                      >
                        <Flex
                          w={10} h={10} rounded="full"
                          bg={project.accent}
                          align="center" justify="center"
                          flexShrink={0}
                        >
                          <Icon as={FaExternalLinkAlt} boxSize={3.5} color="white" />
                        </Flex>
                        View Live Project
                      </ChakraLink>
                    </GridItem>

                    {/* Image */}
                    <GridItem order={{ base: 1, lg: isEven ? 2 : 1 }}>
                      <ChakraLink href={project.href} isExternal _hover={{ textDecoration: 'none' }}>
                        <Box
                          position="relative"
                          rounded="2xl"
                          overflow="hidden"
                          h={{ base: '240px', md: '340px', lg: '400px' }}
                          border="1px solid #E2E8F0"
                          transition="all 0.35s cubic-bezier(0.4,0,0.2,1)"
                          _hover={{
                            transform: 'scale(1.025)',
                            boxShadow: `0 40px 100px ${project.accent}40`,
                            borderColor: `${project.accent}66`,
                          }}
                          bgGradient={`linear(to-br, ${project.gradientFrom}, ${project.gradientTo})`}
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'top' }}
                            sizes="(max-width: 992px) 100vw, 50vw"
                          />
                          <Box
                            position="absolute" bottom={0} left={0} right={0} h="35%"
                            bgGradient={`linear(to-t, ${project.gradientFrom}BB, transparent)`}
                            pointerEvents="none"
                          />
                        </Box>
                      </ChakraLink>
                    </GridItem>
                  </Grid>
                </MotionBox>
              )
            })}
          </VStack>
        </Container>
      </Box>

      {/* BOTTOM CTA */}
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
              p={{ base: 10, md: 14 }}
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute" inset={0}
                bgImage="radial-gradient(ellipse 50% 80% at 50% 100%, rgba(29,78,216,0.25) 0%, transparent 70%)"
                pointerEvents="none"
                rounded="3xl"
              />
              <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" gap={8} position="relative">
                <Box>
                  <Text fontSize="xs" fontWeight="700" color="blue.400"
                    letterSpacing="widest" textTransform="uppercase" mb={3}>
                    Let's Build Together
                  </Text>
                  <Heading as="h2" fontSize={{ base: '3xl', md: '4xl' }}
                    fontWeight="800" color="white" letterSpacing="-0.03em" lineHeight="1.1">
                    Have a project in mind?
                  </Heading>
                </Box>
                <ChakraLink
                  href="/contact"
                  display="inline-flex" alignItems="center" gap={3}
                  bgGradient="linear(135deg, #1D4ED8, #2563EB)"
                  color="white" px={8} py={4} rounded="xl"
                  fontSize="sm" fontWeight="700" flexShrink={0}
                  _hover={{
                    bgGradient: 'linear(135deg, #1e40af, #1D4ED8)',
                    textDecoration: 'none',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 16px 40px rgba(29,78,216,0.4)',
                  }}
                  transition="all 0.2s"
                >
                  Start a Conversation
                  <Icon as={FaExternalLinkAlt} boxSize={3.5} />
                </ChakraLink>
              </Flex>
            </Box>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  )
}
