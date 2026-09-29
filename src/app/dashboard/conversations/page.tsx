"use client";

import React, { useState } from "react";
import { MessageSquare, Search, Send, Sparkles, Phone, CheckCircle2 } from "lucide-react";

export default function ChatInboxPage() {
  const [selectedChat, setSelectedChat] = useState(0);
  const [messageText, setMessageText] = useState("");

  const chats = [
    {
      id: "1",
      name: "Bilal Ahmed",
      channel: "WhatsApp",
      lastMessage: "Can I book a haircut for 2 PM today?",
      time: "10:42 AM",
      unread: 2,
    },
    {
      id: "2",
      name: "Usman Khan",
      channel: "Instagram",
      lastMessage: "What are your beard grooming rates?",
      time: "09:15 AM",
      unread: 0,
    },
    {
      id: "3",
      name: "Hamza Ali",
      channel: "WhatsApp",
      lastMessage: "Thanks, slot confirmed!",
      time: "Yesterday",
      unread: 0,
    },
  ];

  return (
    <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dusk-dark text-dusk-accent font-mono text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" /> Live AI & Human Handoff
        </div>
        <h1 className="text-3xl font-black text-dusk-dark tracking-tight">Chat Inbox</h1>
      </div>

      {/* Main Split Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-0">
        
        {/* Left List */}
        <div className="lg:col-span-4 bg-white rounded-3xl border-2 border-dusk-dark/10 p-4 flex flex-col space-y-4 overflow-hidden">
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-dusk-dark/40" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-dusk-dark/[0.02] border border-dusk-dark/10 text-sm font-medium focus:outline-none focus:border-dusk-dark"
            />
          </div>

          <div className="space-y-2 overflow-y-auto flex-1">
            {chats.map((chat, idx) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(idx)}
                className={`p-4 rounded-2xl cursor-pointer transition-all ${
                  selectedChat === idx
                    ? "bg-dusk-dark text-white shadow-md"
                    : "bg-dusk-dark/[0.02] hover:bg-dusk-dark/[0.05] text-dusk-dark"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold">{chat.name}</h4>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${selectedChat === idx ? "bg-white/20 text-white" : "bg-dusk-dark/5 text-dusk-primary"}`}>
                    {chat.channel}
                  </span>
                </div>
                <p className={`text-xs truncate ${selectedChat === idx ? "text-dusk-light/70" : "text-dusk-dark/70"}`}>
                  {chat.lastMessage}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Chat View */}
        <div className="lg:col-span-8 bg-white rounded-3xl border-2 border-dusk-dark/10 flex flex-col justify-between overflow-hidden">
          
          {/* Chat Top Bar */}
          <div className="p-4 border-b border-dusk-dark/10 flex items-center justify-between bg-dusk-dark/[0.01]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-dusk-dark text-dusk-accent flex items-center justify-center font-bold text-xs">
                {chats[selectedChat].name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <h4 className="text-sm font-bold text-dusk-dark">{chats[selectedChat].name}</h4>
                <p className="text-[10px] font-mono text-emerald-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> AI Agent Handled
                </p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="p-6 overflow-y-auto flex-1 space-y-4 bg-dusk-dark/[0.01]">
            <div className="flex justify-start">
              <div className="bg-white border border-dusk-dark/10 p-4 rounded-2xl max-w-md shadow-xs">
                <p className="text-xs text-dusk-dark font-medium">Can I book a haircut for 2 PM today?</p>
                <span className="text-[10px] text-dusk-primary/70 mt-1 block">10:42 AM • Via WhatsApp</span>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-dusk-dark text-white p-4 rounded-2xl max-w-md shadow-md">
                <p className="text-xs font-medium">Hello Bilal! Yes, 2:00 PM slot is available for Premium Haircut (Rs. 1,500). Should I lock it for you?</p>
                <span className="text-[10px] text-dusk-accent mt-1 block text-right">10:43 AM • AI Auto-Reply</span>
              </div>
            </div>
          </div>

          {/* Input Box */}
          <div className="p-4 border-t border-dusk-dark/10 bg-white flex items-center gap-3">
            <input
              type="text"
              placeholder="Type a message or take over chat..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="flex-1 px-4 py-3 rounded-2xl bg-dusk-dark/[0.03] border border-dusk-dark/10 text-sm font-medium focus:outline-none focus:border-dusk-dark"
            />
            <button className="w-12 h-12 rounded-2xl bg-dusk-dark text-dusk-accent flex items-center justify-center hover:bg-dusk-primary transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}