"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Badge,
  Flex,
  Grid,
  GridItem,
  Divider,
  Icon,
} from "@chakra-ui/react";
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaEnvelope,
  FaLinkedin,
  FaCheckCircle,
} from "react-icons/fa";

const timeline = [
  {
    period: "2024 – Present",
    title: "IT Consultant",
    organisation: "AGRA — Alliance for a Green Revolution in Africa",
    location: "Nairobi, Kenya",
    description:
      "Leading the development of technology products, data management systems, and monitoring & evaluation frameworks that track program performance across multiple African countries under the AFS Forum (AFSF).",
  },
  {
    period: "2024",
    title: "Software Engineering Graduate",
    organisation: "African Leadership University",
    location: "Kigali, Rwanda",
    description:
      "Specialized in low-level systems engineering, artificial intelligence & machine learning, full-stack web development, and blockchain technologies. Built a strong academic foundation in technology applied to African development contexts.",
  },
  {
    period: "2022 – 2024",
    title: "Research & Development Projects",
    organisation: "Independent & Academic",
    location: "Remote / Africa",
    description:
      "Designed data collection tools, automated reporting pipelines, and analytical dashboards applied to public health, agriculture, and education sectors. Collaborated with faculty and external organisations on applied technology research.",
  },
];

const skills: Record<string, string[]> = {
  Programming: ["Python", "JavaScript", "TypeScript", "R", "SQL", "C"],
  "Data & Analytics": [
    "Power BI",
    "Tableau",
    "PostgreSQL",
    "TensorFlow",
    "Statistical Modeling",
  ],
  "M&E Tools": [
    "KoboToolbox",
    "ODK",
    "DHIS2",
    "Excel (Advanced)",
    "Impact Assessment",
  ],
  Infrastructure: ["Next.js", "Node.js", "Docker", "AWS", "Git", "CI/CD"],
};

const profileInfo = [
  { icon: FaMapMarkerAlt, label: "Location", value: "Nairobi, Kenya" },
  { icon: FaBuilding, label: "Organisation", value: "AGRA" },
  { icon: FaEnvelope, label: "Email", value: "alanajoshua535@gmail.com" },
  { icon: FaLinkedin, label: "LinkedIn", value: "in/joshua-a-5760b3196" },
];

export default function About() {
  return (
    <Box minH="100vh" bg="#F8F7F4">

      {/* Dark hero */}
      <Box position="relative" bg="#0B1120" pt={{ base: 28, md: 36 }} pb={{ base: 14, md: 18 }} overflow="hidden">
        <Box position="absolute" inset={0} bgImage="radial-gradient(ellipse 60% 50% at 50% 0%, rgba(29,78,216,0.18) 0%, transparent 65%)" pointerEvents="none" />
        <Box position="absolute" inset={0} bgImage="linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)" bgSize="60px 60px" pointerEvents="none" />
        <Container maxW="container.xl" position="relative">
          <Text fontSize="xs" fontWeight="700" color="blue.400" letterSpacing="widest" textTransform="uppercase" mb={4}>Background</Text>
          <Heading as="h1" fontSize={{ base: '5xl', md: '7xl' }} fontWeight="800" color="white" letterSpacing="-0.04em" lineHeight="0.95" mb={6}>About Me</Heading>
          <Text fontSize="lg" color="gray.500" maxW="540px" lineHeight="1.8">A technology professional at the intersection of software engineering, data science, and agricultural development.</Text>
        </Container>
      </Box>

      <Box bg="#F8F7F4" py={16}>
      <Container maxW="container.xl">

        {/* Two-column: Bio + Profile Card */}
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 360px" }}
          gap={12}
          mb={20}
          alignItems="flex-start"
        >
          {/* LEFT: Bio */}
          <GridItem>
            <VStack align="flex-start" spacing={5}>
              <Text fontSize="md" color="gray.600" lineHeight="1.9">
                Joshua Alana is an IT Consultant and Software Engineer currently
                at the{" "}
                <Text as="span" color="brand.primary" fontWeight="600">
                  Alliance for a Green Revolution in Africa (AGRA)
                </Text>
                , where he leads the development of technology products, data
                management systems, and monitoring &amp; evaluation frameworks
                under the AFS Forum (AFSF) across Sub-Saharan Africa.
              </Text>
              <Text fontSize="md" color="gray.600" lineHeight="1.9">
                A graduate of{" "}
                <Text as="span" color="brand.secondary" fontWeight="600">
                  African Leadership University
                </Text>{" "}
                with a degree in Software Engineering, Joshua brings deep
                technical expertise in full-stack development, machine learning,
                and systems architecture. He has applied this foundation to
                build scalable data pipelines, automated reporting tools, and
                stakeholder management platforms that serve some of Africa&apos;s
                most complex development programs.
              </Text>
              <Text fontSize="md" color="gray.600" lineHeight="1.9">
                His approach combines rigorous technical execution with a nuanced
                understanding of the African development context — designing
                solutions that are practical in low-connectivity environments,
                aligned with international M&amp;E standards, and built for
                long-term organizational adoption. He is passionate about
                evidence-based decision making and the role that well-designed
                information systems play in driving agricultural transformation.
              </Text>

              {/* Philosophy card */}
              <Box
                w="full"
                bg="white"
                borderWidth={1}
                borderColor="gray.200"
                borderLeft="4px solid"
                borderLeftColor="brand.navy"
                rounded="xl"
                p={7}
                boxShadow="sm"
                mt={2}
              >
                <Text
                  fontSize="md"
                  fontStyle="italic"
                  color="gray.700"
                  lineHeight="1.9"
                  mb={4}
                >
                  &ldquo;Technology that does not serve people and communities
                  is just expensive noise. Every system I build must trace a
                  clear line back to development impact.&rdquo;
                </Text>
                <Text color="brand.primary" fontWeight="700" fontSize="sm">
                  — Joshua Alana
                </Text>
              </Box>
            </VStack>
          </GridItem>

          {/* RIGHT: Profile card */}
          <GridItem>
            <Box
              bg="gray.900"
              color="white"
              rounded="2xl"
              p={8}
              position="sticky"
              top="96px"
              overflow="hidden"
            >
              {/* Glow */}
              <Box
                position="absolute"
                top="-50px"
                right="-50px"
                w="180px"
                h="180px"
                rounded="full"
                bg="blue.600"
                opacity={0.12}
                filter="blur(50px)"
                pointerEvents="none"
              />

              {/* Avatar */}
              <Flex align="center" gap={4} mb={5}>
                <Flex
                  w="80px"
                  h="80px"
                  rounded="full"
                  bg="brand.primary"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <Text fontWeight="800" fontSize="2xl" color="white" letterSpacing="-0.02em">
                    JA
                  </Text>
                </Flex>
                <Box>
                  <Text fontWeight="700" fontSize="lg" color="white" letterSpacing="-0.01em">
                    Joshua Alana
                  </Text>
                  <Text fontSize="sm" color="gray.400" mt={0.5}>
                    IT Consultant & Software Engineer
                  </Text>
                </Box>
              </Flex>

              {/* Availability badge */}
              <Flex align="center" gap={2} mb={6}>
                <Box w={2} h={2} rounded="full" bg="green.400" />
                <Text fontSize="xs" color="green.400" fontWeight="600">
                  Available for Engagements
                </Text>
              </Flex>

              <Divider borderColor="gray.700" mb={6} />

              {/* Info rows */}
              <VStack align="flex-start" spacing={4}>
                {profileInfo.map((item) => (
                  <Flex key={item.label} align="center" gap={3}>
                    <Flex
                      w={8}
                      h={8}
                      rounded="md"
                      bg="gray.800"
                      align="center"
                      justify="center"
                      flexShrink={0}
                    >
                      <Icon as={item.icon} boxSize={3.5} color="gray.400" />
                    </Flex>
                    <Box>
                      <Text fontSize="xs" color="gray.500" fontWeight="600" textTransform="uppercase" letterSpacing="wide">
                        {item.label}
                      </Text>
                      <Text fontSize="sm" color="gray.300" mt={0.5}>
                        {item.value}
                      </Text>
                    </Box>
                  </Flex>
                ))}
              </VStack>
            </Box>
          </GridItem>
        </Grid>

        {/* Professional Timeline */}
        <Box mb={20}>
          <Text
            fontSize="xs"
            fontWeight="700"
            color="brand.primary"
            letterSpacing="widest"
            textTransform="uppercase"
            mb={3}
          >
            Experience
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="800"
            color="gray.900"
            letterSpacing="-0.025em"
            mb={10}
          >
            Professional Journey
          </Heading>

          <VStack spacing={0} align="stretch">
            {timeline.map((item, i) => (
              <Flex key={item.period} gap={6}>
                <Flex direction="column" align="center" minW="20px">
                  <Box
                    w={3}
                    h={3}
                    rounded="full"
                    bg="brand.primary"
                    mt={1}
                    flexShrink={0}
                    border="2px solid"
                    borderColor="blue.200"
                  />
                  {i < timeline.length - 1 && (
                    <Box w="1px" flex={1} bg="gray.200" my={1} />
                  )}
                </Flex>

                <Box
                  pb={10}
                  bg="white"
                  borderWidth={1}
                  borderColor="gray.200"
                  rounded="xl"
                  p={6}
                  mb={6}
                  flex={1}
                  boxShadow="sm"
                  _hover={{ borderColor: "blue.200", boxShadow: "md" }}
                  transition="all 0.2s"
                >
                  <Text
                    fontWeight="600"
                    fontSize="xs"
                    color="brand.secondary"
                    textTransform="uppercase"
                    letterSpacing="wide"
                    mb={1}
                  >
                    {item.period}
                  </Text>
                  <Heading
                    as="h3"
                    fontSize="lg"
                    fontWeight="700"
                    color="gray.900"
                    mb={1}
                  >
                    {item.title}
                  </Heading>
                  <Flex align="center" gap={3} mb={4} flexWrap="wrap">
                    <Text color="brand.primary" fontWeight="600" fontSize="sm">
                      {item.organisation}
                    </Text>
                    <Text color="gray.400" fontSize="xs">·</Text>
                    <Text color="gray.500" fontSize="xs">
                      {item.location}
                    </Text>
                  </Flex>
                  <Text color="gray.600" fontSize="sm" lineHeight="1.9">
                    {item.description}
                  </Text>
                </Box>
              </Flex>
            ))}
          </VStack>
        </Box>

        {/* Skills */}
        <Box>
          <Text
            fontSize="xs"
            fontWeight="700"
            color="brand.primary"
            letterSpacing="widest"
            textTransform="uppercase"
            mb={3}
          >
            Technical Stack
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="800"
            color="gray.900"
            letterSpacing="-0.025em"
            mb={10}
          >
            Skills &amp; Tools
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            {Object.entries(skills).map(([category, items]) => (
              <Box
                key={category}
                bg="white"
                borderWidth={1}
                borderColor="gray.200"
                rounded="xl"
                p={6}
                boxShadow="sm"
                _hover={{ borderColor: "blue.200", boxShadow: "md" }}
                transition="all 0.2s"
              >
                <Flex align="center" gap={2} mb={4}>
                  <Icon as={FaCheckCircle} boxSize={3.5} color="brand.secondary" />
                  <Text fontWeight="700" color="gray.900" fontSize="sm">
                    {category}
                  </Text>
                </Flex>
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
                      _hover={{ bg: "blue.50", color: "brand.primary" }}
                      transition="all 0.2s"
                      cursor="default"
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
    </Box>
  );
}
