"use client";

import React from "react";
import { Calendar as CalendarIcon, Clock, CheckCircle2, Sparkles, Filter } from "lucide-react";

export default function AppointmentsPage() {
  const appointments = [
    { id: "1", client: "Bilal Ahmed", service: "Premium Haircut", date: "Today, 02:00 PM", channel: "WhatsApp", status: "Confirmed" },
    { id: "2", client: "Usman Khan", service: "Beard Grooming", date: "Today, 03:15 PM", channel: "Instagram", status: "Confirmed" },
    { id: "3", client: "Hamza Ali", service: "Facial Care", date: "Today, 05:00 PM", channel: "WhatsApp", status: "Pending" },
    { id: "4", client: "Zain Malik", service: "Hair Styling", date: "Tomorrow, 11:00 AM", channel: "WhatsApp", status: "Confirmed" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dusk-dark text-dusk-accent font-mono text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" /> Central Calendar Sync
        </div>
        <h1 className="text-3xl font-black text-dusk-dark tracking-tight">Appointments & Bookings</h1>
        <p className="text-sm text-dusk-primary font-medium mt-1">
          Zero double-booking guarantee. All slots locked autonomously by QuickBot AI.
        </p>
      </div>

      {/* Appointments List Card */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-dusk-dark/10 shadow-xs space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black text-dusk-dark tracking-tight">All Scheduled Bookings</h3>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-xl bg-dusk-dark/5 text-xs font-bold text-dusk-dark flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {appointments.map((apt) => (
            <div key={apt.id} className="p-4 rounded-2xl bg-dusk-dark/[0.02] border border-dusk-dark/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-dusk-dark text-dusk-accent flex items-center justify-center font-bold text-sm">
                  {apt.client.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-dusk-dark">{apt.client}</h4>
                  <p className="text-xs text-dusk-primary font-medium">{apt.service} • <span className="font-mono">{apt.channel}</span></p>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto justify-between pt-2 sm:pt-0 border-t sm:border-t-0 border-dusk-dark/10">
                <span className="text-xs font-mono font-bold text-dusk-dark flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-dusk-primary" /> {apt.date}
                </span>
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${
                  apt.status === "Confirmed" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                }`}>
                  {apt.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}