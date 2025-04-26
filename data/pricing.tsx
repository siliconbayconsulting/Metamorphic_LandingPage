import { HStack, Text } from "@chakra-ui/react";

export default {
    title: "Take a step towards a healthier life",
    description: "Start off small and get access to a world-class trainer.",
    plans: [
        {
            id: "gs",
            title: "Group Classes",
            description: "Basic workouts, perfect to get started.",
            price: (
                <HStack>
                    {/* <Text textDecoration="line-through" fontSize="sm" color="gray.400">
          ₹999
          </Text> */}
                    <Text>₹999/month</Text>
                </HStack>
            ),
            features: [
                {
                    title: "Fun, energetic classes designed to keep you motivated and engaged.",
                    iconColor: "green.500",
                },
                {
                    title: "Perfect for beginners or anyone looking to get back into fitness.",
                    iconColor: "green.500",
                },
                {
                    title: "Build a supportive community and train alongside others.",
                    iconColor: "green.500",
                },
                {
                    title: "Classes available at convenient times to fit your schedule.",
                    iconColor: "green.500",
                },
                {
                    title: "Global access—join from anywhere in the world.",
                    iconColor: "green.500",
                },
                {
                    title: "Book a class and pay directly through our website.",
                    iconColor: "green.500",
                },
            ],
            action: {
                href: "https://wa.me/9133902223?text=I'm%20interested%20in%20your%20group%20classes!",
            },
        },
        {
            id: "ops",
            title: "Online Personal Training",
            description: "One to one training with a personalised plan",
            price: (
                <HStack>
                    {/* <Text textDecoration="line-through" fontSize="sm" color="gray.400">
          ₹999
          </Text> */}
                    <Text>₹7,999/month</Text>
                </HStack>
            ),
            isRecommended: true,
            features: [
                {
                    title: "Fully customized workout plan tailored to your fitness goals.",
                    iconColor: "green.500",
                },
                {
                    title: "Personalized nutrition plan based on your dietary preferences.",
                    iconColor: "green.500",
                },
                {
                    title: "Weekly consultations with an expert personal trainer for guidance and accountability.",
                    iconColor: "green.500",
                },
                {
                    title: "Progress tracking and adjustments to your plan as needed.",
                    iconColor: "green.500",
                },
                {
                    title: "Flexible scheduling—train at your own pace and convenience.",
                    iconColor: "green.500",
                },
                {
                    title: "Global availability—get personalized training no matter where you are.",
                    iconColor: "green.500",
                },

                // null,
                // {
                //   title: 'Private beta access',
                //   iconColor: 'green.500',
                // },
            ],
            action: {
                href: "https://wa.me/9133902223?text=I'm%20interested%20in%20your%20online%20personal%20training!",
            },
        },
        {
            id: "offlinept",
            title: "Offline Personal Training",
            description:
                "For those who want to take their fitness to the next level.",
            price: (
                <HStack>
                    {/* <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            €999,-
          </Text> */}
                    <Text>Customized Plans</Text>
                </HStack>
            ),
            features: [
                {
                    title: "Rigorous one-on-one supervision for optimal results.",
                    iconColor: "green.500",
                },
                {
                    title: "Custom workout and nutrition plan tailored to your goals and preferences.",
                    iconColor: "green.500",
                },
                {
                    title: "Hands-on guidance with corrective feedback to improve form and performance.",
                    iconColor: "green.500",
                },
                {
                    title: "Detailed progress tracking with adjustments to ensure continuous improvement.",
                    iconColor: "green.500",
                },
                {
                    title: "Ideal for those seeking maximum accountability and personalized support.",
                    iconColor: "green.500",
                },
            ],
            action: {
                href: "https://wa.me/9133902223?text=I'm%20interested%20in%20your%20offline%20personal%20training!",
                label: "Let's create a plan!",
            },
        },
    ],
};
