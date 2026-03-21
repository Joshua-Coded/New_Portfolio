'use client'
import { Box, Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionFlex = motion(Flex)

const items = [
  'Python', 'Next.js', 'PostgreSQL', 'Power BI', 'KoboToolbox', 'Docker',
  'TypeScript', 'React', 'Node.js', 'AWS', 'DHIS2', 'ODK',
]

export function TechMarquee() {
  const doubled = [...items, ...items]
  return (
    <Box overflow="hidden" py={5} bg="#0F172A" borderTop="1px solid rgba(255,255,255,0.05)">
      <MotionFlex
        align="center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{ width: 'max-content', willChange: 'transform' }}
      >
        {doubled.map((item, i) => (
          <Flex key={i} align="center" gap={8} flexShrink={0} px={4}>
            <Box w="3px" h="3px" rounded="full" bg="rgba(255,255,255,0.2)" flexShrink={0} />
            <Text fontSize="sm" fontWeight="600" color="gray.500" whiteSpace="nowrap">
              {item}
            </Text>
          </Flex>
        ))}
      </MotionFlex>
    </Box>
  )
}
