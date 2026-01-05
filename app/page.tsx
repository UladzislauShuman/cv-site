"use client";

import { Header } from "@/components/Header"
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import avatarImage from "@/assets/my-photo.jpg";

export default function Home() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
            <Header />

            <section className="flex flex-col items-center justify-center min-h-screen pt-16 p-4 text-center">

                <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 border-4
                    border-gray-200 dark:border-gray-800 shadow-xl">
                    <Image
                        src={avatarImage}
                        alt="Avatar"
                        fill
                        className="object-cover"
                        priority
                        placeholder="blur"
                    />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    {t("personal.name")}
                </h1>

                <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                    {t("personal.role")}
                </p>

                <div className="flex gap-4">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700
                        transition transform hover:scale-105">
                        {t("buttons.resume")}
                    </button>
                    <button className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full
                        font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                        {t("buttons.contact")}
                    </button>
                </div>
            </section>

        </main>
    )
}