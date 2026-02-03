import Link from "next/link";

export default function Footer() {
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
                    Let&apos;s Connect
                </h2>
                <p className="font-heading text-xl text-serene-sage mb-12 italic max-w-2xl">
                    Open to AI Product Management opportunities. Let&apos;s discuss how we
                    can build serene, intelligent futures.
                </p>
                <Link
                    className="inline-block px-10 py-4 border border-serene-cream/30 text-serene-cream uppercase tracking-[0.2em] hover:bg-serene-cream hover:text-serene-dark transition-all duration-300 mb-16"
                    href="mailto:xinran.zhong@pku.edu.cn"
                >
                    xinran.zhong@pku.edu.cn
                </Link>
                <div className="flex gap-8 mb-16">
                    <Link
                        className="text-serene-sage hover:text-white transition-colors uppercase text-sm tracking-widest"
                        href="#"
                    >
                        WeChat
                    </Link>
                    <Link
                        className="text-serene-sage hover:text-white transition-colors uppercase text-sm tracking-widest"
                        href="#"
                    >
                        Bilibili
                    </Link>
                    <Link
                        className="text-serene-sage hover:text-white transition-colors uppercase text-sm tracking-widest"
                        href="#"
                    >
                        Lofter
                    </Link>
                </div>
                <div className="text-xs text-serene-cream/40 font-body uppercase tracking-widest">
                    © 2024 Zhong Xinran. Designed with Serenity.
                </div>
            </div>
        </footer>
    );
}
