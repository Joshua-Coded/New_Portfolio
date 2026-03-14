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
      iconBg: "green.50",
      iconColor: "green.600",
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
      iconBg: "blue.50",
      iconColor: "blue.600",
      deliverables: [
        "End-to-end pipelines (KoboToolbox, ODK, DHIS2)",
        "Automated reporting and ETL workflows",
        "Multi-country data aggregation systems",
        "Real-time dashboards for program managers",
      ],
    },
    {
      icon: FaChartBar,
      title: "M&E Framework Design",
      description: "Results frameworks and monitoring systems aligned with IFAD, AU, and donor reporting standards.",
      iconBg: "purple.50",
      iconColor: "purple.600",
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
      iconBg: "orange.50",
      iconColor: "orange.600",
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
      iconBg: "red.50",
      iconColor: "red.600",
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
      iconBg: "teal.50",
      iconColor: "teal.600",
      deliverables: [
        "Web applications and dashboards",
        "API integrations with government systems",
        "Mobile-first tools for low-bandwidth environments",
        "Open-source development and documentation",
      ],
    },
  ]

  const frameworks = [
    "IFAD Results Framework",
    "AU Agenda 2063",
    "OECD DAC Criteria",
    "AGRA M&E Standards",
    "SDG 2 — Zero Hunger",
    "Theory of Change",
    "DCED Standards",
    "MEAL Frameworks",
  ]

  return (
    <Box minH="100vh" bg="gray.50" pt={32} pb={20}>
      <Container maxW="container.xl">
        {/* Header */}
        <VStack spacing={4} align="flex-start" mb={16}>
          <Text fontSize="xs" fontWeight="700" color="brand.primary" letterSpacing="widest" textTransform="uppercase">
            Capabilities
          </Text>
          <Heading as="h1" fontSize={{ base: "4xl", md: "5xl" }} fontWeight="800" color="gray.900" letterSpacing="-0.02em">
            Expertise
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl" lineHeight="tall">
            Technology, data, and M&E capabilities tailored for international development organisations
            working across African food systems and agricultural programs.
          </Text>
        </VStack>

        {/* Capability Areas */}
        <Box mb={20}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {areas.map((area) => (
              <Box
                key={area.title}
                bg="white"
                borderWidth={1}
                borderColor="gray.200"
                rounded="xl"
                p={6}
                boxShadow="sm"
                transition="all 0.2s"
                _hover={{ boxShadow: 'md', borderColor: 'blue.200', transform: 'translateY(-2px)' }}
              >
                <Flex
                  w={11}
                  h={11}
                  rounded="lg"
                  bg={area.iconBg}
                  align="center"
                  justify="center"
                  mb={5}
                >
                  <Icon as={area.icon} boxSize={5} color={area.iconColor} />
                </Flex>

                <Heading as="h3" size="sm" fontWeight="700" color="gray.900" mb={2}>
                  {area.title}
                </Heading>

                <Text color="gray.500" fontSize="sm" mb={5} lineHeight="tall">
                  {area.description}
                </Text>

                <List spacing={2}>
                  {area.deliverables.map((item) => (
                    <ListItem key={item} display="flex" alignItems="flex-start" fontSize="xs" color="gray.600">
                      <ListIcon as={MdCheckCircle} color="brand.secondary" mt="1px" flexShrink={0} />
                      {item}
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Frameworks */}
        <Box
          bg="white"
          borderWidth={1}
          borderColor="gray.200"
          rounded="2xl"
          p={10}
          boxShadow="sm"
        >
          <VStack spacing={2} align="center" textAlign="center" mb={8}>
            <Text fontSize="xs" fontWeight="700" color="brand.primary" letterSpacing="widest" textTransform="uppercase">
              Standards
            </Text>
            <Heading as="h2" size="lg" fontWeight="700" color="gray.900">
              Frameworks & Standards
            </Heading>
            <Text color="gray.500" fontSize="sm">
              Work aligned with internationally recognised development standards
            </Text>
          </VStack>
          <Flex flexWrap="wrap" gap={3} justify="center">
            {frameworks.map((item) => (
              <Badge
                key={item}
                px={4}
                py={2}
                rounded="full"
                bg="gray.100"
                color="gray.700"
                fontWeight="600"
                fontSize="sm"
                borderWidth={1}
                borderColor="gray.200"
                _hover={{ bg: 'blue.50', color: 'brand.primary', borderColor: 'blue.200' }}
                transition="all 0.2s"
              >
                {item}
              </Badge>
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}
