'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Flex,
  Icon,
  Link as ChakraLink,
  Spinner,
  Center,
  HStack,
  Badge,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaArrowRight,
  FaUsers,
  FaCheckCircle,
  FaChartLine,
  FaClipboardList,
} from 'react-icons/fa'
import { getGitHubRepos, GITHUB_USERNAME, type GitHubRepo } from '@/lib/api'

const featuredProjects = [
  {
    id: 1,
    icon: FaUsers,
    category: 'Community Platform',
    categoryColor: { bg: 'green.50', color: 'green.700' },
    accent: '#16a34a',
    accentBg: '#F0FDF4',
    gradientFrom: '#14532d',
    gradientTo: '#16a34a',
    title: 'AFSF Community of Practice',
    subtitle: 'Thematic Platforms for Africa\'s Food Systems',
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
    id: 2,
    icon: FaChartLine,
    category: 'M&E / Data Systems',
    categoryColor: { bg: 'blue.50', color: 'blue.700' },
    accent: '#1D4ED8',
    accentBg: '#EFF6FF',
    gradientFrom: '#1e3a8a',
    gradientTo: '#2563eb',
    title: 'AFSF Yearly Commitments Tracker',
    subtitle: 'M&E Platform — AFS Forum',
    description:
      'Track and monitor commitments made at AFSF summits in real time. Supports filtering by organisation, thematic area, and year — enabling transparent accountability across the Forum\'s member network.',
    stats: [
      { value: '9', label: 'Thematic Areas' },
      { value: '2023–26', label: 'Year Coverage' },
      { value: 'Live', label: 'Commitment Data' },
    ],
    tech: ['React', 'Node.js', 'REST API', 'Data Visualization'],
    href: 'https://me-platform-jf7p.vercel.app/tracker',
    image: '/projects/commitments-tracker.png',
  },
  {
    id: 3,
    icon: FaClipboardList,
    category: 'Event Platform',
    categoryColor: { bg: 'purple.50', color: 'purple.700' },
    accent: '#7C3AED',
    accentBg: '#F5F3FF',
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
    id: 4,
    icon: FaCheckCircle,
    category: 'Certification Platform',
    categoryColor: { bg: 'orange.50', color: 'orange.700' },
    accent: '#D97706',
    accentBg: '#FFFBEB',
    gradientFrom: '#78350f',
    gradientTo: '#d97706',
    title: 'AFSF Food Safety Certification',
    subtitle: 'Certification Made Simple',
    description:
      'Empowers farmers and food partners with internationally recognised certifications — covering GAP, Organic Farming, Farm Hygiene, Soil Health, HACCP, and Food Processing Standards across Africa\'s supply chain.',
    stats: [
      { value: '200+', label: 'Certified Members' },
      { value: '6', label: 'Certification Programs' },
      { value: '98%', label: 'Satisfaction Rate' },
    ],
    tech: ['React', 'PostgreSQL', 'Document Management', 'PDF Generation'],
    href: 'https://afsf-food-cerfitication-platform-vg.vercel.app/',
    image: '/projects/food-certification.png',
  },
]

const additionalProjects = [
  {
    id: 5,
    icon: FaUsers,
    category: 'Property Development',
    categoryColor: { bg: 'yellow.50', color: 'yellow.700' },
    accent: '#b45309',
    accentBg: '#FFFBEB',
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
  },
  {
    id: 6,
    icon: FaChartLine,
    category: 'FinTech / Investment',
    categoryColor: { bg: 'teal.50', color: 'teal.700' },
    accent: '#0D9488',
    accentBg: '#F0FDFA',
    gradientFrom: '#134e4a',
    gradientTo: '#0d9488',
    title: 'African Food Systems DealRoom',
    subtitle: 'Connecting MSMEs and Investors Through AI & Blockchain',
    description:
      'An interactive investment matchmaking dashboard connecting African food systems MSMEs with investors. Leverages AI and blockchain technology to facilitate transparent deal flow and accelerate investment into food systems value chains.',
    stats: [
      { value: 'AI', label: 'Powered Matching' },
      { value: 'Blockchain', label: 'Verified Deals' },
      { value: 'Pan-Africa', label: 'Coverage' },
    ],
    tech: ['React', 'AI/ML', 'Blockchain', 'Data Dashboard'],
    href: 'https://afsdmp.vercel.app/',
  },
  {
    id: 7,
    icon: FaCheckCircle,
    category: 'Corporate Platform',
    categoryColor: { bg: 'red.50', color: 'red.700' },
    accent: '#DC2626',
    accentBg: '#FEF2F2',
    gradientFrom: '#0A0A0B',
    gradientTo: '#7f1d1d',
    title: 'Swift Trading Services',
    subtitle: 'Telecommunications Excellence — Rwanda & Africa',
    description:
      'Corporate platform for a premier telecommunications infrastructure and network consultancy. Showcases solutions across street lighting, electrical systems, telecom equipment supply, and machinery services for public and private sector clients across Africa.',
    stats: [
      { value: '4', label: 'Service Verticals' },
      { value: 'Rwanda', label: 'HQ Market' },
      { value: 'B2B', label: 'Enterprise Focus' },
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'E-Commerce'],
    href: 'https://swift-trading-services.vercel.app/',
  },
]

const languageChakraColors: Record<string, string> = {
  JavaScript: 'yellow.500',
  TypeScript: 'blue.500',
  Python: 'green.500',
  Java: 'orange.500',
  C: 'gray.600',
  'C++': 'pink.500',
  HTML: 'orange.500',
  CSS: 'purple.500',
  Go: 'cyan.500',
  Rust: 'orange.400',
}

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getGitHubRepos(GITHUB_USERNAME, 6)
      .then((data) => {
        setRepos(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

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
            Portfolio
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '5xl' }}
            fontWeight="800"
            color="gray.900"
            letterSpacing="-0.03em"
          >
            Projects
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl" lineHeight="1.8">
            Live platforms and systems built for agricultural transformation
            and food systems development across Africa — deployed and in
            active use.
          </Text>
        </VStack>

        {/* Featured Projects */}
        <Box mb={20}>
          <Text
            fontSize="xs"
            fontWeight="700"
            color="gray.400"
            letterSpacing="widest"
            textTransform="uppercase"
            mb={8}
          >
            Featured Work
          </Text>

          <VStack spacing={6} align="stretch">
            {featuredProjects.map((project, idx) => (
              <Box
                key={project.id}
                bg="white"
                borderWidth={1}
                borderColor="gray.200"
                rounded="2xl"
                overflow="hidden"
                boxShadow="sm"
                transition="all 0.2s"
                _hover={{ boxShadow: 'lg', borderColor: 'gray.300' }}
              >
                <Grid templateColumns={{ base: '1fr', lg: '380px 1fr' }}>
                  {/* Left: screenshot or gradient */}
                  <GridItem
                    position="relative"
                    minH={{ base: '220px', lg: 'auto' }}
                    overflow="hidden"
                    bgGradient={`linear(to-br, ${project.gradientFrom}, ${project.gradientTo})`}
                  >
                    {'image' in project && project.image ? (
                      <Image
                        src={project.image as string}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                        sizes="380px"
                      />
                    ) : (
                      <>
                        <Box
                          position="absolute"
                          bottom="-40px"
                          right="-40px"
                          w="160px"
                          h="160px"
                          rounded="full"
                          bg="whiteAlpha.100"
                          pointerEvents="none"
                        />
                        <Box
                          position="absolute"
                          top="-20px"
                          left="-20px"
                          w="80px"
                          h="80px"
                          rounded="full"
                          bg="whiteAlpha.100"
                          pointerEvents="none"
                        />
                        <Flex
                          position="absolute"
                          top={8}
                          left={8}
                          w={14}
                          h={14}
                          rounded="xl"
                          bg="whiteAlpha.200"
                          align="center"
                          justify="center"
                        >
                          <Icon as={project.icon} boxSize={6} color="white" />
                        </Flex>
                      </>
                    )}
                    {/* Overlay badge always visible */}
                    <Box position="absolute" bottom={4} left={4}>
                      <Badge
                        px={3}
                        py={1}
                        rounded="full"
                        bg="blackAlpha.600"
                        color="white"
                        fontSize="xs"
                        fontWeight="600"
                        backdropFilter="blur(8px)"
                      >
                        {project.category}
                      </Badge>
                    </Box>
                    <Box position="absolute" top={4} right={4}>
                      <Text
                        fontSize="xs"
                        color="whiteAlpha.800"
                        fontWeight="700"
                        bg="blackAlpha.400"
                        px={2}
                        py={1}
                        rounded="md"
                        backdropFilter="blur(8px)"
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </Text>
                    </Box>
                  </GridItem>

                  {/* Right: content */}
                  <GridItem p={{ base: 6, md: 8 }}>
                    <Flex direction="column" h="full" gap={5}>
                      <Box>
                        <Text fontSize="xs" color="gray.400" fontWeight="600" mb={1}>
                          {project.subtitle}
                        </Text>
                        <Heading
                          as="h2"
                          fontSize={{ base: 'xl', md: '2xl' }}
                          fontWeight="800"
                          color="gray.900"
                          letterSpacing="-0.025em"
                          mb={3}
                        >
                          {project.title}
                        </Heading>
                        <Text fontSize="sm" color="gray.600" lineHeight="1.8">
                          {project.description}
                        </Text>
                      </Box>

                      {/* Stats */}
                      <SimpleGrid columns={3} spacing={4}>
                        {project.stats.map((stat) => (
                          <Box
                            key={stat.label}
                            bg="gray.50"
                            rounded="lg"
                            p={3}
                            borderWidth={1}
                            borderColor="gray.100"
                          >
                            <Text
                              fontSize="lg"
                              fontWeight="800"
                              color={project.accent}
                              letterSpacing="-0.02em"
                              lineHeight="1"
                              mb={1}
                            >
                              {stat.value}
                            </Text>
                            <Text fontSize="xs" color="gray.500" fontWeight="500">
                              {stat.label}
                            </Text>
                          </Box>
                        ))}
                      </SimpleGrid>

                      {/* Tech + Link */}
                      <Flex
                        justify="space-between"
                        align="center"
                        flexWrap="wrap"
                        gap={3}
                        mt="auto"
                      >
                        <Flex flexWrap="wrap" gap={1.5}>
                          {project.tech.map((t) => (
                            <Badge
                              key={t}
                              px={2}
                              py={0.5}
                              rounded="md"
                              bg="gray.100"
                              color="gray.600"
                              fontWeight="500"
                              fontSize="xs"
                            >
                              {t}
                            </Badge>
                          ))}
                        </Flex>
                        <ChakraLink
                          href={project.href}
                          isExternal
                          display="flex"
                          alignItems="center"
                          gap={2}
                          bg={project.accent}
                          color="white"
                          px={5}
                          py={2}
                          rounded="lg"
                          fontSize="xs"
                          fontWeight="700"
                          _hover={{ opacity: 0.9, textDecoration: 'none' }}
                          transition="all 0.15s"
                          flexShrink={0}
                        >
                          View Live
                          <Icon as={FaExternalLinkAlt} boxSize={3} />
                        </ChakraLink>
                      </Flex>
                    </Flex>
                  </GridItem>
                </Grid>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Additional Projects */}
        <Box mb={20}>
          <Text
            fontSize="xs"
            fontWeight="700"
            color="gray.400"
            letterSpacing="widest"
            textTransform="uppercase"
            mb={8}
          >
            More Projects
          </Text>

          <VStack spacing={6} align="stretch">
            {additionalProjects.map((project, idx) => (
              <Box
                key={project.id}
                bg="white"
                borderWidth={1}
                borderColor="gray.200"
                rounded="2xl"
                overflow="hidden"
                boxShadow="sm"
                transition="all 0.2s"
                _hover={{ boxShadow: 'lg', borderColor: 'gray.300' }}
              >
                <Grid templateColumns={{ base: '1fr', lg: '380px 1fr' }}>
                  {/* Left: gradient banner */}
                  <GridItem
                    position="relative"
                    minH={{ base: '220px', lg: 'auto' }}
                    overflow="hidden"
                    bgGradient={`linear(to-br, ${project.gradientFrom}, ${project.gradientTo})`}
                  >
                    <Box
                      position="absolute"
                      bottom="-40px"
                      right="-40px"
                      w="160px"
                      h="160px"
                      rounded="full"
                      bg="whiteAlpha.100"
                      pointerEvents="none"
                    />
                    <Flex
                      position="absolute"
                      top={8}
                      left={8}
                      w={14}
                      h={14}
                      rounded="xl"
                      bg="whiteAlpha.200"
                      align="center"
                      justify="center"
                    >
                      <Icon as={project.icon} boxSize={6} color="white" />
                    </Flex>
                    <Box position="absolute" bottom={4} left={4}>
                      <Badge
                        px={3}
                        py={1}
                        rounded="full"
                        bg="blackAlpha.600"
                        color="white"
                        fontSize="xs"
                        fontWeight="600"
                        backdropFilter="blur(8px)"
                      >
                        {project.category}
                      </Badge>
                    </Box>
                    <Box position="absolute" top={4} right={4}>
                      <Text
                        fontSize="xs"
                        color="whiteAlpha.800"
                        fontWeight="700"
                        bg="blackAlpha.400"
                        px={2}
                        py={1}
                        rounded="md"
                        backdropFilter="blur(8px)"
                      >
                        {String(idx + 5).padStart(2, '0')}
                      </Text>
                    </Box>
                  </GridItem>

                  {/* Right: content */}
                  <GridItem p={{ base: 6, md: 8 }}>
                    <Flex direction="column" h="full" gap={5}>
                      <Box>
                        <Text fontSize="xs" color="gray.400" fontWeight="600" mb={1}>
                          {project.subtitle}
                        </Text>
                        <Heading
                          as="h2"
                          fontSize={{ base: 'xl', md: '2xl' }}
                          fontWeight="800"
                          color="gray.900"
                          letterSpacing="-0.025em"
                          mb={3}
                        >
                          {project.title}
                        </Heading>
                        <Text fontSize="sm" color="gray.600" lineHeight="1.8">
                          {project.description}
                        </Text>
                      </Box>

                      <SimpleGrid columns={3} spacing={4}>
                        {project.stats.map((stat) => (
                          <Box
                            key={stat.label}
                            bg="gray.50"
                            rounded="lg"
                            p={3}
                            borderWidth={1}
                            borderColor="gray.100"
                          >
                            <Text
                              fontSize="lg"
                              fontWeight="800"
                              color={project.accent}
                              letterSpacing="-0.02em"
                              lineHeight="1"
                              mb={1}
                            >
                              {stat.value}
                            </Text>
                            <Text fontSize="xs" color="gray.500" fontWeight="500">
                              {stat.label}
                            </Text>
                          </Box>
                        ))}
                      </SimpleGrid>

                      <Flex
                        justify="space-between"
                        align="center"
                        flexWrap="wrap"
                        gap={3}
                        mt="auto"
                      >
                        <Flex flexWrap="wrap" gap={1.5}>
                          {project.tech.map((t) => (
                            <Badge
                              key={t}
                              px={2}
                              py={0.5}
                              rounded="md"
                              bg="gray.100"
                              color="gray.600"
                              fontWeight="500"
                              fontSize="xs"
                            >
                              {t}
                            </Badge>
                          ))}
                        </Flex>
                        <ChakraLink
                          href={project.href}
                          isExternal
                          display="flex"
                          alignItems="center"
                          gap={2}
                          bg={project.accent}
                          color="white"
                          px={5}
                          py={2}
                          rounded="lg"
                          fontSize="xs"
                          fontWeight="700"
                          _hover={{ opacity: 0.9, textDecoration: 'none' }}
                          transition="all 0.15s"
                          flexShrink={0}
                        >
                          View Live
                          <Icon as={FaExternalLinkAlt} boxSize={3} />
                        </ChakraLink>
                      </Flex>
                    </Flex>
                  </GridItem>
                </Grid>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Open Source */}
        <Box>
          <Flex
            align="center"
            justify="space-between"
            mb={8}
            flexWrap="wrap"
            gap={4}
          >
            <Box>
              <Text
                fontSize="xs"
                fontWeight="700"
                color="gray.400"
                letterSpacing="widest"
                textTransform="uppercase"
                mb={1}
              >
                Open Source
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="800"
                color="gray.900"
                letterSpacing="-0.025em"
              >
                GitHub Repositories
              </Heading>
            </Box>
            <ChakraLink
              href={`https://github.com/${GITHUB_USERNAME}`}
              isExternal
              display="flex"
              alignItems="center"
              gap={2}
              bg="gray.900"
              color="white"
              px={5}
              py={2.5}
              rounded="lg"
              fontSize="sm"
              fontWeight="600"
              _hover={{ bg: 'gray.700', textDecoration: 'none' }}
              transition="all 0.2s"
            >
              <Icon as={FaGithub} boxSize={4} />
              View Profile
              <Icon as={FaArrowRight} boxSize={3} />
            </ChakraLink>
          </Flex>

          {loading ? (
            <Center py={20}>
              <VStack spacing={4}>
                <Spinner size="xl" color="brand.primary" thickness="3px" />
                <Text fontSize="sm" color="gray.400">Fetching repositories…</Text>
              </VStack>
            </Center>
          ) : error || repos.length === 0 ? (
            <Box
              bg="white"
              borderWidth={1}
              borderColor="gray.200"
              rounded="xl"
              p={12}
              textAlign="center"
            >
              <Icon as={FaGithub} boxSize={10} color="gray.300" mb={4} />
              <Text color="gray.400" fontSize="sm" mb={2}>
                {error ? 'Could not load repositories.' : 'No repositories found.'}
              </Text>
              <ChakraLink
                href={`https://github.com/${GITHUB_USERNAME}`}
                isExternal
                fontSize="sm"
                color="brand.primary"
                fontWeight="600"
              >
                View on GitHub →
              </ChakraLink>
            </Box>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
              {repos.map((repo) => (
                <Box
                  key={repo.id}
                  bg="white"
                  borderWidth={1}
                  borderColor="gray.200"
                  rounded="xl"
                  p={6}
                  boxShadow="sm"
                  transition="all 0.2s"
                  display="flex"
                  flexDirection="column"
                  _hover={{
                    boxShadow: 'md',
                    borderColor: 'blue.200',
                    transform: 'translateY(-2px)',
                  }}
                >
                  <Flex justify="space-between" align="flex-start" mb={4}>
                    <Flex
                      w={9}
                      h={9}
                      rounded="lg"
                      bg="gray.100"
                      align="center"
                      justify="center"
                    >
                      <Icon as={FaGithub} boxSize={4} color="gray.600" />
                    </Flex>
                    <ChakraLink href={repo.url} isExternal>
                      <Flex
                        w={7}
                        h={7}
                        rounded="md"
                        align="center"
                        justify="center"
                        color="gray.400"
                        _hover={{ color: 'brand.primary', bg: 'blue.50' }}
                        transition="all 0.15s"
                      >
                        <Icon as={FaExternalLinkAlt} boxSize={3} />
                      </Flex>
                    </ChakraLink>
                  </Flex>

                  <Heading as="h3" fontSize="sm" fontWeight="700" color="gray.900" mb={2}>
                    <ChakraLink
                      href={repo.url}
                      isExternal
                      _hover={{ color: 'brand.primary', textDecoration: 'none' }}
                      transition="color 0.15s"
                    >
                      {repo.name}
                    </ChakraLink>
                  </Heading>

                  <Text
                    fontSize="sm"
                    color="gray.500"
                    mb={5}
                    flex={1}
                    noOfLines={2}
                    lineHeight="1.7"
                  >
                    {repo.description || 'No description available.'}
                  </Text>

                  <Flex justify="space-between" align="center" mt="auto">
                    {repo.language ? (
                      <HStack spacing={1.5}>
                        <Box
                          w={2.5}
                          h={2.5}
                          rounded="full"
                          bg={languageChakraColors[repo.language] ?? 'gray.400'}
                          flexShrink={0}
                        />
                        <Text fontSize="xs" color="gray.500">{repo.language}</Text>
                      </HStack>
                    ) : <Box />}
                    <HStack spacing={3} fontSize="xs" color="gray.400">
                      <HStack spacing={1}>
                        <Icon as={FaStar} boxSize={3} />
                        <Text>{repo.stars}</Text>
                      </HStack>
                      <HStack spacing={1}>
                        <Icon as={FaCodeBranch} boxSize={3} />
                        <Text>{repo.forks}</Text>
                      </HStack>
                    </HStack>
                  </Flex>

                  {repo.homepage && (
                    <Box mt={4} pt={4} borderTop="1px" borderColor="gray.100">
                      <ChakraLink
                        href={repo.homepage}
                        isExternal
                        fontSize="xs"
                        color="brand.primary"
                        fontWeight="600"
                        _hover={{ textDecoration: 'underline' }}
                      >
                        View Live Demo →
                      </ChakraLink>
                    </Box>
                  )}
                </Box>
              ))}
            </SimpleGrid>
          )}
        </Box>
      </Container>
    </Box>
  )
}
