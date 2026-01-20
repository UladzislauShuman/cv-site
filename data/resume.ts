import { Github, Linkedin, Mail, Send, Phone } from "lucide-react";

export type Language = "en" | "ru";

export const RESUME_DATA = {
    en: {
        personal: {
            name: "Uladzislau Shuman",
            role: "Backend Software Engineer (Java/Python)",
            location: "Minsk, Belarus",
            about: "Software Engineer with a focus on Backend development. Experienced in building microservices with Java (Spring Ecosystem) and creating AI-driven solutions using Python (LLM/RAG). Also have a background in Android development (Kotlin).",
        },
        contact: {
            email: "sumanvlad36@gmail.com",
            telegram: "https://t.me/ushale1",
            linkedin: "https://www.linkedin.com/in/uladzislau-shuman-1b66b1321/",
            github: "https://github.com/UladzislauShuman",
            phones: [
                "+375 (29) 377-37-38",
                "+48-504-540-805"
            ]
        },
        sectionTitles: {
            about: "About",
            stack: "Tech Stack",
            experience: "Experience",
            projects: "Projects",
        },

        skills: [
            {
                category: "Backend & Java",
                items: ["Java Core", "Spring Boot", "Spring Cloud", "Hibernate", "JPA", "Maven/Gradle"]
            },
            {
                category: "AI & Python",
                items: ["Python", "Aiogram", "LangChain", "RAG", "LLM Integration", "ChromaDB"]
            },
            {
                category: "Infrastructure & Tools",
                items: ["Docker", "Kubernetes", "Kafka", "RabbitMQ", "Redis", "PostgreSQL", "Git"]
            },
            {
                category: "Mobile",
                items: ["Kotlin", "Android SDK", "Jetpack Compose", "Clean Architecture", "MVVM"]
            },
            {
                category: "Core Concepts",
                items: ["OOP & SOLID", "Design Patterns", "Algorithms & Data Structures", "Microservices", "CI/CD"]
            }
        ],
        experience: [
            {
                id: "ifortex",
                company: "IFortex",
                role: "Java Backend Developer Intern",
                date: "July 2025 – Aug 2025",
                description: "Designed Emergency Service system. Merged 3 services (User, Billing, Notification) via Spring Cloud Gateway. Implemented 2FA, JWT validation, and RBAC. Integrated Stripe and Azure Blob Storage.",
                tags: ["Java", "Spring Cloud", "Microservices", "Docker", "Redis", "RabbitMQ"]
            },
            {
                id: "filefolio",
                company: "FileFolio (Team Project)",
                role: "Backend Developer",
                date: "Sep 2025 – Dec 2025",
                description: "Telegram Mini App acting as cloud storage. Built Python bot (Aiogram), deployed on Google Cloud, connected to Supabase (Postgres).",
                tags: ["Python", "Aiogram", "Google Cloud", "Supabase"]
            }
        ],
    },

    ru: {
        personal: {
            name: "Владислав Шуман",
            role: "Backend Software Engineer (Java/Python)",
            location: "Минск, Беларусь",
            about: "Software Engineer с фокусом на Backend. Опыт разработки микросервисов на Java (Spring) и создания AI-решений на Python (LLM/RAG). Также разрабатывал Android-приложения на Kotlin.",
        },
        contact: {
            email: "sumanvlad36@gmail.com",
            telegram: "https://t.me/ushale1",
            linkedin: "https://www.linkedin.com/in/uladzislau-shuman-1b66b1321/",
            github: "https://github.com/UladzislauShuman",
            phones: [
                "+375 (29) 377-37-38",
                "+48-504-540-805"
            ]
        },
        sectionTitles: {
            about: "Обо мне",
            stack: "Технологии",
            experience: "Опыт работы",
            projects: "Проекты",
        },
        skills: [
            {
                category: "Backend & Java",
                items: ["Java Core", "Spring Boot", "Spring Cloud", "Hibernate", "JPA", "Maven/Gradle"]
            },
            {
                category: "AI & Python",
                items: ["Python", "Aiogram", "LangChain", "RAG", "LLM Integration", "ChromaDB"]
            },
            {
                category: "Инфраструктура",
                items: ["Docker", "Kubernetes", "Kafka", "RabbitMQ", "Redis", "PostgreSQL", "Git"]
            },
            {
                category: "Mobile",
                items: ["Kotlin", "Android SDK", "Jetpack Compose", "Clean Architecture", "MVVM"]
            },
            {
                category: "Фундамент",
                items: ["OOP & SOLID", "Паттерны проектирования", "Алгоритмы и Структуры данных", "Микросервисы", "CI/CD"]
            }
        ],
        experience: [
            {
                id: "ifortex",
                company: "IFortex",
                role: "Стажер Java Backend Developer",
                date: "Июль 2025 – Август 2025",
                description: "Проект Emergency Service. Спроектировал 3 сервиса через Spring Cloud Gateway. Реализовал 2FA, JWT, RBAC. Интегрировал Stripe и Azure Blob Storage.",
                tags: ["Java", "Spring Cloud", "Microservices", "Docker", "Redis", "RabbitMQ"]
            },
            {
                id: "filefolio",
                company: "FileFolio (Командный проект)",
                role: "Backend Developer",
                date: "Сент 2025 – Дек 2025",
                description: "Telegram Mini App (облачное хранилище). Разработал бота на Python(Aiogram). Помогал в деплое на Google Cloud и подключении к бд Supabase.",
                tags: ["Python", "Aiogram", "Google Cloud", "Supabase"]
            }
        ],
    }
} as const;