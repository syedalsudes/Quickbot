import Link from 'next/link';

export default function Navbar() {
    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
            <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Brand / Logo (Pure Modern Typography) */}
                <Link href="/" className="group flex items-center">
                    <span className="text-2xl font-black tracking-tighter text-dusk-dark">
                        Quick<span className="text-dusk-primary font-bold">bot</span>
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-dusk-primary ml-0.5 mb-0.5 group-hover:scale-125 transition-transform duration-200" />
                    </span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold text-dusk-dark/75 hover:text-dusk-dark transition-colors duration-150"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/signin"
                        className="px-4 py-2 text-sm font-medium text-dusk-dark/80 bg-white/40 hover:bg-white/70 backdrop-blur-sm rounded-lg border border-dusk-accent/40 transition-all duration-200"
                    >
                        Sign In
                    </Link>

                    <Link
                        href="/get-started"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-dusk-accent bg-dusk-dark hover:bg-dusk-primary rounded-xl shadow-xs hover:shadow-md active:scale-[0.98] transition-all duration-200"
                    >
                        <span>Get Started</span>
                        <svg
                            className="w-4 h-4 stroke-[2.5]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </Link>
                </div>
            </nav>
        </header>
    );
}