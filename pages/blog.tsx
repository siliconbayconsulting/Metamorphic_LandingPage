import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
    Box,
    Heading,
    SimpleGrid,
    Text,
    useColorModeValue,
    Flex,
} from "@chakra-ui/react";

import { format, parseISO } from "date-fns";

import { blogPosts, BlogPost } from "../data/blogPosts";

const Blog: NextPage = ({ posts }: any) => {
    return (
        <Flex direction="column" minHeight="100vh">
            <Box as="section" py={16} px={4} flex="1">
                <Head>
                    <title>Blog</title>
                </Head>

                <Box maxW="container.xl" mx="auto">
                    <Heading as="h1" size="4xl" textAlign="center" mb={8}>
                        Blog
                    </Heading>
                    <Text textAlign="center" mb={8}>
                        Hello! We explore a mix of ancient and modern knowledge
                        on exercise and wellness
                    </Text>

                    <Box p={4}>
                        <SimpleGrid
                            columns={{ base: 1, md: 2, lg: 3 }}
                            spacing={8}
                        >
                            {posts.map((post, idx) => (
                                <PostCard key={idx} post={post} />
                            ))}
                        </SimpleGrid>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};

function PostCard({ post }: { post: BlogPost }) {
    const bg = useColorModeValue("white", "gray.800");
    const hoverBg = useColorModeValue("gray.50", "gray.700");
    const textColor = useColorModeValue("gray.800", "white");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Box
            as="a"
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="lg"
            overflow="hidden"
            bg={bg}
            boxShadow="lg"
            transition="all 0.3s"
            _hover={{
                transform: "translateY(-4px)",
                boxShadow: "xl",
                borderColor: "primary.500",
            }}
        >
            <Box position="relative" height="200px">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </Box>

            <Box p={6}>
                <Heading as="h2" size="md" mb={2} color={textColor}>
                    {post.title}
                </Heading>

                <Text fontSize="sm" color="gray.500" noOfLines={2} mb={4}>
                    {post.description}
                </Text>

                <Flex align="center" justify="space-between">
                    <Flex align="center" gap={2}>
                        {/* <Box
                            position="relative"
                            width="30px"
                            height="30px"
                            borderRadius="full"
                            overflow="hidden"
                        >
                            <Image
                                src={post.author.avatar}
                                alt={post.author.name}
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </Box> */}
                        <Text fontSize="sm" color="gray.600">
                            {post.author.name}
                        </Text>
                    </Flex>

                    <Flex align="center" gap={1}>
                        {/* <FaCalendar size={14} /> */}
                        <Text fontSize="sm" color="gray.600">
                            {format(parseISO(post.date), "MMM d, yyyy")}
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}

export default Blog;

export async function getStaticProps() {
    return {
        props: {
            posts: blogPosts,
        },
    };
}
