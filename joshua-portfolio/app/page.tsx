"use client";
import Link from "next/link";
import { FaBriefcase, FaChartBar, FaChartLine, FaCode } from "react-icons/fa";
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
  const features = [
    {
      icon: FaBriefcase,
      title: "Professional Work",
      description: "Building tech products and data systems at AGRA for agricultural transformation",
      gradient: "linear(to-br, orange.500, yellow.500)",
      link: "/work"
    },
    {
      icon: FaChartLine,
      title: "Forex Trading",
      description: "Technical analysis and USDJPY breakdowns for everyday traders",
      gradient: "linear(to-br, green.500, teal.500)",
      link: "/content"
    },
    {
      icon: FaChartBar,
      title: "Data Science",
      description: "Real-world data projects and machine learning tutorials",
      gradient: "linear(to-br, cyan.500, blue.500)",
      link: "/content"
    },
    {
      icon: FaCode,
      title: "Coding Tutorials",
      description: "From low-level C to modern JavaScript - practical tutorials",
      gradient: "linear(to-br, purple.500, pink.500)",
      link: "/content"
    },
  ]

  return (
    <Box>
      <Box minH="100vh" display="flex" alignItems="center" pt={20}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="flex-start">
            <Text fontFamily="mono" fontSize="sm" color="brand.secondary">
              $ whoami
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
              Building technology for impact while teaching the world to code, trade, and analyze data
            </Text>

            <HStack spacing={3} flexWrap="wrap">
              {["IT Consultant @ AGRA", "Software Engineer", "Content Creator"].map((tag, i) => (
                <Badge
                  key={i}
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
                _hover={{
                  transform: 'scale(1.05)',
                }}
                transition="all 0.3s"
                rightIcon={<IoArrowForward />}
              >
                View My Work
              </Button>
              <Button
                as={Link}
                href="/content"
                size="lg"
                variant="outline"
                borderColor="brand.primary"
                color="brand.primary"
                fontWeight="bold"
                _hover={{
                  bg: 'rgba(34, 211, 238, 0.1)',
                }}
                transition="all 0.3s"
              >
                Watch Content
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      <Box py={32}>
        <Container maxW="container.xl">
          <VStack spacing={12} align="flex-start">
            <Box>
              <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="black" fontFamily="mono" mb={4}>
                <Text as="span" color="brand.secondary">&gt;</Text> What_I_Do
              </Heading>
              <Text fontSize="xl" color="whiteAlpha.700">
                Professional work and educational content
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              {features.map((feature, i) => (
                <Box
                  key={i}
                  as={Link}
                  href={feature.link}
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
                    bgGradient={feature.gradient}
                    align="center"
                    justify="center"
                    mb={6}
                  >
                    <Icon as={feature.icon} boxSize={8} color="white" />
                  </Flex>

                  <Heading as="h3" size="lg" mb={4}>
                    {feature.title}
                  </Heading>

                  <Text color="whiteAlpha.700" mb={6}>
                    {feature.description}
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
    </Box>
  )
}
