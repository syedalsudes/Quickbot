import {
  Smartphone,
  ShieldCheck,
  BrainCircuit,
  Layers,
  CloudLightning,
  LayoutDashboard,
  CheckCircle2,
} from 'lucide-react';

export default function WhyChooseQuickBot() {
  const features = [
    {
      id: '01',
      title: 'Zero App Installation (No Learning Curve)',
      description:
        "Aapko ya aapke customer ko koi alag se application install nahi karni padegi. Aapka customer apne normal WhatsApp/Instagram se chat karega, aur aap direct website dashboard se calendar dekhoge. It's that simple.",
      icon: Smartphone,
    },
    {
      id: '02',
      title: 'Guardrail Context Control (No Hallucinations)',
      description:
        'Humara AI kabhi ghalat rates ya out-of-context baatein nahi karega. AI strict boundaries ke andar kaam karta hai jo aapne dashboard settings mein define ki hoti hain. Jo menu aap doge, AI sirf wahi bechega.',
      icon: ShieldCheck,
    },
    {
      id: '03',
      title: 'Smart Customer Retention (Memory Feature)',
      description:
        'QuickBot purane customers ko bhoolta nahi hai. Jab Bilal ya Ahmed 2 mahine baad dobara message karenge, to AI unhe unke naam se greet karega aur unki purani preferences ke mutabiq slots recommend karega.',
      icon: BrainCircuit,
    },
    {
      id: '04',
      title: 'Native Multi-Channel Integration (WhatsApp + Insta)',
      description:
        'Aapke ads Instagram par chalte hain aur leads WhatsApp par aati hain? QuickBot dono channels ko ek hi centralized database aur calendar se jor deta hai taake double booking ka khatra 0% ho jaye.',
      icon: Layers,
    },
    {
      id: '05',
      title: '100% Cloud-Based (Runs Even If Your Phone Dies)',
      description:
        'Baqi bots ki tarha aapko apna mobile ya laptop 24/7 on rakhne ki zaroorat nahi hai. Ek baar QR code scan hone ke baad, humare secure cloud servers backend par sab kuch handle karte hain, bhale aapka mobile offline ho.',
      icon: CloudLightning,
    },
    {
      id: '06',
      title: 'Built-In Smart Multi-Tenant Dashboard',
      description:
        'Sirf ek chatbot nahi, aapko poora business management system milta hai. Live interactive calendar, revenue analytics, aur service performance reports sab ek hi jagah transparently dikhti hain.',
      icon: LayoutDashboard,
    },
  ];

  return (
    <section className="w-full bg-white py-24 sm:py-32 px-6 lg:px-12 relative overflow-hidden">
      {/* Background subtle light dots / glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-dusk-accent/20 blur-[120px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dusk-dark tracking-tight leading-[1.15]">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dusk-dark via-dusk-primary to-dusk-dark">
              QuickBot?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-dusk-dark/70 font-normal leading-relaxed">
            Enterprise-grade AI booking automation engineered specifically for local businesses, clinics, salons, and agencies.
          </p>
        </div>

        {/* 6 Grid Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative bg-white rounded-2xl p-8 border border-dusk-accent/40 hover:border-dusk-primary/40 shadow-sm hover:shadow-xl hover:shadow-dusk-dark/5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Row: Icon & Counter ID */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-dusk-accent/30 group-hover:bg-gradient-to-br group-hover:from-dusk-dark group-hover:to-dusk-primary flex items-center justify-center text-dusk-dark group-hover:text-dusk-light transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-dusk-primary/50 tracking-wider">
                      {feature.id}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-dusk-dark group-hover:text-dusk-primary transition-colors duration-200 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-dusk-dark/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Bottom subtle indicator line */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-dusk-primary/80">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}