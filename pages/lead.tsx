import type { NextPage } from "next";
import React,{useEffect, useState} from 'react';
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
    

const Lead: NextPage = ({ posts }: any) => {

    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const [email,setEmail] = useState("");
    const [phoneNo,setPhoneNo] = useState("");
    const [enthusiastTrainer,setenthusiastTrainer] = useState(null);
    const submitData = {
        name,
        age,
        email,
        phoneNo,
        enthusiastTrainer
    }

   // const [errors,setErrors] = useState({});
    const errors = {
        name:'',
        age:'',
        email:'',
        phoneNo:'',
        enthusiastTrainer:''
    }

    const validateForm = (data) => {
        const errors = {};
        return errors;
    }

    const validateAndSetEmail = (email)=>{
        if(isValidEmail(email))
        {
            setEmail(email)
        }
        else {
            email='';
        }
       // setErrors('a');
    }

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }  

    const setErrorMessages = (submitData)=>{
        if(submitData.name.trim){
            errors.name = "Name required";
        }
        else if(submitData.age.trim){
            errors.age = "Age required";
        }
        else if(validateAndSetEmail(email)){
            errors.email = "email required";
        }
        else if(submitData.phoneNo.trim){
            errors.phoneNo = 'phone no required';
        }
        else if(submitData.enthusiastTrainer.trim){
            errors.enthusiastTrainer = 'Please select yes or no';
        }
    }

    const isNameError = name ==='';
    const isAgeError = age === 0;
    const isEmailError = email === '';
    const isPhoneNoError = phoneNo === '';
    const isEnthusiastTrainerError = enthusiastTrainer === null;

    // const navigate = useNavigate();
    const router = useRouter();
    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post('http://localhost:8000/lead',submitData)
        .then((response)=>{
            router.push('/#');
            //  navigate('/program',{state:{'name':name}})
        })
        .catch((err)=>{alert(err);})
    }

    return ( <Flex direction="column" minHeight="100vh">
                <Box as="section" py={120} px={300} flex="1">
                    <FormControl> 
                        <Heading>
                            <center>Claim your free workout program. Offer valid only for the first 50 customers who sign up!</center>
                        </Heading>

                </FormControl>
                    <FormLabel>Name</FormLabel>
                        <FormControl variant='floating' id="name" isRequired isInvalid={isNameError}>
                            <Input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                            {/* <Input className="peer" placeholder={leadInfo.firstName} onChange={(e) => setFirstName(e.target.value)}/> */}
                            {/* <Field.Label css={floatingStyles}>Email</Field.Label> */}
                            {isNameError ? (<FormHelperText>Please fill in your name</FormHelperText>):(
                                <FormErrorMessage>{errors.name}</FormErrorMessage>)}
                    </FormControl>

                    <FormLabel>Age</FormLabel>
                        <FormControl variant='floating' id="age" isRequired isInvalid={isAgeError}>
                            <Input placeholder="Age" type="number" min={12} onChange={(e)=>setAge(Number(e.target.value))} />
                            {/* <Input className="peer" placeholder={leadInfo.firstName} onChange={(e) => setFirstName(e.target.value)}/> */}
                            {/* <Field.Label css={floatingStyles}>Email</Field.Label> */}
                            {isAgeError ? (<FormHelperText>Please fill in your Age</FormHelperText>):(
                        <FormErrorMessage>{errors.age}</FormErrorMessage>)}
                        </FormControl>
                        
                    <FormLabel>Email</FormLabel>
                        <FormControl variant='floating' id="email" isRequired isInvalid={isEmailError}>
                            <Input placeholder="Email" onChange={(e)=>validateAndSetEmail(e.target.value)}/>
                            {/* <Input className="peer" placeholder={leadInfo.firstName} onChange={(e) => setFirstName(e.target.value)}/> */}
                            {/* <Field.Label css={floatingStyles}>Email</Field.Label> */}
                            {isEmailError ? (<FormHelperText>Please enter your email</FormHelperText>):(
                        <FormErrorMessage>{errors.email}</FormErrorMessage>)}
                        </FormControl>
      
                    <FormLabel>Phone No</FormLabel>
                        <FormControl variant='floating' id="PhoneNo" isRequired isInvalid={isPhoneNoError}>
                            <Input placeholder="PhoneNo" onChange={(e)=>setPhoneNo(e.target.value)}/>
                            {/* <Input className="peer" placeholder={leadInfo.firstName} onChange={(e) => setFirstName(e.target.value)}/> */}
                            {/* <Field.Label css={floatingStyles}>Email</Field.Label> */}
                            {isPhoneNoError ?(<FormHelperText>Please enter your contact number</FormHelperText>):(
                        <FormErrorMessage>Fill in your Contact</FormErrorMessage>)}
                        </FormControl>

                    <FormLabel>Are you a fitness enthusiast/trainer?</FormLabel>
                            <FormControl variant='floating' id="fitness-enthusiast" isRequired isInvalid={isEnthusiastTrainerError}>
                                <Select placeholder="Select option" onChange={(e) => {
    const value = e.target.value;
    setenthusiastTrainer(
        value === 'yes' ? true : value === 'no' ? false : null
      );
  }}>
                                <option value='yes'>Yes</option>
                                <option value='no'>No</option>
                                {/* <Input className="peer" placeholder={leadInfo.firstName} onChange={(e) => setFirstName(e.target.value)}/> */}
                                {/* <Field.Label css={floatingStyles}>Email</Field.Label> */}
                                </Select>
                                {isEnthusiastTrainerError ?(<FormHelperText>Please select option</FormHelperText>):(
                                <FormErrorMessage>Select option</FormErrorMessage>)}
                            </FormControl>

                            <Flex justify="center" mt={6}>
                            {/* <Button onSubmit={handleSubmit}>Send Me My Free Workout Plan</Button> */}
                             <Button onClick={handleSubmit}
                                                                bgColor={"red"}
                                                                size="lg"
                                                         
                                                            >
                                                               Send Me My Free Workout Plan!
                                                            </Button>
                            </Flex>
                </Box>
            </Flex>);
}

export default Lead;
