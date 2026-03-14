import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Badge,
  Flex,
} from '@chakra-ui/react'

export default function About() {
  const timeline = [
    {
      year: "2024 – Present",
      title: "IT Consultant",
      company: "AGRA — Alliance for a Green Revolution in Africa",
      description: "Leading the development of technology products, data management systems, and M&E frameworks that track program performance across 15+ African countries. Supporting the AFS Forum and key agricultural transformation initiatives."
    },
    {
      year: "2024",
      title: "Software Engineering Graduate",
      company: "African Leadership University",
      description: "Specialized in low-level systems engineering, AI/ML, full-stack development, and blockchain. Built a strong foundation in technology applied to African development contexts."
    },
    {
      year: "2022 – 2024",
      title: "Research & Development Projects",
      company: "Independent & Academic",
      description: "Designed data collection tools, automated reporting pipelines, and analytical dashboards applied to public health, agriculture, and education sectors."
    },
  ]

  const skills = {
    "Programming": ["Python", "JavaScript", "TypeScript", "R", "SQL", "C"],
    "Data & Analytics": ["Power BI", "Tableau", "PostgreSQL", "TensorFlow", "Statistical Modeling"],
    "M&E Tools": ["KoboToolbox", "ODK", "DHIS2", "Excel (Advanced)", "Impact Assessment"],
    "Infrastructure": ["Next.js", "Node.js", "Docker", "AWS", "Git", "CI/CD"],
  }

  const principles = [
    {
      number: "01",
      title: "Impact First",
      description: "Every system, dashboard, or tool must serve a clear development objective — not just a technical one.",
    },
    {
      number: "02",
      title: "Evidence-Driven",
      description: "Decisions made without data are guesses. I build systems that turn field data into actionable insight.",
    },
    {
      number: "03",
      title: "Built for Africa",
      description: "Scalable, context-appropriate technology designed around the realities of African development programs.",
    },
  ]

  return (
    <Box minH="100vh" pt={32} pb={20}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="flex-start" mb={16}>
          <Heading as="h1" fontSize={{ base: "4xl", md: "6xl" }} fontWeight="black" fontFamily="mono">
            <Text as="span" color="brand.secondary">&gt;</Text> About_Me
          </Heading>
          <Text fontSize="xl" color="whiteAlpha.800" maxW="3xl">
            A technology professional at the intersection of software engineering, data science, and agricultural development.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} mb={20}>
          <VStack align="flex-start" spacing={6}>
            <Heading as="h2" size="xl" color="brand.primary">
              My Background
            </Heading>
            <Text fontSize="lg" color="whiteAlpha.800" lineHeight="tall">
              As a Software Engineering graduate from{' '}
              <Text as="span" color="brand.secondary" fontWeight="semibold">
                African Leadership University
              </Text>
              , I work at{' '}
              <Text as="span" color="brand.secondary" fontWeight="semibold">
                AGRA
              </Text>{' '}
              building data systems and technology products that support agricultural transformation across the continent.
            </Text>
            <Text fontSize="lg" color="whiteAlpha.800" lineHeight="tall">
              My work spans program monitoring, stakeholder engagement, M&E framework design, and the development
              of tools that help partner organizations — from national governments to international donors — make
              data-driven decisions.
            </Text>
            <Text fontSize="lg" color="whiteAlpha.800" lineHeight="tall">
              I bring together strong technical depth and a deep understanding of the{' '}
              <Text as="span" color="brand.primary">African development context</Text>{' '}
              to deliver solutions that are practical, scalable, and impactful.
            </Text>

            <HStack flexWrap="wrap" gap={2} pt={2}>
              {["AGRA", "IFAD", "African Union", "Agricultural Development", "M&E", "ICT4D"].map((tag) => (
                <Badge
                  key={tag}
                  px={3}
                  py={1}
                  rounded="full"
                  borderWidth={1}
                  borderColor="brand.secondary"
                  bg="rgba(16, 185, 129, 0.08)"
                  color="brand.secondary"
                  fontFamily="mono"
                  fontSize="xs"
                >
                  {tag}
                </Badge>
              ))}
            </HStack>
          </VStack>

          <Box
            bg="rgba(30, 41, 59, 0.5)"
            backdropFilter="blur(10px)"
            borderWidth={1}
            borderColor="rgba(59, 130, 246, 0.2)"
            rounded="xl"
            p={8}
          >
            <Heading as="h3" size="lg" color="brand.secondary" mb={6}>
              Guiding Principles
            </Heading>
            <Box borderLeft="4px" borderColor="brand.primary" pl={6} mb={8}>
              <Text fontSize="lg" fontStyle="italic" color="whiteAlpha.800">
                "Technology that does not serve people and communities is just expensive noise."
              </Text>
            </Box>

            <VStack spacing={4} align="flex-start">
              {principles.map((principle, i) => (
                <Flex key={principle.number} gap={3}>
                  <Text fontSize="2xl" color={i % 2 === 0 ? "brand.primary" : "brand.secondary"}>
                    {principle.number}
                  </Text>
                  <Box>
                    <Text fontWeight="bold" color="white" mb={1}>
                      {principle.title}
                    </Text>
                    <Text fontSize="sm" color="whiteAlpha.700">
                      {principle.description}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </VStack>
          </Box>
        </SimpleGrid>

        {/* Timeline */}
        <Box mb={20}>
          <Heading as="h2" size="xl" color="brand.primary" mb={12}>
            Professional Journey
          </Heading>
          <VStack spacing={8} align="stretch">
            {timeline.map((item, i) => (
              <Flex key={item.year} gap={8}>
                <Flex direction="column" align="center">
                  <Box
                    w={4}
                    h={4}
                    rounded="full"
                    bg="brand.primary"
                    transition="all 0.3s"
                    _hover={{ transform: 'scale(1.5)' }}
                  />
                  {i < timeline.length - 1 && (
                    <Box w="2px" h="full" bg="whiteAlpha.200" mt={2} />
                  )}
                </Flex>
                <Box pb={12} flex={1}>
                  <Text fontFamily="mono" fontSize="sm" color="brand.secondary" mb={2}>
                    {item.year}
                  </Text>
                  <Heading as="h3" size="lg" mb={1}>
                    {item.title}
                  </Heading>
                  <Text color="brand.primary" fontWeight="semibold" mb={3}>
                    {item.company}
                  </Text>
                  <Text color="whiteAlpha.700" lineHeight="tall">
                    {item.description}
                  </Text>
                </Box>
              </Flex>
            ))}
          </VStack>
        </Box>

        {/* Skills */}
        <Box>
          <Heading as="h2" size="xl" color="brand.primary" mb={12}>
            Technical Stack
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {Object.entries(skills).map(([category, items]) => (
              <Box
                key={category}
                bg="rgba(30, 41, 59, 0.5)"
                backdropFilter="blur(10px)"
                borderWidth={1}
                borderColor="whiteAlpha.200"
                rounded="xl"
                p={6}
              >
                <Heading as="h3" size="md" color="brand.secondary" fontFamily="mono" mb={4}>
                  {category}
                </Heading>
                <Flex flexWrap="wrap" gap={2}>
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      px={3}
                      py={1}
                      rounded="full"
                      bg="rgba(30, 41, 59, 0.5)"
                      color="whiteAlpha.800"
                      borderWidth={1}
                      borderColor="whiteAlpha.300"
                      _hover={{ borderColor: 'brand.primary', color: 'brand.primary' }}
                      transition="all 0.2s"
                    >
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}
