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
      year: "2024-Present",
      title: "IT Consultant",
      company: "AGRA",
      description: "Developing tech products, building data systems, leading stakeholder engagement, and creating M&E frameworks for agricultural transformation."
    },
    {
      year: "2024",
      title: "Content Creator",
      company: "YouTube & Online",
      description: "Teaching forex trading, data science, coding, and career development through practical tutorials and real-world projects."
    },
    {
      year: "2024",
      title: "Software Engineering Graduate",
      company: "African Leadership University",
      description: "Specialized in low-level engineering, blockchain, AI/ML, and full-stack development."
    }
  ]

  const skills = {
    "Languages": ["Python", "JavaScript", "TypeScript", "C", "R", "SQL"],
    "Frameworks": ["React", "Next.js", "Node.js", "TensorFlow", "PyTorch"],
    "Tools": ["Git", "Docker", "CI/CD", "Blockchain", "AWS"],
    "M&E": ["Data Analysis", "Framework Design", "Reporting", "Impact Assessment"]
  }

  const principles = [
    {
      number: "01",
      title: "Impact First",
      description: "Technology should solve real problems, not create new ones."
    },
    {
      number: "02",
      title: "Learn by Doing",
      description: "The best way to learn is through real projects and experimentation."
    },
    {
      number: "03",
      title: "Share Knowledge",
      description: "Teaching others solidifies your own understanding."
    }
  ]

  return (
    <Box minH="100vh" pt={32} pb={20}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="flex-start" mb={16}>
          <Heading as="h1" fontSize={{ base: "4xl", md: "6xl" }} fontWeight="black" fontFamily="mono">
            <Text as="span" color="brand.secondary">&gt;</Text> About_Me
          </Heading>
          <Text fontSize="xl" color="whiteAlpha.800" maxW="3xl">
            From low-level C programming to analyzing agricultural data, I help organizations turn information into impact.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} mb={20}>
          <VStack align="flex-start" spacing={6}>
            <Heading as="h2" size="xl" color="brand.primary">
              My Journey
            </Heading>
            <Text fontSize="lg" color="whiteAlpha.800" lineHeight="tall">
              As a Software Engineering graduate from{' '}
              <Text as="span" color="brand.secondary" fontWeight="semibold">
                African Leadership University
              </Text>
              , I now work at{' '}
              <Text as="span" color="brand.secondary" fontWeight="semibold">
                AGRA
              </Text>{' '}
              developing tech products that drive agricultural transformation.
            </Text>
            <Text fontSize="lg" color="whiteAlpha.800" lineHeight="tall">
              My work involves tracking program performance, designing evaluation frameworks, and creating 
              tools that help organizations make data-driven decisions.
            </Text>
            <Text fontSize="lg" color="whiteAlpha.800" lineHeight="tall">
              Beyond my day job, I create educational content helping people master{' '}
              <Text as="span" color="brand.primary">forex trading</Text>,{' '}
              <Text as="span" color="brand.primary">data science</Text>, and{' '}
              <Text as="span" color="brand.primary">coding</Text>.
            </Text>
          </VStack>

          <Box
            bg="rgba(30, 41, 59, 0.5)"
            backdropFilter="blur(10px)"
            borderWidth={1}
            borderColor="rgba(34, 211, 238, 0.2)"
            rounded="xl"
            p={8}
          >
            <Heading as="h3" size="lg" color="brand.secondary" mb={6}>
              Philosophy
            </Heading>
            <Box borderLeft="4px" borderColor="brand.primary" pl={6} mb={8}>
              <Text fontSize="lg" fontStyle="italic" color="whiteAlpha.800">
                "Building technology that solves actual problems, engaging stakeholders, 
                and constantly experimenting with new tools."
              </Text>
            </Box>

            <VStack spacing={4} align="flex-start">
              {principles.map((principle, i) => (
                <Flex key={i} gap={3}>
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

        <Box mb={20}>
          <Heading as="h2" size="xl" color="brand.primary" mb={12}>
            Experience Timeline
          </Heading>
          <VStack spacing={8} align="stretch">
            {timeline.map((item, i) => (
              <Flex key={i} gap={8}>
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

        <Box>
          <Heading as="h2" size="xl" color="brand.primary" mb={12}>
            Tech Stack
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {Object.entries(skills).map(([category, items], i) => (
              <Box
                key={i}
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
                  {items.map((skill, j) => (
                    <Badge
                      key={j}
                      px={3}
                      py={1}
                      rounded="full"
                      bg="rgba(30, 41, 59, 0.5)"
                      color="whiteAlpha.800"
                      borderWidth={1}
                      borderColor="whiteAlpha.300"
                      _hover={{
                        borderColor: 'brand.primary',
                        color: 'brand.primary',
                      }}
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
