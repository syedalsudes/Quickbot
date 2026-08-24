import Image from 'next/image';
import Link from 'next/link';
import {
    Sparkles,
    ArrowRight,
    Play,
    Zap,
    PhoneOff,
    Bot
} from 'lucide-react';

export default function HeroSection() {
    const statCards = [
        { 
            label: '3s', 
            title: 'Instant Response',
            description: 'Replies before clients jump to competitors.', 
            icon: Zap 
        },
        { 
            label: '0%', 
            title: 'Missed Leads',
            description: 'Zero audio notes & no manual calls needed.', 
            icon: PhoneOff 
        },
        { 
            label: '100%', 
            title: 'Hands-Free',
            description: 'Auto-syncs bookings straight to your calendar.', 
            icon: Bot 
        },
    ];

    return (
        <section
  className="relative w-full min-h-screen bg-cover bg-center flex flex-col justify-between pt-28 pb-28 px-6 md:px-12 lg:px-20 z-30"
  style={{
    backgroundImage: "url('/hero.png')",
  }}
>
            {/* Ambient Lighting */}
            <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-dusk-primary/20 rounded-full blur-[140px] pointer-events-none -z-0" />
            <div className="absolute top-1/2 left-10 w-80 h-80 bg-dusk-accent/30 rounded-full blur-[100px] pointer-events-none -z-0" />

            {/* Main Hero Container */}
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto z-10">
                {/* Left Column: Sharp Editorial Typography & Actions */}
                <div className="lg:col-span-7 space-y-8">
                    {/* Headline */}
                    <h1 className="text-5xl mt-12 sm:text-6xl lg:text-7xl font-black text-dusk-dark tracking-tighter leading-[1.02]">
                        Never miss a client. <br />
                        <span className="text-dusk-primary italic font-serif font-normal text-4xl sm:text-5xl lg:text-6xl">
                            Autonomous bookings on WhatsApp.
                        </span>
                    </h1>

                    {/* Concise Subtitle */}
                    <p className="text-base sm:text-lg text-dusk-primary font-medium max-w-xl leading-relaxed">
                        Stop juggling chaotic voice notes and missed calls. Link WhatsApp in 2 minutes—let your AI manager handle inquiries, share live rates, and lock slots 24/7.
                    </p>

                    {/* Action Area */}
                    <div className="space-y-4 pt-1">
                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                href="/create"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-dusk-dark text-dusk-accent text-sm font-bold shadow-xl shadow-dusk-dark/20 hover:bg-dusk-primary active:scale-[0.98] transition-all duration-200"
                            >
                                <span>Start 7-Day Free Trial</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/how-it-works"
                                className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/70 hover:bg-white border-2 border-dusk-dark/15 backdrop-blur-md text-dusk-dark text-sm font-bold shadow-sm active:scale-[0.98] transition-all duration-200"
                            >
                                <span className="w-6 h-6 rounded-full bg-dusk-dark text-dusk-accent flex items-center justify-center">
                                    <Play className="w-3 h-3 fill-current ml-0.5" />
                                </span>
                                Watch 1-Min Demo
                            </Link>
                        </div>

                        {/* Micro Trust Copy */}
                        <div className="flex items-center gap-4 text-xs font-mono font-semibold text-dusk-dark/70 pt-1">
                            <span className="flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-dusk-primary" /> No credit card needed
                            </span>
                            <span>•</span>
                            <span>2-Min QR Setup</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Hero Visual Showcase */}
                <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[480px] flex items-center justify-center">
                    <div className="relative w-full h-full">
                        <Image
                            src="/heroimage1.png"
                            alt="QuickBot AI Interface Illustration"
                            fill
                            className="object-contain drop-shadow-[0_25px_45px_rgba(80,45,85,0.2)]"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Crisp 3-Column Floating Stats Dock */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-5xl px-4 z-30">
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 py-6 px-8 rounded-3xl bg-white/80 border-2 border-white backdrop-blur-xl shadow-[0_20px_45px_rgba(80,45,85,0.12)]">
                    {statCards.map((stat, idx) => {
                        const IconComponent = stat.icon;
                        return (
                            <div
                                key={stat.title}
                                className={`flex items-center gap-4 ${
                                    idx < statCards.length - 1
                                        ? 'md:border-r md:border-dusk-dark/15 md:pr-6'
                                        : ''
                                }`}
                            >
                                <div className="w-12 h-12 rounded-2xl bg-dusk-dark text-dusk-accent flex items-center justify-center shrink-0 shadow-sm">
                                    <IconComponent className="w-5 h-5" />
                                </div>

                                <div className="min-w-0">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-black text-dusk-dark tracking-tight leading-none">
                                            {stat.label}
                                        </span>
                                        <span className="text-xs font-bold uppercase tracking-wider text-dusk-primary">
                                            {stat.title}
                                        </span>
                                    </div>
                                    <p className="text-xs text-dusk-primary font-medium mt-1 leading-snug">
                                        {stat.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}