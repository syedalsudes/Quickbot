'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header 
            className={`absolute top-0 left-0 w-full z-50 transition-colors duration-200 ${
                isOpen ? 'bg-white shadow-sm md:bg-transparent md:shadow-none' : 'bg-transparent'
            }`}
        >
            <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Brand / Logo */}
                <Link href="/" className="group flex items-center">
                    <span className="text-2xl font-black tracking-tighter text-dusk-dark">
                        Quick<span className="text-dusk-primary font-bold">bot</span>
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-dusk-primary ml-0.5 mb-0.5 group-hover:scale-125 transition-transform duration-200" />
                    </span>
                </Link>

                {/* Desktop Navigation Links */}
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

                {/* Desktop Action Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="/signin"
                        className="px-4 py-2 text-sm font-medium text-dusk-dark/80 bg-white/40 hover:bg-white/75 backdrop-blur-sm rounded-xl border border-dusk-accent/40 transition-all duration-200"
                    >
                        Sign In
                    </Link>

                    <Link
                        href="/get-started"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-dusk-accent bg-dusk-dark hover:bg-dusk-primary rounded-xl shadow-xs hover:shadow-md active:scale-[0.98] transition-all duration-200"
                    >
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                        className="p-2.5 rounded-xl bg-white/60 backdrop-blur-md border border-dusk-dark/10 text-dusk-dark focus:outline-none"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu / Drawer */}
            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-white border-b border-dusk-dark/10 shadow-2xl px-6 py-8 flex flex-col gap-6 md:hidden transition-all animate-in fade-in slide-in-from-top-4 duration-200 z-50">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-semibold text-dusk-dark/80 hover:text-dusk-primary py-1 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="h-[1px] w-full bg-dusk-dark/10 my-1" />

                    <div className="flex flex-col gap-3">
                        <Link
                            href="/signin"
                            onClick={() => setIsOpen(false)}
                            className="w-full py-3 text-center text-sm font-medium text-dusk-dark bg-white/80 rounded-xl border border-dusk-accent/40 shadow-sm"
                        >
                            Sign In
                        </Link>

                        <Link
                            href="/get-started"
                            onClick={() => setIsOpen(false)}
                            className="w-full inline-flex items-center justify-center gap-2 py-3 text-sm font-bold text-dusk-accent bg-dusk-dark hover:bg-dusk-primary rounded-xl shadow-md"
                        >
                            <span>Get Started</span>
                            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}