"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/locales";

export default function Footer() {
    const [showWeChat, setShowWeChat] = useState(false);
    const [showRed, setShowRed] = useState(false);
    const [showNumber, setShowNumber] = useState(false);
    const [showCopied, setShowCopied] = useState(false);

    const { language } = useLanguage();
    const t = translations[language].footer;

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("2361521894@qq.com");
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
    };

    return (
        <footer
            className="bg-serene-dark text-serene-cream py-24 relative overflow-hidden"
            id="contact"
        >
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                }}
            ></div>
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
                <h2 className="font-display text-5xl md:text-7xl mb-8 tracking-tight">
                    {t.title}
                </h2>
                <p className="font-heading text-xl text-serene-sage mb-12 italic max-w-2xl">
                    {t.subtitle}
                </p>
                <button
                    onClick={handleCopyEmail}
                    className="inline-block px-10 py-4 border border-serene-cream/30 text-serene-cream uppercase tracking-[0.2em] hover:bg-serene-cream hover:text-serene-dark transition-all duration-300 mb-16 cursor-pointer"
                >
                    2361521894@qq.com
                </button>
                <div className="flex gap-8 mb-16">
                    <button
                        onClick={() => setShowWeChat(true)}
                        className="text-serene-sage hover:text-white transition-colors uppercase text-sm tracking-widest cursor-pointer"
                    >
                        WeChat
                    </button>
                    <button
                        onClick={() => setShowNumber(true)}
                        className="text-serene-sage hover:text-white transition-colors uppercase text-sm tracking-widest cursor-pointer"
                    >
                        Number
                    </button>
                    <button
                        onClick={() => setShowRed(true)}
                        className="text-serene-sage hover:text-white transition-colors uppercase text-sm tracking-widest cursor-pointer"
                    >
                        Red
                    </button>
                </div>
                <div className="text-xs text-serene-cream/40 font-body uppercase tracking-widest">
                    © 2026 ChloEee0924. {t.copy}
                </div>
            </div>

            {/* Copy Success Toast */}
            {showCopied && (
                <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
                    <div className="bg-serene-green text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3">
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                        <span className="text-sm font-medium tracking-wide uppercase">Email Copied</span>
                    </div>
                </div>
            )}

            {/* WeChat QR Modal */}
            {showWeChat && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    onClick={() => setShowWeChat(false)}
                >
                    <div
                        className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full text-center transform transition-all scale-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="font-display text-2xl text-serene-dark mb-4">
                            WeChat
                        </h3>
                        <div className="aspect-square bg-serene-sand/20 rounded-xl mb-4 overflow-hidden border border-serene-dark/10">
                            {/* User needs to add wechat-qr.jpg to public folder */}
                            <img
                                src="/wechat-qr.jpg"
                                alt="WeChat QR Code"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="font-heading text-serene-dark text-lg font-bold select-all">
                            WeChat ID: 19835992143
                        </p>
                        <p className="text-sm text-serene-dark/50 mt-1">
                            {t.scan}
                        </p>
                    </div>
                </div>
            )}

            {/* Number Modal */}
            {showNumber && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    onClick={() => setShowNumber(false)}
                >
                    <div
                        className="bg-white p-10 rounded-2xl shadow-2xl max-w-sm w-full text-center transform transition-all scale-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className="material-symbols-outlined text-5xl text-serene-green mb-6">
                            call
                        </span>
                        <h3 className="font-display text-2xl text-serene-dark mb-2">
                            Phone Number
                        </h3>
                        <p className="font-heading text-serene-dark text-xl font-bold select-all mb-4">
                            +86 198 3599 2143
                        </p>
                        <p className="text-sm text-serene-dark/50">
                            {t.contact_me}
                        </p>
                    </div>
                </div>
            )}

            {/* Red (Xiaohongshu) QR Modal */}
            {showRed && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    onClick={() => setShowRed(false)}
                >
                    <div
                        className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full text-center transform transition-all scale-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="font-display text-2xl text-serene-dark mb-4">
                            RED
                        </h3>
                        <div className="aspect-square bg-serene-sand/20 rounded-xl mb-4 overflow-hidden border border-serene-dark/10">
                            {/* User needs to add red-qr.jpg to public folder */}
                            <img
                                src="/red-qr.jpg"
                                alt="Red QR Code"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="font-heading text-serene-dark text-lg font-bold select-all">
                            Chloe_xr
                        </p>
                        <p className="text-sm text-serene-dark/50 mt-1">
                            {t.scan_follow}
                        </p>
                    </div>
                </div>
            )}
        </footer>
    );
}
