import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
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
    <Box minH="100vh" bg="gray.50" pt={32} pb={20}>
      <Container maxW="container.xl">
        {/* Header */}
        <VStack spacing={4} align="flex-start" mb={16}>
          <Text fontSize="xs" fontWeight="700" color="brand.primary" letterSpacing="widest" textTransform="uppercase">
            Background
          </Text>
          <Heading as="h1" fontSize={{ base: "4xl", md: "5xl" }} fontWeight="800" color="gray.900" letterSpacing="-0.02em">
            About Me
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl" lineHeight="tall">
            A technology professional at the intersection of software engineering, data science, and agricultural development.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={20}>
          {/* Journey */}
          <VStack align="flex-start" spacing={5}>
            <Heading as="h2" size="lg" fontWeight="700" color="gray.900">
              My Background
            </Heading>
            <Text fontSize="md" color="gray.600" lineHeight="tall">
              As a Software Engineering graduate from{' '}
              <Text as="span" color="brand.secondary" fontWeight="semibold">African Leadership University</Text>,
              I work at{' '}
              <Text as="span" color="brand.primary" fontWeight="semibold">AGRA</Text>{' '}
              building data systems and technology products that support agricultural transformation across the continent.
            </Text>
            <Text fontSize="md" color="gray.600" lineHeight="tall">
              My work spans program monitoring, stakeholder engagement, M&E framework design, and the development
              of tools that help partner organizations — from national governments to international donors — make
              data-driven decisions.
            </Text>
            <Text fontSize="md" color="gray.600" lineHeight="tall">
              I bring together strong technical depth and a deep understanding of the{' '}
              <Text as="span" color="brand.primary" fontWeight="semibold">African development context</Text>{' '}
              to deliver solutions that are practical, scalable, and impactful.
            </Text>
          </VStack>

          {/* Principles */}
          <Box
            bg="white"
            borderWidth={1}
            borderColor="gray.200"
            rounded="xl"
            p={8}
            boxShadow="sm"
          >
            <Heading as="h3" size="md" fontWeight="700" color="gray.900" mb={5}>
              Guiding Principles
            </Heading>
            <Box borderLeft="3px" borderColor="brand.primary" pl={5} mb={8}>
              <Text fontSize="md" fontStyle="italic" color="gray.600" lineHeight="tall">
                "Technology that does not serve people and communities is just expensive noise."
              </Text>
            </Box>

            <VStack spacing={5} align="flex-start">
              {principles.map((principle, i) => (
                <Flex key={principle.number} gap={4}>
                  <Text
                    fontSize="xl"
                    fontWeight="800"
                    color={i % 2 === 0 ? "brand.primary" : "brand.secondary"}
                    minW="32px"
                  >
                    {principle.number}
                  </Text>
                  <Box>
                    <Text fontWeight="700" color="gray.900" mb={1}>{principle.title}</Text>
                    <Text fontSize="sm" color="gray.500">{principle.description}</Text>
                  </Box>
                </Flex>
              ))}
            </VStack>
          </Box>
        </SimpleGrid>

        {/* Timeline */}
        <Box mb={20}>
          <Text fontSize="xs" fontWeight="700" color="brand.primary" letterSpacing="widest" textTransform="uppercase" mb={3}>
            Experience
          </Text>
          <Heading as="h2" size="lg" fontWeight="700" color="gray.900" mb={10}>
            Professional Journey
          </Heading>
          <VStack spacing={0} align="stretch">
            {timeline.map((item, i) => (
              <Flex key={item.year} gap={6}>
                <Flex direction="column" align="center" minW="20px">
                  <Box w={3} h={3} rounded="full" bg="brand.primary" mt={1} flexShrink={0} />
                  {i < timeline.length - 1 && (
                    <Box w="1px" flex={1} bg="gray.200" my={1} />
                  )}
                </Flex>
                <Box pb={10}>
                  <Text fontWeight="600" fontSize="xs" color="brand.secondary" textTransform="uppercase" letterSpacing="wide" mb={1}>
                    {item.year}
                  </Text>
                  <Heading as="h3" size="md" fontWeight="700" color="gray.900" mb={1}>
                    {item.title}
                  </Heading>
                  <Text color="brand.primary" fontWeight="600" fontSize="sm" mb={3}>
                    {item.company}
                  </Text>
                  <Text color="gray.600" fontSize="sm" lineHeight="tall">
                    {item.description}
                  </Text>
                </Box>
              </Flex>
            ))}
          </VStack>
        </Box>

        {/* Skills */}
        <Box>
          <Text fontSize="xs" fontWeight="700" color="brand.primary" letterSpacing="widest" textTransform="uppercase" mb={3}>
            Technical Stack
          </Text>
          <Heading as="h2" size="lg" fontWeight="700" color="gray.900" mb={10}>
            Skills & Tools
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {Object.entries(skills).map(([category, items]) => (
              <Box
                key={category}
                bg="white"
                borderWidth={1}
                borderColor="gray.200"
                rounded="xl"
                p={6}
                boxShadow="sm"
              >
                <Text fontWeight="700" color="gray.900" fontSize="sm" mb={4}>
                  {category}
                </Text>
                <Flex flexWrap="wrap" gap={2}>
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      px={3}
                      py={1}
                      rounded="full"
                      bg="gray.100"
                      color="gray.700"
                      fontWeight="500"
                      fontSize="xs"
                      _hover={{ bg: 'blue.50', color: 'brand.primary' }}
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
