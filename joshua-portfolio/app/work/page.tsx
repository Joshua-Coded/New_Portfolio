"use client";

import {
  FaChartBar,
  FaChartLine,
  FaCubes,
  FaDatabase,
  FaFileAlt,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
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
} from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";

const caseStudies = [
  {
    icon: FaDatabase,
    title: "AFS Forum Data Systems",
    category: "Data Systems",
    categoryColor: { bg: "blue.50", color: "blue.700" },
    accent: "#1D4ED8",
    challenge:
      "No unified data infrastructure to track multi-country program implementation across African states.",
    approach:
      "Built a centralised PostgreSQL pipeline with automated ETL and real-time dashboards for program managers.",
    tech: ["Python", "PostgreSQL", "React", "AWS"],
  },
  {
    icon: FaCubes,
    title: "Agricultural Tech Platform",
    category: "Product Development",
    categoryColor: { bg: "purple.50", color: "purple.700" },
    accent: "#7C3AED",
    challenge:
      "Partner organizations lacked scalable digital tools to register and monitor farmer program participation.",
    approach:
      "Delivered a full-stack Next.js application with ODK integration, beneficiary tracking, and offline support.",
    tech: ["Next.js", "Node.js", "MongoDB", "Docker"],
  },
  {
    icon: FaFileAlt,
    title: "M&E Framework Design",
    category: "M&E",
    categoryColor: { bg: "green.50", color: "green.700" },
    accent: "#059669",
    challenge:
      "AGRA's partner programs lacked standardised measurement approaches aligned to donor reporting standards.",
    approach:
      "Co-designed Theory of Change, indicator sets, and logframes accepted by multiple partner organisations.",
    tech: ["Excel", "Power BI", "Python", "Statistical Analysis"],
  },
  {
    icon: FaUsers,
    title: "Stakeholder Engagement Hub",
    category: "Engagement",
    categoryColor: { bg: "orange.50", color: "orange.700" },
    accent: "#D97706",
    challenge:
      "Fragmented communication across government, NGO, and private sector partners slowed program coordination.",
    approach:
      "Deployed a CRM-backed engagement platform with automated outreach workflows and structured reporting.",
    tech: ["CRM Systems", "Data Analytics", "Communication Tools"],
  },
  {
    icon: FaChartBar,
    title: "Performance Tracking Tools",
    category: "Analytics",
    categoryColor: { bg: "teal.50", color: "teal.700" },
    accent: "#0D9488",
    challenge:
      "Manual reporting processes consumed significant hours per cycle and introduced data quality errors.",
    approach:
      "Built automated Python pipelines and Tableau dashboards, cutting reporting time and improving accuracy.",
    tech: ["Python", "Tableau", "API Integration", "Automation"],
  },
  {
    icon: FaChartLine,
    title: "Impact Assessment System",
    category: "Assessment",
    categoryColor: { bg: "red.50", color: "red.700" },
    accent: "#DC2626",
    challenge:
      "Donors required rigorous evidence of agricultural intervention outcomes across dispersed program geographies.",
    approach:
      "Designed statistical modelling frameworks and visualisations used in donor investment decisions.",
    tech: ["R", "Statistical Modeling", "Data Visualization"],
  },
];

const responsibilities = [
  "Develop and maintain technology products for agricultural development programs",
  "Build data collection and management systems for monitoring & evaluation",
  "Lead stakeholder engagement initiatives across government and NGO partners",
  "Design M&E frameworks and impact assessment tools aligned to donor standards",
  "Create dashboards and reporting tools for executive decision-makers",
  "Manage multi-country data collection and quality assurance processes",
];

export default function Work() {
  return (
    <Box minH="100vh" bg="#F8F7F4">

      {/* Dark hero */}
      <Box position="relative" bg="#0B1120" pt={{ base: 28, md: 36 }} pb={{ base: 14, md: 18 }} overflow="hidden">
        <Box position="absolute" inset={0} bgImage="radial-gradient(ellipse 60% 50% at 50% 0%, rgba(29,78,216,0.18) 0%, transparent 65%)" pointerEvents="none" />
        <Box position="absolute" inset={0} bgImage="linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)" bgSize="60px 60px" pointerEvents="none" />
        <Container maxW="container.xl" position="relative">
          <Text fontSize="xs" fontWeight="700" color="blue.400" letterSpacing="widest" textTransform="uppercase" mb={4}>Current Role</Text>
          <Heading as="h1" fontSize={{ base: '5xl', md: '7xl' }} fontWeight="800" color="white" letterSpacing="-0.04em" lineHeight="0.95" mb={6}>Professional Work</Heading>
          <Text fontSize="lg" color="gray.500" maxW="540px" lineHeight="1.8">IT Consultant at AGRA building technology products and data systems for agricultural transformation under the AFS Forum (AFSF).</Text>
        </Container>
      </Box>

      <Box bg="#F8F7F4" py={16}>
        <Container maxW="container.xl">

          {/* Current Role Card */}
          <Box
            bg="white"
            borderWidth={1}
            borderColor="gray.200"
            borderLeft="4px solid"
            borderLeftColor="brand.primary"
            rounded="xl"
            p={8}
            mb={16}
            boxShadow="sm"
          >
            <Text
              fontSize="xs"
              fontWeight="700"
              color="brand.primary"
              letterSpacing="widest"
              textTransform="uppercase"
              mb={2}
            >
              AGRA — Alliance for a Green Revolution in Africa
            </Text>
            <Heading
              as="h2"
              fontSize="xl"
              fontWeight="700"
              color="gray.900"
              mb={1}
            >
              IT Consultant
            </Heading>
            <Text fontSize="sm" color="gray.500" mb={6}>
              2024 – Present · Kigali, Rwanda
            </Text>

            <List spacing={3}>
              {responsibilities.map((item) => (
                <ListItem
                  key={item}
                  display="flex"
                  alignItems="flex-start"
                  color="gray.600"
                  fontSize="sm"
                  lineHeight="1.7"
                >
                  <ListIcon
                    as={MdArrowForward}
                    color="brand.primary"
                    mt="3px"
                    flexShrink={0}
                  />
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Case Studies */}
          <Box mb={16}>
            <Text
              fontSize="xs"
              fontWeight="700"
              color="brand.primary"
              letterSpacing="widest"
              textTransform="uppercase"
              mb={3}
            >
              Key Initiatives
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="800"
              color="gray.900"
              letterSpacing="-0.025em"
              mb={10}
            >
              Case Studies
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {caseStudies.map((cs) => (
                <Box
                  key={cs.title}
                  bg="white"
                  borderWidth={1}
                  borderColor="gray.200"
                  borderTop={`3px solid ${cs.accent}`}
                  rounded="xl"
                  p={6}
                  boxShadow="sm"
                  transition="all 0.2s"
                  _hover={{
                    boxShadow: "md",
                    borderColor: "gray.300",
                    transform: "translateY(-2px)",
                  }}
                  display="flex"
                  flexDirection="column"
                >
                  {/* Header */}
                  <Flex align="center" justify="space-between" mb={4}>
                    <Flex
                      w={10}
                      h={10}
                      rounded="lg"
                      bg={cs.categoryColor.bg}
                      align="center"
                      justify="center"
                    >
                      <Icon as={cs.icon} boxSize={4} color={cs.accent} />
                    </Flex>
                    <Badge
                      px={2}
                      py={0.5}
                      rounded="full"
                      bg={cs.categoryColor.bg}
                      color={cs.categoryColor.color}
                      fontSize="xs"
                      fontWeight="600"
                    >
                      {cs.category}
                    </Badge>
                  </Flex>

                  <Heading
                    as="h3"
                    fontSize="md"
                    fontWeight="700"
                    color="gray.900"
                    mb={4}
                  >
                    {cs.title}
                  </Heading>

                  {/* Challenge */}
                  <Box mb={3}>
                    <Text
                      fontSize="xs"
                      fontWeight="700"
                      color="gray.400"
                      textTransform="uppercase"
                      letterSpacing="wide"
                      mb={1}
                    >
                      Challenge
                    </Text>
                    <Text fontSize="xs" color="gray.600" lineHeight="1.7">
                      {cs.challenge}
                    </Text>
                  </Box>

                  {/* Approach */}
                  <Box mb={5} flex={1}>
                    <Text
                      fontSize="xs"
                      fontWeight="700"
                      color="gray.400"
                      textTransform="uppercase"
                      letterSpacing="wide"
                      mb={1}
                    >
                      Approach
                    </Text>
                    <Text fontSize="xs" color="gray.600" lineHeight="1.7">
                      {cs.approach}
                    </Text>
                  </Box>

                  {/* Tech stack */}
                  <Flex flexWrap="wrap" gap={1.5}>
                    {cs.tech.map((t) => (
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
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* CTA */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            bg="blue.50"
            borderWidth={1}
            borderColor="blue.100"
            rounded="xl"
            p={7}
            gap={4}
          >
            <Box>
              <Heading as="h3" fontSize="lg" fontWeight="700" color="gray.900" mb={1}>
                Interested in working together?
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Open to consultancy engagements and advisory roles.
              </Text>
            </Box>
            <Flex
              as="a"
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
              Get In Touch
              <Icon as={FaArrowRight} boxSize={3.5} />
            </Flex>
          </Flex>

        </Container>
      </Box>
    </Box>
  );
}
