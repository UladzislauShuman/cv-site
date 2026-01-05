"use client"
import React, {useEffect, useState} from "react";
import { Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "next-themes";
import {useLanguage} from "@/context/LanguageContext";

export function Header() {

    const { theme, setTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();
    const [mounted, setMounted] = useState(false);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <header className="fixed top-0 w-full p-4 md:p-6 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b
            border-gray-200 dark:border-gray-800 z-50 transition-colors duration-300">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <div className="font-bold text-lg md:text-xl cursor-pointer">
                    {t("personal.name")}
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setLanguage(language === "en" ? "ru" : "en")}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors flex
                         items-center gap-2"
                        title="Switch Language"
                    >
                        <Languages size={20} />
                        <span className="text-sm font-medium uppercase">{language}</span>
                    </button>

                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                        title="Toggle Theme"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                </div>
            </div>
        </header>
    );

}