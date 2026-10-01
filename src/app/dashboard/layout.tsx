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
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Chat Inbox", href: "/dashboard/conversations", icon: MessageSquare },
    { name: "Appointments", href: "/dashboard/appointments", icon: Calendar },
    { name: "Business Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-dusk-light text-dusk-dark pt-20 flex flex-col md:flex-row selection:bg-dusk-primary selection:text-dusk-light">

      {/* Mobile Sidebar Toggle Strip */}
      <div className="md:hidden flex items-center justify-between px-6 py-3 bg-white border-b border-dusk-dark/10 sticky top-20 z-20">
        <span className="text-xs font-bold text-dusk-dark/60 tracking-wider uppercase">Dashboard Menu</span>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-xl bg-dusk-dark/5 text-dusk-dark hover:bg-dusk-dark/10 transition-colors"
          aria-label="Toggle Dashboard Menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Backdrop for Mobile Drawer */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 top-20 bg-dusk-dark/40 backdrop-blur-xs z-30 md:hidden transition-opacity"
        />
      )}

      {/* Sidebar: Padding auto adjusts on collapse (md:px-3) */}
      <aside
        className={`fixed md:sticky top-20 left-0 h-[calc(100vh-5rem)] bg-white border-r border-dusk-dark/10 flex flex-col justify-between p-5 z-40 transition-all duration-300 ease-in-out ${
          isCollapsed ? "md:w-20 md:px-3 md:py-6" : "md:w-72 md:p-6"
        } ${
          sidebarOpen
            ? "translate-x-0 w-72 shadow-xl"
            : "-translate-x-full md:translate-x-0 shadow-none"
        }`}
      >
        <div className="space-y-6">
          {/* Header Row: Collapse Toggle Button (Centered perfectly when collapsed) */}
          <div className={`hidden md:flex items-center ${isCollapsed ? "justify-center" : "justify-end"}`}>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={`rounded-xl bg-dusk-dark/5 hover:bg-dusk-dark hover:text-dusk-accent text-dusk-dark flex items-center justify-center transition-colors ${
                isCollapsed ? "w-11 h-11" : "w-8 h-8"
              }`}
              title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setSidebarOpen(false)}
                  title={isCollapsed ? link.name : ""}
                  className={`flex items-center transition-all duration-200 ${
                    isCollapsed
                      ? "md:w-11 md:h-11 md:rounded-full md:justify-center md:mx-auto md:p-0"
                      : "gap-3 px-3.5 py-3 rounded-2xl"
                  } ${
                    isActive
                      ? "bg-dusk-dark text-dusk-accent shadow-md shadow-dusk-dark/10"
                      : "text-dusk-dark/70 hover:bg-dusk-dark/5 hover:text-dusk-dark"
                  }`}
                >
                  <Icon className={`w-5 h-5 shrink-0 ${isActive ? "text-dusk-accent" : "text-dusk-primary"}`} />
                  {!isCollapsed && <span className="truncate text-sm font-bold">{link.name}</span>}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Exit: Matches the same circular size and center alignment */}
        <div className="pt-4 border-t border-dusk-dark/10">
          <Link
            href="/"
            title={isCollapsed ? "Exit to Home" : ""}
            className={`flex items-center text-dusk-dark/60 hover:bg-red-50 hover:text-red-600 transition-all duration-200 ${
              isCollapsed
                ? "md:w-11 md:h-11 md:rounded-full md:justify-center md:mx-auto md:p-0"
                : "gap-3 px-3.5 py-3 rounded-2xl text-xs font-bold"
            }`}
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {!isCollapsed && <span className="text-xs font-bold">Exit to Home</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 p-6 md:p-10 lg:p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-8">{children}</div>
      </main>
    </div>
  );
}