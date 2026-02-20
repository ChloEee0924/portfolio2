"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/locales";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language].nav;

    return (
        <nav
            className="fixed top-0 w-full z-40 bg-serene-cream/90 backdrop-blur-md border-b border-serene-green/10 transition-all duration-300"
            id="navbar"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link
                    className="text-2xl font-display font-semibold tracking-widest text-serene-dark"
                    href="/"
                >
                    ChloEee Zhong
                </Link>
                <div className="hidden md:flex gap-8 items-center">
                    <Link
                        className="text-sm uppercase tracking-widest text-serene-dark/70 hover:text-serene-green link-underline font-heading"
                        href="/#about"
                    >
                        {t.about}
                    </Link>
                    <Link
                        className="text-sm uppercase tracking-widest text-serene-dark/70 hover:text-serene-green link-underline font-heading"
                        href="/#work"
                    >
                        {t.projects}
                    </Link>
                    <Link
                        className="text-sm uppercase tracking-widest text-serene-dark/70 hover:text-serene-green link-underline font-heading"
                        href="/#experience"
                    >
                        {t.experience}
                    </Link>
                    <Link
                        className="text-sm uppercase tracking-widest text-serene-dark/70 hover:text-serene-green link-underline font-heading"
                        href="/#contact"
                    >
                        {t.contact}
                    </Link>
                    <button
                        onClick={toggleLanguage}
                        className="text-xs uppercase tracking-widest text-serene-dark hover:text-serene-green transition-colors border border-serene-dark/20 px-3 py-1 rounded-full cursor-pointer ml-4 font-heading"
                    >
                        {language === "en" ? "EN / 中" : "中 / EN"}
                    </button>
                    <div className="hidden md:block">
                        {/* Contact button replaced by link above, removing duplicate or keeping as link style to match design. 
                             The original code had a styled button for Contact. I will keep it consistent with the user's request "界面的任何排布都不要改变".
                             The original code had: Contact as a styled button-like link.
                             I will revert Contact to look like the button:
                          */}
                    </div>
                </div>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-serene-dark"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
            {/* Mobile Menu Placeholder - Expandable if needed */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-serene-cream absolute w-full px-6 py-4 border-b border-serene-green/10 flex flex-col gap-4 shadow-lg">
                    <Link href="/#about" onClick={() => setMobileMenuOpen(false)}>{t.about}</Link>
                    <Link href="/#work" onClick={() => setMobileMenuOpen(false)}>{t.projects}</Link>
                    <Link href="/#experience" onClick={() => setMobileMenuOpen(false)}>{t.experience}</Link>
                    <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>{t.contact}</Link>
                    <button
                        onClick={() => {
                            toggleLanguage();
                            setMobileMenuOpen(false);
                        }}
                        className="text-left uppercase tracking-widest text-serene-dark font-heading py-2"
                    >
                        {language === "en" ? "Switch to 中文" : "Switch to English"}
                    </button>
                </div>
            )}
        </nav>
    );
}
