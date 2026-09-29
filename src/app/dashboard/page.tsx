"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar,
  MessageSquare,
  TrendingUp,
  Users,
  ArrowUpRight,
  Sparkles,
  Clock,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export default function DashboardOverview() {
  // Mock Stats Data
  const stats = [
    {
      title: "Today's Appointments",
      value: "12",
      change: "+4 from yesterday",
      icon: Calendar,
    },
    {
      title: "Active AI Chats",
      value: "48",
      change: "Currently handling",
      icon: MessageSquare,
    },
    {
      title: "Estimated Revenue",
      value: "Rs. 38,500",
      change: "+18% this week",
      icon: TrendingUp,
    },
    {
      title: "Conversion Rate",
      value: "84%",
      change: "AI booking success",
      icon: Users,
    },
  ];

  // Mock Today's Bookings
  const upcomingAppointments = [
    {
      id: "1",
      client: "Bilal Ahmed",
      service: "Premium Haircut",
      time: "02:00 PM - 02:30 PM",
      channel: "WhatsApp",
      status: "Confirmed",
    },
    {
      id: "2",
      client: "Usman Khan",
      service: "Beard Grooming",
      time: "03:15 PM - 03:35 PM",
      channel: "Instagram",
      status: "Confirmed",
    },
    {
      id: "3",
      client: "Hamza Ali",
      service: "Facial Care",
      time: "05:00 PM - 05:45 PM",
      channel: "WhatsApp",
      status: "Pending Review",
    },
  ];

  return (
    <div className="space-y-10 pt-10">
      
      {/* Welcome Banner (Solid Theme Tone) */}
      <div className="rounded-[2.5rem]  bg-dusk-dark text-dusk-light p-8 md:p-12 border-2 border-dusk-accent/20 relative overflow-hidden shadow-xl">
        {/* Subtle ambient light dot */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-dusk-primary/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-dusk-accent/30 text-dusk-accent font-mono text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            AI Manager Active
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Welcome back, Workspace! 👋
          </h1>
          <p className="text-sm md:text-base text-dusk-light/70 font-medium leading-relaxed">
            Your WhatsApp AI agent is currently monitoring chats and locking calendar slots autonomously. Everything is running smoothly.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/dashboard/settings"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-dusk-accent text-dusk-dark text-sm font-bold shadow-md hover:bg-white transition-all duration-200 active:scale-[0.98]"
            >
              <span>Configure Business Settings</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </div>

      {/* 4 Metric / KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border-2 border-dusk-dark/10 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-dusk-primary uppercase tracking-wider">
                  {stat.title}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-dusk-dark/5 text-dusk-dark flex items-center justify-center">
                  <Icon className="w-5 h-5 text-dusk-primary" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-black text-dusk-dark tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-xs font-medium text-emerald-600 mt-1 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {stat.change}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Two-Column Section: Schedule Preview & Quick Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Spans: Today's Appointments */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 border-2 border-dusk-dark/10 shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-black text-dusk-dark tracking-tight">
                Today's Schedule Preview
              </h3>
              <p className="text-xs text-dusk-primary font-medium mt-0.5">
                Bookings automatically locked by QuickBot AI today.
              </p>
            </div>
            <Link
              href="/dashboard/appointments"
              className="text-xs font-bold text-dusk-dark hover:text-dusk-primary flex items-center gap-1 transition-colors"
            >
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {upcomingAppointments.map((apt) => (
              <div
                key={apt.id}
                className="p-4 rounded-2xl bg-dusk-dark/[0.02] border border-dusk-dark/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-dusk-dark/[0.04] transition-colors"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-dusk-dark text-dusk-accent flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 sm:mt-0">
                    {apt.client.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dusk-dark">{apt.client}</h4>
                    <p className="text-xs text-dusk-primary font-medium">{apt.service}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-dusk-dark/10">
                  <div className="text-left sm:text-right">
                    <p className="text-xs font-mono font-bold text-dusk-dark flex items-center gap-1">
                      <Clock className="w-3 h-3 text-dusk-primary" />
                      {apt.time}
                    </p>
                    <span className="text-[10px] font-mono uppercase text-dusk-primary/70 block">
                      Via {apt.channel}
                    </span>
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                    apt.status === "Confirmed" 
                      ? "bg-emerald-100 text-emerald-700" 
                      : "bg-amber-100 text-amber-700"
                  }`}>
                    {apt.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Span: System Status & Quick Shortcuts */}
        <div className="space-y-6">
          {/* Bot Runtime Status Card */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-dusk-dark/10 shadow-xs space-y-4">
            <h3 className="text-lg font-black text-dusk-dark tracking-tight">
              Cloud Runtime Status
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-medium text-dusk-dark/70 py-2 border-b border-dusk-dark/10">
                <span>WhatsApp Gateway</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Online (24/7)
                </span>
              </div>
              <div className="flex items-center justify-between text-xs font-medium text-dusk-dark/70 py-2 border-b border-dusk-dark/10">
                <span>AI Guardrail Engine</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Enforced
                </span>
              </div>
              <div className="flex items-center justify-between text-xs font-medium text-dusk-dark/70 py-2">
                <span>Calendar Sync</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Live
                </span>
              </div>
            </div>

            <Link
              href="/dashboard/settings"
              className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-dusk-dark/5 hover:bg-dusk-dark hover:text-dusk-accent text-dusk-dark text-xs font-bold transition-all duration-200"
            >
              Manage Configurations
            </Link>
          </div>

          {/* Quick Help Card */}
          <div className="rounded-3xl p-6 md:p-8 bg-dusk-dark text-white space-y-3 shadow-lg border border-dusk-accent/20">
            <h4 className="text-sm font-bold tracking-tight text-dusk-accent">Need Help Setting Up?</h4>
            <p className="text-xs text-dusk-light/70 leading-relaxed">
              Check out our step-by-step documentation to link your custom service menu and pricing lists.
            </p>
            <Link
              href="/docs"
              className="inline-flex items-center gap-1 text-xs font-bold text-white hover:underline pt-1"
            >
              <span>Read Documentation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}