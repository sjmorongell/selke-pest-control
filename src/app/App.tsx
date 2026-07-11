import { Phone, Mail, MapPin, Shield, Clock, Star, Bug, Home, Leaf, Award, Users, ChevronDown, Droplets, Wind, Zap, AlertCircle, CheckCircle, Scissors, TreeDeciduous, Check, X, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { QuoteFormModal } from './components/QuoteFormModal';
import { BlogArticle } from './components/BlogArticle';
import { BlogModal } from './components/BlogModal';
import { PestLibraryModal } from './components/PestLibraryModal';
import { LegalModal } from './components/LegalModal';
import { ReviewsCarousel } from './components/ReviewsCarousel';
import FooterLogo from './components/FooterLogo';
import { blogArticles } from './utils/blogContent';
import newLogo from '../imports/Screenshot_2026-05-18_213802.png';
import techWalking from '../imports/b492d4f6-f650-412b-b5ac-975c7d404996-1.png';

const PEST_ACTIVITY = [
  { name: 'Mosquitoes', emoji: '🦟', slug: 'mosquito-control-charlotte-nc', peak: 'May – Oct', months: [1,2,4,6,9,10,10,10,8,6,2,1] },
  { name: 'Ants', emoji: '🐜', slug: 'ant-control-charlotte-nc', peak: 'Mar – Sep', months: [2,2,6,8,9,10,9,8,7,5,3,2] },
  { name: 'Ticks', emoji: '🕷️', slug: 'tick-control-charlotte-nc', peak: 'Apr – Aug', months: [1,2,5,8,10,10,10,9,7,4,2,1] },
  { name: 'Cockroaches', emoji: '🪳', slug: 'cockroach-control-charlotte-nc', peak: 'Jun – Sep', months: [3,3,4,5,7,9,10,10,9,6,4,3] },
  { name: 'Spiders', emoji: '🕸️', slug: 'spider-control-charlotte-nc', peak: 'Aug – Oct', months: [2,2,3,4,5,6,7,9,10,10,6,3] },
  { name: 'Wasps', emoji: '🐝', slug: 'wasp-control-charlotte-nc', peak: 'Jun – Oct', months: [1,1,2,4,6,8,9,10,10,8,3,1] },
  { name: 'Fleas', emoji: '🐛', slug: 'flea-control-charlotte-nc', peak: 'May – Sep', months: [2,2,3,5,8,10,10,10,8,5,3,2] },
  { name: 'Rodents', emoji: '🐭', slug: 'rodent-control-charlotte-nc', peak: 'Sep – Feb', months: [8,7,5,3,3,2,2,3,6,8,9,10] },
];
const ACTIVITY_MONTHS = ['J','F','M','A','M','J','J','A','S','O','N','D'];

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isPestLibraryOpen, setIsPestLibraryOpen] = useState(false);
  const [isGuaranteeModalOpen, setIsGuaranteeModalOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeBlog, setActiveBlog] = useState<string | null>(null);
  const [openProcessStep, setOpenProcessStep] = useState<number | null>(null);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [isAreasDropdownOpen, setIsAreasDropdownOpen] = useState(false);
  const [isPestsDropdownOpen, setIsPestsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobilePestsOpen, setMobilePestsOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [showPromoPopup, setShowPromoPopup] = useState(false);
  const [promoPopupDismissed, setPromoPopupDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPromoPopup(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const pestLinks = [
    { name: 'Mosquito Control', slug: 'mosquito-control-charlotte-nc' },
    { name: 'Ant Control', slug: 'ant-control-charlotte-nc' },
    { name: 'Tick Control', slug: 'tick-control-charlotte-nc' },
    { name: 'Cockroach Control', slug: 'cockroach-control-charlotte-nc' },
    { name: 'Spider Control', slug: 'spider-control-charlotte-nc' },
    { name: 'Wasp Control', slug: 'wasp-control-charlotte-nc' },
    { name: 'Flea Control', slug: 'flea-control-charlotte-nc' },
    { name: 'Rodent Control', slug: 'rodent-control-charlotte-nc' },
  ];

  const serviceAreas = [
    { name: 'Mooresville', slug: 'pest-control-mooresville-nc' },
    { name: 'Charlotte', slug: 'pest-control-charlotte-nc' },
    { name: 'Huntersville', slug: 'pest-control-huntersville-nc' },
    { name: 'Cornelius', slug: 'pest-control-cornelius-nc' },
    { name: 'Davidson', slug: 'pest-control-davidson-nc' },
    { name: 'Denver', slug: 'pest-control-denver-nc' },
    { name: 'Sherrills Ford', slug: 'pest-control-sherrills-ford-nc' },
    { name: 'Statesville', slug: 'pest-control-statesville-nc' },
    { name: 'Troutman', slug: 'pest-control-troutman-nc' },
    { name: 'Weddington', slug: 'pest-control-weddington-nc' },
    { name: 'Waxhaw', slug: 'pest-control-waxhaw-nc' },
    { name: 'Matthews', slug: 'pest-control-matthews-nc' },
  ];

  const blogData = [
    { id: 'mosquitoSeason', icon: <Wind className="w-7 h-7 text-white" />, title: "Mosquito Season in Charlotte: March to October", excerpt: "Learn when mosquitoes are most active in North Carolina and how to protect your family during peak season.", content: blogArticles.mosquitoSeason },
    { id: 'tickProtection', icon: <Bug className="w-7 h-7 text-white" />, title: "Ticks in Charlotte: Protecting Your Yard & Pets", excerpt: "Ticks pose serious health risks. Find out how to identify common tick species and keep your property tick-free year-round.", content: blogArticles.tickProtection },
    { id: 'springAnts', icon: <Zap className="w-7 h-7 text-white" />, title: "Why Ants Explode Every Spring in Charlotte Homes", excerpt: "Discover why ant invasions peak in spring and what actually works to stop them.", content: blogArticles.springAnts },
    { id: 'cleanHomesRoaches', icon: <AlertCircle className="w-7 h-7 text-white" />, title: "Yes, Clean Homes in Charlotte Get Roaches Too", excerpt: "Understand why even the tidiest homes can face cockroach problems and how to prevent them effectively.", content: blogArticles.cleanHomesRoaches },
    { id: 'diyVsPro', icon: <Scissors className="w-7 h-7 text-white" />, title: "DIY vs Professional Pest Control: An Honest Comparison", excerpt: "We break down the real costs, effectiveness, and time investment of both approaches in North Carolina.", content: blogArticles.diyVsProfessional },
    { id: 'fallRodents', icon: <TreeDeciduous className="w-7 h-7 text-white" />, title: "Fall Rodent Prevention Checklist for Charlotte Homes", excerpt: "Follow this comprehensive checklist to rodent-proof your home before winter arrives.", content: blogArticles.fallRodents }
  ];

  const processSteps = [
    { title: "Interior Treatment", description: "Comprehensive treatment of all interior areas including baseboards, cracks, crevices, and problem areas where pests hide." },
    { title: "Dewebbing & Prep", description: "Remove spider webs and prepare exterior surfaces for maximum treatment effectiveness." },
    { title: "Foundation Spray", description: "Apply barrier treatment to foundation, entry points, and all necessary areas around your home to prevent pest entry." },
    { title: "Granular Application", description: "Apply granular treatment to yard, bushes, and landscaped areas for extended outdoor protection." },
    { title: "Mosquito", description: "Complete the service with professional mosquito barrier treatment to your entire yard, providing weeks of relief." }
  ];

  const activeBlogData = blogData.find(b => b.id === activeBlog);

  return (
    <div className="min-h-screen bg-white">
      <QuoteFormModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <PestLibraryModal isOpen={isPestLibraryOpen} onClose={() => setIsPestLibraryOpen(false)} />
      <LegalModal isOpen={isLegalModalOpen} onClose={() => setIsLegalModalOpen(false)} />

      {isGuaranteeModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setIsGuaranteeModalOpen(false)}>
          <div className="bg-white rounded-xl max-w-2xl w-full p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-4"><Shield className="w-10 h-10 text-white" /></div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">100% Satisfaction</h2>
                  <p className="text-xl font-bold text-cyan-600">Selke Guarantee</p>
                </div>
              </div>
              <button onClick={() => setIsGuaranteeModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><X className="w-6 h-6 text-gray-500" /></button>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">At Selke Pest Control, we stand behind our work with an unconditional 100% satisfaction guarantee.</p>
              <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-xl text-cyan-900 mb-3">Our Promise to You</h3>
                <p className="text-gray-700 leading-relaxed">If you experience any issues with bugs between your scheduled quarterly general pest control treatments, we will return to re-treat your property at <strong>absolutely no additional charge</strong>.</p>
              </div>
              <div className="space-y-3">
                {[{t:"No Questions Asked",d:"Simply call us and we'll schedule a free re-treatment visit"},{t:"Fast Response",d:"We typically schedule re-treatments within 2-3 days"},{t:"Complete Coverage",d:"Applies to all pests covered under your quarterly service plan"}].map(({t,d})=>(
                  <div key={t} className="flex items-start gap-3"><div className="bg-green-100 rounded-full p-1 mt-1"><Check className="w-5 h-5 text-green-600" /></div><div><h4 className="font-semibold text-gray-900">{t}</h4><p className="text-gray-600">{d}</p></div></div>
                ))}
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mt-6"><p className="text-center text-gray-700"><strong>Your satisfaction is our priority.</strong> We're not satisfied until you are.</p></div>
            </div>
          </div>
        </div>
      )}

      {activeBlogData && <BlogModal isOpen={!!activeBlog} onClose={() => setActiveBlog(null)} title={activeBlogData.title} content={activeBlogData.content} icon={activeBlogData.icon} />}

      <header className="bg-white shadow-md sticky top-0 z-50 relative" role="banner">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center">
            <a href="/" aria-label="Selke Pest Control - Home"><img src={newLogo} alt="Selke Pest Control logo" className="h-14 md:h-16" /></a>
          </div>
          <nav className="hidden lg:flex items-center gap-4" aria-label="Main navigation">
            <a href="#services" className="text-sm text-gray-700 hover:text-cyan-500 transition-colors">Services</a>
            <a href="#why-us" className="text-sm text-gray-700 hover:text-cyan-500 transition-colors">Why Us</a>
            <button onClick={() => setIsPestLibraryOpen(true)} className="text-sm text-gray-700 hover:text-cyan-500 transition-colors">Pest Library</button>
            <a href="#tips" className="text-sm text-gray-700 hover:text-cyan-500 transition-colors">Tips</a>
            <a href="#faq" className="text-sm text-gray-700 hover:text-cyan-500 transition-colors">FAQ</a>
            <div className="relative" onMouseEnter={() => setIsPestsDropdownOpen(true)} onMouseLeave={() => setIsPestsDropdownOpen(false)}>
              <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-cyan-500 transition-colors">
                Pest Control <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isPestsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isPestsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px]">
                    {pestLinks.map(({ name, slug }) => (
                      <a key={slug} href={`/${slug}`} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">{name}</a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="relative" onMouseEnter={() => setIsAreasDropdownOpen(true)} onMouseLeave={() => setIsAreasDropdownOpen(false)}>
              <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-cyan-500 transition-colors">
                Service Areas <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isAreasDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isAreasDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 grid grid-cols-2 min-w-[340px]">
                    {serviceAreas.map(({ name, slug }) => (
                      <a key={slug} href={`/${slug}`} className="px-4 py-2.5 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">{name}, NC</a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden md:block text-sm text-gray-700 hover:text-cyan-500 transition-colors px-4 py-2 border border-gray-300 rounded-lg hover:border-cyan-500">Customer Portal</a>
            <a href="tel:704-728-0204" className="bg-cyan-500 text-white px-4 md:px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center gap-2 text-sm md:text-base" aria-label="Call Selke Pest Control at 704-728-0204">
              <Phone className="w-4 h-4" aria-hidden="true" /><span className="hidden sm:inline">704-728-0204</span>
            </a>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 z-50 max-h-[80vh] overflow-y-auto">
            <div className="container mx-auto px-4 py-3 space-y-1">
              <a href="#services" className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="#why-us" className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Why Us</a>
              <button onClick={() => { setIsPestLibraryOpen(true); setIsMobileMenuOpen(false); }} className="w-full text-left px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors">Pest Library</button>
              <a href="#tips" className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Tips</a>
              <a href="#faq" className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
              <div>
                <button onClick={() => setMobilePestsOpen(!mobilePestsOpen)} className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-cyan-50 rounded-lg transition-colors">
                  <span>Pest Control</span><ChevronDown className={`w-4 h-4 transition-transform ${mobilePestsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobilePestsOpen && (
                  <div className="pl-4 space-y-1 pb-2">
                    {pestLinks.map(({ name, slug }) => (
                      <a key={slug} href={`/${slug}`} className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{name}</a>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <button onClick={() => setMobileAreasOpen(!mobileAreasOpen)} className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-cyan-50 rounded-lg transition-colors">
                  <span>Service Areas</span><ChevronDown className={`w-4 h-4 transition-transform ${mobileAreasOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileAreasOpen && (
                  <div className="pl-4 grid grid-cols-2 gap-1 pb-2">
                    {serviceAreas.map(({ name, slug }) => (
                      <a key={slug} href={`/${slug}`} className="px-3 py-2 text-sm text-gray-600 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{name}</a>
                    ))}
                  </div>
                )}
              </div>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors">Customer Portal</a>
              <a href="tel:704-728-0204" className="block bg-cyan-500 text-white px-4 py-3 rounded-lg text-center font-semibold hover:bg-cyan-600 transition-colors mt-2">Call 704-728-0204</a>
            </div>
          </div>
        )}
      </header>

      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900 text-white py-24 md:py-40" aria-label="Hero - Charlotte Metro Pest Control">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-cover inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)` }}></div>
        <button onClick={() => setIsGuaranteeModalOpen(true)} className="absolute bottom-8 right-8 hidden md:block cursor-pointer group">
          <style>{`@keyframes shake{0%,100%{transform:rotate(12deg) translateX(0)}25%{transform:rotate(12deg) translateX(-10px)}75%{transform:rotate(12deg) translateX(10px)}}.animate-shake-4{animation:shake 0.5s ease-in-out 4}`}</style>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl opacity-40"></div>
            <div className="relative bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 rounded-full p-1 shadow-2xl transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300 animate-shake-4">
              <div className="bg-white rounded-full p-6">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-2 mx-auto mb-2 w-16 h-16 flex items-center justify-center"><Shield className="w-8 h-8 text-white drop-shadow-lg" /></div>
                  <p className="font-black text-xl bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">100%</p>
                  <p className="text-[10px] font-bold text-gray-700 tracking-wider">SATISFACTION</p>
                  <p className="font-black text-sm bg-gradient-to-r from-cyan-600 to-cyan-700 bg-clip-text text-transparent mt-0.5">Selke Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </button>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-6"><Shield className="w-4 h-4 text-cyan-400" /><span className="text-sm text-cyan-100">Family-Owned & Locally Operated</span></div>
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight"><span className="block">Complete Pest Protection</span><span className="block text-cyan-400">For Your Charlotte Home</span></h1>
            <p className="text-lg md:text-xl mb-10 text-gray-300">Expert solutions for general pests, mosquitoes, stinging insects, and outdoor threats<br/>Most quotes scheduled within 2-3 days • Same-week service available</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button onClick={() => setIsQuoteModalOpen(true)} className="bg-cyan-500 text-white px-10 py-5 rounded-xl hover:bg-cyan-600 transition-all text-lg shadow-xl hover:shadow-2xl transform hover:scale-105">Get Free Quote</button>
              <a href="tel:704-728-0204" className="bg-white text-gray-900 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all text-lg flex items-center justify-center gap-2 shadow-xl"><Phone className="w-5 h-5" />704-728-0204</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[{i:Shield,l:"Selke Guarantee"},{i:Home,l:"Pet & Family Safe"},{i:Star,l:"Licensed & Insured"},{i:Users,l:"Local Experts"}].map(({i:Icon,l})=>(
                <div key={l} className="flex flex-col items-center"><div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mb-2"><Icon className="w-6 h-6 text-cyan-400" /></div><span className="text-sm text-gray-300">{l}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50" aria-label="Our Services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl mb-4">Our Services</h2><p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive pest control solutions tailored to protect your home and family</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{icon:Bug,title:"General Pest Control",desc:"Complete protection against ants, roaches, spiders, and other common household pests. Our proven treatments keep your home pest-free year-round.",items:["Interior & exterior treatment","Quarterly maintenance plans","Safe for pets & children"]},{icon:Leaf,title:"Mosquito Control",desc:"Enjoy your outdoor spaces without the annoyance of mosquitoes. Our targeted treatments reduce mosquito populations by up to 96%.",items:["Yard & perimeter treatment","Monthly seasonal service","Event-based treatments available"]},{icon:Home,title:"Flea & Tick Control",desc:"Protect your pets and family from fleas and ticks. Our comprehensive treatments eliminate existing infestations and prevent future problems.",items:["Indoor & outdoor treatment","Pet-safe formulations","Follow-up inspections included"]}].map(({icon:Icon,title,desc,items})=>(
              <div key={title} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mb-6"><Icon className="w-8 h-8 text-white" /></div>
                <h3 className="text-2xl mb-4">{title}</h3><p className="text-gray-600 mb-6">{desc}</p>
                <ul className="space-y-2 text-gray-600">{items.map(i=><li key={i} className="flex items-start gap-2"><span className="text-cyan-500 mt-1">✓</span><span>{i}</span></li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-4"><Star className="w-4 h-4" /><span className="text-sm">91% of Customers Bundle</span></div>
                <h2 className="text-3xl md:text-4xl mb-4">Save More with Our Bundle Package</h2>
                <p className="text-xl text-cyan-100 mb-6">Combine general pest control with mosquito protection for maximum value and year-round peace of mind.</p>
                <div className="space-y-4">
                  {[{t:"Complete Protection",d:"Comprehensive indoor and outdoor pest control plus mosquito treatments"},{t:"Better Value",d:"Save money compared to purchasing services separately"},{t:"Convenient Scheduling",d:"One technician, one visit - get both services at the same time"},{t:"Get Outside Again",d:"Reclaim your outdoor spaces from mosquitoes and other pests"}].map(({t,d})=>(
                    <div key={t} className="flex items-start gap-3"><div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"><CheckCircle className="w-4 h-4" /></div><div><h3 className="mb-1">{t}</h3><p className="text-cyan-100 text-sm">{d}</p></div></div>
                  ))}
                </div>
                <button onClick={() => setIsQuoteModalOpen(true)} className="mt-8 bg-white text-cyan-700 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg">Get Bundle Quote</button>
              </div>
              <div className="relative"><img src={techWalking} alt="Selke Pest Control technician performing professional pest control service in Charlotte Metro area" className="rounded-2xl shadow-2xl" width="600" height="500" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl mb-4">Our Service Process</h2><p className="text-xl text-gray-600 max-w-2xl mx-auto">Click each step to learn more</p></div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {processSteps.map((step, index) => (
                <button key={index} onClick={() => setOpenProcessStep(openProcessStep === index ? null : index)} className={`p-4 rounded-xl border-2 transition-all text-left relative group ${openProcessStep === index ? 'border-cyan-500 bg-cyan-50 shadow-lg' : 'border-gray-200 bg-white hover:border-cyan-300 hover:shadow-md'}`}>
                  <div className="flex flex-col items-center"><h3 className="text-center text-sm font-semibold mb-2">{step.title}</h3><ChevronDown className={`w-5 h-5 text-cyan-600 transition-transform ${openProcessStep === index ? 'rotate-180' : 'group-hover:translate-y-1'}`} /></div>
                </button>
              ))}
            </div>
            {openProcessStep !== null && (
              <div className="bg-gray-50 rounded-xl p-8 border-2 border-cyan-500">
                <h3 className="text-2xl mb-4 text-cyan-700">{processSteps[openProcessStep].title}</h3>
                <p className="text-gray-700 text-lg">{processSteps[openProcessStep].description}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl mb-4">Homeowner Essentials</h2><p className="text-xl text-gray-600 max-w-2xl mx-auto">Simple steps to protect your home between treatments</p></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[{icon:Shield,title:"Prevention",sub:"Seal Entry Points",desc:"Check windows, doors, and foundation for gaps. Seal cracks and crevices where pests can enter your home."},{icon:Droplets,title:"Mosquitoes",sub:"Eliminate Standing Water",desc:"Empty flower pots, birdbaths, and gutters regularly. Mosquitoes breed in standing water."},{icon:Home,title:"Kitchen Pests",sub:"Store Food Properly",desc:"Keep food in sealed containers, clean up spills immediately, and take out trash regularly."}].map(({icon:Icon,title,sub,desc})=>(
              <div key={title} className="bg-white rounded-xl p-6 shadow-lg"><div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4"><Icon className="w-7 h-7 text-white" /></div><h3 className="text-xl mb-3">{title}</h3><p className="text-gray-600 mb-2">{sub}</p><p className="text-sm text-gray-500">{desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="py-20 bg-white" aria-label="Why Choose Selke Pest Control">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl mb-4">Why Choose Selke Pest Control?</h2><p className="text-xl text-gray-600 max-w-2xl mx-auto">We're not just pest control experts – we're your neighbors committed to protecting Charlotte Metro homes</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[{icon:Shield,title:"100% Guarantee",desc:"If pests return between treatments, we return at no extra cost. Your complete satisfaction is our priority."},{icon:Award,title:"15+ Years Experience",desc:"Backed by over 15 years of pest control expertise serving North Carolina homes and families."},{icon:Home,title:"Pet & Family Safe",desc:"EPA-approved products that are tough on pests but safe for your loved ones and pets."},{icon:Users,title:"Personalized Service",desc:"You'll work directly with our local team, not a call center."},{icon:Clock,title:"Fast Response",desc:"Most quotes scheduled within 2-3 days. Same-week service available for urgent situations."}].map(({icon:Icon,title,desc})=>(
              <div key={title} className="text-center"><div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6"><Icon className="w-7 h-7 text-cyan-600" /></div><h3 className="text-xl mb-3">{title}</h3><p className="text-gray-600">{desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50" aria-label="Customer Reviews">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real reviews from real Charlotte Metro homeowners</p>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      <section id="areas" className="py-16 bg-white" aria-label="Service Areas - Charlotte Metro">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl mb-4">Serving the Charlotte Metro Area</h2><p className="text-gray-600 max-w-2xl mx-auto">Pest control services in Mooresville, NC and surrounding Charlotte Metro communities</p></div>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map(({ name, slug }) => (
                <a key={slug} href={`/${slug}`} className="bg-gray-100 px-5 py-3 rounded-full hover:bg-cyan-500 hover:text-white transition-colors"><p className="text-sm font-medium">{name}</p></a>
              ))}
            </div>
            <div className="text-center mt-8"><p className="text-gray-600">Don't see your city? <a href="tel:704-728-0204" className="text-cyan-600 hover:text-cyan-700 font-semibold">Call us at 704-728-0204</a></p></div>
          </div>
        </div>
      </section>

      {/* Pest Activity Calendar */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full px-4 py-2 mb-4">
              <Bug className="w-4 h-4 text-cyan-400" /><span className="text-sm text-cyan-300">Charlotte Metro, NC</span>
            </div>
            <h2 className="text-3xl md:text-4xl mb-4">When Pests Are Most Active</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Know what's coming before it arrives. Each pest has a season — here's the full year at a glance for the Charlotte area.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {PEST_ACTIVITY.map(({ name, emoji, slug, peak, months }) => (
              <a key={slug} href={`/${slug}`} className="bg-gray-800 rounded-2xl p-5 hover:bg-gray-750 hover:ring-2 hover:ring-cyan-500/50 transition-all group block">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{emoji}</span>
                  <div>
                    <p className="font-bold text-white group-hover:text-cyan-400 transition-colors">{name}</p>
                    <p className="text-xs text-cyan-400">Peak: {peak}</p>
                  </div>
                </div>
                <div className="flex items-end gap-0.5" style={{ height: '48px' }}>
                  {months.map((level, i) => {
                    const barPx = Math.max(3, Math.round((level / 10) * 44));
                    const isPeak = level >= 7;
                    return (
                      <div
                        key={i}
                        className={`flex-1 rounded-sm ${isPeak ? 'bg-cyan-400' : level >= 4 ? 'bg-cyan-700' : 'bg-gray-600'}`}
                        style={{ height: `${barPx}px` }}
                        title={`${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][i]}: ${level}/10`}
                      />
                    );
                  })}
                </div>
                <div className="flex gap-0.5 mt-1">
                  {ACTIVITY_MONTHS.map(m => (
                    <div key={m} className="flex-1 text-center">
                      <span className="text-gray-600 text-[9px]">{m}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3 group-hover:text-cyan-400 transition-colors">View treatment options →</p>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => setIsQuoteModalOpen(true)} className="bg-cyan-500 text-white px-10 py-4 rounded-xl hover:bg-cyan-600 transition-all text-lg shadow-xl">
              Protect Your Home Year-Round
            </button>
          </div>
        </div>
      </section>

      <section id="tips" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl mb-4">Pest Control Tips & Insights</h2><p className="text-xl text-gray-600 max-w-2xl mx-auto">Expert advice to help you understand and prevent pest problems</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{blogData.map((blog) => <BlogArticle key={blog.id} icon={blog.icon} title={blog.title} excerpt={blog.excerpt} onClick={() => setActiveBlog(blog.id)} />)}</div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white" aria-label="Frequently Asked Questions">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl mb-4">Frequently Asked Questions</h2><p className="text-xl text-gray-600 max-w-2xl mx-auto">Get answers to common questions about our services</p></div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[{question:"What areas do you service?",answer:"We proudly serve the entire Charlotte Metro area including Mooresville, Charlotte, Cornelius, Huntersville, Davidson, Troutman, Denver, Weddington, Waxhaw, Matthews, Indian Trail, and the Lake Norman region. If you don't see your city listed, give us a call at 704-728-0204 to check if we cover your area."},{question:"Are your treatments safe for kids and pets?",answer:"Absolutely! We use EPA-approved products that are tough on pests but safe for your family and pets. Our treatments are designed with your loved ones' safety as our top priority. We'll provide specific instructions if any temporary precautions are needed, but generally, treated areas are safe once dry."},{question:"How fast can you come out?",answer:"Most quotes are scheduled within 2-3 days of your initial contact. For urgent situations, we offer same-week service and can often accommodate same-day appointments depending on availability. We understand pest problems can't wait, so we work hard to respond quickly."},{question:"What if pests come back between scheduled visits?",answer:"That's covered by our Selke Guarantee! If pests return between your scheduled treatments, we'll come back and retreat at no additional charge. Your complete satisfaction is our priority, and we stand behind our work 100%."},{question:"What are your business hours?",answer:"We're available Monday through Saturday, 8:00 AM to 8:00 PM Eastern Standard Time. This gives you flexibility to schedule service at a time that works best for your schedule."},{question:"Do you offer bundled services?",answer:"Yes! In fact, 91% of our customers bundle mosquito control with general pest control because it saves money and provides comprehensive protection. Bundling services is more convenient (one visit for multiple treatments) and gives you better value than purchasing services separately."}].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
                <button onClick={() => setOpenFAQ(openFAQ === index ? null : index)} className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors">
                  <span className="text-lg pr-8">{faq.question}</span><ChevronDown className={`w-5 h-5 text-cyan-600 flex-shrink-0 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                {openFAQ === index && <div className="px-6 pb-5 text-gray-600">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl mb-6">Ready to Get Outside Again?</h2>
            <p className="text-xl mb-8 text-cyan-100">Contact us today for your free quote and experience the Selke difference</p>
            <p className="text-lg mb-10">Monday - Saturday: 8:00 AM - 8:00 PM EST</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:704-728-0204" className="bg-white text-cyan-700 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2 text-lg shadow-xl"><Phone className="w-5 h-5" />704-728-0204</a>
              <button onClick={() => setIsQuoteModalOpen(true)} className="bg-cyan-800 text-white px-10 py-5 rounded-xl hover:bg-cyan-900 transition-all text-lg border-2 border-white shadow-xl">Get Free Quote</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12" role="contentinfo" aria-label="Site footer">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <FooterLogo className="h-20 mb-4" />
              <p className="text-gray-400 mb-3">Family-owned and locally operated. Protecting Charlotte Metro homes with professional, reliable pest control services.</p>
              <address className="text-gray-400 not-italic" itemScope itemType="https://schema.org/PostalAddress"><MapPin className="w-4 h-4 inline mr-2" aria-hidden="true" />Based out of <span itemProp="addressLocality">Mooresville</span>, <span itemProp="addressRegion">North Carolina</span></address>
            </div>
            <div>
              <h3 className="text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
                <li><a href="#why-us" className="hover:text-cyan-400 transition-colors">Why Choose Us</a></li>
                <li><button onClick={() => setIsPestLibraryOpen(true)} className="hover:text-cyan-400 transition-colors">Pest Library</button></li>
                <li><a href="#tips" className="hover:text-cyan-400 transition-colors">Tips & Resources</a></li>
                <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
                <li><button onClick={() => setIsLegalModalOpen(true)} className="hover:text-cyan-400 transition-colors">Privacy Policy & Terms</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-4">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /><a href="tel:704-728-0204" className="hover:text-cyan-400 transition-colors">704-728-0204</a></li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /><a href="mailto:sales@selkepestcontrol.com" className="hover:text-cyan-400 transition-colors">sales@selkepestcontrol.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Selke Pest Control. All rights reserved. Licensed & Insured.</p>
          </div>
        </div>
      </footer>

      {/* $25 Promo Popup — appears after 10 seconds */}
      {showPromoPopup && !promoPopupDismissed && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm">
          <style>{`@keyframes slideUpPop{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}.promo-popup{animation:slideUpPop 0.45s cubic-bezier(0.16,1,0.3,1) forwards}`}</style>
          <div className="promo-popup bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎉</span>
                <p className="text-white font-bold text-lg">New Customer Special</p>
              </div>
              <button onClick={() => setPromoPopupDismissed(true)} className="text-white/70 hover:text-white transition-colors p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5">
              <p className="text-4xl font-black text-gray-900 mb-1">$25 Off</p>
              <p className="text-gray-500 text-sm mb-1">Your first pest control treatment</p>
              <p className="text-gray-700 font-medium mb-5">No hassle. Get outside again!</p>
              <button
                onClick={() => { setIsQuoteModalOpen(true); setPromoPopupDismissed(true); }}
                className="w-full bg-cyan-500 text-white py-3.5 rounded-xl font-semibold hover:bg-cyan-600 transition-colors text-lg"
              >
                Claim My $25 Off →
              </button>
              <button onClick={() => setPromoPopupDismissed(true)} className="w-full text-gray-400 text-sm mt-2.5 py-1 hover:text-gray-600 transition-colors">
                No thanks, I'll pay full price
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
