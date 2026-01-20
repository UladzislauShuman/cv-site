"use client";

import { useParams, useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, Calendar, Briefcase, Tag } from "lucide-react";
import { useEffect, useState } from "react";

export function ProjectDetails() {
    const params = useParams();
    const router = useRouter();
    const { t } = useLanguage();

    const projectId = params.id as string;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const experience = t("experience") as Array<any>;
    const project = experience.find((item) => item.id === projectId);

    const [mounted, setMounted] = useState(false);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    if (!project) {
        return (
            <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white">
                <h1 className="text-4xl font-bold mb-4">Project Not Found 😕</h1>
                <button
                    onClick={() => router.push("/")}
                    className="text-blue-600 hover:underline"
                >
                    Return Home
                </button>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
            <Header />

            <article className="max-w-3xl mx-auto pt-32 px-6 pb-20">

                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to all projects
                </button>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    {project.company}
                </h1>

                <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-2">
                        <Briefcase size={18} className="text-blue-500" />
                        <span className="font-medium">{project.role}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-blue-500" />
                        <span>{project.date}</span>
                    </div>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                    <h3 className="text-2xl font-bold mb-4">Description</h3>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
                        {project.description}
                    </p>
                </div>

                <div className="mt-10">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Tag size={20} /> Technologies used:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {project.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 rounded-lg text-sm font-medium border border-gray-200 dark:border-zinc-700"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

            </article>
        </main>
    );
}