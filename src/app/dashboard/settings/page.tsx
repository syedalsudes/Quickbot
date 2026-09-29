"use client";

import React, { useState } from "react";
import { 
  Building2, 
  Clock, 
  Plus, 
  Trash2, 
  Save, 
  Sparkles, 
  DollarSign, 
  Globe 
} from "lucide-react";

export default function BusinessSettingsPage() {
  // Mock State for Services
  const [services, setServices] = useState([
    { id: "1", name: "Premium Haircut", duration: "30 mins", price: "1,500 PKR" },
    { id: "2", name: "Beard Grooming", duration: "20 mins", price: "800 PKR" },
    { id: "3", name: "Facial Care", duration: "45 mins", price: "2,500 PKR" },
  ]);

  // Modal State for Adding Service
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newServiceName, setNewServiceName] = useState("");
  const [newServiceDuration, setNewServiceDuration] = useState("");
  const [newServicePrice, setNewServicePrice] = useState("");

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newServiceName || !newServiceDuration || !newServicePrice) return;

    const newService = {
      id: Date.now().toString(),
      name: newServiceName,
      duration: `${newServiceDuration} mins`,
      price: `${newServicePrice} PKR`,
    };

    setServices([...services, newService]);
    setNewServiceName("");
    setNewServiceDuration("");
    setNewServicePrice("");
    setIsModalOpen(false);
  };

  const handleDeleteService = (id: string) => {
    setServices(services.filter((s) => s.id !== id));
  };

  // Mock Days for Operating Hours
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="space-y-10 pb-16">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-dusk-dark/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dusk-dark text-dusk-accent font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> AI Guardrails Config
          </div>
          <h1 className="text-3xl font-black text-dusk-dark tracking-tight">
            Business Settings & Menu
          </h1>
          <p className="text-sm text-dusk-primary font-medium mt-1">
            Configure the exact parameters, operating hours, and service menus your AI agent will follow.
          </p>
        </div>

        <button
          onClick={() => alert("Settings saved successfully!")}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-dusk-dark text-dusk-accent text-sm font-bold shadow-md hover:bg-dusk-primary transition-all duration-200"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>

      {/* Grid Layout for Forms */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Spans: Business Info & Operating Hours */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Business Info Card */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-dusk-dark/10 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-dusk-dark text-dusk-accent flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-dusk-dark tracking-tight">General Business Info</h3>
                <p className="text-xs text-dusk-primary font-medium">Basic identity used across WhatsApp greetings.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-dusk-dark">Business Name</label>
                <input
                  type="text"
                  defaultValue="QuickBot Studio & Salon"
                  className="w-full px-4 py-3 rounded-xl border border-dusk-dark/20 text-sm font-medium focus:outline-none focus:border-dusk-dark"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-dusk-dark">WhatsApp Phone Number</label>
                <input
                  type="text"
                  defaultValue="+92 300 1234567"
                  className="w-full px-4 py-3 rounded-xl border border-dusk-dark/20 text-sm font-medium focus:outline-none focus:border-dusk-dark"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-dusk-dark flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-dusk-primary" /> Timezone
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-dusk-dark/20 text-sm font-medium focus:outline-none focus:border-dusk-dark bg-white">
                  <option>(GMT+05:00) Islamabad, Karachi</option>
                  <option>(GMT+00:00) UTC</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-dusk-dark flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5 text-dusk-primary" /> Currency
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-dusk-dark/20 text-sm font-medium focus:outline-none focus:border-dusk-dark bg-white">
                  <option>PKR (Pakistani Rupee)</option>
                  <option>USD ($)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Operating Hours Card */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-dusk-dark/10 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-dusk-dark text-dusk-accent flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-dusk-dark tracking-tight">Operating Hours</h3>
                <p className="text-xs text-dusk-primary font-medium">AI will only book slots within these open times.</p>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              {days.map((day) => (
                <div key={day} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-3 rounded-2xl bg-dusk-dark/[0.02] border border-dusk-dark/10">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-dusk-dark rounded cursor-pointer" />
                    <span className="text-sm font-bold text-dusk-dark w-28">{day}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-dusk-primary uppercase">Opens</span>
                      <input type="time" defaultValue="09:00" className="px-3 py-1.5 rounded-lg border border-dusk-dark/20 text-xs font-mono" />
                    </div>
                    <span className="text-dusk-dark/40">-</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-dusk-primary uppercase">Closes</span>
                      <input type="time" defaultValue="21:00" className="px-3 py-1.5 rounded-lg border border-dusk-dark/20 text-xs font-mono" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right 1 Span: Services Catalog Management */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-dusk-dark/10 shadow-xs space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-dusk-dark tracking-tight">Services Menu</h3>
                <p className="text-xs text-dusk-primary font-medium">Strict menu prices for AI.</p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-9 h-9 rounded-xl bg-dusk-dark text-dusk-accent flex items-center justify-center hover:bg-dusk-primary transition-colors"
              >
                <Plus className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Services Table List */}
            <div className="space-y-3 pt-2">
              {services.map((service) => (
                <div key={service.id} className="p-4 rounded-2xl bg-dusk-dark/[0.02] border border-dusk-dark/10 flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-dusk-dark">{service.name}</h4>
                    <p className="text-xs font-mono text-dusk-primary">{service.duration} • <span className="font-bold text-dusk-dark">{service.price}</span></p>
                  </div>
                  <button
                    onClick={() => handleDeleteService(service.id)}
                    className="w-8 h-8 rounded-lg text-dusk-dark/40 hover:text-red-600 hover:bg-red-50 flex items-center justify-center transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-3 rounded-2xl border-2 border-dashed border-dusk-dark/20 text-xs font-bold text-dusk-dark hover:border-dusk-dark hover:bg-dusk-dark/5 transition-all flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" /> Add New Service
            </button>
          </div>
        </div>

      </div>

      {/* Add Service Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-dusk-dark/50 backdrop-blur-xs z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full border-2 border-dusk-dark/20 shadow-2xl space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-dusk-dark">Add New Service</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-xs font-mono text-dusk-dark/60 hover:text-dusk-dark">ESC</button>
            </div>

            <form onSubmit={handleAddService} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-dusk-dark">Service Name</label>
                <input
                  type="text"
                  placeholder="e.g., Hair Coloring"
                  value={newServiceName}
                  onChange={(e) => setNewServiceName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-dusk-dark/20 text-sm font-medium focus:outline-none focus:border-dusk-dark"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-dusk-dark">Duration (Minutes)</label>
                <input
                  type="number"
                  placeholder="30"
                  value={newServiceDuration}
                  onChange={(e) => setNewServiceDuration(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-dusk-dark/20 text-sm font-medium focus:outline-none focus:border-dusk-dark"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-dusk-dark">Price (PKR)</label>
                <input
                  type="number"
                  placeholder="1500"
                  value={newServicePrice}
                  onChange={(e) => setNewServicePrice(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-dusk-dark/20 text-sm font-medium focus:outline-none focus:border-dusk-dark"
                  required
                />
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-1/2 py-3 rounded-xl border border-dusk-dark/20 text-xs font-bold text-dusk-dark hover:bg-dusk-dark/5 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-3 rounded-xl bg-dusk-dark text-dusk-accent text-xs font-bold hover:bg-dusk-primary transition-colors shadow-md"
                >
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}