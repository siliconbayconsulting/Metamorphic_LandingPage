import { Link } from "@saas-ui/react";
import { NextSeoProps } from "next-seo";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
// import { Logo } from "./logo";

const siteConfig = {
    // logo: Logo,
    seo: {
        title: "Metamorphic.fit",
        description:
            "Metamorphic.fit is a platform that provides personalized online personal training and group fitness classes.",
    } as NextSeoProps,
    termsUrl: "#",
    privacyUrl: "#",
    header: {
        links: [
            {
                id: "home",
                label: "Home",
                href: "/",
            },
            {
                id: "features",
                label: "Manifesto",
                href: "/manifesto",
            },
            {
                id: "pricing",
                label: "Pricing",
            },
            {
                id: "faq",
                label: "FAQ",
            },
            {
                label: "Blog",
                href: "/blog",
            },
            {
                label: "Get Program!",
                href: "/#pricing",
                variant: "primary",
            },
        ],
    },
    footer: {
        copyright: (
            <>
                <Link href="/">Metamorphic Labs</Link>
            </>
        ),
        links: [
            {
                href: "mailto:1993.ksk@gmail.com",
                label: "Contact",
            },
            {
                href: "https://www.instagram.com/shiva_kondapalli/",
                label: <FaInstagram size="14" />,
            },
            {
                href: "https://www.youtube.com/@shiva_kondapalli",
                label: <FaYoutube size="14" />,
            },
        ],
    },
    signup: {
        title: "Start training with Metamorphic",
        features: [
            {
                icon: FiCheck,
                title: "Accessible",
                description:
                    "All components strictly follow WAI-ARIA standards.",
            },
            {
                icon: FiCheck,
                title: "Themable",
                description:
                    "Fully customize all components to your brand with theme support and style props.",
            },
            {
                icon: FiCheck,
                title: "Composable",
                description:
                    "Compose components to fit your needs and mix them together to create new ones.",
            },
            {
                icon: FiCheck,
                title: "Productive",
                description:
                    "Designed to reduce boilerplate and fully typed, build your product at speed.",
            },
        ],
    },
};

export default siteConfig;
