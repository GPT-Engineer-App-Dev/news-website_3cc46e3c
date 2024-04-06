import React from "react";
import { Box, Container, Flex, Heading, Text, VStack, HStack, Image, Link, Grid, GridItem, useColorModeValue, IconButton, Stack } from "@chakra-ui/react";
import { FaSun, FaMoon, FaNewspaper } from "react-icons/fa";

const newsArticles = [
  {
    id: 1,
    title: "Breaking News: Market Reaches New Highs",
    summary: "The stock market has hit record numbers this morning...",
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldHxlbnwwfHx8fDE3MTIzODQwMzJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "Local Sports Team Wins Championship",
    summary: "In an unprecedented victory, the local team took home the trophy...",
    imageUrl: "https://images.unsplash.com/photo-1527871454777-032ec3f75edc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0cm9waHl8ZW58MHx8fHwxNzEyMzg0MDMyfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  // ... more articles
];

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bg} color={color}>
      <Container maxW="container.xl" py={8}>
        <Flex justifyContent="space-between" alignItems="center" mb={10}>
          <Heading as="h1" size="xl">
            <FaNewspaper /> NewsPortal
          </Heading>
          <IconButton icon={useColorModeValue(<FaMoon />, <FaSun />)} isRound={true} size="lg" alignSelf="flex-end" aria-label="Toggle color mode" />
        </Flex>
        <Grid templateColumns="repeat(12, 1fr)" gap={6}>
          {newsArticles.map((article) => (
            <GridItem colSpan={{ base: 12, md: 6, lg: 4 }} key={article.id}>
              <VStack spacing={4} align="stretch">
                <Image src={article.imageUrl} alt={article.title} borderRadius="md" />
                <Heading as="h3" size="md">
                  {article.title}
                </Heading>
                <Text noOfLines={3}>{article.summary}</Text>
                <Stack direction="row" justifyContent="space-between">
                  <Link href="#" color="blue.500" fontWeight="bold">
                    Read More
                  </Link>
                  <Text fontSize="sm">3h ago</Text>
                </Stack>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Index;
