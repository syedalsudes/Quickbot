"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  Calendar,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Mobile drawer state
  const [isCollapsed, setIsCollapsed] = useState(false); // Desktop collapse state (icons only mode)
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Overview",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Chat Inbox",
      href: "/dashboard/conversations",
      icon: MessageSquare,
    },
    {
      name: "Appointments",
      href: "/dashboard/appointments",
      icon: Calendar,
    },
    {
      name: "Business Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="min-h-screen bg-dusk-light text-dusk-dark flex flex-col md:flex-row selection:bg-dusk-primary selection:text-dusk-light">
      
      {/* Mobile Top Header */}
      <header className="md:hidden flex items-center justify-between bg-white border-b border-dusk-dark/10 px-6 h-20 sticky top-0 z-40">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-black tracking-tighter text-dusk-dark">
            Quick<span className="text-dusk-primary font-bold">bot</span>
          </span>
        </Link>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="w-10 h-10 rounded-xl bg-dusk-dark/5 flex items-center justify-center text-dusk-dark"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-dusk-dark/40 backdrop-blur-xs z-40 md:hidden"
        />
      )}

      {/* Sidebar Navigation (Collapsible on Desktop) */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen bg-white border-r border-dusk-dark/10 flex flex-col justify-between p-6 z-50 transition-all duration-300 ${
          isCollapsed ? "md:w-24" : "md:w-72"
        } ${
          sidebarOpen ? "translate-x-0 w-72" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Top Section */}
        <div className="space-y-8">
          
          {/* Brand & Desktop Collapse Toggle Button */}
          <div className="flex items-center justify-between">
            <Link href="/" className={`group flex items-center overflow-hidden ${isCollapsed ? "md:hidden" : "flex"}`}>
              <span className="text-2xl font-black tracking-tighter text-dusk-dark whitespace-nowrap">
                Quick<span className="text-dusk-primary font-bold">bot</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-dusk-primary ml-0.5 mb-0.5" />
              </span>
            </Link>

            {/* When collapsed on desktop, show a small brand icon */}
            {isCollapsed && (
              <div className="hidden md:flex w-10 h-10 rounded-xl bg-dusk-dark text-dusk-accent items-center justify-center font-black text-sm">
                QB
              </div>
            )}

            {/* Collapse Toggle Button (Desktop Only) */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:flex w-8 h-8 rounded-xl bg-dusk-dark/5 hover:bg-dusk-dark hover:text-dusk-accent text-dusk-dark items-center justify-center transition-colors"
              title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>

          {/* User Status Badge (Hides text when collapsed) */}
          <div className={`p-3.5 rounded-2xl bg-dusk-dark/[0.03] border border-dusk-dark/10 flex items-center gap-3 ${isCollapsed ? "md:justify-center md:p-2" : ""}`}>
            <div className="w-8 h-8 rounded-xl bg-dusk-dark text-dusk-accent flex items-center justify-center font-bold text-xs shrink-0">
              QB
            </div>
            {!isCollapsed && (
              <div className="min-w-0">
                <p className="text-xs font-bold text-dusk-dark truncate">My Workspace</p>
                <p className="text-[10px] font-mono text-dusk-primary flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  WhatsApp Connected
                </p>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setSidebarOpen(false)}
                  title={isCollapsed ? link.name : ""}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all duration-200 ${
                    isCollapsed ? "md:justify-center md:px-0" : ""
                  } ${
                    isActive
                      ? "bg-dusk-dark text-dusk-accent shadow-md shadow-dusk-dark/10"
                      : "text-dusk-dark/70 hover:bg-dusk-dark/5 hover:text-dusk-dark"
                  }`}
                >
                  <Icon className={`w-5 h-5 shrink-0 ${isActive ? "text-dusk-accent" : "text-dusk-primary"}`} />
                  {!isCollapsed && <span className="truncate">{link.name}</span>}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom: Logout */}
        <div className="pt-6 border-t border-dusk-dark/10 space-y-3">
          <Link
            href="/"
            title={isCollapsed ? "Exit to Home" : ""}
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold text-dusk-dark/60 hover:bg-red-50 hover:text-red-600 transition-all duration-200 ${
              isCollapsed ? "md:justify-center md:px-0" : ""
            }`}
          >
            <LogOut className="w-4 h-4 shrink-0" />
            {!isCollapsed && <span>Exit to Home</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content Viewport */}
      <main className="flex-1 min-w-0 p-6 md:p-10 lg:p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-8">{children}</div>
      </main>
    </div>
  );
}