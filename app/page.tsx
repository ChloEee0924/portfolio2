"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { projects } from "./data/projects";
import { useEffect, useState } from "react";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./data/locales";

export default function Home() {
    const { language } = useLanguage();
    const t = translations[language];

    // Mouse position state for subtle parallax
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen font-sans bg-serene-cream select-none">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center">
                    {/* Background with slight parallax */}
                    <div
                        className="absolute inset-0 z-0 scale-105 transition-transform duration-100 ease-out"
                        style={{
                            transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10
                                }px)`,
                        }}
                    >
                        <Image
                            src="/hero-bg.jpg"
                            alt="Serene Landscape"
                            fill
                            className="object-cover opacity-90"
                            priority
                        />
                        <div className="absolute inset-0 bg-serene-dark/20 mix-blend-overlay"></div>
                    </div>

                    {/* Hero Content */}
                    <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center gap-8">
                        <div className="animate-fade-in-up">
                            <span className="inline-block px-4 py-1.5 mb-6 border border-serene-cream/30 rounded-full text-serene-cream text-xs uppercase tracking-[0.2em] backdrop-blur-sm">
                                AI Product Manager & Designer
                            </span>
                            <h1 className="font-display text-5xl md:text-8xl lg:text-9xl text-serene-cream mb-6 tracking-tight leading-none drop-shadow-2xl">
                                {t.hero.title}
                            </h1>
                            <p className="font-heading text-lg md:text-2xl text-serene-cream/90 max-w-2xl mx-auto font-light tracking-wide italic">
                                {t.hero.subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow">
                        <span className="text-serene-cream text-[10px] uppercase tracking-[0.3em] opacity-80 block mb-2">
                            {t.hero.scroll}
                        </span>
                        <div className="w-px h-12 bg-serene-cream/50 mx-auto"></div>
                    </div>
                </section>

                {/* About / Introduction */}
                <section id="about" className="py-24 md:py-32 bg-serene-cream">
                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="/me.jpg" // User needs to replace this
                                alt="Zhong Xinran"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                        <div className="space-y-8">
                            <h2 className="font-display text-4xl md:text-6xl text-serene-dark tracking-tight">
                                {t.about.title}
                            </h2>
                            <div className="w-12 h-1 bg-serene-green mb-8"></div>
                            <p className="font-body text-lg text-serene-dark/80 leading-relaxed">
                                {t.about.p1}
                            </p>
                            <p className="font-body text-lg text-serene-dark/80 leading-relaxed">
                                {t.about.p2}
                            </p>

                            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-serene-dark/10">
                                <div className="flex flex-col items-center md:items-start px-6">
                                    <span className="text-xs font-bold uppercase tracking-widest text-serene-green mb-1">
                                        {t.about.education}
                                    </span>
                                    <span className="font-heading text-serene-dark text-lg">
                                        Tongji University
                                    </span>
                                    <span className="text-sm text-serene-dark/60">
                                        Landscape Architecture
                                    </span>
                                </div>
                                <div className="w-px h-12 bg-serene-dark/10 hidden md:block"></div>
                                <div className="flex flex-col items-center md:items-start px-6">
                                    <span className="text-xs font-bold uppercase tracking-widest text-serene-green mb-1">
                                        {t.about.reach}
                                    </span>
                                    <span className="font-heading text-serene-dark text-lg">
                                        Shanghai & Remote
                                    </span>
                                    <span className="text-sm text-serene-dark/60">
                                        Available for hire
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Marquee */}
                <div className="w-full bg-serene-dark py-4 overflow-hidden border-y border-serene-dark/20 transform -skew-y-1 relative z-20 shadow-xl">
                    <div className="flex animate-marquee whitespace-nowrap">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <span
                                key={i}
                                className="text-4xl md:text-6xl font-display text-serene-cream/20 mx-8 uppercase tracking-widest"
                            >
                                {t.moving_text}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Selected Work Section */}
                <section id="work" className="py-24 md:py-32 bg-serene-cream relative">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="font-display text-4xl md:text-6xl text-serene-dark mb-16 tracking-tight text-center">
                            {t.work.title}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project) => {
                                // Select content based on language
                                const title =
                                    language === "en"
                                        ? project.title
                                        : project.title_zh || project.title;
                                const summary =
                                    language === "en"
                                        ? project.summary
                                        : project.summary_zh || project.summary;
                                const role =
                                    language === "en"
                                        ? project.role
                                        : project.role_zh || project.role;

                                return (
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        key={project.id}
                                        className="group block relative h-[500px] overflow-hidden rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 ease-out"
                                    >
                                        <div className="absolute inset-0 bg-serene-dark/20 group-hover:bg-serene-dark/0 transition-colors duration-500 z-10"></div>
                                        {project.coverImage ? (
                                            <div
                                                className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                                                style={{
                                                    backgroundImage: `url('${project.coverImage}')`,
                                                }}
                                            />
                                        ) : (
                                            <div
                                                className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                                                style={{
                                                    background:
                                                        "linear-gradient(to bottom right, #6E8880, #AFA3D5)",
                                                }}
                                            />
                                        )}
                                        <div className="absolute bottom-0 left-0 w-full p-8 z-20 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="flex gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                <span className="text-xs font-bold uppercase tracking-widest bg-serene-green/80 px-2 py-1 rounded backdrop-blur-sm">
                                                    {role}
                                                </span>
                                                <span className="text-xs font-bold uppercase tracking-widest border border-white/30 px-2 py-1 rounded backdrop-blur-sm">
                                                    {project.year}
                                                </span>
                                            </div>
                                            <h3 className="font-display text-2xl md:text-3xl mb-2 drop-shadow-md">
                                                {title}
                                            </h3>
                                            <p className="font-heading text-sm text-serene-cream/90 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                                {summary}
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Languages and Interests - Restored */}
                <section className="py-24 bg-serene-cream/50 relative">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative z-10">
                            <div className="bg-white/60 backdrop-blur-sm p-8 border-t border-b border-serene-dark/10 md:border md:rounded-sm flex flex-col justify-center">
                                <h3 className="font-display text-lg mb-6 text-raisin-black flex items-center gap-2">
                                    <span className="material-symbols-outlined text-serene-sage">
                                        translate
                                    </span>{" "}
                                    Languages
                                </h3>
                                <ul className="space-y-4 font-heading text-raisin-black">
                                    <li className="flex justify-between items-center border-b border-serene-dark/5 pb-2">
                                        <span>Mandarin / Cantonese</span>
                                        <span className="text-sm text-serene-green font-bold">
                                            Native/Fluent
                                        </span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-serene-dark/5 pb-2">
                                        <span>English (CET-4)</span>
                                        <span className="text-sm text-serene-green font-bold">
                                            561
                                        </span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span>English (CET-6)</span>
                                        <span className="text-sm text-serene-green font-bold">
                                            491
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white/60 backdrop-blur-sm p-8 border-t border-b border-serene-dark/10 md:border md:rounded-sm flex flex-col justify-center">
                                <h3 className="font-display text-lg mb-6 text-raisin-black flex items-center gap-2">
                                    <span className="material-symbols-outlined text-serene-sage">
                                        piano
                                    </span>{" "}
                                    Interests
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-serene-green rounded-full"></span>
                                        <span className="font-heading text-raisin-black text-lg">
                                            Piano (ABRSM 8)
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-serene-sage rounded-full"></span>
                                        <span className="font-heading text-raisin-black text-lg">
                                            Running
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-serene-sage rounded-full"></span>
                                        <span className="font-heading text-raisin-black text-lg">
                                            Badminton
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-serene-green rounded-full"></span>
                                        <span className="font-heading text-raisin-black text-lg">
                                            Travel
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Self Evaluation */}
                        <div className="relative z-10">
                            <h3 className="font-display text-2xl text-center mb-10 text-raisin-black">
                                Self Evaluation
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-serene-dark text-serene-cream p-8 md:p-10 rounded-sm hover:-translate-y-1 transition-transform duration-300 shadow-lg">
                                    <div className="mb-4 text-serene-sage/60 text-5xl font-display opacity-20">
                                        01
                                    </div>
                                    <h4 className="font-heading text-xl md:text-2xl mb-4 text-serene-sage">
                                        Cross-disciplinary Innovation
                                    </h4>
                                    <p className="text-serene-cream/80 text-sm leading-relaxed font-light text-balance">
                                        Mention cheerful personality, communication, independent
                                        thinking, and learning SQL/Urban Planning alongside Landscape
                                        Architecture.
                                    </p>
                                </div>
                                <div className="bg-white text-raisin-black p-8 md:p-10 rounded-sm border border-serene-dark/10 hover:-translate-y-1 transition-transform duration-300 shadow-md">
                                    <div className="mb-4 text-serene-green/20 text-5xl font-display">
                                        02
                                    </div>
                                    <h4 className="font-heading text-xl md:text-2xl mb-4 text-raisin-black">
                                        Market Insight & Creative Output
                                    </h4>
                                    <p className="text-raisin-black/70 text-sm leading-relaxed text-balance">
                                        Highlight <span className="font-bold text-serene-green">4k+ followers</span>, 150k+ words, and{" "}
                                        <span className="font-bold text-serene-green">1.5M+ views</span> on
                                        Bilibili/Lofter.
                                    </p>
                                </div>
                                <div className="bg-white text-raisin-black p-8 md:p-10 rounded-sm border border-serene-dark/10 hover:-translate-y-1 transition-transform duration-300 shadow-md">
                                    <div className="mb-4 text-serene-green/20 text-5xl font-display">
                                        03
                                    </div>
                                    <h4 className="font-heading text-xl md:text-2xl mb-4 text-raisin-black">
                                        Operations Experience
                                    </h4>
                                    <p className="text-raisin-black/70 text-sm leading-relaxed text-balance">
                                        Detail Class OA management, Xiaohongshu/Douyin (
                                        <span className="font-bold text-serene-green">1000+ views/post</span>
                                        ), and community operation design.
                                    </p>
                                </div>
                                <div className="bg-serene-sage/20 text-raisin-black p-8 md:p-10 rounded-sm border border-serene-dark/5 hover:-translate-y-1 transition-transform duration-300 shadow-md">
                                    <div className="mb-4 text-serene-dark/20 text-5xl font-display">
                                        04
                                    </div>
                                    <h4 className="font-heading text-xl md:text-2xl mb-4 text-raisin-black">
                                        AI-Powered Design
                                    </h4>
                                    <p className="text-raisin-black/80 text-sm leading-relaxed text-balance">
                                        Showcase mastery of AI generation tools in curriculum projects,
                                        recognized with excellent grades.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}