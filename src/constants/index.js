import { disc, usu_logo, garage_logo } from "../assets/images";

import {
    car,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    spring_boot,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    java,
    postgres,
    aws
} from "../assets/icons";

export const frontendSkills = [
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    
];

export const backendSkills = [
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: spring_boot,
        name: "Spring Boot",
        type: "Backend", 
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend", // postgres
    },
    {
        imageUrl: postgres,
        name: "postgres",
        type: "Backend", // 
    },
];

export const devopsSkills = [
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "cloud",
    },
];

export const experiences = [
    {
        title: "Software Engineer",
        company_name: "Develop & Innovate for Social Change",
        icon: disc,
        iconBg: "#ffffff",
        date: "Sept 2024 - Jun 2025",
        points: [
            "Built a full-stack residential hall rating app using Spring Boot, PostgreSQL, and React JS serving 3,000+ students to find suitable dorms, share reviews, and upload images.",
            "Set up CI/CD pipeline using Github Actions to automate deploying to AWS EC2, leveraged AWS RDS for database and AWS S3 for image storage, increasing deploying efficiency by 30%.",
            "Conducted performance tests using JMeter to identify performance bottlenecks, achieved 85% unit test coverage with JUnit5 & Mockito; optimized performance with Redis caching (30% faster search) and pagination (20% faster data retrieval).",
        ],
    },
    {
        title: "Machine Learning / Education Student Researcher",
        company_name: "Utah State University",
        icon: usu_logo,
        iconBg: "#ffffff",
        date: " May 2024 - Aug 2024",
        points: [
            "Adopted both qualitative methods and machine learning methods to analyze over 1000 TikTok videos.",
            "Used OpenAI API to label TikTok videos under the hashtag #neurodivergent, #ADHD, #ASD etc., improving preprocessing efficiency by 50%.",
            "Leveraged both traditional NLP models, like Latent Dirichlet Analysis, and Large Language Models (LLMs), like BERT Models, to analyze and label transcripts, reducing classification time by 37%.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "The Garage Northwestern",
        icon: garage_logo,
        iconBg: "#000000",
        date: "Jun 2025 - Aug 2025",
        points: [
            "Developed a staff training application serving 3 departments and over 20 employees, using Node.js, Express.js, and AWS API Gateway to manage RESTful API requests.",
            "built a serverless backend using AWS Lambda Functions and AWS DynamoDB (NoSQL database), resulting in an annual costing savings of $4,000.",
            "Leveraged AWS Cloudfront and AWS S3 for video storage and delivery, allowing direct access from frontend and reducing latency by 70% when downloading and uploading."
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/6bb6md6issc',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/kevin-hu-194566xq',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Residential Hall Review App',
        description: 'Built a full-stack residential hall rating app using Spring Boot, PostgreSQL, and React JS serving 3,000+ students to find suitable dorms, share reviews, and upload images.',
        link: 'https://aggies-housing.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Student Health Management Service',
        description: 'Built a distributed system for student health management enabling CRUD operations on medical, billing, and authentication data across multiple microservices.',
        link: 'https://github.com/6bb6md6issc/spring-microservice',
    },
];