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
  Grid,
  GridItem,
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
      "No unified data infrastructure to track multi-country program implementation across 15 African states.",
    approach:
      "Built a centralised PostgreSQL pipeline with automated ETL and real-time dashboards for program managers.",
    impactStat: "100+",
    impactLabel: "Stakeholders connected",
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
    impactStat: "5M+",
    impactLabel: "Farmers in the system",
    tech: ["Next.js", "Node.js", "MongoDB", "Docker"],
  },
  {
    icon: FaFileAlt,
    title: "M&E Framework Design",
    category: "M&E",
    categoryColor: { bg: "green.50", color: "green.700" },
    accent: "#059669",
    challenge:
      "AGRA's partner programs lacked standardised measurement approaches aligned to IFAD and donor standards.",
    approach:
      "Co-designed Theory of Change, indicator sets, and logframes accepted by 20+ partner organisations.",
    impactStat: "20+",
    impactLabel: "Partner orgs using the framework",
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
    impactStat: "200+",
    impactLabel: "Stakeholders coordinated",
    tech: ["CRM Systems", "Data Analytics", "Communication Tools"],
  },
  {
    icon: FaChartBar,
    title: "Performance Tracking Tools",
    category: "Analytics",
    categoryColor: { bg: "teal.50", color: "teal.700" },
    accent: "#0D9488",
    challenge:
      "Manual reporting processes consumed 40+ hours per cycle and introduced significant data quality errors.",
    approach:
      "Built automated Python pipelines and Tableau dashboards, cutting reporting time and improving accuracy.",
    impactStat: "60%",
    impactLabel: "Reduction in reporting time",
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
      "Designed statistical modelling frameworks and visualisations used in $50M+ donor investment decisions.",
    impactStat: "$50M+",
    impactLabel: "Investment informed",
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

const impactStats = [
  { value: "15+", label: "Countries", sub: "Active programs" },
  { value: "5M+", label: "Farmers Reached", sub: "Program beneficiaries" },
  { value: "100+", label: "Stakeholders", sub: "Partners engaged" },
  { value: "$50M+", label: "Programs Supported", sub: "Investment portfolios" },
];

export default function Work() {
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
            Current Role
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="800"
            color="gray.900"
            letterSpacing="-0.03em"
          >
            Professional Work
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl" lineHeight="1.8">
            IT Consultant at AGRA — building technology and data systems for
            agricultural transformation and development impact across Africa.
          </Text>
        </VStack>

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
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
            <GridItem>
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
                2024 – Present · Nairobi, Kenya
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
            </GridItem>

            <GridItem>
              <Box
                bg="gray.50"
                rounded="xl"
                p={6}
                h="full"
                borderWidth={1}
                borderColor="gray.100"
              >
                <Text
                  fontSize="xs"
                  fontWeight="700"
                  color="gray.500"
                  letterSpacing="widest"
                  textTransform="uppercase"
                  mb={4}
                >
                  Scope of Impact
                </Text>
                <SimpleGrid columns={2} spacing={6}>
                  {impactStats.map((s) => (
                    <Box key={s.label}>
                      <Heading
                        as="div"
                        fontSize="3xl"
                        fontWeight="800"
                        color="brand.primary"
                        letterSpacing="-0.02em"
                        mb={1}
                      >
                        {s.value}
                      </Heading>
                      <Text fontSize="sm" fontWeight="600" color="gray.700">
                        {s.label}
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        {s.sub}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Box>
            </GridItem>
          </Grid>
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

                {/* Impact metric */}
                <Box
                  bg="gray.50"
                  rounded="lg"
                  p={4}
                  mb={4}
                  borderWidth={1}
                  borderColor="gray.100"
                >
                  <Heading
                    as="div"
                    fontSize="2xl"
                    fontWeight="800"
                    color={cs.accent}
                    letterSpacing="-0.02em"
                    mb={0.5}
                  >
                    {cs.impactStat}
                  </Heading>
                  <Text fontSize="xs" color="gray.500" fontWeight="600">
                    {cs.impactLabel}
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

        {/* Impact footer strip */}
        <Box
          bg="gray.900"
          rounded="2xl"
          p={12}
          position="relative"
          overflow="hidden"
        >
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            w="600px"
            h="200px"
            bgGradient="radial(ellipse, blue.800 0%, transparent 70%)"
            opacity={0.35}
            pointerEvents="none"
          />
          <Text
            fontSize="xs"
            fontWeight="700"
            color="gray.500"
            letterSpacing="widest"
            textTransform="uppercase"
            textAlign="center"
            mb={3}
            position="relative"
          >
            Development Reach
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="800"
            color="white"
            textAlign="center"
            letterSpacing="-0.02em"
            mb={10}
            position="relative"
          >
            Cumulative Impact
          </Heading>
          <SimpleGrid
            columns={{ base: 2, md: 4 }}
            spacing={8}
            textAlign="center"
            position="relative"
          >
            {impactStats.map((stat) => (
              <Box key={stat.label}>
                <Heading
                  as="div"
                  fontSize="4xl"
                  fontWeight="800"
                  color="white"
                  letterSpacing="-0.03em"
                  mb={1}
                >
                  {stat.value}
                </Heading>
                <Text color="gray.400" fontSize="sm" fontWeight="600">
                  {stat.label}
                </Text>
                <Text color="gray.600" fontSize="xs" mt={0.5}>
                  {stat.sub}
                </Text>
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
          mt={10}
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
  );
}
