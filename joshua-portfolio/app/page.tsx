"use client";
import Link from "next/link";
import { FaDatabase, FaChartBar, FaUsers, FaSeedling } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  SimpleGrid,
  Icon,
  Flex,
  Badge,
  Divider,
} from '@chakra-ui/react'

export default function Home() {
  const pillars = [
    {
      icon: FaSeedling,
      title: "Agricultural Technology",
      description: "Building digital systems and data platforms that drive food security programs across Sub-Saharan Africa.",
      iconBg: "blue.50",
      iconColor: "blue.600",
      link: "/work",
    },
    {
      icon: FaDatabase,
      title: "Data & M&E Systems",
      description: "Designing end-to-end monitoring frameworks and data pipelines that measure program performance at scale.",
      iconBg: "emerald.50",
      iconColor: "green.600",
      link: "/work",
    },
    {
      icon: FaChartBar,
      title: "Impact Analytics",
      description: "Translating complex agricultural and program data into evidence-based insights for decision-makers.",
      iconBg: "purple.50",
      iconColor: "purple.600",
      link: "/expertise",
    },
    {
      icon: FaUsers,
      title: "Stakeholder Engagement",
      description: "Connecting governments, NGOs, development partners, and the private sector around shared agricultural goals.",
      iconBg: "orange.50",
      iconColor: "orange.600",
      link: "/expertise",
    },
  ]

  const stats = [
    { value: "15+", label: "African Countries" },
    { value: "5M+", label: "Farmers Reached" },
    { value: "100+", label: "Partner Stakeholders" },
    { value: "$50M+", label: "Programs Supported" },
  ]

  return (
    <Box>
      {/* Hero */}
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        pt={20}
        bgGradient="linear(135deg, #EFF6FF 0%, #F0FDF4 60%, #F8FAFC 100%)"
        position="relative"
        overflow="hidden"
      >
        {/* Decorative circles */}
        <Box
          position="absolute"
          top="-120px"
          right="-120px"
          w="500px"
          h="500px"
          rounded="full"
          bg="blue.100"
          opacity={0.25}
          filter="blur(80px)"
          pointerEvents="none"
        />
        <Box
          position="absolute"
          bottom="-80px"
          left="-80px"
          w="350px"
          h="350px"
          rounded="full"
          bg="green.100"
          opacity={0.3}
          filter="blur(60px)"
          pointerEvents="none"
        />

        <Container maxW="container.xl" position="relative">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} alignItems="center">
            {/* Left */}
            <VStack spacing={7} align="flex-start">
              <Badge
                px={4}
                py={1.5}
                rounded="full"
                bg="blue.50"
                color="blue.700"
                fontWeight="semibold"
                fontSize="sm"
                borderWidth={1}
                borderColor="blue.200"
              >
                IT Consultant @ AGRA · Software Engineer · M&E Specialist
              </Badge>

              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="800"
                color="gray.900"
                lineHeight="1.1"
                letterSpacing="-0.02em"
              >
                Joshua Alana
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.600"
                maxW="xl"
                lineHeight="1.75"
              >
                Technology Consultant driving agricultural transformation and
                development impact across Africa — building the data systems
                that power better decisions.
              </Text>

              <HStack spacing={4} pt={2} flexWrap="wrap">
                <Button
                  as={Link}
                  href="/work"
                  size="lg"
                  bg="brand.primary"
                  color="white"
                  fontWeight="semibold"
                  px={8}
                  _hover={{ bg: 'blue.700', transform: 'translateY(-1px)', boxShadow: 'lg' }}
                  transition="all 0.2s"
                  rightIcon={<IoArrowForward />}
                >
                  View My Work
                </Button>
                <Button
                  as={Link}
                  href="/contact"
                  size="lg"
                  variant="outline"
                  borderColor="gray.300"
                  color="gray.700"
                  fontWeight="semibold"
                  px={8}
                  _hover={{ borderColor: 'brand.primary', color: 'brand.primary', bg: 'blue.50' }}
                  transition="all 0.2s"
                >
                  Get In Touch
                </Button>
              </HStack>
            </VStack>

            {/* Right — stats card */}
            <Box
              bg="white"
              rounded="2xl"
              p={8}
              boxShadow="0 4px 40px rgba(37,99,235,0.08)"
              borderWidth={1}
              borderColor="gray.100"
            >
              <Text
                fontSize="xs"
                fontWeight="700"
                color="gray.400"
                letterSpacing="widest"
                textTransform="uppercase"
                mb={6}
              >
                Impact at a Glance
              </Text>
              <SimpleGrid columns={2} spacing={6}>
                {stats.map((stat) => (
                  <Box key={stat.label}>
                    <Heading
                      as="div"
                      fontSize="3xl"
                      fontWeight="800"
                      color="brand.primary"
                      letterSpacing="-0.02em"
                    >
                      {stat.value}
                    </Heading>
                    <Text fontSize="sm" color="gray.500" mt={1}>
                      {stat.label}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
              <Divider my={6} borderColor="gray.100" />
              <Text fontSize="sm" color="gray.500" lineHeight="tall">
                Supporting agricultural transformation programs across Sub-Saharan Africa
                through technology, data, and evidence-based decision-making.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Expertise pillars */}
      <Box py={24} bg="white">
        <Container maxW="container.xl">
          <VStack spacing={4} align="center" textAlign="center" mb={16}>
            <Text
              fontSize="xs"
              fontWeight="700"
              color="brand.primary"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              Core Capabilities
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="800"
              color="gray.900"
              letterSpacing="-0.02em"
            >
              Technology built for development impact
            </Heading>
            <Text fontSize="lg" color="gray.500" maxW="2xl">
              From agricultural data systems to M&E frameworks — practical solutions
              for organisations working at the frontier of African development.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {pillars.map((pillar) => (
              <Box
                key={pillar.title}
                as={Link}
                href={pillar.link}
                bg="white"
                borderWidth={1}
                borderColor="gray.200"
                rounded="xl"
                p={8}
                cursor="pointer"
                transition="all 0.2s"
                _hover={{
                  borderColor: 'blue.300',
                  boxShadow: '0 8px 30px rgba(37,99,235,0.1)',
                  transform: 'translateY(-3px)',
                  textDecoration: 'none',
                }}
              >
                <Flex
                  w={12}
                  h={12}
                  rounded="lg"
                  bg={pillar.iconBg}
                  align="center"
                  justify="center"
                  mb={5}
                >
                  <Icon as={pillar.icon} boxSize={5} color={pillar.iconColor} />
                </Flex>

                <Heading as="h3" fontSize="lg" fontWeight="700" color="gray.900" mb={3}>
                  {pillar.title}
                </Heading>

                <Text color="gray.500" fontSize="sm" lineHeight="tall" mb={5}>
                  {pillar.description}
                </Text>

                <HStack color="brand.primary" fontSize="sm" fontWeight="semibold">
                  <Text>Learn more</Text>
                  <IoArrowForward />
                </HStack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA banner */}
      <Box py={20} bgGradient="linear(135deg, #1D4ED8, #059669)">
        <Container maxW="container.xl">
          <VStack spacing={6} textAlign="center">
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="800"
              color="white"
              letterSpacing="-0.02em"
            >
              Let's build something that matters
            </Heading>
            <Text fontSize="lg" color="whiteAlpha.800" maxW="xl">
              Open to consultancy, partnerships, and technology projects with development organisations across Africa.
            </Text>
            <Button
              as={Link}
              href="/contact"
              size="lg"
              bg="white"
              color="blue.700"
              fontWeight="semibold"
              px={10}
              _hover={{ bg: 'blue.50', transform: 'translateY(-1px)', boxShadow: 'xl' }}
              transition="all 0.2s"
              rightIcon={<IoArrowForward />}
            >
              Start a Conversation
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}
