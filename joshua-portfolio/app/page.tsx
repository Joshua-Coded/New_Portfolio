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
} from '@chakra-ui/react'

export default function Home() {
  const pillars = [
    {
      icon: FaSeedling,
      title: "Agricultural Technology",
      description: "Building digital systems and data platforms that drive food security programs across Sub-Saharan Africa.",
      gradient: "linear(to-br, green.600, teal.500)",
      link: "/work"
    },
    {
      icon: FaDatabase,
      title: "Data & M&E Systems",
      description: "Designing end-to-end monitoring frameworks and data pipelines that measure program performance at scale.",
      gradient: "linear(to-br, cyan.600, blue.500)",
      link: "/work"
    },
    {
      icon: FaChartBar,
      title: "Impact Analytics",
      description: "Translating complex agricultural and program data into evidence-based insights for decision-makers.",
      gradient: "linear(to-br, purple.600, indigo.500)",
      link: "/expertise"
    },
    {
      icon: FaUsers,
      title: "Stakeholder Engagement",
      description: "Connecting governments, NGOs, development partners, and the private sector around shared agricultural goals.",
      gradient: "linear(to-br, orange.600, yellow.500)",
      link: "/expertise"
    },
  ]

  return (
    <Box>
      {/* Hero */}
      <Box minH="100vh" display="flex" alignItems="center" pt={20}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="flex-start">
            <Text fontFamily="mono" fontSize="sm" color="brand.secondary">
              $ initialize --scope=africa --impact=true
            </Text>

            <Heading
              as="h1"
              fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
              fontWeight="black"
              bgGradient="linear(to-r, brand.primary, brand.secondary, brand.primary)"
              bgClip="text"
              lineHeight="shorter"
            >
              JOSHUA ALANA
            </Heading>

            <Text
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              color="whiteAlpha.800"
              maxW="3xl"
              fontWeight="light"
            >
              Technology Consultant driving agricultural transformation and
              development impact across Africa
            </Text>

            <HStack spacing={3} flexWrap="wrap">
              {["IT Consultant @ AGRA", "Software Engineer", "M&E Specialist"].map((tag) => (
                <Badge
                  key={tag}
                  px={4}
                  py={2}
                  rounded="full"
                  borderWidth={1}
                  borderColor="brand.primary"
                  bg="rgba(34, 211, 238, 0.1)"
                  color="brand.primary"
                  fontFamily="mono"
                >
                  {tag}
                </Badge>
              ))}
            </HStack>

            <HStack spacing={4} pt={4}>
              <Button
                as={Link}
                href="/work"
                size="lg"
                bgGradient="linear(to-r, brand.primary, brand.secondary)"
                color="brand.navy"
                fontWeight="bold"
                _hover={{ transform: 'scale(1.05)' }}
                transition="all 0.3s"
                rightIcon={<IoArrowForward />}
              >
                View My Work
              </Button>
              <Button
                as={Link}
                href="/contact"
                size="lg"
                variant="outline"
                borderColor="brand.primary"
                color="brand.primary"
                fontWeight="bold"
                _hover={{ bg: 'rgba(34, 211, 238, 0.1)' }}
                transition="all 0.3s"
              >
                Get In Touch
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Pillars */}
      <Box py={32}>
        <Container maxW="container.xl">
          <VStack spacing={12} align="flex-start">
            <Box>
              <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="black" fontFamily="mono" mb={4}>
                <Text as="span" color="brand.secondary">&gt;</Text> Core_Expertise
              </Heading>
              <Text fontSize="xl" color="whiteAlpha.700">
                Technology and data solutions built for development impact
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              {pillars.map((pillar) => (
                <Box
                  key={pillar.title}
                  as={Link}
                  href={pillar.link}
                  bg="rgba(30, 41, 59, 0.5)"
                  backdropFilter="blur(10px)"
                  borderWidth={1}
                  borderColor="whiteAlpha.200"
                  rounded="2xl"
                  p={8}
                  cursor="pointer"
                  transition="all 0.3s"
                  _hover={{
                    borderColor: 'brand.primary',
                    transform: 'translateY(-4px)',
                    textDecoration: 'none',
                  }}
                >
                  <Flex
                    w={16}
                    h={16}
                    rounded="xl"
                    bgGradient={pillar.gradient}
                    align="center"
                    justify="center"
                    mb={6}
                  >
                    <Icon as={pillar.icon} boxSize={8} color="white" />
                  </Flex>

                  <Heading as="h3" size="lg" mb={4}>
                    {pillar.title}
                  </Heading>

                  <Text color="whiteAlpha.700" mb={6}>
                    {pillar.description}
                  </Text>

                  <HStack color="brand.primary" fontFamily="mono" fontSize="sm">
                    <Text>Learn More</Text>
                    <IoArrowForward />
                  </HStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Impact strip */}
      <Box py={20} bgGradient="linear(to-r, rgba(34,211,238,0.05), rgba(132,204,22,0.05))">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} textAlign="center">
            {[
              { value: "15+", label: "African Countries" },
              { value: "5M+", label: "Farmers Reached" },
              { value: "100+", label: "Partner Stakeholders" },
              { value: "$50M+", label: "Programs Supported" },
            ].map((stat) => (
              <Box key={stat.label}>
                <Heading as="div" fontSize="4xl" fontWeight="black" color="brand.primary" mb={2}>
                  {stat.value}
                </Heading>
                <Text color="whiteAlpha.600" fontFamily="mono" fontSize="sm">
                  {stat.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  )
}
