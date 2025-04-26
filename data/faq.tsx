import * as React from "react";
import { Link } from "@chakra-ui/react";
import theme from "theme";
const faq = {
    title: "Frequently asked questions",
    // description: '',
    items: [
        {
            q: "What is metamorphic?",
            a: (
                <>
                    We are a fitness and nutrition company that provides
                    personalised and science-backed plans to help you achieve
                    your health goals. Read more about us{" "}
                    <Link href="/manifesto" textColor={"red.500"}>
                        here!
                    </Link>
                </>
            ),
        },
        {
            q: "What do the group classes and one one one training include? How are they different?",
            a: "Group classes are a fun and supportive way to stay motivated and engaged with your fitness journey. They are led by expert trainers who provide guidance and support throughout each class.\n\nOne on one training is a personalised and tailored approach to fitness. It is designed to help you achieve your specific goals and needs. You will be in constant communication with your trainer, who will help you stay on track and make adjustments as needed.",
        },
        {
            q: "What if I want to transition from group to personal training?",
            a: (
                <>
                    There are limited slots available for in-person personal
                    training, so we recommend booking early to secure your spot.{" "}
                    <br />
                    If spots are not available at the moment, you can join the
                    waitlist on our website, and we'll notify you as soon as new
                    spots become available.
                </>
            ),
        },
        {
            q: "What makes your fitness and nutrition plans different from others?",
            a: (
                <>
                    <ul>
                        <li>Certified personal trainers available</li>
                        <li>Science-backed and personalized workouts</li>
                        <li>
                            We redesign your program according to your progress
                        </li>
                        <li>
                            We suggest redesigns by also looking at bloodwork
                            (optional)
                        </li>
                    </ul>
                </>
            ),
        },
        {
            q: "What does the 12-week online personal training program include?",
            a: "Our 12-week online personal training program includes a fully customized workout plan, a tailored nutrition plan, and weekly consultations with your personal trainer. This program is designed to guide you every step of the way, ensuring you achieve your goals.",
        },
        {
            q: "Can I join your group fitness classes as a beginner?",
            a: "Absolutely! Our group fitness classes are designed for all fitness levels, including beginners. Our expert trainers provide guidance throughout each class, ensuring you feel confident and supported no matter where you are in your fitness journey.",
        },
        {
            q: "Are nutrition plans included with every package?",
            a: "Except for group classes, our online and in-person personal training programs include a customized nutrition plan based on your goals and dietary preferences",
        },
        {
            q: "What if I have specific dietary restrictions or fitness limitations?",
            a: "No problem! Our plans are fully customizable to accommodate any dietary restrictions or fitness limitations you may have. Whether you're following a vegan, keto, or gluten-free diet, or have specific workout needs, we'll tailor everything to suit you.",
        },
        {
            q: "Do you offer any free trials or consultations?",
            a: "Yes! We offer a free consultation for anyone interested in our 12-week online personal training program. During this consultation, we'll discuss your goals, answer any questions you have, and outline how our program can help you.",
        },
        {
            q: "What if I can't make it to a scheduled class or consultation?",
            a: "We understand that things come up! If you need to reschedule a group fitness class or personal training consultation, just let us know in advance, and we'll work with you to find a new time that suits your schedule.",
        },
        {
            q: "When will in-person personal training slots open up?",
            a: "Our in-person personal training slots are currently full, but we'll be reopening soon! You can join the waitlist on our website, and we'll notify you as soon as new spots become available.",
        },
    ],
};

export default faq;
