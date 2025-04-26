import { Box, Heading, Text, Link, UnorderedList, OrderedList, ListItem, Code, Image } from '@chakra-ui/react';

export const MDXComponents = {
  h1: (props) => <Heading as="h1" size="2xl" my={4} {...props} />,
  h2: (props) => <Heading as="h2" size="xl" my={4} {...props} />,
  h3: (props) => <Heading as="h3" size="lg" my={3} {...props} />,
  h4: (props) => <Heading as="h4" size="md" my={3} {...props} />,
  p: (props) => <Text my={2} {...props} />,
  a: (props) => <Link color="blue.500" {...props} />,
  ul: (props) => <UnorderedList my={2} {...props} />,
  ol: (props) => <OrderedList my={2} {...props} />,
  li: (props) => <ListItem {...props} />,
  code: (props) => <Code {...props} />,
  img: (props) => <Image {...props} />,
};