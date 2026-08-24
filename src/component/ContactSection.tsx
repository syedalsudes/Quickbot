'use client';

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div id="contact" className="min-h-screen bg-dusk-light text-dusk-dark flex flex-col justify-between px-6 py-12 md:px-16 lg:px-24 selection:bg-dusk-primary selection:text-dusk-light">
      {/* Massive Bold Header */}
      <header className="mb-14 md:mb-20 max-w-7xl mx-auto w-full">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none text-dusk-dark">
          Contact me
        </h1>
      </header>

      {/* Main Grid Section */}
      <main className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left Column: Reusable/Generic Project Quick-Details */}
        <aside className="lg:col-span-4 flex flex-col space-y-10">
          <div className="space-y-2">
            <h3 className="text-xl font-bold tracking-tight text-dusk-dark">
              Let's build something bold.
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-dusk-primary font-medium">
              Have a project in mind, an idea to explore, or just want to connect? 
              Drop your details and let's get talking.
            </p>
          </div>

          <div className="pt-6 border-t-2 border-dusk-dark/20 space-y-4">
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-dusk-dark">
                Direct Contact
              </p>
              <p className="text-base text-dusk-primary font-medium">
                hello@yourbrand.com
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-dusk-dark">
                Response Time
              </p>
              <p className="text-base text-dusk-primary font-medium">
                Within 24 business hours
              </p>
            </div>
          </div>
        </aside>

        {/* Right Column: Clearly Visible Framed Form */}
        <div className="lg:col-span-8 bg-dusk-dark/[0.03] p-8 md:p-12 rounded-3xl border-2 border-dusk-dark/20 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Grid for Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-dusk-dark tracking-wide"
                >
                  Name <span className="text-dusk-primary font-normal">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Julian Vance"
                  className="w-full bg-dusk-light/70 border-2 border-dusk-dark/40 rounded-xl px-4 py-3.5 text-base text-dusk-dark placeholder:text-dusk-primary/50 focus:border-dusk-dark focus:bg-white focus:outline-none transition-all duration-200"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-dusk-dark tracking-wide"
                >
                  Email <span className="text-dusk-primary font-normal">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="julian@example.com"
                  className="w-full bg-dusk-light/70 border-2 border-dusk-dark/40 rounded-xl px-4 py-3.5 text-base text-dusk-dark placeholder:text-dusk-primary/50 focus:border-dusk-dark focus:bg-white focus:outline-none transition-all duration-200"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-sm font-bold text-dusk-dark tracking-wide"
              >
                Phone Number <span className="text-dusk-primary font-normal">(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 019-2834"
                className="w-full bg-dusk-light/70 border-2 border-dusk-dark/40 rounded-xl px-4 py-3.5 text-base text-dusk-dark placeholder:text-dusk-primary/50 focus:border-dusk-dark focus:bg-white focus:outline-none transition-all duration-200"
              />
            </div>

            {/* Project / Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-bold text-dusk-dark tracking-wide"
              >
                Project Description <span className="text-dusk-primary font-normal">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project goals, scope, and timeline..."
                className="w-full bg-dusk-light/70 border-2 border-dusk-dark/40 rounded-xl px-4 py-3.5 text-base text-dusk-dark placeholder:text-dusk-primary/50 focus:border-dusk-dark focus:bg-white focus:outline-none resize-none transition-all duration-200"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto min-w-[200px] rounded-2xl bg-dusk-dark px-10 py-4 text-base font-bold tracking-wide text-dusk-accent shadow-md hover:bg-dusk-primary hover:shadow-lg active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer className="pt-16" />
    </div>
  );
}