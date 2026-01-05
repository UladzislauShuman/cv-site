"use client"
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitch } from "./LanguageSwitch";

export function Header() {

    const { t } = useLanguage();

    return (
        <header className="fixed top-0 w-full p-4 md:p-6 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b
            border-gray-200 dark:border-gray-800 z-50 transition-colors duration-300">
            <div className="max-w-5xl mx-auto flex justify-between items-center">

                <div className="font-bold text-lg md:text-xl cursor-pointer">
                    {t("personal.name")}
                </div>

                <div className="flex items-center gap-4">
                    <LanguageSwitch />
                    <ThemeToggle />
                </div>

            </div>
        </header>
    );

}