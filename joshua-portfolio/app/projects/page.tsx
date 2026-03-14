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
} from '@chakra-ui/react'
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa'
import { getGitHubRepos, GITHUB_USERNAME, type GitHubRepo } from '@/lib/api'

const languageColors: Record<string, string> = {
  JavaScript: 'yellow.400',
  TypeScript: 'blue.400',
  Python: 'green.400',
  Java: 'red.400',
  C: 'purple.400',
  'C++': 'pink.400',
  HTML: 'orange.400',
  CSS: 'cyan.400',
}

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getGitHubRepos(GITHUB_USERNAME, 9)
      .then((data) => {
        setRepos(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <Box minH="100vh" pt={32} pb={20}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="flex-start" mb={16}>
          <Heading as="h1" fontSize={{ base: "4xl", md: "6xl" }} fontWeight="black" fontFamily="mono">
            <Text as="span" color="brand.secondary">&gt;</Text> Projects
          </Heading>
          <Text fontSize="xl" color="whiteAlpha.800" maxW="3xl">
            Open source projects, code experiments, and technical explorations
          </Text>
        </VStack>

        <Box>
          <Flex align="center" gap={3} mb={8}>
            <Icon as={FaGithub} boxSize={8} color="white" />
            <Heading as="h2" size="xl" color="brand.primary">
              GitHub Repositories
            </Heading>
          </Flex>

          {loading ? (
            <Center py={20}>
              <Spinner size="xl" color="brand.primary" thickness="4px" />
            </Center>
          ) : repos.length > 0 ? (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {repos.map((repo) => (
                <Box
                  key={repo.id}
                  bg="rgba(30, 41, 59, 0.5)"
                  backdropFilter="blur(10px)"
                  borderWidth={1}
                  borderColor="whiteAlpha.200"
                  rounded="xl"
                  p={6}
                  transition="all 0.3s"
                  _hover={{
                    borderColor: 'brand.primary',
                    transform: 'translateY(-4px)',
                  }}
                >
                  <Flex justify="space-between" align="start" mb={4}>
                    <Icon as={FaGithub} boxSize={6} color="brand.primary" />
                    <ChakraLink href={repo.url} isExternal>
                      <Icon
                        as={FaExternalLinkAlt}
                        boxSize={4}
                        color="whiteAlpha.600"
                        _hover={{ color: 'brand.primary' }}
                      />
                    </ChakraLink>
                  </Flex>

                  <Heading as="h3" size="md" mb={2}>
                    <ChakraLink
                      href={repo.url}
                      isExternal
                      _hover={{ color: 'brand.primary', textDecoration: 'none' }}
                    >
                      {repo.name}
                    </ChakraLink>
                  </Heading>

                  <Text fontSize="sm" color="whiteAlpha.700" mb={4} minH="40px" noOfLines={2}>
                    {repo.description || 'No description available'}
                  </Text>

                  <Flex justify="space-between" align="center">
                    {repo.language && (
                      <HStack spacing={2}>
                        <Box
                          w={3}
                          h={3}
                          rounded="full"
                          bg={languageColors[repo.language] ?? 'gray.400'}
                        />
                        <Text fontSize="sm" color="whiteAlpha.600">
                          {repo.language}
                        </Text>
                      </HStack>
                    )}

                    <HStack spacing={4} fontSize="sm" color="whiteAlpha.600">
                      <HStack spacing={1}>
                        <Icon as={FaStar} />
                        <Text>{repo.stars}</Text>
                      </HStack>
                      <HStack spacing={1}>
                        <Icon as={FaCodeBranch} />
                        <Text>{repo.forks}</Text>
                      </HStack>
                    </HStack>
                  </Flex>

                  {repo.homepage && (
                    <Box mt={4} pt={4} borderTop="1px" borderColor="whiteAlpha.200">
                      <ChakraLink
                        href={repo.homepage}
                        isExternal
                        fontSize="sm"
                        color="brand.primary"
                        _hover={{ textDecoration: 'underline' }}
                      >
                        View Live Demo →
                      </ChakraLink>
                    </Box>
                  )}
                </Box>
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
                No repositories found. Check GitHub username in lib/api.ts
              </Text>
            </Box>
          )}

          {repos.length > 0 && (
            <Center mt={12}>
              <ChakraLink
                href={`https://github.com/${GITHUB_USERNAME}`}
                isExternal
                fontSize="lg"
                color="brand.primary"
                fontWeight="bold"
                _hover={{ textDecoration: 'underline' }}
              >
                View All Projects on GitHub →
              </ChakraLink>
            </Center>
          )}
        </Box>
      </Container>
    </Box>
  )
}
