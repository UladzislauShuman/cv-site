"use client";

import React, { createContext, useContext, useState, useEffect} from "react";
import { RESUME_DATA, Language} from "@/data/resume";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: {children: React.ReactNode}) {
    const [language, setLanguageState] = useState<Language>("en");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const browserLang = navigator.language.startsWith("ru") ? "ru" : "en";
            if (browserLang !== "en") {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setLanguageState(browserLang);
            }
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const t = (path: string) : any => {
        const keys = path.split(".");

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const getDeepValue = (obj: any, keys: string[])=> {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return keys.reduce((acc: any, key: string) => {
                return (acc && acc[key] !== undefined) ? acc[key] : undefined
            }, obj);
        };

        const result = getDeepValue(RESUME_DATA[language], keys);
        if (result !== undefined) return result;

        return getDeepValue(RESUME_DATA["en"], keys);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t}}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}