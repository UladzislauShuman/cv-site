export type Language = "en" | "ru";

export const RESUME_DATA = {
    en: {
        personal: {
            name: "Uladzislau Shuman",
            role: "Backend Software Engineer (Java/Python)",
            location: "Minsk, Belarus",
            about: "Backend Software Engineer focused on Java (Spring Ecosystem) and Python (AI/LLM integrations). Experience with Microservices, Docker, Kafka, and Cloud services. Passionate about Clean Architecture and building scalable systems.",
            availability: "Open for opportunities",
        },
        links: {
            github: "https://github.com/UladzislauShuman",
            linkedin: "https://www.linkedin.com/in/uladzislau-shuman-1b66b1321/",
            telegram: "https://t.me/ushale1",
            email: "sumanvlad36@gmail.com",
        },
        nav: {
            about: "About",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact",
        },
        buttons: {
            resume: "Download CV",
            contact: "Contact Me",
        },
        experience: [
            {
                company: "IFortex",
                role: "Java Backend Developer Intern",
                date: "July 2025 – Aug 2025",
                description: "Designed Emergency Service system. Merged 3 services (User, Billing, Notification) via Spring Cloud Gateway. Implemented 2FA (Email/Google Auth), JWT validation, and RBAC. Integrated Stripe for payments and Azure Blob Storage for doc validation.",
                tags: ["Java", "Spring Cloud", "Microservices", "Docker", "Redis", "RabbitMQ"]
            },
            {
                company: "FileFolio (Team Project)",
                role: "Backend Developer",
                date: "Sep 2025 – Dec 2025",
                description: "Developed a Telegram Mini App acting as a cloud storage. Built Python bot (Aiogram), deployed on Google Cloud, connected to Supabase (Postgres). Optimized local deployment.",
                tags: ["Python", "Aiogram", "Google Cloud", "Supabase"]
            }
        ],
        education: [
            {
                school: "Belarusian State University (FPMI)",
                degree: "Computer Science / System Analysis",
                date: "2023 – 2027",
            }
        ],
        skills: [
            "Java Core", "Spring Boot", "Spring Cloud", "Python", "SQL",
            "PostgreSQL", "Redis", "Kafka", "Docker", "Git", "RAG/LLM"
        ]
    },

    ru: {
        personal: {
            name: "Владислав Шуман",
            role: "Backend Software Engineer (Java/Python)",
            location: "Минск, Беларусь",
            about: "Backend разработчик (Java/Spring Framework). Опыт создания Telegram ботов на Python, интеграции LLM и RAG архитектуры. Использую микросервисный подход, Docker, Kafka. Интересуюсь архитектурой приложений и чистым кодом.",
            availability: "Открыт к предложениям",
        },
        links: {
            github: "https://github.com/UladzislauShuman",
            linkedin: "https://www.linkedin.com/in/uladzislau-shuman-1b66b1321/",
            telegram: "https://t.me/ushale1",
            email: "sumanvlad36@gmail.com",
        },
        nav: {
            about: "Обо мне",
            experience: "Опыт",
            projects: "Проекты",
            contact: "Контакты",
        },
        buttons: {
            resume: "Скачать резюме",
            contact: "Написать мне",
        },
        experience: [
            {
                company: "IFortex",
                role: "Стажер Java Backend Developer",
                date: "Июль 2025 – Август 2025",
                description: "Проект Emergency Service. Спроектировал 3 сервиса (User, Billing, Notification) через Spring Cloud Gateway. Реализовал гибридную аутентификацию (2FA), JWT, динамические права доступа. Интегрировал Stripe и Azure Blob Storage. Использовал RabbitMQ и Redis.",
                tags: ["Java", "Spring Cloud", "Microservices", "Docker", "Redis", "RabbitMQ"]
            },
            {
                company: "FileFolio (Командный проект)",
                role: "Backend Developer",
                date: "Сент 2025 – Дек 2025",
                description: "Telegram Mini App (аналог Google Drive). Сделал бота на Python + Aiogram. Деплой на Google Cloud, база данных Supabase. Оптимизировал запуск системы.",
                tags: ["Python", "Aiogram", "Google Cloud", "Supabase"]
            }
        ],
        education: [
            {
                school: "БГУ ФПМИ",
                degree: "Информатика / Системный анализ",
                date: "2023 – 2027",
            }
        ],
        skills: [
            "Java Core", "Spring Boot", "Spring Cloud", "Python", "SQL",
            "PostgreSQL", "Redis", "Kafka", "Docker", "Git", "RAG/LLM"
        ]
    }
} as const;