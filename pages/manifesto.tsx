import {
    Box,
    Heading,
    Text,
    Container,
    VStack,
    Center,
} from "@chakra-ui/react";

import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { MDXComponents } from "components/mdx-components";

import { GetStaticProps } from "next";
import { FallInPlace } from "components/motion/fall-in-place";
import { SEO } from "components/seo/seo";

const Manifesto = ({ post }) => {
    const MDXContent = useMDXComponent(post.body.code);

    return (
        <Box>
            <SEO title={post.title} description={post.description} />
            <Container maxW="container.md" py={16}>
                <VStack spacing={8} alignItems="center">
                    <FallInPlace>
                        <Heading as="h1" size="4xl" textAlign="center" mb={4}>
                            {post.title}
                        </Heading>
                    </FallInPlace>

                    <FallInPlace delay={0.4}>
                        <Center>
                            <Box
                                className="prose prose-lg"
                                maxW="100%"
                                textAlign="justify"
                            >
                                <MDXContent components={MDXComponents} />
                            </Box>
                        </Center>
                    </FallInPlace>
                </VStack>
            </Container>
        </Box>
    );
};

export default Manifesto;

export const getStaticProps: GetStaticProps = async ({}) => {
    const post = allPosts.find((post) => post.slug === "manifesto");
    return {
        props: {
            post,
        },
    };
};
