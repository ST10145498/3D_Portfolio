import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: javascript,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: css,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: javascript,
        name: "Kotlin",
        type: "Mobile",
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
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "SQL Server",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
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
        imageUrl: express,
        name: "ASP.NET MVC",
        type: "Backend",
    },
    {
        imageUrl: mui,
        name: "WPF",
        type: "Desktop",
    },
    {
        imageUrl: nextjs,
        name: "Android Studio",
        type: "Mobile",
    },
    {
        imageUrl: typescript,
        name: "Firebase",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "Software Developer",
        company_name: "Freelance",
        icon: meta,
        iconBg: "#accbe1",
        date: "2020 - Present",
        points: [
            "Developing web applications using Java, C#, and JavaScript technologies.",
            "Creating mobile applications using Kotlin and Android Studio.",
            "Working with databases including SQL Server and MongoDB.",
            "Building responsive web interfaces with HTML, CSS, and modern frameworks.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Various Projects",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "2019 - 2020",
        points: [
            "Developed desktop applications using WPF and C#.",
            "Created web applications with ASP.NET MVC framework.",
            "Implemented Firebase authentication and real-time database features.",
            "Collaborated on cross-platform mobile development projects.",
        ],
    },
    {
        title: "Junior Developer",
        company_name: "Learning & Development",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "2017 - 2019",
        points: [
            "Mastered programming fundamentals in Java and C#.",
            "Built foundational skills in web development with HTML, CSS, and JavaScript.",
            "Learned database design and management with SQL Server.",
            "Developed problem-solving skills through various coding challenges.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/kylegovender',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/kyle-jeremiah-govender',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'E-Commerce Platform',
        description: 'Developed a full-stack e-commerce platform using Java Spring Boot and React, featuring user authentication, product management, and payment integration.',
        link: 'https://github.com/kylegovender',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Mobile Task Manager',
        description: 'Created a cross-platform mobile application using Kotlin and Android Studio for task management with real-time synchronization.',
        link: 'https://github.com/kylegovender',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Desktop Inventory System',
        description: 'Built a comprehensive inventory management system using C# and WPF with SQL Server database integration for small businesses.',
        link: 'https://github.com/kylegovender',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Web Portfolio Dashboard',
        description: 'Designed and developed a responsive portfolio website using HTML, CSS, JavaScript, and modern web frameworks.',
        link: 'https://github.com/kylegovender',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Database Management Tool',
        description: 'Created a database management application with both SQL Server and MongoDB support, featuring data visualization and reporting.',
        link: 'https://github.com/kylegovender',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Firebase Chat Application',
        description: 'Developed a real-time chat application using Firebase authentication and real-time database with modern UI/UX design.',
        link: 'https://github.com/kylegovender',
    }
];
