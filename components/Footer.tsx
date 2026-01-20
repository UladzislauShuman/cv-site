"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Socials } from "@/components/Socials";

export function Footer() {
    const { t } = useLanguage();

    const currentYear = new Date().getFullYear();
    const contact = t("contact");

    return (
        <footer className="w-full bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 py-12 mt-auto">
            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">

                <h3 className="text-2xl font-bold mb-4">
                    {t("nav.contact")}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
                    {t("personal.availability")}
                </p>

                <div className="mb-8">
                    <Socials />
                </div>

                {contact.phones && (
                    <div className="flex flex-col gap-2 mb-8 text-gray-700 dark:text-gray-300">
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {contact.phones.map((phone: string) => (
                            <a
                                key={phone}
                                href={`tel:${phone.replace(/\D/g, "")}`}
                                className="hover:text-blue-600 transition-colors font-medium"
                            >
                                {phone}
                            </a>
                        ))}
                    </div>
                )}

                <div className="text-sm text-gray-500 dark:text-gray-500">
                    © {currentYear} {t("personal.name")}. All rights reserved.
                </div>

            </div>
        </footer>
    );
}