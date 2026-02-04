"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { projects } from "./data/projects";

export default function Home() {
    useEffect(() => {
        // Reveal animations on scroll
        const observerOptions = {
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("opacity-100", "translate-y-0");
                    entry.target.classList.remove("opacity-0", "translate-y-10");
                }
            });
        }, observerOptions);

        const checkElements = () => {
            const elements = document.querySelectorAll("section > div");
            elements.forEach((el) => {
                el.classList.add(
                    "transition-all",
                    "duration-1000",
                    "opacity-0",
                    "translate-y-10"
                );
                observer.observe(el);
            });
        };

        // Slight delay to ensure DOM is ready if needed, or just run it.
        checkElements();

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-40 mix-blend-multiply"></div>
            <Navbar />
            <main className="relative pt-20">
                <section
                    className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 py-20"
                    id="about"
                >
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                        <div className="absolute top-[10%] left-[5%] w-64 h-64 border border-serene-green rounded-full mix-blend-multiply filter blur-3xl"></div>
                        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-serene-sage/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
                    </div>
                    <div className="max-w-4xl w-full text-center relative z-10 flex flex-col items-center">
                        <span className="material-symbols-outlined text-serene-green/60 text-4xl mb-6">
                            spa
                        </span>
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-serene-dark mb-6 leading-tight tracking-tight">
                            LANDSCAPE TO AI PRODUCT
                        </h1>
                        <p className="font-heading text-xl md:text-2xl text-serene-dark/70 italic mb-12 max-w-2xl text-balance">
                            Bridging the tranquility of Landscape Architecture with the
                            precision of AI Product Strategy.
                        </p>
                        <div className="relative w-64 h-80 md:w-80 md:h-96 mb-12 group">
                            <div className="absolute inset-0 border border-serene-dark/20 transform translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>
                            <div className="absolute inset-0 bg-serene-sage/10 transform -translate-x-3 -translate-y-3 transition-transform duration-500 group-hover:-translate-x-4 group-hover:-translate-y-4"></div>
                            <div className="relative w-full h-full overflow-hidden shadow-lg">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{
                                        backgroundImage:
                                            "url('/hero-bg.jpg')",
                                        filter: "saturate(0.8) contrast(1.1)",
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 text-center md:text-left items-center md:items-start border-t border-serene-dark/10 pt-8 mt-4">
                            <div className="flex flex-col items-center md:items-start px-6">
                                <span className="text-xs font-bold uppercase tracking-widest text-serene-green mb-1">
                                    Education
                                </span>
                                <span className="font-heading text-lg text-serene-dark">
                                    PKU 2026 &amp; SCUT
                                </span>
                            </div>
                            <div className="w-px h-12 bg-serene-dark/10 hidden md:block"></div>
                            <div className="flex flex-col items-center md:items-start px-6">
                                <span className="text-xs font-bold uppercase tracking-widest text-serene-green mb-1">
                                    Role
                                </span>
                                <span className="font-heading text-lg text-serene-dark">
                                    AI Product Manager Intern
                                </span>
                            </div>
                            <div className="w-px h-12 bg-serene-dark/10 hidden md:block"></div>
                            <div className="flex flex-col items-center md:items-start px-6">
                                <span className="text-xs font-bold uppercase tracking-widest text-serene-green mb-1">
                                    Reach
                                </span>
                                <span className="font-heading text-lg text-serene-dark">
                                    1.5M+ Reads on Bilibili/Lofter
                                </span>
                            </div>
                        </div>
                        <div className="mt-12">
                            <Link
                                className="inline-block px-8 py-3 bg-serene-green text-white font-display uppercase tracking-widest text-sm hover:bg-serene-dark transition-colors duration-300 shadow-md"
                                href="#work"
                            >
                                Explore Works
                            </Link>
                        </div>
                    </div>
                </section>
                <div className="w-full bg-raisin-black py-4 overflow-hidden border-y border-serene-dark/20 transform -skew-y-1 relative z-20 shadow-xl">
                    <div className="flex animate-ticker whitespace-nowrap w-max">
                        {[1, 2, 3, 4].map((i) => (
                            <span key={i} className="inline-flex items-center mx-6">
                                <span className="text-lavender-light font-display tracking-[0.2em] text-sm md:text-base font-semibold">
                                    GPA 3.72/4.00
                                </span>
                                <span className="mx-6 text-serene-green text-xs">●</span>
                                <span className="text-lavender-light font-display tracking-[0.2em] text-sm md:text-base font-semibold">
                                    NATIONAL SCHOLARSHIP RECIPIENT
                                </span>
                                <span className="mx-6 text-serene-green text-xs">●</span>
                                <span className="text-lavender-light font-display tracking-[0.2em] text-sm md:text-base font-semibold">
                                    PEKING UNIVERSITY 2026
                                </span>
                                <span className="mx-6 text-serene-green text-xs">●</span>
                                <span className="text-lavender-light font-display tracking-[0.2em] text-sm md:text-base font-semibold">
                                    1.5M+ READS
                                </span>
                                <span className="mx-6 text-serene-green text-xs">●</span>
                            </span>
                        ))}
                    </div>
                </div>
                <section className="py-24 bg-serene-green text-serene-cream relative overflow-hidden">
                    <div className="max-w-6xl mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                            <div className="relative max-w-sm mx-auto md:mx-0 w-full group">
                                <div className="absolute inset-0 border border-serene-cream/20 rounded-[2rem] transform translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-2xl bg-serene-dark/30">
                                    <img
                                        alt="Zhong Xinran Portrait"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 mix-blend-normal"
                                        src="/me.jpg"
                                    />
                                    <div className="absolute inset-0 bg-serene-green/10 mix-blend-multiply"></div>
                                </div>
                            </div>
                            <div className="text-left flex flex-col justify-center">
                                <span className="material-symbols-outlined text-6xl opacity-30 mb-8 text-serene-sage">
                                    format_quote
                                </span>
                                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
                                    &quot;I don&apos;t just design products; I architect systems
                                    where data, spatial understanding, and user needs converge
                                    into seamless experiences.&quot;
                                </h2>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-12 bg-serene-sage/40"></span>
                                    <p className="font-body text-serene-sage uppercase tracking-widest text-sm font-medium">
                                        Cross-disciplinary Synthesis
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage:
                                "radial-gradient(#fff 1px, transparent 1px)",
                            backgroundSize: "30px 30px",
                        }}
                    ></div>
                </section>
                <section className="py-32 px-6 max-w-7xl mx-auto" id="work">
                    <div className="text-center mb-20">
                        <span className="text-serene-green font-display text-lg tracking-widest block mb-2">
                            Portfolio
                        </span>
                        <h2 className="text-5xl md:text-6xl font-heading text-serene-dark">
                            Selected Works
                        </h2>
                        <div className="w-16 h-px bg-serene-dark/20 mx-auto mt-6"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Link
                                key={project.id}
                                href={`/projects/${project.slug}`}
                                className={`group cursor-pointer ${index === 1 ? "md:mt-12" : ""
                                    }`}
                            >
                                <div className="bg-white p-2 shadow-sm hover:shadow-xl transition-all duration-500 ease-out h-full flex flex-col">
                                    <div className="aspect-[4/5] overflow-hidden relative bg-serene-sand/30">
                                        {project.coverImage ? (
                                            <>
                                                <div
                                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                    style={{
                                                        backgroundImage: `url('${project.coverImage}')`,
                                                    }}
                                                ></div>
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                                            </>
                                        ) : (
                                            <div
                                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-90"
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(to bottom right, #6E8880, #AFA3D5)",
                                                }}
                                            >
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="font-display text-white text-4xl opacity-80">
                                                        DATA
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="pt-8 pb-6 px-4 text-center flex-grow flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-heading text-2xl text-serene-dark mb-3 group-hover:text-serene-green transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-serene-dark/60 font-body text-sm leading-relaxed mb-4 line-clamp-3">
                                                {project.summary}
                                            </p>
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-serene-green border border-serene-green/30 px-3 py-1 inline-block self-center rounded-full">
                                            {project.tags[0]}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-20 flex flex-col items-center justify-center">
                        {/* View All Projects Button - Can be linked to a full archive later */}
                        <Link
                            className="group relative px-10 py-4 border border-serene-dark text-serene-dark font-display text-sm uppercase tracking-[0.2em] hover:bg-serene-dark hover:text-serene-cream transition-all duration-300 flex items-center gap-3"
                            href="#"
                        >
                            <span className="relative z-10">View All Projects</span>
                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform duration-300 relative z-10">
                                arrow_right_alt
                            </span>
                        </Link>
                        <div className="mt-8 flex gap-2 opacity-30">
                            <div className="w-1 h-1 bg-serene-dark rounded-full"></div>
                            <div className="w-1 h-1 bg-serene-dark rounded-full"></div>
                            <div className="w-1 h-1 bg-serene-dark rounded-full"></div>
                        </div>
                    </div>
                </section>
                <section className="py-24 bg-white relative" id="experience">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="material-symbols-outlined text-serene-green text-3xl mb-4">
                                history_edu
                            </span>
                            <h2 className="text-4xl md:text-5xl font-heading text-serene-dark">
                                Professional Journey
                            </h2>
                        </div>
                        <div className="space-y-12 relative">
                            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-serene-dark/10 md:-translate-x-1/2"></div>
                            <div className="flex flex-col md:flex-row gap-8 items-start relative">
                                <div className="w-full md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
                                    <h3 className="font-display text-xl text-serene-dark font-bold">
                                        Kujiale (Manycore Tech)
                                    </h3>
                                    <p className="text-serene-green text-xs uppercase tracking-widest mb-2">
                                        AI Product &amp; Customer Ops Intern
                                    </p>
                                    <p className="text-serene-dark/70 text-sm leading-relaxed">
                                        Evaluated AI products for 300+ houses, provided 20+
                                        optimization suggestions, and managed prompt engineering for
                                        5000+ tags.
                                    </p>
                                </div>
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-serene-green rounded-full border-4 border-white shadow-sm -translate-x-[7px] md:-translate-x-1/2 mt-1 z-10"></div>
                                <div className="w-full md:w-1/2 md:pl-12 order-3 md:order-2">
                                    <span className="font-heading text-serene-dark/40 italic">
                                        Sep 2025 - Dec 2025
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-8 items-start relative">
                                <div className="w-full md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
                                    <span className="font-heading text-serene-dark/40 italic">
                                        Jul 2024 - Dec 2024
                                    </span>
                                </div>
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-serene-sage rounded-full border-4 border-white shadow-sm -translate-x-[7px] md:-translate-x-1/2 mt-1 z-10"></div>
                                <div className="w-full md:w-1/2 md:pl-12 order-3 md:order-2">
                                    <h3 className="font-display text-xl text-serene-dark font-bold">
                                        China Architecture Design Group
                                    </h3>
                                    <p className="text-serene-green text-xs uppercase tracking-widest mb-2">
                                        Architectural Interior Design Intern
                                    </p>
                                    <p className="text-serene-dark/70 text-sm leading-relaxed">
                                        Completed 3 residential public area designs, high-end
                                        residential layouts. Mastered Modeling, Rendering, and
                                        Reporting.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-24 px-6 max-w-7xl mx-auto bg-serene-cream relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-y-1/4 translate-x-1/4">
                        <span className="material-symbols-outlined text-[30rem] text-serene-green">
                            psychology_alt
                        </span>
                    </div>
                    <div className="text-center mb-16 relative z-10">
                        <h2 className="text-4xl md:text-5xl font-heading text-serene-dark">
                            Detailed Capabilities &amp; Evaluation
                        </h2>
                        <p className="text-serene-dark/60 mt-4 max-w-2xl mx-auto font-heading italic">
                            Technical mastery meets creative insight.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 relative z-10">
                        <div className="col-span-1 md:col-span-5 bg-white p-8 border border-serene-dark/5 hover:border-serene-green/30 transition-all duration-300 shadow-sm rounded-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-3xl text-serene-green">
                                    palette
                                </span>
                                <h3 className="font-display text-xl text-raisin-black">
                                    Creative Design
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "PS",
                                    "AI",
                                    "ID",
                                    "CapCut",
                                    "Xiumi",
                                    "AutoCAD",
                                    "SU",
                                    "D5",
                                    "Enscape",
                                ].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-serene-cream text-raisin-black text-xs uppercase tracking-wider font-semibold rounded-full border border-serene-dark/10"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-3 bg-white p-8 border border-serene-dark/5 hover:border-serene-green/30 transition-all duration-300 shadow-sm rounded-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-3xl text-serene-green">
                                    terminal
                                </span>
                                <h3 className="font-display text-xl text-raisin-black">
                                    Technical Logic
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["SQL", "Excel", "Grasshopper"].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-serene-cream text-raisin-black text-xs uppercase tracking-wider font-semibold rounded-full border border-serene-dark/10"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-4 bg-white p-8 border border-serene-dark/5 hover:border-serene-green/30 transition-all duration-300 shadow-sm rounded-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-3xl text-serene-green">
                                    smart_toy
                                </span>
                                <h3 className="font-display text-xl text-raisin-black">
                                    AI Tools
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["StableDiffusion", "Antigravity"].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-serene-green/10 text-raisin-black text-xs uppercase tracking-wider font-semibold rounded-full border border-serene-green/20"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
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
                                    Market Insight &amp; Creative Output
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
                </section>
                <Footer />
            </main>
        </>
    );
}