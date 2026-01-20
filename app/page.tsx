"use client";

import { Header } from "@/components/Header";
import { Socials } from "@/components/Socials";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import avatarImage from "@/assets/my-photo.jpg";
import { motion } from "framer-motion";

export default function Home() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 pb-20">
            <Header />
            <section className="flex flex-col items-center justify-center min-h-[90vh] pt-20 p-4 text-center">
                <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 100 }}
                    className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 border-4 border-gray-200 dark:border-gray-800 shadow-xl"
                >
                    <Image src={avatarImage} alt="Avatar" fill className="object-cover" priority placeholder="blur" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        {t("personal.name")}
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-4">
                        {t("personal.role")}
                    </p>
                    <p className="text-md md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                        {t("personal.about")}
                    </p>
                    <Socials />
                </motion.div>
            </section>
            <TechStack />
        </main>
    );
}