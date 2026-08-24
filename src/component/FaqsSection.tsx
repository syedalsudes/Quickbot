"use client";

import React, { useState } from "react";
import { Plus, ArrowUpRight, Sparkles, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: "01",
      tag: "Cloud Hosting",
      q: "Do I need to keep my phone or laptop turned on all the time for the bot to work?",
      a: "No, not at all. QuickBot runs 100% on our secure cloud servers. Once you scan the QR code from your dashboard, your AI manager will handle chats and bookings 24/7, even if your phone battery dies or your internet goes completely offline.",
    },
    {
      id: "02",
      tag: "Security & Guardrails",
      q: "Can the AI quote wrong prices or talk out of context with my clients?",
      a: "Absolutely not. The AI agent is locked inside strict guardrails built directly from your dashboard configuration. It will only mention the services, operating hours, and exact price lists that you manually enter into your business profile.",
    },
    {
      id: "03",
      tag: "Channels & Numbers",
      q: "Can I connect my personal WhatsApp number, or do I need a new business account?",
      a: "You can use any number you already have. QuickBot's flexible connection system works perfectly with normal WhatsApp numbers, official WhatsApp Business accounts, and Instagram DMs without requiring any complex setup or verification approvals.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-dusk-light text-dusk-dark py-24 px-6 md:px-12 lg:px-20 selection:bg-dusk-primary selection:text-dusk-light">
      <div className="max-w-5xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-dusk-dark/15 pb-10 mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dusk-dark text-dusk-accent font-mono text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-dusk-dark leading-none">
              Got Questions? <br />
              <span className="text-dusk-primary italic font-serif font-normal text-3xl md:text-5xl">
                We've got answers.
              </span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-dusk-primary font-medium max-w-xs leading-relaxed">
            Everything you need to know about QuickBot automation, 24/7 cloud runtime, and contextual guardrails.
          </p>
        </div>

        {/* FAQ List Cards */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-[2rem] border-2 transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-dusk-dark shadow-lg shadow-dusk-dark/5"
                    : "bg-white/50 border-dusk-dark/15 hover:border-dusk-dark/40 hover:bg-white/80"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 md:p-8 flex items-start justify-between gap-6 text-left cursor-pointer"
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg mt-0.5 shrink-0 ${
                        isOpen
                          ? "bg-dusk-dark text-dusk-accent"
                          : "bg-dusk-dark/5 text-dusk-primary"
                      }`}
                    >
                      {faq.id}
                    </span>

                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-dusk-primary font-bold block mb-1">
                        {faq.tag}
                      </span>
                      <h3 className="text-lg md:text-xl font-black tracking-tight text-dusk-dark leading-snug">
                        {faq.q}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border-2 transition-all duration-300 ${
                      isOpen
                        ? "bg-dusk-dark border-dusk-dark text-dusk-accent rotate-45"
                        : "bg-dusk-light border-dusk-dark/20 text-dusk-dark"
                    }`}
                  >
                    <Plus className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </button>

                {/* Animated Dropdown Body */}
                {isOpen && (
                  <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 ml-0 md:ml-16">
                    <div className="border-t border-dusk-dark/10 pt-4">
                      <p className="text-sm md:text-base text-dusk-primary font-medium leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Smooth Scroll Navigation to Contact Section */}
        <div className="mt-12 bg-dusk-dark/[0.03] border-2 border-dusk-dark/15 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-2xl bg-dusk-primary/10 text-dusk-dark flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5 text-dusk-primary" />
            </div>
            <div>
              <p className="text-sm font-bold text-dusk-dark">
                Have a specific question not listed here?
              </p>
              <p className="text-xs text-dusk-primary font-medium">
                Talk directly to us and we'll help you get started.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-dusk-dark text-dusk-accent font-bold text-sm px-6 py-3.5 rounded-2xl shadow-sm hover:bg-dusk-primary transition-all duration-200 active:scale-[0.98]"
          >
            <span>Ask Us Directly</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}