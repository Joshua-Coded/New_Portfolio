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
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa'
import { getGitHubRepos, GITHUB_USERNAME, type GitHubRepo } from '@/lib/api'

const languageColors: Record<string, string> = {
  JavaScript: 'yellow.500',
  TypeScript: 'blue.500',
  Python: 'green.500',
  Java: 'red.500',
  C: 'purple.500',
  'C++': 'pink.500',
  HTML: 'orange.500',
  CSS: 'cyan.500',
}

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getGitHubRepos(GITHUB_USERNAME, 9)
      .then((data) => { setRepos(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return (
    <Box minH="100vh" bg="gray.50" pt={32} pb={20}>
      <Container maxW="container.xl">
        <VStack spacing={4} align="flex-start" mb={16}>
          <Text fontSize="xs" fontWeight="700" color="brand.primary" letterSpacing="widest" textTransform="uppercase">
            Open Source
          </Text>
          <Heading as="h1" fontSize={{ base: "4xl", md: "5xl" }} fontWeight="800" color="gray.900" letterSpacing="-0.02em">
            Projects
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl" lineHeight="tall">
            Open source projects, code experiments, and technical explorations
          </Text>
        </VStack>

        <Flex align="center" gap={3} mb={8}>
          <Icon as={FaGithub} boxSize={6} color="gray.700" />
          <Heading as="h2" size="md" fontWeight="700" color="gray.700">
            GitHub Repositories
          </Heading>
        </Flex>

        {loading ? (
          <Center py={20}>
            <Spinner size="xl" color="brand.primary" thickness="3px" />
          </Center>
        ) : repos.length > 0 ? (
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
                _hover={{ boxShadow: 'md', borderColor: 'blue.200', transform: 'translateY(-2px)' }}
              >
                <Flex justify="space-between" align="start" mb={4}>
                  <Icon as={FaGithub} boxSize={5} color="gray.500" />
                  <ChakraLink href={repo.url} isExternal>
                    <Icon as={FaExternalLinkAlt} boxSize={3.5} color="gray.400" _hover={{ color: 'brand.primary' }} />
                  </ChakraLink>
                </Flex>

                <Heading as="h3" size="sm" fontWeight="700" color="gray.900" mb={2}>
                  <ChakraLink href={repo.url} isExternal _hover={{ color: 'brand.primary', textDecoration: 'none' }}>
                    {repo.name}
                  </ChakraLink>
                </Heading>

                <Text fontSize="sm" color="gray.500" mb={4} minH="40px" noOfLines={2} lineHeight="tall">
                  {repo.description || 'No description available'}
                </Text>

                <Flex justify="space-between" align="center">
                  {repo.language && (
                    <HStack spacing={1.5}>
                      <Box w={2.5} h={2.5} rounded="full" bg={languageColors[repo.language] ?? 'gray.400'} />
                      <Text fontSize="xs" color="gray.500">{repo.language}</Text>
                    </HStack>
                  )}
                  <HStack spacing={4} fontSize="xs" color="gray.400">
                    <HStack spacing={1}><Icon as={FaStar} /><Text>{repo.stars}</Text></HStack>
                    <HStack spacing={1}><Icon as={FaCodeBranch} /><Text>{repo.forks}</Text></HStack>
                  </HStack>
                </Flex>

                {repo.homepage && (
                  <Box mt={4} pt={4} borderTop="1px" borderColor="gray.100">
                    <ChakraLink href={repo.homepage} isExternal fontSize="xs" color="brand.primary" fontWeight="600" _hover={{ textDecoration: 'underline' }}>
                      View Live Demo →
                    </ChakraLink>
                  </Box>
                )}
              </Box>
            ))}
          </SimpleGrid>
        ) : (
          <Box bg="white" borderWidth={1} borderColor="gray.200" rounded="xl" p={10} textAlign="center">
            <Text color="gray.400" fontSize="sm">No repositories found.</Text>
          </Box>
        )}

        {repos.length > 0 && (
          <Center mt={12}>
            <ChakraLink href={`https://github.com/${GITHUB_USERNAME}`} isExternal fontSize="sm" color="brand.primary" fontWeight="600" _hover={{ textDecoration: 'underline' }}>
              View All Projects on GitHub →
            </ChakraLink>
          </Center>
        )}
      </Container>
    </Box>
  )
}
