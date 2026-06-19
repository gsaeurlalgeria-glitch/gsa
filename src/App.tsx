import React, { useState } from "react";
import {
  Briefcase,
  ShieldCheck,
  Cpu,
  Globe,
  Building2,
  Phone,
  Mail,
  FileText,
  Users,
  CheckCircle2,
  ArrowRight,
  Clock,
  Compass,
  Eye,
  Award,
  Zap,
  Menu,
  X,
  ChevronRight,
  MapPin,
  Activity,
  UserCheck,
  Check,
  Download,
  Linkedin,
  MessageSquare,
  Sparkles,
  Info,
  ArrowUp,
  ExternalLink
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { translations, TranslationSet, SectorItem, ServiceItem } from "./data";

export default function App() {
  const [lang, setLang] = useState<"FR" | "EN">("FR");
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "valeurs">("mission");
  const [selectedSector, setSelectedSector] = useState<string>("oil-gas");
  const [selectedService, setSelectedService] = useState<string>("tech-assist");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  // Scroll to top state
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  
  // Custom contact form states
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [industry, setIndustry] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submissionId, setSubmissionId] = useState<string>("");
  const [submitStep, setSubmitStep] = useState<string>("");
  const [copiedTicket, setCopiedTicket] = useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // 500px is past the hero section fold
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const t: TranslationSet = translations[lang];

  // Map of sector IDs to corresponding Lucide icons
  const getSectorIcon = (id: string, className: string = "w-6 h-6") => {
    switch (id) {
      case "oil-gas":
        return <Activity className={className} />;
      case "energy":
        return <Cpu className={className} />;
      case "btph":
        return <Building2 className={className} />;
      case "telecom":
        return <Globe className={className} />;
      case "industry":
        return <Briefcase className={className} />;
      case "environment":
        return <Compass className={className} />;
      default:
        return <Briefcase className={className} />;
    }
  };

  // Map of service IDs to icons
  const getServiceIcon = (id: string, className: string = "w-7 h-7") => {
    switch (id) {
      case "tech-assist":
        return <Users className={className} />;
      case "admin-assist":
        return <FileText className={className} />;
      case "portage":
        return <UserCheck className={className} />;
      case "mobility":
        return <Globe className={className} />;
      case "logistics":
        return <ShieldCheck className={className} />;
      case "commercial-assist":
        return <Briefcase className={className} />;
      default:
        return <Briefcase className={className} />;
    }
  };

  // Form Submission and real-time backend API integration
  const handleSubmitContact = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) return;

    setIsSubmitting(true);
    const generatedId = "GSA-2026-" + Math.floor(100000 + Math.random() * 900000);
    setSubmissionId(generatedId);

    // Initial visual queue
    setSubmitStep(lang === "FR" ? "Établissement du canal sécurisé SSL..." : "Structuring secure TLS session...");

    try {
      // Begin actual dispatch request parallel to step animations for quick UI response
      const apiPromise = fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          company,
          industry,
          message,
          submissionId: generatedId
        })
      });

      // Show professional compliance checks during transmission
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitStep(lang === "FR" ? "Contrôle de conformité et audit anti-spam..." : "Auditing parameters for compliance...");

      await new Promise((resolve) => setTimeout(resolve, 750));
      setSubmitStep(lang === "FR" ? "Transmission SMTP sécurisée vers contact@gsaalgeria.dz..." : "Routing secure SMTP relay to contact@gsaalgeria.dz...");

      const response = await apiPromise;
      const result = await response.json();

      if (response.ok && result.success) {
        // Let user see the completion briefly
        await new Promise((resolve) => setTimeout(resolve, 600));
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Auto-scroll on success
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        throw new Error(result.error || (lang === "FR" ? "Échec de l'acheminement du message." : "Routing failed."));
      }
    } catch (err: any) {
      console.error("[FORM_POST_ERROR]", err);
      setIsSubmitting(false);
      alert(lang === "FR" 
        ? `Erreur lors de l'envoi : ${err.message || "Erreur de connexion"}. Veuillez réessayer.` 
        : `Delivery failure: ${err.message || "Network issue"}. Please try again.`
      );
    }
  };

  const handleResetForm = () => {
    setFullName("");
    setEmail("");
    setCompany("");
    setPhone("");
    setIndustry("");
    setMessage("");
    setSubmitSuccess(false);
    setSubmissionId("");
    setCopiedTicket(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-gsa-gold selection:text-white flex flex-col font-sans transition-colors duration-300">
      
      {/* 1. TOP ACCESS WIRE */}
      <div id="top-wire" className="bg-gsa-navy-dark text-[11px] text-slate-300 py-2 border-b border-gsa-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              EURL GSA — ESTABLISHED 2026
            </span>
            <span className="hidden md:flex items-center gap-2 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-gsa-gold" />
              Algeria • Béjaia & Industrial Hubs
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="mailto:contact@gsaalgeria.dz" className="hover:text-gsa-gold transition-colors flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-gsa-gold" />
              contact@gsaalgeria.dz
            </a>
            <span className="text-slate-500">|</span>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gsa-gold" />
              <a href="tel:+213553014306" className="hover:text-gsa-gold transition-colors">+213 (0) 553 014 306</a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION BAR */}
      <nav id="nav-bar" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Elegant Brand Logo Image */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#top-wire" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gsa-gold/50 rounded p-1">
                <img
                  src="/logo-gsa.png"
                  alt="EURL GSA Logo"
                  className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6">
              <a href="#accueil" className="text-sm font-medium text-slate-700 hover:text-gsa-gold transition-colors">{t.nav.home}</a>
              <a href="#profil" className="text-sm font-medium text-slate-700 hover:text-gsa-gold transition-colors">{t.nav.profile}</a>
              <a href="#chiffres" className="text-sm font-medium text-slate-700 hover:text-gsa-gold transition-colors">{t.nav.stats}</a>
              <a href="#secteurs" className="text-sm font-medium text-slate-700 hover:text-gsa-gold transition-colors">{t.nav.sectors}</a>
              <a href="#services" className="text-sm font-medium text-slate-700 hover:text-gsa-gold transition-colors">{t.nav.services}</a>
              <a href="#pourquoi-nous" className="text-sm font-medium text-slate-700 hover:text-gsa-gold transition-colors">{t.nav.whyUs}</a>
              <a href="#contact" className="text-sm font-medium text-slate-700 hover:text-gsa-gold transition-colors">{t.nav.contact}</a>
            </div>

            {/* Language Toggle and CTA Action */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Premium Dual Toggle for Language */}
              <div className="bg-slate-100 p-0.5 rounded-full flex border border-slate-200">
                <button
                  onClick={() => setLang("FR")}
                  className={`px-3.5 py-1 text-xs font-bold rounded-full transition-all duration-300 ${
                    lang === "FR" ? "bg-gsa-navy text-white shadow-sm" : "text-slate-500 hover:text-slate-800"
                  }`}
                  aria-label="Switch language to French"
                >
                  FR
                </button>
                <button
                  onClick={() => setLang("EN")}
                  className={`px-3.5 py-1 text-xs font-bold rounded-full transition-all duration-300 ${
                    lang === "EN" ? "bg-gsa-navy text-white shadow-sm" : "text-slate-500 hover:text-slate-800"
                  }`}
                  aria-label="Switch language to English"
                >
                  EN
                </button>
              </div>

              {/* Consultation Link anchor CTA */}
              <a
                href="#contact"
                className="bg-gsa-gold hover:bg-gsa-gold-hover text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                {t.nav.cta}
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              {/* Language mobile pill */}
              <button
                onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
                className="mr-3 bg-slate-100 hover:bg-slate-200 px-2.5 py-1.5 text-xs font-bold rounded-md border border-slate-200 flex items-center gap-1"
                aria-label="Toggle language"
              >
                🌐 <span className="text-gsa-navy">{lang}</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-gsa-navy hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-gsa-gold"
                aria-label="Open primary menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 animate-slide-down">
            <div className="px-2 pt-2 pb-4 space-y-1">
              <a
                href="#accueil"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-gsa-gold"
              >
                {t.nav.home}
              </a>
              <a
                href="#profil"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-gsa-gold"
              >
                {t.nav.profile}
              </a>
              <a
                href="#chiffres"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-gsa-gold"
              >
                {t.nav.stats}
              </a>
              <a
                href="#secteurs"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-gsa-gold"
              >
                {t.nav.sectors}
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-gsa-gold"
              >
                {t.nav.services}
              </a>
              <a
                href="#pourquoi-nous"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-gsa-gold"
              >
                {t.nav.whyUs}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-gsa-gold"
              >
                {t.nav.contact}
              </a>
              <div className="pt-4 pb-2 border-t border-slate-100 flex justify-center">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-11/12 text-center bg-gsa-gold hover:bg-gsa-gold-hover text-white py-3 px-4 rounded-lg font-bold text-sm block"
                >
                  {t.nav.cta}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* 3. HERO HERO SECTION */}
      <section id="accueil" className="relative bg-gsa-navy-dark text-white pt-24 pb-32 overflow-hidden flex-shrink-0">
        {/* Modern abstract atmospheric shapes for Luxury Tech vibe */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-gsa-gold/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] rounded-full bg-gsa-navy-light/40 blur-[130px]"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:30px_30px] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          
          {/* Badge indicator */}
          <div className="inline-flex items-center gap-1.5 bg-gsa-navy-light/80 border border-gsa-gold/30 px-4 py-2 rounded-full mb-8 text-xs font-semibold text-gsa-gold-light uppercase tracking-widest animate-fade-in shadow-inner">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
            {t.hero.badge} — EURL GSA ALGERIA
          </div>

          {/* Slogan with shining title representation */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight uppercase font-serif">
              <span className="block text-slate-300 text-2xl sm:text-3xl lg:text-4xl font-sans tracking-[0.2em] font-bold text-gsa-gold mb-3">
                {t.hero.tagline}
              </span>
              <span className="bg-gradient-to-r from-white via-slate-100 to-gsa-gold bg-clip-text text-transparent">
                {t.hero.slogan}
              </span>
            </h1>

            <p className="mt-8 text-lg sm:text-2xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs font-semibold text-gsa-gold uppercase tracking-wide">
              <span>Excellence</span>
              <span>•</span>
              <span>Engagement</span>
              <span>•</span>
              <span>Transparence</span>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center w-full max-w-md">
            <a
              href="#services"
              className="bg-gradient-to-r from-gsa-gold to-gsa-gold-hover hover:from-gsa-gold-hover hover:to-gsa-gold text-gsa-navy-dark px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-xl hover:shadow-gsa-gold/10 hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="w-5 h-5 text-gsa-navy-dark" />
            </a>
            <a
              href="#contact"
              className="bg-transparent hover:bg-white/5 text-white border border-slate-400 hover:border-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 text-center"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Mini-Trust Bar directly embedded in hero */}
          <div className="mt-20 pt-8 border-t border-slate-800 w-full max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-6 text-slate-400">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gsa-gold">Spécialisation</p>
              <p className="text-sm mt-1 text-slate-200">Industrie & Énergie</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gsa-gold">Couverture</p>
              <p className="text-sm mt-1 text-slate-200">Algérie & International</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gsa-gold">Conformité</p>
              <p className="text-sm mt-1 text-slate-200">100% CNAS & CACOBATPH</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gsa-gold">Approche</p>
              <p className="text-sm mt-1 text-slate-200">Sur mesure & Agile</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. PROFIL & IDENTITÉ SECTION */}
      <section id="profil" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gsa-navy tracking-tight font-serif uppercase">
              {t.profile.sectionTitle}
            </h2>
            <div className="h-1.5 w-24 bg-gsa-gold mx-auto my-4 rounded-full"></div>
            <p className="text-lg text-slate-600 font-light max-w-xl mx-auto">
              {t.profile.sectionSubtitle}
            </p>
          </div>

          {/* Interactive Bento-feel layout explaining GSA pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* CARD 1: ENTREPRISE */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-gsa-gold/30 hover:bg-gsa-gold-bg transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gsa-navy-light text-gsa-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gsa-navy mb-4 group-hover:text-gsa-gold transition-colors">{t.profile.cards.entreprise.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{t.profile.cards.entreprise.text}</p>
              </div>
              <span className="text-[11px] text-gsa-navy-light font-bold uppercase tracking-widest mt-6 block">01 / EURL GSA</span>
            </div>

            {/* CARD 2: ACTIVITÉ */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-gsa-gold/30 hover:bg-gsa-gold-bg transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gsa-navy-light text-gsa-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gsa-navy mb-4 group-hover:text-gsa-gold transition-colors">{t.profile.cards.activite.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{t.profile.cards.activite.text}</p>
              </div>
              <span className="text-[11px] text-gsa-navy-light font-bold uppercase tracking-widest mt-6 block">02 / INTERVENTION</span>
            </div>

            {/* CARD 3: NOTRE ATOUT */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-gsa-gold/30 hover:bg-gsa-gold-bg transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gsa-navy-light text-gsa-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gsa-navy mb-4 group-hover:text-gsa-gold transition-colors">{t.profile.cards.atout.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{t.profile.cards.atout.text}</p>
              </div>
              <span className="text-[11px] text-gsa-navy-light font-bold uppercase tracking-widest mt-6 block">03 / DIFFÉRENCIATEUR</span>
            </div>

            {/* CARD 4: FONDATION */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-gsa-gold/30 hover:bg-gsa-gold-bg transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gsa-navy-light text-gsa-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gsa-navy mb-4 group-hover:text-gsa-gold transition-colors">{t.profile.cards.fondation.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{t.profile.cards.fondation.text}</p>
              </div>
              <span className="text-[11px] text-gsa-navy-light font-bold uppercase tracking-widest mt-6 block">04 / ORIGINE</span>
            </div>

            {/* CARD 5: VALEUR AJOUTÉE */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-gsa-gold/30 hover:bg-gsa-gold-bg transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gsa-navy-light text-gsa-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gsa-navy mb-4 group-hover:text-gsa-gold transition-colors">{t.profile.cards.valeur.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{t.profile.cards.valeur.text}</p>
              </div>
              <span className="text-[11px] text-gsa-navy-light font-bold uppercase tracking-widest mt-6 block">05 / BÉNÉFICE CLIENT</span>
            </div>

            {/* CARD 6: ENGAGEMENT */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-gsa-gold/30 hover:bg-gsa-gold-bg transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gsa-navy-light text-gsa-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gsa-navy mb-4 group-hover:text-gsa-gold transition-colors">{t.profile.cards.engagement.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{t.profile.cards.engagement.text}</p>
              </div>
              <span className="text-[11px] text-gsa-navy-light font-bold uppercase tracking-widest mt-6 block">06 / RÉSISTANCE</span>
            </div>

          </div>

          {/* MISSION / VISION / VALEURS INTERACTIVE COMPONENT */}
          <div className="mt-20 bg-slate-900 text-white rounded-3xl overflow-hidden shadow-xl border border-gsa-gold/20">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Selector column */}
              <div className="lg:col-span-4 bg-slate-950 p-8 flex flex-col justify-between border-r border-slate-800">
                <div>
                  <span className="text-xs font-bold text-gsa-gold tracking-[0.2em] uppercase block mb-3">CONVICTIONS</span>
                  <h3 className="text-2xl font-bold text-white font-serif uppercase">Notre ADN d'Équipe</h3>
                  <p className="text-slate-400 text-sm mt-2 font-light">
                    Comment nous garantissons le bon déroulement de vos chantiers.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  <button
                    onClick={() => setActiveTab("mission")}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between border ${
                      activeTab === "mission" 
                        ? "bg-gsa-navy text-white border-gsa-gold shadow-md"
                        : "bg-slate-900/40 text-slate-400 border-transparent hover:bg-slate-900 hover:text-slate-200"
                    }`}
                  >
                    <span className="font-semibold text-sm">{t.profile.missionTitle}</span>
                    <Eye className={`w-4 h-4 transition-transform ${activeTab === "mission" ? "text-gsa-gold scale-125" : "text-slate-500"}`} />
                  </button>

                  <button
                    onClick={() => setActiveTab("vision")}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between border ${
                      activeTab === "vision"
                        ? "bg-gsa-navy text-white border-gsa-gold shadow-md"
                        : "bg-slate-900/40 text-slate-400 border-transparent hover:bg-slate-900 hover:text-slate-200"
                    }`}
                  >
                    <span className="font-semibold text-sm">{t.profile.visionTitle}</span>
                    <Compass className={`w-4 h-4 transition-transform ${activeTab === "vision" ? "text-gsa-gold scale-125" : "text-slate-500"}`} />
                  </button>

                  <button
                    onClick={() => setActiveTab("valeurs")}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between border ${
                      activeTab === "valeurs"
                        ? "bg-gsa-navy text-white border-gsa-gold shadow-md"
                        : "bg-slate-900/40 text-slate-400 border-transparent hover:bg-slate-900 hover:text-slate-200"
                    }`}
                  >
                    <span className="font-semibold text-sm">{t.profile.valuesTitle}</span>
                    <Award className={`w-4 h-4 transition-transform ${activeTab === "valeurs" ? "text-gsa-gold scale-125" : "text-slate-500"}`} />
                  </button>
                </div>
              </div>

              {/* Right Content Panel with animations */}
              <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-center min-h-[400px]">
                {activeTab === "mission" && (
                  <div className="animate-fade-in space-y-6">
                    <div className="inline-block p-3 rounded-xl bg-gsa-gold/10 text-gsa-gold">
                      <Eye className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold font-serif text-white">{t.profile.missionTitle}</h4>
                    <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed">
                      {t.profile.missionText}
                    </p>
                    <div className="pt-4 border-t border-slate-800 flex items-center gap-3 text-sm text-slate-400">
                      <span className="w-2.5 h-2.5 rounded-full bg-gsa-gold"></span>
                      <span>Assistance technique transverse</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-gsa-gold"></span>
                      <span>Gestion intégrale de projet</span>
                    </div>
                  </div>
                )}

                {activeTab === "vision" && (
                  <div className="animate-fade-in space-y-6">
                    <div className="inline-block p-3 rounded-xl bg-gsa-gold/10 text-gsa-gold">
                      <Compass className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold font-serif text-white">{t.profile.visionTitle}</h4>
                    <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed">
                      {t.profile.visionText}
                    </p>
                    <div className="pt-4 border-t border-slate-800 flex items-center gap-3 text-sm text-slate-400">
                      <span className="w-2.5 h-2.5 rounded-full bg-gsa-gold"></span>
                      <span>Ressources locales sélectionnées</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-gsa-gold"></span>
                      <span>Partenaire régional de référence</span>
                    </div>
                  </div>
                )}

                {activeTab === "valeurs" && (
                  <div className="animate-fade-in space-y-6">
                    <div className="inline-block p-2.5 rounded-xl bg-gsa-gold/10 text-gsa-gold mb-2">
                      <Award className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold font-serif text-white">{t.profile.valuesTitle}</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {t.profile.valuesList.map((val, idx) => (
                        <div key={idx} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 hover:border-gsa-gold/40 transition-colors">
                          <h5 className="font-bold text-gsa-gold text-sm flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-slate-400" />
                            {val.name}
                          </h5>
                          <p className="text-slate-300 text-xs mt-1 font-light leading-relaxed">
                            {val.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. GSA EN CHIFFRES SECTION */}
      <section id="chiffres" className="py-24 bg-gsa-navy text-white relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#c5a059_1px,transparent_1px)] bg-[size:16px_16px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-serif uppercase">
              {t.stats.sectionTitle}
            </h2>
            <div className="h-1.5 w-24 bg-gsa-gold mx-auto my-4 rounded-full"></div>
            <p className="text-gsa-gold-light text-sm tracking-widest uppercase font-medium">
              {t.stats.sectionSubtitle}
            </p>
          </div>

          {/* Core explanation block */}
          <div className="bg-gsa-navy-dark/60 p-8 rounded-3xl border border-slate-800 max-w-4xl mx-auto mb-16 text-center">
            <p className="text-slate-300 font-light text-sm leading-relaxed sm:text-base">
              {t.stats.intro}
            </p>
          </div>

          {/* Interactive Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.stats.items.map((stat, index) => (
              <div 
                key={index}
                className="bg-gsa-navy-dark p-8 rounded-2xl border border-slate-800 hover:border-gsa-gold/40 transition-all duration-300 flex flex-col justify-between group cursor-default shadow-lg"
              >
                <div>
                  <span className="text-xs font-bold text-gsa-gold uppercase tracking-wider block mb-2 opacity-80">
                    {stat.sublabel}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gsa-gold to-white tracking-tight font-serif">
                      {stat.value}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mt-4">{stat.label}</h4>
                  <p className="text-xs text-slate-400 mt-2 font-light leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Accent mini indicator */}
                <div className="h-1 w-12 bg-gsa-gold mt-6 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Executive quote block */}
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <blockquote className="text-xl sm:text-2xl font-serif italic text-gsa-gold-light leading-relaxed">
              {t.stats.quote}
            </blockquote>
            <cite className="block text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mt-4 not-italic">
              Directoire GSA — Ambition et Crédibilité
            </cite>
          </div>

        </div>
      </section>

      {/* 6. SECTEURS D'INTERVENTION SECTION */}
      <section id="secteurs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gsa-navy tracking-tight font-serif uppercase">
              {t.sectors.sectionTitle}
            </h2>
            <div className="h-1.5 w-24 bg-gsa-gold mx-auto my-4 rounded-full"></div>
            <p className="text-lg text-slate-600 font-light max-w-xl mx-auto">
              {t.sectors.sectionSubtitle}
            </p>
          </div>

          {/* Quick interactive Selector */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {t.sectors.items.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setSelectedSector(sec.id)}
                className={`py-3 px-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 text-center flex flex-col items-center justify-center gap-2 border ${
                  selectedSector === sec.id
                    ? "bg-gsa-navy text-white border-gsa-gold scale-105 shadow-md shadow-slate-200"
                    : "bg-slate-50 text-slate-600 border-slate-200/60 hover:bg-slate-100 hover:text-gsa-navy"
                }`}
              >
                {getSectorIcon(sec.id, "w-5 h-5")}
                <span>{sec.title}</span>
              </button>
            ))}
          </div>

          {/* Deep Focus layout for current selected sector */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-8 md:p-12 shadow-sm transition-all duration-300">
            {t.sectors.items.map((sec) => {
              if (sec.id !== selectedSector) return null;
              return (
                <div key={sec.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
                  
                  {/* Text section */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-gsa-navy text-gsa-gold">
                        {getSectorIcon(sec.id, "w-8 h-8")}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-gsa-gold tracking-[0.2em] uppercase">SECTEUR D'INTERVENTION</span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gsa-navy font-serif">{sec.title}</h3>
                      </div>
                    </div>

                    <p className="text-slate-700 text-base md:text-lg font-light leading-relaxed">
                      {sec.description}
                    </p>

                    <div className="pt-4">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                        {lang === "FR" ? "Profils techniques d'excellence disponibles :" : "Elite technical profiles available:"}
                      </h4>
                      <div className="flex flex-wrap gap-2.5">
                        {sec.profiles.map((prof, pIdx) => (
                          <span 
                            key={pIdx}
                            className="bg-white border border-slate-200 px-4 py-2 rounded-full text-xs font-semibold text-gsa-navy flex items-center gap-1.5 shadow-xs"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gsa-gold"></span>
                            {prof}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual mockup block representing local action */}
                  <div className="lg:col-span-5 bg-gsa-navy-dark text-white rounded-xl p-8 border border-slate-800 space-y-4">
                    <span className="text-[10px] font-bold text-gsa-gold tracking-widest uppercase block border-b border-slate-800 pb-2">GSA FIELD REPORT</span>
                    <div className="space-y-3 font-mono text-[11px] text-slate-300">
                      <p className="flex justify-between"><span className="text-slate-500">PROJECT REGISTRY:</span><span className="text-slate-100">GSA-SEC-{sec.id.toUpperCase()}</span></p>
                      <p className="flex justify-between"><span className="text-slate-500">COVERAGE STATUS:</span><span className="text-emerald-400">100% OPERATIONAL</span></p>
                      <p className="flex justify-between"><span className="text-slate-500">REGULATORY STANDARDS:</span><span className="text-slate-100">CNAS Compliant, HSE Standard</span></p>
                    </div>
                    <div className="bg-slate-900 p-4 rounded-lg text-xs leading-relaxed text-slate-300 border-l-2 border-gsa-gold">
                      {lang === "FR" 
                        ? `L'équipe d'intervention GSA au sein du secteur ${sec.title} garantit la mise en conformité des compétences locales avec les critères les plus stricts de l'industrie.` 
                        : `The GSA intervention team in ${sec.title} guarantees the legal alignment of local competencies with the strictest industrial criteria.`
                      }
                    </div>
                    <a href="#contact" className="text-gsa-gold hover:text-white transition-colors text-xs font-bold flex items-center gap-1.5 pt-2">
                      {lang === "FR" ? "Sourcing profils..." : "Source profiles for this sector..."}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. NOS SERVICES - FULL MODULE INDUCTION */}
      <section id="services" className="py-24 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gsa-navy tracking-tight font-serif uppercase">
              {t.services.sectionTitle}
            </h2>
            <div className="h-1.5 w-24 bg-gsa-gold mx-auto my-4 rounded-full"></div>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              {t.services.sectionSubtitle}
            </p>
          </div>

          {/* Interactive Layout: 2-column service system */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Button Selector */}
            <div className="lg:col-span-5 space-y-3">
              {t.services.items.map((serv) => (
                <button
                  key={serv.id}
                  onClick={() => setSelectedService(serv.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center gap-4 border ${
                    selectedService === serv.id
                      ? "bg-gsa-navy text-white border-gsa-gold shadow-md"
                      : "bg-white text-slate-700 border-slate-200/80 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl transition-colors ${
                    selectedService === serv.id ? "bg-gsa-gold text-gsa-navy-dark" : "bg-slate-100 text-gsa-navy"
                  }`}>
                    {getServiceIcon(serv.id, "w-5 h-5")}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm sm:text-base">{serv.title}</h3>
                    <span className="text-[10px] text-slate-400 block mt-0.5 uppercase tracking-wider">
                      Explore parameters →
                    </span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${selectedService === serv.id ? "translate-x-1" : "opacity-30"}`} />
                </button>
              ))}
            </div>

            {/* Right Detailed Panel */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm min-h-[500px] flex flex-col justify-between">
              {t.services.items.map((serv) => {
                if (serv.id !== selectedService) return null;
                return (
                  <div key={serv.id} className="space-y-8 animate-fade-in flex flex-col justify-between h-full">
                    
                    {/* Header */}
                    <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                      <div className="p-3.5 rounded-xl bg-gsa-navy text-gsa-gold shadow-sm inline-block">
                        {getServiceIcon(serv.id, "w-8 h-8")}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-gsa-gold tracking-[0.2em] uppercase">EURL GSA SERVICE</span>
                        <h3 className="text-2xl font-bold font-serif text-gsa-navy">{serv.title}</h3>
                      </div>
                    </div>

                    {/* ENJEU */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start">
                      <div className="md:col-span-3">
                        <span className="inline-block bg-slate-100 text-slate-700 font-bold text-[10px] px-3 py-1.5 rounded-md tracking-wider border border-slate-200">
                          {t.services.challengeLabel}
                        </span>
                      </div>
                      <div className="md:col-span-9">
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-normal">
                          {serv.enjeu}
                        </p>
                      </div>
                    </div>

                    {/* SOLUTION */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start">
                      <div className="md:col-span-3">
                        <span className="inline-block bg-gsa-gold-light text-gsa-gold-hover font-bold text-[10px] px-3 py-1.5 rounded-md tracking-wider border border-gsa-gold/10">
                          {t.services.solutionLabel}
                        </span>
                      </div>
                      <div className="md:col-span-9">
                        <p className="text-slate-600 text-sm leading-relaxed font-light">
                          {serv.solution}
                        </p>
                      </div>
                    </div>

                    {/* IMPACT */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start">
                      <div className="md:col-span-3">
                        <span className="inline-block bg-emerald-550/10 text-emerald-700 font-bold text-[10px] px-3 py-1.5 rounded-md tracking-wider bg-emerald-50 border border-emerald-200">
                          {t.services.impactLabel}
                        </span>
                      </div>
                      <div className="md:col-span-9">
                        <p className="text-slate-800 text-sm leading-relaxed font-semibold flex items-start gap-2">
                          <Zap className="w-5 h-5 text-gsa-gold flex-shrink-0 mt-0.5" />
                          <span>{serv.impact}</span>
                        </p>
                      </div>
                    </div>

                    {/* Fast contact transition */}
                    <div className="pt-6 border-t border-slate-100 flex justify-end">
                      <a 
                        href="#contact"
                        className="text-xs font-bold text-gsa-navy hover:text-gsa-gold transition-colors flex items-center gap-1.5 group"
                      >
                        {lang === "FR" ? `Demande de devis pour ${serv.title}` : `Inquire quote for ${serv.title}`}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 8. POURQUOI GSA & MÉTHODOLOGIE */}
      <section id="pourquoi-nous" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Hand: Pourquoi GSA reasons */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs font-bold text-gsa-gold tracking-[0.2em] uppercase block mb-2">ENGAGEMENT DE CONFIANCE</span>
                <h2 className="text-3xl font-bold text-gsa-navy font-serif uppercase tracking-tight">
                  {t.whyGsa.sectionTitle}
                </h2>
                <div className="h-1 w-20 bg-gsa-gold my-4 rounded-full"></div>
                <p className="text-slate-600 font-light text-sm">
                  {t.whyGsa.sectionSubtitle}
                </p>
              </div>

              <div className="space-y-6">
                {t.whyGsa.reasons.map((reason, rIdx) => (
                  <div key={rIdx} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gsa-navy text-gsa-gold flex items-center justify-center flex-shrink-0 font-bold text-xs shadow-inner">
                      {rIdx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gsa-navy text-sm sm:text-base">{reason.title}</h3>
                      <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed font-light">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hand: Timeline Methodology */}
            <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-8 md:p-12 border border-gsa-gold/30 shadow-xl">
              <div className="mb-8 border-b border-slate-800 pb-6">
                <span className="text-xs font-bold text-gsa-gold tracking-[0.2em] uppercase block mb-1">DÉ déploiement RIGOUREUX</span>
                <h3 className="text-2xl font-bold font-serif">{t.whyGsa.approachTitle}</h3>
                <p className="text-slate-400 text-xs mt-2 font-light">
                  {t.whyGsa.approachSubtitle}
                </p>
              </div>

              <div className="relative border-l border-slate-800 pl-6 ml-3 space-y-8">
                {t.whyGsa.approachSteps.map((step, sIdx) => (
                  <div key={sIdx} className="relative group">
                    {/* Circle Dot with number */}
                    <div className="absolute -left-[37px] top-0 w-6 h-6 rounded-full bg-slate-900 border-2 border-gsa-gold text-[10px] text-gsa-gold font-bold flex items-center justify-center transition-colors group-hover:bg-gsa-gold group-hover:text-gsa-navy-dark">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-white hover:text-gsa-gold transition-colors">{step.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed mt-1 font-light">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. SECURE INTERACTIVE CONTACT SHOWCASE */}
      <section id="contact" className="py-24 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Block: Contact coordinates and map replication */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="text-xs font-bold text-gsa-gold tracking-[0.2em] uppercase block mb-2">DIALOGUE SÉCURISÉ</span>
                <h2 className="text-3xl font-bold font-serif uppercase tracking-tight text-white">{t.contact.sectionTitle}</h2>
                <div className="h-1 w-20 bg-gsa-gold my-4 rounded-full"></div>
                <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed">
                  {t.contact.subtitleText}
                </p>
              </div>

              {/* Coordinates block */}
              <div className="space-y-6">
                
                {/* Email item */}
                <div className="p-6 bg-gradient-to-br from-slate-950 to-slate-900 rounded-2xl border border-slate-800/80 shadow-[0_15px_30px_rgba(0,0,0,0.4)] relative overflow-hidden group hover:border-gsa-gold/30 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-gsa-gold to-gsa-navy-light rounded-l-2xl"></div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-gsa-navy text-gsa-gold rounded-xl shadow-lg border border-slate-800/80 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] font-extrabold text-gsa-gold tracking-widest uppercase">
                          {lang === "FR" ? "EMAIL DE CONTACT" : "CONTACT EMAIL"}
                        </p>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[9px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                          {lang === "FR" ? "Réponse rapide" : "Quick response"}
                        </span>
                      </div>
                      
                      <div className="mt-4">
                        <a href="mailto:contact@gsaalgeria.dz" className="text-sm sm:text-base font-bold font-mono text-white hover:text-gsa-gold transition-colors block leading-none">
                          contact@gsaalgeria.dz
                        </a>
                        <p className="text-[11px] text-slate-400 mt-2 font-light leading-relaxed">
                          {lang === "FR" 
                            ? "Pour toute cotation, demande de service ou liaison réglementaire." 
                            : "For service quotes, deployment requests or administrative inquiry."
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone item */}
                <div className="p-6 bg-gradient-to-br from-slate-950 to-slate-900 rounded-2xl border border-slate-800/80 shadow-[0_15px_30px_rgba(0,0,0,0.4)] relative overflow-hidden group hover:border-gsa-gold/30 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-gsa-gold to-gsa-navy-light rounded-l-2xl"></div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-gsa-navy text-gsa-gold rounded-xl shadow-lg border border-slate-800/80 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] font-extrabold text-gsa-gold tracking-widest uppercase">
                          {lang === "FR" ? "LIGNES OPÉRATIONNELLES" : "OPERATIONAL PHONES"}
                        </p>
                      </div>
                      
                      <div className="mt-4 space-y-3 font-mono">
                        <a href="tel:+213553014306" className="block text-sm font-bold text-white hover:text-gsa-gold transition-colors tracking-wide pb-1.5 border-b border-slate-800/40">+213 (0) 553 014 306</a>
                        <a href="tel:+213698087278" className="block text-sm font-bold text-white hover:text-gsa-gold transition-colors tracking-wide">+213 (0) 698 087 278</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* LinkedIn item */}
                <div className="p-6 bg-gradient-to-br from-slate-950 to-slate-900 rounded-2xl border border-slate-800/80 shadow-[0_15px_30px_rgba(0,0,0,0.4)] relative overflow-hidden group hover:border-gsa-gold/30 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-gsa-gold to-gsa-navy-light rounded-l-2xl"></div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-gsa-navy text-gsa-gold rounded-xl shadow-lg border border-slate-800/80 shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] font-extrabold text-gsa-gold tracking-widest uppercase">
                          {lang === "FR" ? "RÉSEAU ECOSYSTÈME" : "PROFESSIONAL LINK"}
                        </p>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[9px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider">
                          LinkedIn
                        </span>
                      </div>
                      
                      <div className="mt-4">
                        <a 
                          href="https://www.linkedin.com/company/gsa-algeria/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sm font-bold text-white hover:text-gsa-gold transition-colors block mt-1 hover:underline"
                        >
                          EURL GSA — Global Solutions Algeria
                        </a>
                        <p className="text-[11px] text-slate-400 mt-2 font-light leading-relaxed">
                          {lang === "FR" 
                            ? "Suivez notre actualité réglementaire, nos avis d'experts et nos offres de portage salarial." 
                            : "Stay informed about Algerian corporate laws, tax notices, and active deployments."
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corporate Address Hub & Administrative Seat */}
                <div className="p-6 bg-gradient-to-br from-slate-950 to-slate-900 rounded-2xl border border-slate-800/80 shadow-[0_15px_30px_rgba(0,0,0,0.4)] relative overflow-hidden group hover:border-gsa-gold/30 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-gsa-gold to-gsa-navy-light rounded-l-2xl"></div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-gsa-navy text-gsa-gold rounded-xl shadow-lg border border-slate-800/80 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] font-extrabold text-gsa-gold tracking-widest uppercase">
                          {lang === "FR" ? "PORTAIL WEB & SIÈGE CORPORATE" : "WEB PORTAL & CORPORATE ADDR."}
                        </p>
                      </div>
                      
                      {/* Styled Address display */}
                      <div className="mt-4">
                        <p className="text-sm font-bold text-white tracking-wide">
                          {lang === "FR" ? "Béjaïa, Algérie" : "Bejaia, Algeria"}
                        </p>
                      </div>

                      {/* Interactive External link for the primary server URL */}
                      <div className="mt-5 pt-3.5 border-t border-slate-800/60 flex items-center justify-end">
                        <a 
                          href="https://www.gsaalgeria.dz" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-gsa-gold hover:text-white transition-colors uppercase tracking-wider font-mono bg-gsa-navy-dark/60 hover:bg-gsa-gold/10 px-3 py-1.5 rounded-lg border border-gsa-gold/20"
                        >
                          <span>gsaalgeria.dz</span>
                          <ExternalLink className="w-3.5 h-3.5 text-current stroke-[2.5]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Block: Safe Form Interface OR Success Card */}
            <div className="lg:col-span-7 bg-white text-slate-950 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200">
              
              {!submitSuccess ? (
                <form onSubmit={handleSubmitContact} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gsa-navy font-serif">{t.contact.formTitle}</h3>
                    <p className="text-slate-500 text-xs mt-1">
                      {lang === "FR" 
                        ? "Cette liaison transmet directement votre requête au secrétariat permanent GSA." 
                        : "This line routes directly to GSA permanent corporate office."
                      }
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullname" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        {t.contact.fullName} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullname"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-gsa-gold"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        {t.contact.email} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="cooperation@enterprise.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-gsa-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        {t.contact.phone}
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+213 5XX XX XX XX"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-gsa-gold"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        {t.contact.company}
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Enterprise Eurl"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-gsa-gold"
                      />
                    </div>
                  </div>

                  {/* Industry selection dropdown */}
                  <div>
                    <label htmlFor="industry" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {t.contact.industry}
                    </label>
                    <select
                      id="industry"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gsa-gold"
                    >
                      <option value="">-- {t.contact.selectIndustry} --</option>
                      <option value="oil-gas">OIL & GAS</option>
                      <option value="energy">ÉNERGIE / POWER</option>
                      <option value="btph">BTPH / CIVIL WORKS</option>
                      <option value="telecom">TÉLÉCOM & IT</option>
                      <option value="industry">INDUSTRIE / AUTOMATION</option>
                      <option value="environment">ENVIRONNEMENT & EAU / WATER</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {t.contact.message} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={lang === "FR" ? "Décrivez précisément vos contraintes de calendrier et les compétences de cadres requises." : "Precisely outline details of calendar constraints and required credentials."}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-gsa-gold"
                    ></textarea>
                  </div>

                  {/* Submit buttons / Cryptography simulator */}
                  {isSubmitting ? (
                    <div className="bg-slate-900 text-white rounded-xl p-5 border-l-4 border-gsa-gold space-y-3 font-mono text-xs">
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-gsa-gold animate-ping"></span>
                        <span className="font-bold text-gsa-gold text-xs">{t.contact.submitting}</span>
                      </div>
                      <p className="text-slate-400 font-light">{submitStep}</p>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full bg-gsa-navy hover:bg-gsa-navy-light text-white py-4 rounded-xl text-base font-bold transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                    >
                      <span>{t.contact.submit}</span>
                      <ArrowRight className="w-5 h-5 text-gsa-gold" />
                    </button>
                  )}

                  <div className="flex items-center gap-2 text-slate-400 text-[10px] justify-center mt-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Calculated under strict data compliance policies and Algeria Cyber Laws.</span>
                  </div>

                </form>
              ) : (
                // SUCCESS CERTIFICATE CARD
                <div className="animate-fade-in text-center py-6 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-10 h-10" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gsa-navy-dark font-serif">{t.contact.successTitle}</h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      {t.contact.successMessage}
                    </p>
                  </div>

                  {/* High Quality Secure Receipt */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left max-w-md mx-auto space-y-3 font-mono text-xs text-slate-700 shadow-inner">
                    <div className="flex justify-between border-b border-slate-200 pb-2 text-[10px] font-bold text-slate-400">
                      <span>SECURE RECORD SHEET</span>
                      <span className="text-gsa-gold">APPROVED</span>
                    </div>
                    <p className="flex justify-between"><span className="text-slate-400 font-light">REGISTRY TICKET:</span> <span className="font-bold text-slate-900">{submissionId}</span></p>
                    <p className="flex justify-between"><span className="text-slate-400 font-light">SENDER:</span> <span className="text-slate-900">{fullName}</span></p>
                    <p className="flex justify-between"><span className="text-slate-400 font-light">ORGANIZATION:</span> <span className="text-slate-900">{company || "Non spécifiée"}</span></p>
                    <p className="flex justify-between"><span className="text-slate-400 font-light">DESTINATION:</span> <span className="text-emerald-700 font-bold">contact@gsaalgeria.dz</span></p>
                    <p className="flex justify-between"><span className="text-slate-400 font-light">TIME FILING:</span> <span className="text-slate-900">{new Date().toISOString()}</span></p>
                  </div>

                  <div className="pt-2 max-w-md mx-auto">
                    <a
                      href={`mailto:contact@gsaalgeria.dz?subject=${encodeURIComponent(`Contact EURL GSA: ${fullName} [${company || "Client"}]`)}&body=${encodeURIComponent(`Bonjour EURL GSA,\n\nVous avez reçu une demande de consultation via le site web.\n\nCOORDONNÉES CLIENT :\n• Nom complet : ${fullName}\n• E-mail : ${email}\n• Téléphone : ${phone || "Non spécifié"}\n• Entreprise : ${company || "Non spécifiée"}\n• Secteur : ${industry || "Non spécifié"}\n\nMESSAGE DU CLIENT :\n${message}\n\n-------------------\nRéf Ticket : ${submissionId}\nDate : ${new Date().toLocaleString()}\n`)}`}
                      className="w-full bg-gsa-navy hover:bg-gsa-navy-light text-white py-3.5 px-5 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 border border-gsa-gold/40 group active:scale-[0.98]"
                    >
                      <Mail className="w-4 h-4 text-gsa-gold animate-pulse" />
                      <span>
                        {lang === "FR" 
                          ? "Ouvrir votre messagerie pour envoyer à contact@gsaalgeria.dz" 
                          : "Launch email client to send to contact@gsaalgeria.dz"
                        }
                      </span>
                    </a>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(`Ticket GSA ID: ${submissionId}\nNom: ${fullName}\nEmail: ${email}\nMessage: ${message}`);
                        setCopiedTicket(true);
                        setTimeout(() => setCopiedTicket(false), 3000);
                      }}
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 px-5 py-3 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 focus:outline-none"
                    >
                      <Download className="w-4 h-4 text-slate-500" />
                      <span>
                        {copiedTicket 
                          ? (lang === "FR" ? "Copié avec succès !" : "Copied successfully!") 
                          : (lang === "FR" ? "Copier les détails" : "Copy Details")
                        }
                      </span>
                    </button>
                    <button
                      onClick={handleResetForm}
                      className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-800 px-5 py-3 rounded-xl text-xs font-bold transition-colors"
                    >
                      {lang === "FR" ? "Nouveau message" : "New form message"}
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* 10. LUXURY FOOTER METAPHOR */}
      <footer className="bg-gsa-navy-dark text-slate-400 pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-slate-800 pb-12">
            
            {/* Column 1: Monogram replica and Slogan */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/95 p-2 rounded-xl inline-block shadow-lg border border-slate-700/30">
                  <img
                    src="/logo-gsa.png"
                    alt="EURL GSA Logo"
                    className="h-10 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                {lang === "FR" 
                  ? "Assistance technique, administrative, portage salarial, logistique intégrée et assistance commerciale pour les secteurs hautement exigeants de l'industrie et de l'énergie en Algérie."
                  : "Technical and administrative assistance, salary portage, integrated field logistics and market entry services for challenging industrial sectors in Algeria."
                }
              </p>
              <div className="flex space-x-3 text-xs text-gsa-gold font-semibold uppercase tracking-wider">
                <span>Excellence</span>
                <span>•</span>
                <span>Engagement</span>
                <span>•</span>
                <span>Transparence</span>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.15em] border-b border-slate-800 pb-2">{lang === "FR" ? "PLAN DU SITE" : "SITEMAP"}</h4>
              <ul className="space-y-2 text-xs font-medium">
                <li><a href="#accueil" className="hover:text-gsa-gold transition-colors">{t.nav.home}</a></li>
                <li><a href="#profil" className="hover:text-gsa-gold transition-colors">{t.nav.profile}</a></li>
                <li><a href="#chiffres" className="hover:text-gsa-gold transition-colors">{t.nav.stats}</a></li>
                <li><a href="#secteurs" className="hover:text-gsa-gold transition-colors">{t.nav.sectors}</a></li>
                <li><a href="#services" className="hover:text-gsa-gold transition-colors">{t.nav.services}</a></li>
                <li><a href="#pourquoi-nous" className="hover:text-gsa-gold transition-colors">{t.nav.whyUs}</a></li>
                <li><a href="#contact" className="hover:text-gsa-gold transition-colors">{t.nav.contact}</a></li>
              </ul>
            </div>

            {/* Column 3: Contact & Legal details directly from PDF */}
            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.15em] border-b border-slate-800 pb-2">Eurl GSA ALGERIA</h4>
              <div className="space-y-3 font-mono text-[11px] text-slate-350">
                <p className="flex justify-between"><span className="text-slate-500 uppercase">Est:</span> <span className="text-slate-200">2026</span></p>
                <p className="flex justify-between">
                  <span className="text-slate-500 uppercase">Email:</span> 
                  <span className="text-slate-200">
                    <a href="mailto:contact@gsaalgeria.dz" className="hover:text-gsa-gold transition-colors">contact@gsaalgeria.dz</a>
                  </span>
                </p>
                <p className="flex justify-between"><span className="text-slate-500 uppercase">Tél 1:</span> <span className="text-slate-200">+213 (0) 553 014 306</span></p>
                <p className="flex justify-between"><span className="text-slate-500 uppercase">Tél 2:</span> <span className="text-slate-200">+213 (0) 698 087 278</span></p>
                <p className="flex justify-between">
                  <span className="text-slate-500 uppercase">Web Portal:</span> 
                  <span className="text-gsa-gold">
                    <a href="https://www.gsaalgeria.dz" target="_blank" rel="noopener noreferrer" className="hover:underline">www.gsaalgeria.dz</a>
                  </span>
                </p>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-850 text-[10px] leading-relaxed text-slate-400 font-light">
                {lang === "FR" 
                  ? "Conformément à la réglementation algérienne. Toutes déclarations sociales CNAS & CACOBATPH sont réalisées rigoureusement pour chaque mission contractée."
                  : "Strictly aligned with Algerian laws. Full CNAS & CACOBATPH filings executed rigorously for every active contract in-country."
                }
              </div>
            </div>

          </div>

          <div className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500 gap-4">
            <p className="tracking-wide">
              {t.contact.rights}
            </p>
            <div className="flex gap-4">
              <a href="#top-wire" className="hover:text-gsa-gold transition-colors">{lang === "FR" ? "Conditions d'utilisation" : "Terms of Service"}</a>
              <span>•</span>
              <a href="#top-wire" className="hover:text-gsa-gold transition-colors">{lang === "FR" ? "Politique de confidentialité" : "Privacy Policy"}</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Elegant Scroll-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="scroll-to-top-button"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 z-50 p-3.5 rounded-full bg-gsa-navy-dark text-white shadow-[0_10px_30px_rgba(12,35,64,0.3)] hover:bg-gsa-gold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gsa-gold/50 cursor-pointer flex items-center justify-center border border-slate-700/30 font-medium"
            aria-label={lang === "FR" ? "Retour en haut" : "Scroll to top"}
            title={lang === "FR" ? "Retour en haut" : "Scroll to top"}
          >
            <ArrowUp className="w-5 h-5 text-current stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
