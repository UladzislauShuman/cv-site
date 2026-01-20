"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Calendar, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Experience() {
    const { t } = useLanguage();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const experience = t("experience") as Array<any>;

    return (
        <section className="w-full max-w-4xl mx-auto mt-24 px-4 mb-24">
            <h2 className="text-3xl font-bold text-center mb-12">
                {t("sectionTitles.experience")}
            </h2>

            <div className="space-y-8">
                {experience.map((job, index) => (
                    <motion.div
                        key={job.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="group relative bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    <Briefcase size={20} className="text-blue-600" />
                                    {job.company}
                                </h3>
                                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mt-1">
                                    {job.role}
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-zinc-800 px-3 py-1 rounded-full w-fit">
                                <Calendar size={14} />
                                {job.date}
                            </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            {job.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            {job.tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md"
                                >
                                  {tag}
                                </span>
                            ))}
                        </div>

                        <button className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Read more details <ArrowRight size={16} />
                        </button>

                    </motion.div>
                ))}
            </div>
        </section>
    );
}