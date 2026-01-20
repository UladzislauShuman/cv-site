"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function TechStack() {
    const { t } = useLanguage();
    const skills = t("skills") as Array<{ category: string; items: string[] }>;

    return (
        <section className="w-full max-w-4xl mx-auto mt-20 px-4">
            <h2 className="text-3xl font-bold text-center mb-10">
                {t("sectionTitles.stack")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skillGroup, index) => (
                    <motion.div
                        key={skillGroup.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800"
                    >
                        <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                            {skillGroup.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1 text-sm bg-white dark:bg-zinc-800 rounded-md border border-gray-200 dark:border-zinc-700"
                                >
                  {item}
                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}