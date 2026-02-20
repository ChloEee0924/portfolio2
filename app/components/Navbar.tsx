"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/locales";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language].nav;

    if (pathname.includes("/projects/")) {
        return null; // Don't show navbar on detailed project pages (they have their own back button)
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 bg-serene-cream/80 backdrop-blur-md">
            <Link
                className="text-2xl font-display font-semibold tracking-widest text-serene-dark"
                href="/"
            >
                ChloEee Zhong
            </Link>
            <div className="hidden md:flex gap-8 items-center">
                <Link
                    className="text-sm font-medium uppercase tracking-widest text-serene-dark hover:text-serene-sage transition-colors"
                    href="/#work"
                >
                    {t.work}
                </Link>
                <Link
                    className="text-sm font-medium uppercase tracking-widest text-serene-dark hover:text-serene-sage transition-colors"
                    href="/#about"
                >
                    {t.about}
                </Link>
                <Link
                    className="text-sm font-medium uppercase tracking-widest text-serene-dark hover:text-serene-sage transition-colors"
                    href="/#contact"
                >
                    {t.contact}
                </Link>
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
                    <Link href="/#about" onClick={() => setMobileMenuOpen(false)}>About</Link>
                    <Link href="/#work" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
                    <Link href="/#experience" onClick={() => setMobileMenuOpen(false)}>Experience</Link>
                    <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
}
