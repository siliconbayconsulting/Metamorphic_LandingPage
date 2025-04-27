import type { NextPage } from "next";
import React,{useEffect, useState} from 'react';
import { Link } from "@chakra-ui/react"
import { ButtonLink } from "components/button-link/button-link";
//import './Questionnaire.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
// import { ChakraProvider } from '@chakra-ui/react';
// import ReactDOM from 'react-dom/client';
import { defineStyle } from "@chakra-ui/react"
import { FormControl, FormLabel, FormErrorMessage,  
    FormHelperText, Input, Button, 
    NumberInput} from "@chakra-ui/react";
import { Field, Form } from "@saas-ui/react";
    import {
        Box,
        Heading,
        SimpleGrid,
        Text,
        useColorModeValue,
        Flex,
        ChakraProvider,
        Select,
        
    } from "@chakra-ui/react";
    

import Head from 'next/head';
import { useRouter } from "next/router";
    

const FreePlan: NextPage = ({ posts }: any) => {

    return ( <Flex direction="column" minHeight="100vh">
                <Box as="section" py={120} px={300} flex="1">
                    <FormControl> 
                        <Heading>
                            <center>We have sent you the free plan to your email!</center>

                            <Link href='/#pricing'
                                                                                            bgColor={"red"}
                                                                                            size="lg"
                                                                                     
                                                                                        >
                                                                                           Please click here to see explore our comprehensive programs!
                                                                                        </Link>
                        </Heading>                 
                    </FormControl>
                </Box>
            </Flex>);
}

export default FreePlan;
