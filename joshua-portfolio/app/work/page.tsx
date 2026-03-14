"use client";
import { FaChartBar, FaChartLine, FaCubes, FaDatabase, FaFileAlt, FaUsers } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Flex,
  Icon,
  Badge,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'

export default function Work() {
  const projects = [
    {
      icon: FaDatabase,
      title: "AFS Forum Data Systems",
      description: "Managing comprehensive data collection and monitoring systems for AGRA's AFS Forum, tracking program implementation across multiple countries.",
      technologies: ["Python", "PostgreSQL", "React", "AWS"],
      impact: "Processing data from 100+ stakeholders across 15 African countries",
      category: "Data Systems"
    },
    {
      icon: FaCubes,
      title: "Tech Product Development",
      description: "Building scalable tech products for agricultural transformation, from data dashboards to stakeholder management platforms.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Docker"],
      impact: "Supporting agricultural programs reaching 5M+ farmers",
      category: "Product Development"
    },
    {
      icon: FaFileAlt,
      title: "M&E Framework Design",
      description: "Designing and implementing monitoring & evaluation frameworks that track program performance and measure agricultural impact.",
      technologies: ["Excel", "Power BI", "Python", "Statistical Analysis"],
      impact: "Created frameworks used by 20+ partner organizations",
      category: "M&E"
    },
    {
      icon: FaUsers,
      title: "Stakeholder Engagement",
      description: "Leading digital stakeholder engagement initiatives, managing communications, and building collaborative platforms.",
      technologies: ["CRM Systems", "Communication Tools", "Data Analytics"],
      impact: "Engaged 200+ stakeholders across government, private sector, and NGOs",
      category: "Engagement"
    },
    {
      icon: FaChartBar,
      title: "Performance Tracking Tools",
      description: "Creating automated tools for tracking program performance, generating reports, and visualizing agricultural impact data.",
      technologies: ["Python", "Tableau", "API Integration", "Automation"],
      impact: "Reduced reporting time by 60%, improved data accuracy",
      category: "Analytics"
    },
    {
      icon: FaChartLine,
      title: "Impact Assessment",
      description: "Developing systems to measure and analyze the impact of agricultural interventions on farmer livelihoods and food systems.",
      technologies: ["R", "Statistical Modeling", "Data Visualization"],
      impact: "Provided insights driving $50M+ in program investments",
      category: "Assessment"
    }
  ]

  const responsibilities = [
    "Develop and maintain tech products for agricultural development",
    "Build data systems for monitoring and evaluation",
    "Lead stakeholder engagement initiatives",
    "Design M&E frameworks and impact assessment tools",
    "Create dashboards and reporting tools for decision-makers",
    "Manage data collection across multiple countries"
  ]

  const stats = [
    { value: "15+", label: "Countries" },
    { value: "5M+", label: "Farmers Reached" },
    { value: "100+", label: "Stakeholders" },
    { value: "$50M+", label: "Programs Supported" }
  ]

  const categoryColors: Record<string, { bg: string; color: string }> = {
    "Data Systems": { bg: "blue.50", color: "blue.700" },
    "Product Development": { bg: "purple.50", color: "purple.700" },
    "M&E": { bg: "green.50", color: "green.700" },
    "Engagement": { bg: "orange.50", color: "orange.700" },
    "Analytics": { bg: "teal.50", color: "teal.700" },
    "Assessment": { bg: "red.50", color: "red.700" },
  }

  return (
    <Box minH="100vh" bg="gray.50" pt={32} pb={20}>
      <Container maxW="container.xl">
        {/* Header */}
        <VStack spacing={4} align="flex-start" mb={12}>
          <Text fontSize="xs" fontWeight="700" color="brand.primary" letterSpacing="widest" textTransform="uppercase">
            Current Role
          </Text>
          <Heading as="h1" fontSize={{ base: "4xl", md: "5xl" }} fontWeight="800" color="gray.900" letterSpacing="-0.02em">
            Professional Work
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl" lineHeight="tall">
            IT Consultant at AGRA — building technology for agricultural transformation and development impact.
          </Text>
        </VStack>

        {/* Responsibilities */}
        <Box
          bg="white"
          borderWidth={1}
          borderColor="gray.200"
          rounded="xl"
          p={8}
          mb={16}
          maxW="3xl"
          boxShadow="sm"
        >
          <Heading as="h2" size="md" fontWeight="700" color="gray.900" mb={5}>
            What I Do at AGRA
          </Heading>
          <List spacing={3}>
            {responsibilities.map((item) => (
              <ListItem key={item} display="flex" alignItems="flex-start" color="gray.600" fontSize="sm">
                <ListIcon as={MdArrowForward} color="brand.primary" mt="2px" flexShrink={0} />
                {item}
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Projects */}
        <Box mb={16}>
          <Text fontSize="xs" fontWeight="700" color="brand.primary" letterSpacing="widest" textTransform="uppercase" mb={3}>
            Key Initiatives
          </Text>
          <Heading as="h2" size="lg" fontWeight="700" color="gray.900" mb={10}>
            Projects & Programs
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {projects.map((project) => {
              const colors = categoryColors[project.category] ?? { bg: "gray.50", color: "gray.700" }
              return (
                <Box
                  key={project.title}
                  bg="white"
                  borderWidth={1}
                  borderColor="gray.200"
                  rounded="xl"
                  p={6}
                  boxShadow="sm"
                  transition="all 0.2s"
                  _hover={{ boxShadow: 'md', borderColor: 'blue.200', transform: 'translateY(-2px)' }}
                >
                  <Flex align="center" justify="space-between" mb={4}>
                    <Flex
                      w={10}
                      h={10}
                      rounded="lg"
                      bg="blue.50"
                      align="center"
                      justify="center"
                    >
                      <Icon as={project.icon} boxSize={5} color="brand.primary" />
                    </Flex>
                    <Badge
                      px={2}
                      py={0.5}
                      rounded="full"
                      bg={colors.bg}
                      color={colors.color}
                      fontSize="xs"
                      fontWeight="600"
                    >
                      {project.category}
                    </Badge>
                  </Flex>

                  <Heading as="h3" size="sm" fontWeight="700" color="gray.900" mb={2}>
                    {project.title}
                  </Heading>

                  <Text fontSize="sm" color="gray.500" mb={4} lineHeight="tall">
                    {project.description}
                  </Text>

                  <Flex flexWrap="wrap" gap={1.5} mb={4}>
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        px={2}
                        py={0.5}
                        fontSize="xs"
                        rounded="md"
                        bg="gray.100"
                        color="gray.600"
                        fontWeight="500"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </Flex>

                  <Box pt={4} borderTop="1px" borderColor="gray.100">
                    <Text fontSize="xs" fontWeight="600" color="brand.secondary" mb={1}>
                      Impact
                    </Text>
                    <Text fontSize="xs" color="gray.500" lineHeight="tall">
                      {project.impact}
                    </Text>
                  </Box>
                </Box>
              )
            })}
          </SimpleGrid>
        </Box>

        {/* Stats */}
        <Box
          bg="white"
          borderWidth={1}
          borderColor="gray.200"
          rounded="2xl"
          p={12}
          boxShadow="sm"
        >
          <Text fontSize="xs" fontWeight="700" color="brand.primary" letterSpacing="widest" textTransform="uppercase" textAlign="center" mb={3}>
            Impact
          </Text>
          <Heading as="h2" size="lg" fontWeight="700" color="gray.900" textAlign="center" mb={10}>
            Development Reach
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} textAlign="center">
            {stats.map((stat) => (
              <Box key={stat.label}>
                <Heading as="div" fontSize="4xl" fontWeight="800" color="brand.primary" letterSpacing="-0.02em" mb={2}>
                  {stat.value}
                </Heading>
                <Text color="gray.500" fontSize="sm">
                  {stat.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}
