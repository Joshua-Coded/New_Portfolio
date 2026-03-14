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
  Link as ChakraLink,
  Spinner,
  Center,
  HStack,
  Badge,
} from '@chakra-ui/react'
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import { getGitHubRepos, GITHUB_USERNAME, type GitHubRepo } from '@/lib/api'

const languageColors: Record<string, string> = {
  JavaScript: '#F6C90E',
  TypeScript: '#3178C6',
  Python: '#3572A5',
  Java: '#B07219',
  C: '#555555',
  'C++': '#F34B7D',
  HTML: '#E34C26',
  CSS: '#563D7C',
  Go: '#00ADD8',
  Rust: '#DEA584',
}

const languageChakraColors: Record<string, string> = {
  JavaScript: 'yellow.500',
  TypeScript: 'blue.500',
  Python: 'green.500',
  Java: 'orange.500',
  C: 'gray.600',
  'C++': 'pink.500',
  HTML: 'orange.500',
  CSS: 'purple.500',
  Go: 'cyan.500',
  Rust: 'orange.400',
}

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getGitHubRepos(GITHUB_USERNAME, 9)
      .then((data) => {
        setRepos(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

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
            Open Source
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '5xl' }}
            fontWeight="800"
            color="gray.900"
            letterSpacing="-0.03em"
          >
            Projects
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl" lineHeight="1.8">
            Open source projects, code experiments, and technical explorations
            from software engineering to data systems.
          </Text>
        </VStack>

        {/* GitHub banner */}
        <Box
          bg="white"
          borderWidth={1}
          borderColor="gray.200"
          rounded="xl"
          p={6}
          mb={10}
          boxShadow="sm"
        >
          <Flex
            direction={{ base: 'column', sm: 'row' }}
            align={{ base: 'flex-start', sm: 'center' }}
            justify="space-between"
            gap={4}
          >
            <Flex align="center" gap={4}>
              <Flex
                w={12}
                h={12}
                rounded="xl"
                bg="gray.900"
                align="center"
                justify="center"
                flexShrink={0}
              >
                <Icon as={FaGithub} boxSize={6} color="white" />
              </Flex>
              <Box>
                <Text fontWeight="700" color="gray.900" fontSize="md">
                  GitHub Repositories
                </Text>
                <Text fontSize="sm" color="gray.500">
                  github.com/{GITHUB_USERNAME}
                </Text>
              </Box>
            </Flex>
            <ChakraLink
              href={`https://github.com/${GITHUB_USERNAME}`}
              isExternal
              display="flex"
              alignItems="center"
              gap={2}
              bg="gray.900"
              color="white"
              px={5}
              py={2.5}
              rounded="lg"
              fontSize="sm"
              fontWeight="600"
              _hover={{ bg: 'gray.700', textDecoration: 'none' }}
              transition="all 0.2s"
              flexShrink={0}
            >
              View Profile
              <Icon as={FaArrowRight} boxSize={3.5} />
            </ChakraLink>
          </Flex>
        </Box>

        {/* Repo Grid */}
        {loading ? (
          <Center py={24}>
            <VStack spacing={4}>
              <Spinner size="xl" color="brand.primary" thickness="3px" />
              <Text fontSize="sm" color="gray.400">
                Fetching repositories…
              </Text>
            </VStack>
          </Center>
        ) : error || repos.length === 0 ? (
          <Box
            bg="white"
            borderWidth={1}
            borderColor="gray.200"
            rounded="xl"
            p={12}
            textAlign="center"
            boxShadow="sm"
          >
            <Icon as={FaGithub} boxSize={10} color="gray.300" mb={4} />
            <Text color="gray.400" fontSize="sm" mb={2}>
              {error ? 'Could not load repositories.' : 'No repositories found.'}
            </Text>
            <ChakraLink
              href={`https://github.com/${GITHUB_USERNAME}`}
              isExternal
              fontSize="sm"
              color="brand.primary"
              fontWeight="600"
            >
              View on GitHub →
            </ChakraLink>
          </Box>
        ) : (
          <>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
              {repos.map((repo) => (
                <Box
                  key={repo.id}
                  bg="white"
                  borderWidth={1}
                  borderColor="gray.200"
                  rounded="xl"
                  p={6}
                  boxShadow="sm"
                  transition="all 0.2s"
                  display="flex"
                  flexDirection="column"
                  _hover={{
                    boxShadow: 'md',
                    borderColor: 'blue.200',
                    transform: 'translateY(-2px)',
                  }}
                >
                  {/* Card header */}
                  <Flex justify="space-between" align="flex-start" mb={4}>
                    <Flex
                      w={9}
                      h={9}
                      rounded="lg"
                      bg="gray.100"
                      align="center"
                      justify="center"
                    >
                      <Icon as={FaGithub} boxSize={4} color="gray.600" />
                    </Flex>
                    <ChakraLink href={repo.url} isExternal>
                      <Flex
                        w={7}
                        h={7}
                        rounded="md"
                        align="center"
                        justify="center"
                        color="gray.400"
                        _hover={{ color: 'brand.primary', bg: 'blue.50' }}
                        transition="all 0.15s"
                      >
                        <Icon as={FaExternalLinkAlt} boxSize={3} />
                      </Flex>
                    </ChakraLink>
                  </Flex>

                  {/* Repo name */}
                  <Heading as="h3" fontSize="sm" fontWeight="700" color="gray.900" mb={2}>
                    <ChakraLink
                      href={repo.url}
                      isExternal
                      _hover={{ color: 'brand.primary', textDecoration: 'none' }}
                      transition="color 0.15s"
                    >
                      {repo.name}
                    </ChakraLink>
                  </Heading>

                  {/* Description */}
                  <Text
                    fontSize="sm"
                    color="gray.500"
                    mb={5}
                    flex={1}
                    noOfLines={2}
                    lineHeight="1.7"
                  >
                    {repo.description || 'No description available.'}
                  </Text>

                  {/* Footer */}
                  <Flex justify="space-between" align="center" mt="auto">
                    {repo.language ? (
                      <HStack spacing={1.5}>
                        <Box
                          w={2.5}
                          h={2.5}
                          rounded="full"
                          bg={languageChakraColors[repo.language] ?? 'gray.400'}
                          flexShrink={0}
                        />
                        <Text fontSize="xs" color="gray.500">
                          {repo.language}
                        </Text>
                      </HStack>
                    ) : (
                      <Box />
                    )}
                    <HStack spacing={3} fontSize="xs" color="gray.400">
                      <HStack spacing={1}>
                        <Icon as={FaStar} boxSize={3} />
                        <Text>{repo.stars}</Text>
                      </HStack>
                      <HStack spacing={1}>
                        <Icon as={FaCodeBranch} boxSize={3} />
                        <Text>{repo.forks}</Text>
                      </HStack>
                    </HStack>
                  </Flex>

                  {/* Live demo */}
                  {repo.homepage && (
                    <Box mt={4} pt={4} borderTop="1px" borderColor="gray.100">
                      <ChakraLink
                        href={repo.homepage}
                        isExternal
                        fontSize="xs"
                        color="brand.primary"
                        fontWeight="600"
                        _hover={{ textDecoration: 'underline' }}
                      >
                        View Live Demo →
                      </ChakraLink>
                    </Box>
                  )}
                </Box>
              ))}
            </SimpleGrid>

            <Center mt={12}>
              <ChakraLink
                href={`https://github.com/${GITHUB_USERNAME}`}
                isExternal
                display="flex"
                alignItems="center"
                gap={2}
                fontSize="sm"
                color="brand.primary"
                fontWeight="600"
                _hover={{ textDecoration: 'none', gap: 3 }}
                transition="gap 0.15s"
              >
                View All Projects on GitHub
                <Icon as={FaArrowRight} boxSize={3.5} />
              </ChakraLink>
            </Center>
          </>
        )}
      </Container>
    </Box>
  )
}
