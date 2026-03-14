'use client'

import { useState, useEffect } from 'react'
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
  Image,
  Link as ChakraLink,
  Spinner,
  Center,
} from '@chakra-ui/react'
import { FaChartLine, FaChartBar, FaCode, FaBriefcase, FaYoutube } from 'react-icons/fa'
import type { YouTubeVideo } from '@/lib/api'

export default function Content() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/youtube')
      .then((res) => res.json())
      .then((data: YouTubeVideo[]) => {
        setVideos(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const contentAreas = [
    {
      id: 'forex',
      icon: FaChartLine,
      title: "Forex Trading",
      description: "Technical analysis, USDJPY breakdowns, and trading strategies for everyday traders",
      gradient: "linear(to-br, green.500, teal.500)",
      topics: ["Technical Analysis", "USDJPY Focus", "Trading Setups", "Risk Management"]
    },
    {
      id: 'datascience',
      icon: FaChartBar,
      title: "Data Science",
      description: "Real-world data projects, machine learning tutorials, and analytics insights",
      gradient: "linear(to-br, cyan.500, blue.500)",
      topics: ["Python & R", "ML Models", "Data Viz", "Analytics"]
    },
    {
      id: 'coding',
      icon: FaCode,
      title: "Coding",
      description: "From low-level C to modern JavaScript - practical tutorials for all levels",
      gradient: "linear(to-br, purple.500, pink.500)",
      topics: ["Full Stack Dev", "Algorithms", "Best Practices", "Career Tips"]
    },
    {
      id: 'me',
      icon: FaBriefcase,
      title: "M&E & Career",
      description: "Monitoring & evaluation strategies and career development in tech",
      gradient: "linear(to-br, orange.500, yellow.500)",
      topics: ["M&E Frameworks", "Career Growth", "Tech Careers", "Professional Dev"]
    }
  ]

  return (
    <Box minH="100vh" pt={32} pb={20}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="flex-start" mb={16}>
          <Heading as="h1" fontSize={{ base: "4xl", md: "6xl" }} fontWeight="black" fontFamily="mono">
            <Text as="span" color="brand.secondary">&gt;</Text> Content_Creation
          </Heading>
          <Text fontSize="xl" color="whiteAlpha.800" maxW="3xl">
            Teaching through real projects, practical insights, and no-nonsense tutorials
          </Text>
        </VStack>

        <Box mb={20}>
          <Heading as="h2" size="xl" color="brand.primary" mb={8}>
            What I Teach
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {contentAreas.map((area) => (
              <Box
                key={area.id}
                id={area.id}
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

                <Heading as="h3" size="lg" mb={4}>
                  {area.title}
                </Heading>

                <Text color="whiteAlpha.700" mb={6}>
                  {area.description}
                </Text>

                <Flex flexWrap="wrap" gap={2}>
                  {area.topics.map((topic) => (
                    <Badge
                      key={topic}
                      px={3}
                      py={1}
                      fontSize="xs"
                      fontFamily="mono"
                      rounded="full"
                      bg="rgba(30, 41, 59, 0.5)"
                      color="whiteAlpha.700"
                      borderWidth={1}
                      borderColor="whiteAlpha.300"
                    >
                      {topic}
                    </Badge>
                  ))}
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box>
          <Flex align="center" gap={3} mb={8}>
            <Icon as={FaYoutube} boxSize={8} color="red.500" />
            <Heading as="h2" size="xl" color="brand.primary">
              Latest Videos
            </Heading>
          </Flex>

          {loading ? (
            <Center py={20}>
              <Spinner size="xl" color="brand.primary" thickness="4px" />
            </Center>
          ) : videos.length > 0 ? (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {videos.map((video) => (
                <ChakraLink
                  key={video.id}
                  href={video.url}
                  isExternal
                  _hover={{ textDecoration: 'none' }}
                >
                  <Box
                    bg="rgba(30, 41, 59, 0.5)"
                    backdropFilter="blur(10px)"
                    borderWidth={1}
                    borderColor="whiteAlpha.200"
                    rounded="xl"
                    overflow="hidden"
                    transition="all 0.3s"
                    _hover={{
                      borderColor: 'brand.primary',
                      transform: 'translateY(-4px)',
                    }}
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      w="full"
                      h="200px"
                      objectFit="cover"
                    />

                    <Box p={4}>
                      <Heading as="h3" size="sm" mb={2} noOfLines={2}>
                        {video.title}
                      </Heading>
                      <Text fontSize="sm" color="whiteAlpha.600" noOfLines={2}>
                        {video.description}
                      </Text>
                    </Box>
                  </Box>
                </ChakraLink>
              ))}
            </SimpleGrid>
          ) : (
            <Box
              bg="rgba(30, 41, 59, 0.5)"
              borderWidth={1}
              borderColor="whiteAlpha.200"
              rounded="xl"
              p={8}
              textAlign="center"
            >
              <Text color="whiteAlpha.600">
                No videos found. Add YOUTUBE_API_KEY and YOUTUBE_CHANNEL_ID to your environment variables.
              </Text>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  )
}
