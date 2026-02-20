"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Project } from "../../data/projects";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/locales";

export default function ProjectClient({ project }: { project: Project }) {
    const { language } = useLanguage();
    const t = translations[language].project;

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20 bg-serene-cream">
                {/* Hero Section */}
                <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex items-end">
                    <div className="absolute inset-0 z-0">
                        {project.coverImage ? (
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('${project.coverImage}')`,
                                }}
                            />
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
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full text-serene-cream">
                        <Link
                            href="/#work"
                            className="inline-flex items-center gap-2 text-serene-sage hover:text-white transition-colors uppercase tracking-widest text-sm mb-6"
                        >
                            <span className="material-symbols-outlined">
                                arrow_back
                            </span>
                            {t.back}
                        </Link>
                        <h1 className="font-display text-5xl md:text-7xl mb-4">
                            {language === 'zh' ? project.title_zh : project.title}
                        </h1>
                        <p className="font-heading text-xl md:text-2xl text-serene-sage max-w-2xl">
                            {language === 'zh' ? project.summary_zh : project.summary}
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="max-w-5xl mx-auto px-6 py-24">
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
                    <div className="prose prose-lg text-serene-dark/80 font-body max-w-none mb-24">
                        <p className="whitespace-pre-line leading-relaxed text-lg">
                            {language === 'zh' ? project.fullDescription_zh : project.fullDescription}
                        </p>
                    </div>

                    {/* Gallery */}
                    {project.images.length > 0 && (
                        <div className="space-y-12">
                            <h3 className="font-display text-3xl text-serene-dark text-center mb-12">
                                {t.visuals}
                            </h3>
                            {project.images.map((img, i) => (
                                <div
                                    key={i}
                                    className="relative w-full aspect-video rounded-sm overflow-hidden shadow-lg border border-serene-dark/5"
                                >
                                    <img
                                        src={img}
                                        alt={`${project.title} - View ${i + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="mt-32 text-center">
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
