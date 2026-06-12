import React, { useState } from 'react';
import { Mail, Phone, Calendar, Clock, CheckCircle, Sparkles, AlertCircle, ArrowLeft, Building2, User } from 'lucide-react';
import { Lead } from '../types';

interface ContactFormProps {
  onLeadSubmit: (lead: Lead) => void;
}

export default function ContactForm({ onLeadSubmit }: ContactFormProps) {
  // Form submission state
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    budget: '$1,000 - $2,500 / month',
    message: '',
  });

  const [formStep, setFormStep] = useState<'form' | 'calendar' | 'confirmed'>('form');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [activeLeadId, setActiveLeadId] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  // Generate responsive dates for calendar starting tomorrow
  const getUpcomingDays = () => {
    const days = [];
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Core local time seeded from metadata is June 11, 2026 (Thursday)
    const baseDate = new Date('2026-06-11T04:00:00-07:00');
    
    let addedCount = 0;
    let offset = 1;
    while (addedCount < 5) {
      const nextDate = new Date(baseDate.getTime());
      nextDate.setDate(baseDate.getDate() + offset);
      const dayOfWeek = nextDate.getDay();
      
      // Only show weekdays for commercial strategy sessions
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        days.push({
          raw: nextDate,
          dayName: weekdays[dayOfWeek],
          dayNum: nextDate.getDate(),
          monthName: months[nextDate.getMonth()],
          dateString: `${nextDate.getFullYear()}-${String(nextDate.getMonth() + 1).padStart(2, '0')}-${String(nextDate.getDate()).padStart(2, '0')}`
        });
        addedCount++;
      }
      offset++;
    }
    return days;
  };

  const upcomingDays = getUpcomingDays();

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '01:30 PM',
    '03:00 PM',
    '04:30 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectBudgetPreset = (budgetVal: string) => {
    setFormData({ ...formData, budget: budgetVal });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Field safety checks
    if (!formData.name.trim() || !formData.businessName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please supply your name, business name, email, and phone contact.');
      return;
    }

    // Construct unique Lead Object
    const newLead: Lead = {
      id: Math.random().toString(36).substring(2, 9),
      name: formData.name,
      businessName: formData.businessName,
      email: formData.email,
      phone: formData.phone,
      budget: formData.budget,
      message: formData.message,
      timestamp: new Date().toLocaleString(),
      status: 'New',
    };

    setActiveLeadId(newLead.id);
    onLeadSubmit(newLead);
    setFormStep('calendar');
  };

  const handleBookingConfirm = () => {
    if (!selectedDate || !selectedTime) {
      setErrorMsg('Please select both a date and a time slot for your Strategy Call.');
      return;
    }

    // Get previous leads and patch the active lead with booked details
    const existingStr = localStorage.getItem('oakspire_leads');
    if (existingStr) {
      try {
        const leads: Lead[] = JSON.parse(existingStr);
        const updated = leads.map(l => {
          if (l.id === activeLeadId) {
            return {
              ...l,
              status: 'Booked' as const,
              scheduledDate: selectedDate,
              scheduledTime: selectedTime
            };
          }
          return l;
        });
        localStorage.setItem('oakspire_leads', JSON.stringify(updated));
        
        // Propagate to outer harness dashboard state
        const updatedLead = updated.find(l => l.id === activeLeadId);
        if (updatedLead) {
          onLeadSubmit(updatedLead);
        }
      } catch (e) {
        console.error(e);
      }
    }

    setFormStep('confirmed');
  };

  const budgetOptions = [
    '$1,000 - $2,500 / month',
    '$2,500 - $5,000 / month',
    '$5,000 - $10,000 / month',
    '$10,000+ / month',
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 text-slate-900 scroll-mt-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Side Content Info Column */}
          <div className="lg:col-span-5 space-y-8 pr-4">
            <div>
              <span className="text-emerald-600 font-semibold tracking-widest uppercase text-xs">
                Acquire Qualified Customers
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 text-slate-900 tracking-tight leading-tight">
                Ready To Generate More Leads?
              </h2>
              <p className="mt-4 text-slate-600">
                Book a free strategy session and discover how Meta Ads can help grow your business. We'll analyze your territory potential and show you our proven lead formulas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white rounded-xl border border-slate-200/60 shadow-sm text-emerald-500">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Consultation</h4>
                  <p className="text-xs text-slate-500">ab@oakspiregrowth.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white rounded-xl border border-slate-200/60 shadow-sm text-emerald-500">
                  <CheckCircle size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">No Hard Selling</h4>
                  <p className="text-xs text-slate-500">Strictly advisory audit calculating geographic client potential.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-emerald-400 p-5 rounded-2xl border border-slate-800 text-xs flex gap-3 items-center">
              <div className="shrink-0 p-1.5 bg-emerald-500/10 rounded">
                <Sparkles size={16} />
              </div>
              <p className="text-slate-300">
                <strong className="text-emerald-400">Zero Agency Fluff:</strong> No sales pressure. If the data shows paid traffic isn’t highly lucrative for your niche, we will tell you directly on the call.
              </p>
            </div>
          </div>

          {/* Form Interactive Flow Column Right */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

            {formStep === 'form' && (
              <form onSubmit={handleFormSubmit} className="space-y-6" id="lead-capture-form">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold tracking-tight text-slate-950">Growth Audit Request</h3>
                  <p className="text-xs text-slate-500">Submit your company snapshot parameters below and step straight to our scheduler calendar.</p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl flex items-center gap-2 border border-red-100">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                      <User size={12} className="text-slate-400" /> Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  {/* Business Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="businessName" className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                      <Building2 size={12} className="text-slate-400" /> Business Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      required
                      placeholder="e.g. Serenity Day Spa"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-700">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="michael@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-slate-700">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Monthly Marketing Budget Option Presets (From prompt) */}
                <div className="space-y-2">
                  <label htmlFor="budget-picker" className="text-xs font-semibold text-slate-700">Monthly Ad Budget Target</label>
                  <div className="grid grid-cols-2 gap-2" id="budget-picker">
                    {budgetOptions.map((opt) => {
                      const isSelected = formData.budget === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => selectBudgetPreset(opt)}
                          className={`px-3 py-2.5 rounded-xl border text-xs font-medium text-left transition-all ${
                            isSelected
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message text area */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-700">Tell us about your services & goals (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Briefly share any specific lead volume targets or past advertising attempts..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-emerald-500 transition-colors"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center p-3.5 rounded-xl text-sm font-bold bg-emerald-500 text-white hover:bg-emerald-600 transition-all font-display shadow-md shadow-emerald-500/15"
                  id="lead-submit-btn"
                >
                  Book My Free Strategy Call
                </button>
              </form>
            )}

            {/* Simulated strategy scheduler calendar step */}
            {formStep === 'calendar' && (
              <div className="space-y-6" id="simulated-booking-calendar">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setFormStep('form')}
                    className="p-1 px-2.5 border rounded-lg text-xs font-medium hover:bg-slate-50 text-slate-500 flex items-center gap-1"
                  >
                    <ArrowLeft size={12} /> Back
                  </button>
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-emerald-500 font-mono bg-emerald-50 px-2 py-0.5 rounded">Strategy Scheduler</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                    <Calendar size={20} className="text-emerald-500" /> Secure Your Call Slot
                  </h3>
                  <p className="text-xs text-slate-500">
                    Submit a real-time meeting schedule. Select a day and direct time slot with an Oakspire strategist below.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl flex items-center gap-2 border border-red-100">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Day Select Picker */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Select Date (Upcoming Weekdays)</span>
                  <div className="grid grid-cols-5 gap-2">
                    {upcomingDays.map((day) => {
                      const isSelected = selectedDate === day.dateString;
                      return (
                        <button
                          key={day.dateString}
                          onClick={() => {
                            setSelectedDate(day.dateString);
                            setErrorMsg('');
                          }}
                          className={`flex flex-col items-center justify-center py-3 rounded-xl border transition-all ${
                            isSelected
                              ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100/80'
                          }`}
                        >
                          <span className="text-[9px] uppercase tracking-wide opacity-80">{day.dayName}</span>
                          <span className="text-sm font-bold mt-0.5">{day.dayNum}</span>
                          <span className="text-[8px] tracking-tight">{day.monthName}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Select Picker */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Select Available Time Slot (PST Zone)</span>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {timeSlots.map((time) => {
                      const isSelected = selectedTime === time;
                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => {
                            setSelectedTime(time);
                            setErrorMsg('');
                          }}
                          className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                            isSelected
                              ? 'bg-emerald-500 border-emerald-500 text-white font-semibold'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <Clock size={12} className={isSelected ? 'text-white' : 'text-slate-400'} />
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Action CTA */}
                <button
                  onClick={handleBookingConfirm}
                  className="w-full inline-flex items-center justify-center p-3.5 rounded-xl text-sm font-bold bg-emerald-500 text-white hover:bg-emerald-600 transition-all font-display shadow-md"
                  id="confirm-booking-btn"
                >
                  Confirm Strategy Call Booking
                </button>
              </div>
            )}

            {/* Confirmed / Thank you State */}
            {formStep === 'confirmed' && (
              <div className="text-center py-10 space-y-6 animate-scaleIn" id="booking-confirmation-canvas">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle size={36} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">Strategy Session Booked!</h3>
                  <div className="inline-flex flex-col items-center gap-1.5 py-2 px-4 rounded-xl bg-slate-50 text-slate-700 text-xs font-medium border border-slate-100 mt-2">
                    <span>Selected Call Slot:</span>
                    <span className="font-bold text-slate-950 font-mono">
                      {upcomingDays.find(d => d.dateString === selectedDate)?.dayName || ''}, {selectedDate} @ {selectedTime} (PST)
                    </span>
                  </div>
                </div>

                <div className="max-w-md mx-auto text-xs text-slate-500 leading-relaxed space-y-3">
                  <p>
                    A strategy audit reservation has been locked for <span className="font-semibold text-slate-900">{formData.businessName}</span>. A diary calendar invite package with an active meeting link has been routed to <strong className="text-slate-800">{formData.email}</strong>.
                  </p>
                  <p className="text-[11px] text-emerald-600 font-semibold bg-emerald-50 p-2 rounded-lg leading-snug">
                    Important: A campaigns audit strategist will review any existing Meta accounts or competitor metrics in your territory prior to our call date.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setFormData({
                      name: '',
                      businessName: '',
                      email: '',
                      phone: '',
                      budget: '$1,000 - $2,500 / month',
                      message: '',
                    });
                    setSelectedDate('');
                    setSelectedTime('');
                    setFormStep('form');
                  }}
                  className="px-5 py-2.5 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
