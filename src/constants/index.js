import { meta, shopify, starbucks, tesla } from "../assets/images";
import { car, contact, estate, pricewise, snapgram, summiz, threads } from "../assets/icons";

import javaIcon from "../icons/java/java-original.svg";
import csharpIcon from "../icons/csharp/csharp-original.svg";
import kotlinIcon from "../icons/kotlin/kotlin-original.svg";
import htmlIcon from "../icons/html5/html5-original.svg";
import cssIcon from "../icons/css3/css3-original.svg";
import javascriptIcon from "../icons/javascript/javascript-original.svg";
import sqlServerIcon from "../icons/microsoftsqlserver/microsoftsqlserver-original.svg";
import mongodbIcon from "../icons/mongodb/mongodb-original.svg";
import gitIcon from "../icons/git/git-original.svg";
import githubIcon from "../icons/github/github-original.svg";
import dotnetIcon from "../icons/dot-net/dot-net-original.svg";
import visualStudioIcon from "../icons/visualstudio/visualstudio-original.svg";
import androidStudioIcon from "../icons/androidstudio/androidstudio-original.svg";
import firebaseIcon from "../icons/firebase/firebase-original.svg";
import azureIcon from "../icons/azure/azure-original.svg";
import dockerIcon from "../icons/docker/docker-original.svg";
import nginxIcon from "../icons/nginx/nginx-original.svg";
import githubActionsIcon from "../icons/githubactions/githubactions-original.svg";
import figmaIcon from "../icons/figma/figma-original.svg";
import xdIcon from "../icons/xd/xd-original.svg";

import linkedinIcon from "../icons/linkedin/linkedin-original.svg";

export const skills = [
    {
        imageUrl: javaIcon,
        name: "Java",
        type: "Programming Languages",
    },
    {
        imageUrl: csharpIcon,
        name: "C#",
        type: "Programming Languages",
    },
    {
        imageUrl: kotlinIcon,
        name: "Kotlin",
        type: "Programming Languages",
    },
    {
        imageUrl: htmlIcon,
        name: "HTML",
        type: "Programming Languages",
    },
    {
        imageUrl: cssIcon,
        name: "CSS",
        type: "Programming Languages",
    },
    {
        imageUrl: javascriptIcon,
        name: "JavaScript",
        type: "Programming Languages",
    },
    {
        imageUrl: sqlServerIcon,
        name: "SQL",
        type: "Programming Languages",
    },
    {
        imageUrl: dotnetIcon,
        name: "ASP.NET MVC",
        type: "Frameworks & Technologies",
    },
    {
        imageUrl: dotnetIcon,
        name: "WPF",
        type: "Frameworks & Technologies",
    },
    {
        imageUrl: firebaseIcon,
        name: "Firebase Authentication",
        type: "Frameworks & Technologies",
    },
    {
        imageUrl: androidStudioIcon,
        name: "Android Development",
        type: "Frameworks & Technologies",
    },
    {
        imageUrl: dotnetIcon,
        name: ".NET 8.0",
        type: "Frameworks & Technologies",
    },
    {
        imageUrl: sqlServerIcon,
        name: "SQL Server (SSMS)",
        type: "Databases",
    },
    {
        imageUrl: mongodbIcon,
        name: "MongoDB",
        type: "Databases",
    },
    {
        imageUrl: firebaseIcon,
        name: "Firebase Firestore",
        type: "Databases",
    },
    {
        imageUrl: visualStudioIcon,
        name: "Visual Studio",
        type: "Tools & Platforms",
    },
    {
        imageUrl: androidStudioIcon,
        name: "Android Studio",
        type: "Tools & Platforms",
    },
    {
        imageUrl: gitIcon,
        name: "Git",
        type: "Tools & Platforms",
    },
    {
        imageUrl: githubIcon,
        name: "GitHub",
        type: "Tools & Platforms",
    },
    {
        imageUrl: azureIcon,
        name: "Microsoft Azure",
        type: "Tools & Platforms",
    },
    {
        imageUrl: dockerIcon,
        name: "Docker",
        type: "Tools & Platforms",
    },
    {
        imageUrl: nginxIcon,
        name: "Nginx",
        type: "Tools & Platforms",
    },
    {
        imageUrl: githubActionsIcon,
        name: "CI/CD Pipelines",
        type: "Tools & Platforms",
    },
    {
        imageUrl: figmaIcon,
        name: "Figma",
        type: "Design & Modelling",
    },
    {
        imageUrl: figmaIcon,
        name: "UML Diagrams",
        type: "Design & Modelling",
    },
    {
        imageUrl: figmaIcon,
        name: "ERD",
        type: "Design & Modelling",
    },
    {
        imageUrl: xdIcon,
        name: "Wireframes & UI Mockups",
        type: "Design & Modelling",
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

export const coreConcepts = [
    "Data Structures",
    "Algorithms & Complexity",
    "Binary Search Trees (BST)",
    "AVL Trees",
    "Min Heaps",
    "Graphs (BFS / DFS / MST)",
    "Object-Oriented Programming (OOP)",
    "MVVM Architecture",
];

export const softSkills = [
    "Problem Solving",
    "Analytical Thinking",
    "Team Collaboration",
    "Attention to Detail",
    "Ability to Work Under Pressure",
];

export const spokenLanguages = [
    "English (Home Language)",
    "Afrikaans (Second Language)",
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: githubIcon,
        link: 'https://github.com/ST10145498',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedinIcon,
        link: 'https://www.linkedin.com/in/kyle-jeremiah-govender',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'E-Commerce Platform',
        description: 'Developed a full-stack e-commerce platform using Java Spring Boot and React, featuring user authentication, product management, and payment integration.',
        link: 'https://github.com/ST10145498',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Mobile Task Manager',
        description: 'Created a cross-platform mobile application using Kotlin and Android Studio for task management with real-time synchronization.',
        link: 'https://github.com/ST10145498',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Desktop Inventory System',
        description: 'Built a comprehensive inventory management system using C# and WPF with SQL Server database integration for small businesses.',
        link: 'https://github.com/ST10145498',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Web Portfolio Dashboard',
        description: 'Designed and developed a responsive portfolio website using HTML, CSS, JavaScript, and modern web frameworks.',
        link: 'https://github.com/ST10145498',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Database Management Tool',
        description: 'Created a database management application with both SQL Server and MongoDB support, featuring data visualization and reporting.',
        link: 'https://github.com/ST10145498',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Firebase Chat Application',
        description: 'Developed a real-time chat application using Firebase authentication and real-time database with modern UI/UX design.',
        link: 'https://github.com/ST10145498',
    }
];
