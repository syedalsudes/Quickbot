"use client";

import React from "react";
import { Check, ArrowRight, Zap, Sparkles } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      badge: "Free Trial",
      target: "Naye business owners jo pehle try karna chahte hain.",
      price: "0",
      period: "for 7 days",
      highlight: false,
      buttonText: "Start 7-Day Free Trial",
      buttonStyle:
        "bg-dusk-dark text-dusk-accent hover:bg-dusk-primary transition-all duration-200",
      features: [
        "1 Linked WhatsApp Number",
        "Core AI Booking Logic (Hinglish/Urdu)",
        "Live Calendar Dashboard Access",
        "Up to 50 Automated Bookings",
        "Standard Server Speed",
      ],
    },
    {
      name: "Growth Pro",
      badge: "Most Popular",
      target: "Salons, car detailing workshops & clinics jo scale karna chahte hain.",
      price: "4,999",
      period: "PKR / month",
      highlight: true,
      buttonText: "Upgrade to Growth Pro",
      buttonStyle:
        "bg-dusk-accent text-dusk-dark font-extrabold hover:bg-white shadow-lg transition-all duration-200",
      features: [
        "Everything in Starter, plus:",
        "Unlimited Automated Bookings",
        "Custom AI Personality Prompts",
        "Multi-Channel Sync (WhatsApp + Instagram)",
        "Priority Server Execution (Instant replies)",
        "Advanced Revenue & Chat Analytics",
        "Priority WhatsApp & Email Support",
      ],
    },
    {
      name: "Enterprise",
      badge: "Custom Scale",
      target: "Multi-branch franchises aur bare brands jinki custom needs hain.",
      price: "Custom",
      period: "let's talk",
      highlight: false,
      buttonText: "Contact Sales",
      buttonStyle:
        "bg-transparent text-dusk-dark border-2 border-dusk-dark/30 hover:border-dusk-dark hover:bg-dusk-dark/5 transition-all duration-200",
      features: [
        "Everything in Growth Pro, plus:",
        "Multi-Branch & Location Management",
        "Unlimited Linked Channels & Numbers",
        "Dedicated AI Model Fine-Tuning",
        "Custom POS & CRM Integration",
        "24/7 Dedicated Account Manager",
        "99.9% Cloud Uptime SLA Guarantee",
      ],
    },
  ];

  return (
    <section className="bg-dusk-light text-dusk-dark py-24 px-6 md:px-12 lg:px-20 selection:bg-dusk-primary selection:text-dusk-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-dusk-dark leading-none">
            Choose Your Growth Plan
          </h2>
          <p className="mt-4 text-base md:text-lg text-dusk-primary font-medium">
            Automate customer chats, streamline bookings, aur apne business ka revenue boost karein.
          </p>
        </div>

        {/* Pricing Cards Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-center">
          {plans.map((plan, idx) => {
            return (
              <div
                key={idx}
                className={`relative rounded-[2.5rem] transition-all duration-300 flex flex-col justify-between ${
                  plan.highlight
                    ? "bg-dusk-dark text-dusk-light border-4 border-dusk-accent shadow-2xl p-9 md:p-11 lg:-translate-y-4 lg:py-14 z-20 min-h-[620px]"
                    : "bg-white/80 text-dusk-dark border-2 border-dusk-dark/15 shadow-sm p-7 md:p-9 z-10 min-h-[520px]"
                }`}
              >
                {/* Most Popular Badge on Center Card */}
                {plan.highlight && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-dusk-primary border-2 border-dusk-accent text-dusk-accent px-5 py-1.5 rounded-full text-xs font-mono font-black uppercase tracking-widest shadow-md flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 fill-current text-dusk-accent" />
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div
                    className={`flex items-center justify-between pb-5 mb-6 border-b ${
                      plan.highlight
                        ? "border-white/10"
                        : "border-dusk-dark/10"
                    }`}
                  >
                    <div>
                      <h3
                        className={`text-2xl font-black tracking-tight ${
                          plan.highlight ? "text-dusk-accent" : "text-dusk-dark"
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <p
                        className={`text-xs font-medium mt-1 leading-snug ${
                          plan.highlight
                            ? "text-dusk-light/70"
                            : "text-dusk-primary"
                        }`}
                      >
                        {plan.target}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1.5">
                      {plan.price !== "Custom" && (
                        <span
                          className={`text-sm font-bold ${
                            plan.highlight
                              ? "text-dusk-accent"
                              : "text-dusk-primary"
                          }`}
                        >
                          PKR
                        </span>
                      )}
                      <span
                        className={`text-4xl md:text-5xl font-black tracking-tight ${
                          plan.highlight ? "text-dusk-accent" : "text-dusk-dark"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={`text-xs font-mono uppercase tracking-wider ${
                          plan.highlight
                            ? "text-dusk-light/60"
                            : "text-dusk-primary/70"
                        }`}
                      >
                        / {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3.5 mb-8">
                    <p
                      className={`text-xs font-mono font-bold uppercase tracking-wider ${
                        plan.highlight
                          ? "text-dusk-accent/90"
                          : "text-dusk-primary"
                      }`}
                    >
                      Included Capabilities
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className={`flex items-start gap-2.5 text-xs md:text-sm font-medium ${
                            fIdx === 0 && feat.includes("Everything")
                              ? plan.highlight
                                ? "text-dusk-accent font-bold pb-1"
                                : "text-dusk-dark font-bold pb-1"
                              : plan.highlight
                              ? "text-dusk-light/90"
                              : "text-dusk-dark/90"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              plan.highlight
                                ? "bg-dusk-accent text-dusk-dark"
                                : "bg-dusk-dark/10 text-dusk-dark"
                            }`}
                          >
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Button Action */}
                <div>
                  <button
                    className={`w-full py-4 px-6 rounded-2xl text-sm font-bold tracking-wide flex items-center justify-center gap-2 cursor-pointer ${plan.buttonStyle}`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p
                    className={`text-center text-[11px] font-mono mt-3 ${
                      plan.highlight
                        ? "text-dusk-light/50"
                        : "text-dusk-primary/60"
                    }`}
                  >
                    No hidden setup fees • Cancel anytime
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