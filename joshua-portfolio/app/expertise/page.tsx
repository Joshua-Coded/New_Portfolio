"use client";
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
import {
  FaDatabase,
  FaChartBar,
  FaUsers,
  FaSeedling,
  FaCode,
  FaProjectDiagram,
} from 'react-icons/fa'
import { MdCheckCircle } from 'react-icons/md'

export default function Expertise() {
  const areas = [
    {
      icon: FaSeedling,
      title: "Agricultural Technology",
      description: "End-to-end technology solutions designed for food systems and agricultural development programs.",
      gradient: "linear(to-br, green.600, teal.500)",
      deliverables: [
        "Agricultural data management platforms",
        "Farm-level program tracking systems",
        "Digital tools for extension workers and field agents",
        "Program beneficiary databases",
      ],
    },
    {
      icon: FaDatabase,
      title: "Data Systems & Pipelines",
      description: "Scalable data infrastructure for collecting, processing, and reporting development program data.",
      gradient: "linear(to-br, cyan.600, blue.500)",
      deliverables: [
        "End-to-end data pipelines (KoboToolbox, ODK, DHIS2)",
        "Automated reporting and ETL workflows",
        "Multi-country data aggregation systems",
        "Real-time dashboards for program managers",
      ],
    },
    {
      icon: FaChartBar,
      title: "M&E Framework Design",
      description: "Results frameworks and monitoring systems aligned with IFAD, AU, and donor reporting standards.",
      gradient: "linear(to-br, purple.600, indigo.500)",
      deliverables: [
        "Theory of Change development",
        "Results frameworks and logframes",
        "Indicator tracking and performance measurement",
        "Mid-term and final evaluation support",
      ],
    },
    {
      icon: FaUsers,
      title: "Stakeholder Engagement",
      description: "Digital platforms and processes that facilitate coordination across governments, NGOs, and partners.",
      gradient: "linear(to-br, orange.600, yellow.500)",
      deliverables: [
        "Stakeholder management platforms",
        "Multi-sector coordination tools",
        "Communication and engagement strategies",
        "Partner capacity-building workshops",
      ],
    },
    {
      icon: FaProjectDiagram,
      title: "Impact Assessment",
      description: "Rigorous analytical approaches that quantify development impact and support strategic decisions.",
      gradient: "linear(to-br, red.600, pink.500)",
      deliverables: [
        "Baseline, midline, and endline studies",
        "Statistical modelling and regression analysis",
        "Impact visualizations for donor reports",
        "Evidence synthesis and policy briefs",
      ],
    },
    {
      icon: FaCode,
      title: "Tech Product Development",
      description: "Full-stack digital products built for African development organizations and public sector partners.",
      gradient: "linear(to-br, teal.600, green.400)",
      deliverables: [
        "Web applications and dashboards",
        "API integrations with government systems",
        "Mobile-first tools for low-bandwidth environments",
        "Open-source development and documentation",
      ],
    },
  ]

  const organisations = [
    "AGRA", "IFAD", "African Union", "World Bank", "FAO",
    "USAID", "GIZ", "Ministries of Agriculture", "NGOs & INGOs", "Research Institutes",
  ]

  return (
    <Box minH="100vh" pt={32} pb={20}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="flex-start" mb={16}>
          <Heading as="h1" fontSize={{ base: "4xl", md: "6xl" }} fontWeight="black" fontFamily="mono">
            <Text as="span" color="brand.secondary">&gt;</Text> Expertise
          </Heading>
          <Text fontSize="xl" color="whiteAlpha.800" maxW="3xl">
            Technology, data, and M&E capabilities tailored for international development organisations
            working across African food systems and agricultural programs.
          </Text>
        </VStack>

        {/* Who I work with */}
        <Box
          mb={20}
          bg="rgba(30, 41, 59, 0.5)"
          backdropFilter="blur(10px)"
          borderWidth={1}
          borderColor="rgba(59, 130, 246, 0.2)"
          rounded="xl"
          p={8}
        >
          <Heading as="h2" size="lg" color="brand.primary" mb={4}>
            Who I Work With
          </Heading>
          <Text color="whiteAlpha.700" mb={6}>
            My work is relevant to organisations at the forefront of African agricultural development:
          </Text>
          <Flex flexWrap="wrap" gap={3}>
            {organisations.map((org) => (
              <Badge
                key={org}
                px={4}
                py={2}
                rounded="full"
                borderWidth={1}
                borderColor="brand.secondary"
                bg="rgba(16, 185, 129, 0.08)"
                color="brand.secondary"
                fontFamily="mono"
                fontSize="sm"
              >
                {org}
              </Badge>
            ))}
          </Flex>
        </Box>

        {/* Expertise areas */}
        <Box mb={20}>
          <Heading as="h2" size="xl" color="brand.primary" mb={12}>
            Capability Areas
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {areas.map((area) => (
              <Box
                key={area.title}
                bg="rgba(30, 41, 59, 0.5)"
                backdropFilter="blur(10px)"
                borderWidth={1}
                borderColor="whiteAlpha.200"
                rounded="2xl"
                p={8}
                transition="all 0.3s"
                _hover={{
                  borderColor: 'brand.primary',
                  transform: 'translateY(-4px)',
                }}
              >
                <Flex
                  w={16}
                  h={16}
                  rounded="xl"
                  bgGradient={area.gradient}
                  align="center"
                  justify="center"
                  mb={6}
                >
                  <Icon as={area.icon} boxSize={8} color="white" />
                </Flex>

                <Heading as="h3" size="md" mb={3}>
                  {area.title}
                </Heading>

                <Text color="whiteAlpha.700" fontSize="sm" mb={5} lineHeight="tall">
                  {area.description}
                </Text>

                <List spacing={2}>
                  {area.deliverables.map((item) => (
                    <ListItem key={item} display="flex" alignItems="flex-start" fontSize="sm" color="whiteAlpha.700">
                      <ListIcon as={MdCheckCircle} color="brand.secondary" mt="2px" flexShrink={0} />
                      {item}
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Methodologies */}
        <Box
          bgGradient="linear(to-r, rgba(34,211,238,0.05), rgba(132,204,22,0.05))"
          rounded="2xl"
          p={12}
          borderWidth={1}
          borderColor="rgba(59, 130, 246, 0.2)"
        >
          <Heading as="h2" size="xl" textAlign="center" mb={4}>
            Frameworks & Standards
          </Heading>
          <Text color="whiteAlpha.700" textAlign="center" mb={10}>
            Work aligned with internationally recognised development standards
          </Text>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} textAlign="center">
            {[
              { label: "IFAD Results Framework" },
              { label: "AU Agenda 2063" },
              { label: "OECD DAC Criteria" },
              { label: "AGRA M&E Standards" },
              { label: "SDG 2 — Zero Hunger" },
              { label: "Theory of Change" },
              { label: "DCED Standards" },
              { label: "MEAL Frameworks" },
            ].map((item) => (
              <Box
                key={item.label}
                bg="rgba(30, 41, 59, 0.5)"
                borderWidth={1}
                borderColor="whiteAlpha.200"
                rounded="lg"
                p={4}
              >
                <Text fontSize="sm" fontFamily="mono" color="whiteAlpha.800">
                  {item.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}
