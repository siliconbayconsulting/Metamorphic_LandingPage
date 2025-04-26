export interface BlogPost {
    id: string;
    title: string;
    description: string;
    author: {
        name: string;
        avatar: string;
    };
    date: string;
    image: string;
    link: string;
    tags?: string[];
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'On Health and Fitness',
        description: "And why it's easier than you think",
        author: {
            name: 'Shiva',
            avatar: '',
        },
        date: '2023-09-11',
        image: '/static/images/blogimgs/blog_1.webp',
        link: 'https://medium.com/@Shiva_Kondapalli/on-health-and-fitness-38f1d3300b7',
        tags: [],
    },
    {
        id: '2',
        title: 'Measure, Modify, Master',
        description: 'An invitation to data-driven fitness',
        author: {
            name: 'Shiva',
            avatar: '',
        },
        date: '2024-03-13',
        image: '/static/images/blogimgs/blog_2.webp',
        link: 'https://medium.com/@Shiva_Kondapalli/measure-modify-master-fcb64463db80',
        tags: [],
    },
    {
        id: '3',
        title: 'How do we know what to measure?',
        description: 'What we measure is what we improve',
        author: {
            name: 'Shiva',
            avatar: '',
        },
        date: '2024-03-18',
        image: '/static/images/blogimgs/blog_3.webp',
        link: 'https://medium.com/@Shiva_Kondapalli/how-do-we-know-what-to-measure-b27598828ed3',
        tags: [],
    },
    {
        id: '4',
        title: 'Metabolic Syndrome and its discontents',
        description: 'The deadly combo...',
        author: {
            name: 'Shiva',
            avatar: '',
        },
        date: '2024-10-18',
        image: '/static/images/blogimgs/blog_4.webp',
        link: 'https://medium.com/@Shiva_Kondapalli/metabolic-syndrome-and-its-discontents-e110bdfe9536',
        tags: [],
    },
    // Add more blog posts here
];

