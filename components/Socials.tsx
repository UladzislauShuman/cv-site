"use client";

import { Github, Linkedin, Mail, Send, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Socials() {
    const { t } = useLanguage();
    const contact = t("contact");

    return (
        <div className="flex flex-wrap justify-center gap-4 mt-6">
            <SocialButton href={contact.github} icon={<Github size={20} />} label="GitHub" />
            <SocialButton href={contact.linkedin} icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialButton href={contact.telegram} icon={<Send size={20} />} label="Telegram" />
            <SocialButton href={`mailto:${contact.email}`} icon={<Mail size={20} />} label="Email" />
        </div>
    );
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full
                 hover:bg-gray-200 dark:hover:bg-gray-700 transition transform hover:scale-105"
        >
            {icon}
            <span className="text-sm font-medium">{label}</span>
        </a>
    );
}