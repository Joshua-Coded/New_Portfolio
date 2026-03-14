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

  return (
    <Box minH="100vh" pt={32} pb={20}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="flex-start" mb={16}>
          <Heading as="h1" fontSize={{ base: "4xl", md: "6xl" }} fontWeight="black" fontFamily="mono">
            <Text as="span" color="brand.secondary">&gt;</Text> Professional_Work
          </Heading>
          <Text fontSize="xl" color="whiteAlpha.800" maxW="3xl">
            IT Consultant @ AGRA - Building technology for agricultural transformation and development impact
          </Text>

          <Box
            bg="rgba(30, 41, 59, 0.5)"
            backdropFilter="blur(10px)"
            borderWidth={1}
            borderColor="rgba(59, 130, 246, 0.2)"
            rounded="xl"
            p={8}
            maxW="3xl"
          >
            <Heading as="h2" size="lg" color="brand.primary" mb={4}>
              What I Do
            </Heading>
            <List spacing={3}>
              {responsibilities.map((item, i) => (
                <ListItem key={i} display="flex" alignItems="flex-start" color="whiteAlpha.800">
                  <ListIcon as={MdArrowForward} color="brand.secondary" mt={1} />
                  <Text>{item}</Text>
                </ListItem>
              ))}
            </List>
          </Box>
        </VStack>

        <Box mb={20}>
          <Heading as="h2" size="xl" color="brand.primary" mb={8}>
            Key Projects & Initiatives
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {projects.map((project, i) => (
              <Box
                key={i}
                bg="rgba(30, 41, 59, 0.5)"
                backdropFilter="blur(10px)"
                borderWidth={1}
                borderColor="whiteAlpha.200"
                rounded="xl"
                p={6}
                transition="all 0.3s"
                _hover={{
                  borderColor: 'brand.primary',
                  transform: 'translateY(-4px)',
                }}
              >
                <Flex
                  w={14}
                  h={14}
                  rounded="lg"
                  bgGradient="linear(to-br, brand.primary, brand.secondary)"
                  opacity={0.2}
                  align="center"
                  justify="center"
                  mb={4}
                >
                  <Icon as={project.icon} boxSize={7} color="brand.primary" opacity={5} />
                </Flex>

                <Text fontSize="xs" fontFamily="mono" color="brand.secondary" mb={2}>
                  {project.category}
                </Text>

                <Heading as="h3" size="md" mb={3}>
                  {project.title}
                </Heading>

                <Text fontSize="sm" color="whiteAlpha.700" mb={4} lineHeight="tall">
                  {project.description}
                </Text>

                <Flex flexWrap="wrap" gap={2} mb={4}>
                  {project.technologies.map((tech, j) => (
                    <Badge
                      key={j}
                      px={2}
                      py={1}
                      fontSize="xs"
                      rounded="full"
                      bg="rgba(30, 41, 59, 0.5)"
                      color="whiteAlpha.600"
                      borderWidth={1}
                      borderColor="whiteAlpha.300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </Flex>

                <Box pt={4} borderTop="1px" borderColor="whiteAlpha.200">
                  <Text fontSize="xs" fontFamily="mono" color="brand.primary" mb={1}>
                    Impact
                  </Text>
                  <Text fontSize="sm" color="whiteAlpha.700">
                    {project.impact}
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box
          bgGradient="linear(to-r, rgba(59, 130, 246, 0.08), rgba(16, 185, 129, 0.08))"
          rounded="2xl"
          p={12}
          borderWidth={1}
          borderColor="rgba(59, 130, 246, 0.2)"
        >
          <Heading as="h2" size="xl" textAlign="center" mb={8}>
            Impact at Scale
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} textAlign="center">
            {stats.map((stat, i) => (
              <Box key={i}>
                <Heading as="div" fontSize="4xl" fontWeight="black" color="brand.primary" mb={2}>
                  {stat.value}
                </Heading>
                <Text color="whiteAlpha.600" fontFamily="mono" fontSize="sm">
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
