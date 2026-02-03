"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                    ZHONG XINRAN
                </Link>
                <div className="hidden md:flex gap-8 items-center">
                    <Link
                        className="text-sm uppercase tracking-widest text-serene-dark/70 hover:text-serene-green link-underline font-heading"
                        href="/#about"
                    >
                        About
                    </Link>
                    <Link
                        className="text-sm uppercase tracking-widest text-serene-dark/70 hover:text-serene-green link-underline font-heading"
                        href="/#work"
                    >
                        Projects
                    </Link>
                    <Link
                        className="text-sm uppercase tracking-widest text-serene-dark/70 hover:text-serene-green link-underline font-heading"
                        href="/#experience"
                    >
                        Experience
                    </Link>
                    <Link
                        className="px-6 py-2 border border-serene-green text-serene-green text-xs font-bold uppercase tracking-widest hover:bg-serene-green hover:text-white transition-colors duration-300 rounded-full"
                        href="/#contact"
                    >
                        Contact
                    </Link>
                </div>
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
