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
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  FaDatabase,
  FaChartBar,
  FaUsers,
  FaSeedling,
  FaCode,
  FaProjectDiagram,
  FaArrowRight,
} from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import Link from "next/link";

const services = [
  {
    icon: FaSeedling,
    title: "Agricultural Technology",
    description:
      "End-to-end technology solutions designed for food systems and agricultural development programs across Sub-Saharan Africa.",
    accent: "#1D4ED8",
    accentBg: "#EFF6FF",
    deliverables: [
      "Agricultural data management platforms",
      "Farm-level program tracking systems",
      "Digital tools for extension workers and field agents",
      "Program beneficiary databases and dashboards",
    ],
  },
  {
    icon: FaDatabase,
    title: "Data Systems & Pipelines",
    description:
      "Scalable data infrastructure for collecting, processing, and reporting development program data at national and continental scale.",
    accent: "#059669",
    accentBg: "#F0FDF4",
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
    description:
      "Results frameworks and monitoring systems aligned with international donor reporting standards.",
    accent: "#7C3AED",
    accentBg: "#F5F3FF",
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
    description:
      "Digital platforms and processes that facilitate coordination across governments, NGOs, and development partners.",
    accent: "#D97706",
    accentBg: "#FFFBEB",
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
    description:
      "Rigorous analytical approaches that quantify development impact and support strategic decisions for donor reporting.",
    accent: "#DC2626",
    accentBg: "#FEF2F2",
    deliverables: [
      "Baseline, midline, and endline studies",
      "Statistical modelling and regression analysis",
      "Impact visualisations for donor reports",
      "Evidence synthesis and policy briefs",
    ],
  },
  {
    icon: FaCode,
    title: "Tech Product Development",
    description:
      "Full-stack digital products built for African development organisations and public sector partners.",
    accent: "#0D9488",
    accentBg: "#F0FDFA",
    deliverables: [
      "Web applications and analytics dashboards",
      "API integrations with government systems",
      "Mobile-first tools for low-bandwidth environments",
      "Open-source development and documentation",
    ],
  },
];

const frameworks = [
  "OECD DAC Criteria",
  "SDG 2 — Zero Hunger",
  "Theory of Change",
  "DCED Standards",
  "MEAL Frameworks",
  "Logical Framework Analysis",
  "Results-Based Management",
  "Beneficiary Tracking",
  "Data Quality Assurance",
  "Impact Measurement",
];

const clients = [
  {
    name: "AGRA",
    full: "Alliance for a Green Revolution in Africa",
    description:
      "Current employer. Leading tech product development, M&E systems, and data infrastructure for pan-African agricultural programs under the AFS Forum (AFSF).",
  },
  {
    name: "NGOs & INGOs",
    full: "International Non-Governmental Organisations",
    description:
      "Data systems and M&E frameworks for humanitarian and development organisations operating across multiple African countries.",
  },
  {
    name: "Government Agencies",
    full: "National & County Government Partners",
    description:
      "Technology solutions and digital tools that support government-led agricultural programs and public sector data reporting.",
  },
  {
    name: "Development Partners",
    full: "Bilateral & Multilateral Donors",
    description:
      "Impact assessment systems and performance analytics that meet international donor reporting and accountability standards.",
  },
];

export default function Expertise() {
  return (
    <Box minH="100vh" bg="#F8F7F4">

      {/* Dark hero */}
      <Box position="relative" bg="#0B1120" pt={{ base: 28, md: 36 }} pb={{ base: 14, md: 18 }} overflow="hidden">
        <Box position="absolute" inset={0} bgImage="radial-gradient(ellipse 60% 50% at 50% 0%, rgba(29,78,216,0.18) 0%, transparent 65%)" pointerEvents="none" />
        <Box position="absolute" inset={0} bgImage="linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)" bgSize="60px 60px" pointerEvents="none" />
        <Container maxW="container.xl" position="relative">
          <Text fontSize="xs" fontWeight="700" color="blue.400" letterSpacing="widest" textTransform="uppercase" mb={4}>Capabilities</Text>
          <Heading as="h1" fontSize={{ base: '5xl', md: '7xl' }} fontWeight="800" color="white" letterSpacing="-0.04em" lineHeight="0.95" mb={6}>Expertise &amp; Services</Heading>
          <Text fontSize="lg" color="gray.500" maxW="540px" lineHeight="1.8">Technology, data, and M&amp;E capabilities tailored for development organisations working across African food systems.</Text>
        </Container>
      </Box>

      <Box bg="#F8F7F4" py={16}>
      <Container maxW="container.xl">

        {/* Service Cards */}
        <Box mb={20}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {services.map((s) => (
              <Box
                key={s.title}
                bg="white"
                borderWidth={1}
                borderColor="gray.200"
                borderTop={`3px solid ${s.accent}`}
                rounded="xl"
                p={7}
                boxShadow="sm"
                transition="all 0.2s"
                display="flex"
                flexDirection="column"
                _hover={{
                  boxShadow: "md",
                  borderColor: "gray.300",
                  transform: "translateY(-2px)",
                }}
              >
                <Flex
                  w={11}
                  h={11}
                  rounded="lg"
                  bg={s.accentBg}
                  align="center"
                  justify="center"
                  mb={5}
                >
                  <Icon as={s.icon} boxSize={5} color={s.accent} />
                </Flex>

                <Heading
                  as="h3"
                  fontSize="md"
                  fontWeight="700"
                  color="gray.900"
                  mb={2}
                >
                  {s.title}
                </Heading>

                <Text
                  color="gray.600"
                  fontSize="sm"
                  mb={5}
                  lineHeight="1.8"
                  flex={1}
                >
                  {s.description}
                </Text>

                <Box mb={5}>
                  <Text
                    fontSize="xs"
                    fontWeight="700"
                    color="gray.400"
                    textTransform="uppercase"
                    letterSpacing="wide"
                    mb={3}
                  >
                    Deliverables
                  </Text>
                  <List spacing={2}>
                    {s.deliverables.map((item) => (
                      <ListItem
                        key={item}
                        display="flex"
                        alignItems="flex-start"
                        fontSize="xs"
                        color="gray.600"
                        lineHeight="1.6"
                      >
                        <ListIcon
                          as={MdCheckCircle}
                          color={s.accent}
                          mt="1px"
                          flexShrink={0}
                        />
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Frameworks & Standards */}
        <Box
          bg="white"
          borderWidth={1}
          borderColor="gray.200"
          rounded="2xl"
          p={10}
          boxShadow="sm"
          mb={16}
        >
          <VStack spacing={2} align="center" textAlign="center" mb={8}>
            <Text
              fontSize="xs"
              fontWeight="700"
              color="brand.primary"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              Standards
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="800"
              color="gray.900"
              letterSpacing="-0.025em"
            >
              Frameworks &amp; Standards
            </Heading>
            <Text color="gray.500" fontSize="sm" maxW="400px">
              Work aligned with internationally recognised development and M&amp;E
              standards
            </Text>
          </VStack>

          <Flex flexWrap="wrap" gap={3} justify="center">
            {frameworks.map((item) => (
              <Badge
                key={item}
                px={4}
                py={2}
                rounded="full"
                bg="gray.50"
                color="gray.700"
                fontWeight="600"
                fontSize="sm"
                borderWidth={1}
                borderColor="gray.200"
                _hover={{ bg: "blue.50", color: "brand.primary", borderColor: "blue.200" }}
                transition="all 0.2s"
                cursor="default"
              >
                {item}
              </Badge>
            ))}
          </Flex>
        </Box>

        {/* Who I Work With */}
        <Box>
          <Text
            fontSize="xs"
            fontWeight="700"
            color="brand.primary"
            letterSpacing="widest"
            textTransform="uppercase"
            mb={3}
          >
            Clients & Partners
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="800"
            color="gray.900"
            letterSpacing="-0.025em"
            mb={10}
          >
            Who I Work With
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mb={10}>
            {clients.map((c) => (
              <Box
                key={c.name}
                bg="white"
                borderWidth={1}
                borderColor="gray.200"
                rounded="xl"
                p={6}
                boxShadow="sm"
                _hover={{ borderColor: "blue.200", boxShadow: "md" }}
                transition="all 0.2s"
              >
                <Flex align="baseline" gap={2} mb={1}>
                  <Text
                    fontWeight="800"
                    fontSize="lg"
                    color="brand.primary"
                    letterSpacing="-0.02em"
                  >
                    {c.name}
                  </Text>
                  <Text fontSize="xs" color="gray.400" fontWeight="500">
                    — {c.full}
                  </Text>
                </Flex>
                <Text fontSize="sm" color="gray.600" lineHeight="1.8">
                  {c.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          {/* CTA */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            bg="gray.900"
            rounded="xl"
            p={7}
            gap={4}
          >
            <Box>
              <Heading
                as="h3"
                fontSize="lg"
                fontWeight="700"
                color="white"
                mb={1}
              >
                Need these capabilities for your program?
              </Heading>
              <Text fontSize="sm" color="gray.400">
                Let&apos;s discuss how I can support your organisation&apos;s
                technology and data needs.
              </Text>
            </Box>
            <Flex
              as={Link}
              href="/contact"
              align="center"
              gap={2}
              bg="brand.primary"
              color="white"
              px={6}
              py={3}
              rounded="lg"
              fontWeight="600"
              fontSize="sm"
              flexShrink={0}
              _hover={{ bg: "#1e40af", textDecoration: "none" }}
              transition="all 0.2s"
            >
              Start a Conversation
              <Icon as={FaArrowRight} boxSize={3.5} />
            </Flex>
          </Flex>
        </Box>
      </Container>
      </Box>
    </Box>
  );
}
