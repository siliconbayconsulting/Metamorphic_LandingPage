import * as React from 'react'
import { Box, Flex, Text, VisuallyHidden } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import LogoSVG from '../../public/static/vectors/logo.svg'
import Image from 'next/image' 

export interface LogoProps {
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

import siteConfig from 'data/config'

export const Logo = ({ href = '/', onClick }: LogoProps) => {
  return (
    <Flex h="8" flexShrink="0" alignItems="center">
      <Link
        href={href}
        display="flex"
        alignItems="center"
        p="1"
        borderRadius="sm"
        onClick={onClick}
      >
        <Image
          src="/static/vectors/logo.svg"
          alt="Logo"
          width={40}
          height={40}
        />

        <Text
          fontSize="lg"
          fontWeight="bold"
          fontFamily="'Montserrat', sans-serif" // You can change this to your preferred font
          ml="3" // Added margin-left to create gap
        >
          METAMORPHIC.FIT
        </Text>
        <VisuallyHidden>{siteConfig.seo?.title}</VisuallyHidden>
      </Link>
    </Flex>
  )
}
