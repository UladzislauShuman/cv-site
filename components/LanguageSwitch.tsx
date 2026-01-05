"use client";

import React from "react";
import { Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function LanguageSwitch() {
    const { language, setLanguage, t } = useLanguage();

    return (
        <button
            onClick={() => setLanguage(language === "en" ? "ru" : "en")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors flex
                         items-center gap-2"
            title={t("ui.switchLanguage")}
        >
            <Languages size={20} />
            <span className="text-sm font-medium uppercase">{language}</span>
        </button>
    );
}