"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Project } from "../../data/projects";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/locales";

export default function ProjectClient({ project }: { project: Project }) {
    const { language } = useLanguage();
    const t = translations[language].project;

    // Carousel logic
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroImages = project.images && project.images.length > 0
        ? project.images
        : (project.coverImage ? [project.coverImage] : []);

    useEffect(() => {
        if (heroImages.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [heroImages.length]);

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20 bg-serene-cream">
                {/* Hero Section */}
                <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex items-end">
                    <div className="absolute inset-0 z-0">
                        {heroImages.length > 0 ? (
                            heroImages.map((img, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    <div
                                        className="w-full h-full bg-cover bg-center"
                                        style={{ backgroundImage: `url('${img}')` }}
                                    />
                                </div>
                            ))
                        ) : (
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(to bottom right, #6E8880, #AFA3D5)",
                                }}
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-serene-dark/90 via-serene-dark/40 to-transparent"></div>

                        {/* Carousel Indicators */}
                        {heroImages.length > 1 && (
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                                {heroImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/80'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 md:pb-20 w-full text-serene-cream">
                        <Link
                            href="/#work"
                            className="inline-flex items-center gap-2 text-serene-sage hover:text-white transition-colors uppercase tracking-widest text-sm mb-6"
                        >
                            <span className="material-symbols-outlined">
                                arrow_back
                            </span>
                            {t.back}
                        </Link>
                        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl mb-4">
                            {language === 'zh' ? project.title_zh : project.title}
                        </h1>
                        <p className="font-heading text-lg md:text-xl lg:text-2xl text-serene-sage max-w-2xl">
                            {language === 'zh' ? project.summary_zh : project.summary}
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="max-w-5xl mx-auto px-6 py-12 md:py-24">
                    {/* Meta Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-serene-dark/10 pb-16 mb-16">
                        <div>
                            <span className="block text-serene-sage text-xs uppercase tracking-widest mb-2 font-bold">
                                {t.role}
                            </span>
                            <span className="font-heading text-lg text-serene-dark">
                                {language === 'zh' ? project.role_zh : project.role}
                            </span>
                        </div>
                        <div>
                            <span className="block text-serene-sage text-xs uppercase tracking-widest mb-2 font-bold">
                                {t.year}
                            </span>
                            <span className="font-heading text-lg text-serene-dark">
                                {project.year}
                            </span>
                        </div>
                        <div>
                            <span className="block text-serene-sage text-xs uppercase tracking-widest mb-2 font-bold">
                                {t.tools}
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-2 py-1 bg-serene-green/10 text-serene-dark text-xs rounded-full border border-serene-green/20"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="prose md:prose-lg text-base md:text-lg text-serene-dark/80 font-body max-w-none mb-12 md:mb-24">
                        <div className="whitespace-pre-line leading-relaxed">
                            {language === 'zh' ? project.fullDescription_zh : project.fullDescription}
                        </div>
                    </div>

                    {/* Project Links */}
                    {project.links && project.links.length > 0 && (
                        <div className="mb-24">
                            <h3 className="font-display text-2xl text-serene-dark mb-8">
                                {language === 'zh' ? '相关文档' : 'Related Documents'}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {project.links.map((link, i) => (
                                    <a
                                        key={i}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 border border-serene-dark/20 rounded-full text-serene-dark text-sm hover:border-serene-dark hover:bg-serene-dark/5 transition-all duration-300"
                                    >
                                        <span className="material-symbols-outlined text-serene-sage text-[18px]">
                                            description
                                        </span>
                                        {language === 'zh' ? link.title_zh : link.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-16 md:mt-32 text-center">
                        <Link
                            href="/#work"
                            className="inline-block px-10 py-4 border border-serene-dark text-serene-dark font-display text-sm uppercase tracking-[0.2em] hover:bg-serene-dark hover:text-serene-cream transition-all duration-300"
                        >
                            {t.next}
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
