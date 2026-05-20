import { Phone, Mail, MapPin, Shield, Clock, Star, Bug, Home, Leaf, Award, Users, ChevronDown, Droplets, Wind, Zap, AlertCircle, CheckCircle, Calendar, Scissors, TreeDeciduous, Check, X } from 'lucide-react';
import { useState } from 'react';
import { QuoteFormModal } from './components/QuoteFormModal';
import { BlogArticle } from './components/BlogArticle';
import { BlogModal } from './components/BlogModal';
import { PestLibraryModal } from './components/PestLibraryModal';
import FooterLogo from './components/FooterLogo';
import { blogArticles } from './utils/blogContent';
import newLogo from '../imports/Screenshot_2026-05-18_213802.png';
import techWalking from '../imports/b492d4f6-f650-412b-b5ac-975c7d404996-1.png';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isPestLibraryOpen, setIsPestLibraryOpen] = useState(false);
  const [isGuaranteeModalOpen, setIsGuaranteeModalOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeBlog, setActiveBlog] = useState<string | null>(null);
  const [openProcessStep, setOpenProcessStep] = useState<number | null>(null);

  const blogData = [
    {
      id: 'mosquitoSeason',
      icon: <Wind className="w-7 h-7 text-white" />,
      title: "Mosquito Season in Charlotte: March to October",
      excerpt: "Learn when mosquitoes are most active in North Carolina and how to protect your family during peak season.",
      content: blogArticles.mosquitoSeason
    },
    {
      id: 'tickProtection',
      icon: <Bug className="w-7 h-7 text-white" />,
      title: "Ticks in Charlotte: Protecting Your Yard & Pets",
      excerpt: "Ticks pose serious health risks. Find out how to identify common tick species and keep your property tick-free year-round.",
      content: blogArticles.tickProtection
    },
    {
      id: 'springAnts',
      icon: <Zap className="w-7 h-7 text-white" />,
      title: "Why Ants Explode Every Spring in Charlotte Homes",
      excerpt: "Discover why ant invasions peak in spring and what actually works to stop them.",
      content: blogArticles.springAnts
    },
    {
      id: 'cleanHomesRoaches',
      icon: <AlertCircle className="w-7 h-7 text-white" />,
      title: "Yes, Clean Homes in Charlotte Get Roaches Too",
      excerpt: "Understand why even the tidiest homes can face cockroach problems and how to prevent them effectively.",
      content: blogArticles.cleanHomesRoaches
    },
    {
      id: 'diyVsPro',
      icon: <Scissors className="w-7 h-7 text-white" />,
      title: "DIY vs Professional Pest Control: An Honest Comparison",
      excerpt: "We break down the real costs, effectiveness, and time investment of both approaches in North Carolina.",
      content: blogArticles.diyVsProfessional
    },
    {
      id: 'fallRodents',
      icon: <TreeDeciduous className="w-7 h-7 text-white" />,
      title: "Fall Rodent Prevention Checklist for Charlotte Homes",
      excerpt: "Follow this comprehensive checklist to rodent-proof your home before winter arrives.",
      content: blogArticles.fallRodents
    }
  ];

  const processSteps = [
    {
      title: "Interior Treatment",
      description: "Comprehensive treatment of all interior areas including baseboards, cracks, crevices, and problem areas where pests hide."
    },
    {
      title: "Dewebbing & Prep",
      description: "Remove spider webs and prepare exterior surfaces for maximum treatment effectiveness."
    },
    {
      title: "Foundation Spray",
      description: "Apply barrier treatment to foundation, entry points, and all necessary areas around your home to prevent pest entry."
    },
    {
      title: "Granular Application",
      description: "Apply granular treatment to yard, bushes, and landscaped areas for extended outdoor protection."
    },
    {
      title: "Mosquito",
      description: "Complete the service with professional mosquito barrier treatment to your entire yard, providing weeks of relief."
    }
  ];

  const activeBlogData = blogData.find(b => b.id === activeBlog);

  return (
    <div className="min-h-screen bg-white">
      <QuoteFormModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <PestLibraryModal isOpen={isPestLibraryOpen} onClose={() => setIsPestLibraryOpen(false)} />

      {/* Guarantee Modal */}
      {isGuaranteeModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setIsGuaranteeModalOpen(false)}>
          <div className="bg-white rounded-xl max-w-2xl w-full p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-4">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">100% Satisfaction</h2>
                  <p className="text-xl font-bold text-cyan-600">Selke Guarantee</p>
                </div>
              </div>
              <button
                onClick={() => setIsGuaranteeModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                At Selke Pest Control, we stand behind our work with an unconditional 100% satisfaction guarantee.
              </p>

              <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-xl text-cyan-900 mb-3">Our Promise to You</h3>
                <p className="text-gray-700 leading-relaxed">
                  If you experience any issues with bugs between your scheduled quarterly general pest control treatments,
                  we will return to re-treat your property at <strong>absolutely no additional charge</strong>.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">No Questions Asked</h4>
                    <p className="text-gray-600">Simply call us and we'll schedule a free re-treatment visit</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fast Response</h4>
                    <p className="text-gray-600">We typically schedule re-treatments within 2-3 days</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Complete Coverage</h4>
                    <p className="text-gray-600">Applies to all pests covered under your quarterly service plan</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <p className="text-center text-gray-700">
                  <strong>Your satisfaction is our priority.</strong> We're not satisfied until you are.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeBlogData && (
        <BlogModal
          isOpen={!!activeBlog}
          onClose={() => setActiveBlog(null)}
          title={activeBlogData.title}
          content={activeBlogData.content}
          icon={activeBlogData.icon}
        />
      )}

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center">
            <img src={newLogo} alt="Selke Pest Control" className="h-14 md:h-16" />
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <a href="#services" className="text-gray-700 hover:text-cyan-500 transition-colors">Services</a>
            <a href="#why-us" className="text-gray-700 hover:text-cyan-500 transition-colors">Why Us</a>
            <button onClick={() => setIsPestLibraryOpen(true)} className="text-gray-700 hover:text-cyan-500 transition-colors">Pest Library</button>
            <a href="#tips" className="text-gray-700 hover:text-cyan-500 transition-colors">Tips</a>
            <a href="#faq" className="text-gray-700 hover:text-cyan-500 transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden md:block text-sm text-gray-700 hover:text-cyan-500 transition-colors px-4 py-2 border border-gray-300 rounded-lg hover:border-cyan-500">
              Customer Portal
            </a>
            <a href="tel:704-728-0204" className="bg-cyan-500 text-white px-4 md:px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center gap-2 text-sm md:text-base">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">704-728-0204</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900 text-white py-24 md:py-40">
        <div className="absolute inset-0 bg-black/60"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)` }}
        ></div>

        {/* Guarantee Badge */}
        <button
          onClick={() => setIsGuaranteeModalOpen(true)}
          className="absolute bottom-8 right-8 hidden md:block cursor-pointer group"
        >
          <style>{`
            @keyframes shake {
              0%, 100% {
                transform: rotate(12deg) translateX(0);
              }
              25% {
                transform: rotate(12deg) translateX(-10px);
              }
              75% {
                transform: rotate(12deg) translateX(10px);
              }
            }
            .animate-shake-4 {
              animation: shake 0.5s ease-in-out 4;
            }
          `}</style>
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl opacity-40"></div>

            {/* Main badge */}
            <div className="relative bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 rounded-full p-1 shadow-2xl transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300 animate-shake-4">
              <div className="bg-white rounded-full p-6">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-2 mx-auto mb-2 w-16 h-16 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
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
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-100">Family-Owned & Locally Operated</span>
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
              <span className="block">Complete Pest Protection</span>
              <span className="block text-cyan-400">For Your Charlotte Home</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-300">
              Expert solutions for general pests, mosquitoes, stinging insects, and outdoor threats<br/>
              Most quotes scheduled within 2-3 days • Same-week service available
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button onClick={() => setIsQuoteModalOpen(true)} className="bg-cyan-500 text-white px-10 py-5 rounded-xl hover:bg-cyan-600 transition-all text-lg shadow-xl hover:shadow-2xl transform hover:scale-105">
                Get Free Quote
              </button>
              <a href="tel:704-728-0204" className="bg-white text-gray-900 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all text-lg flex items-center justify-center gap-2 shadow-xl">
                <Phone className="w-5 h-5" />
                704-728-0204
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mb-2">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="text-sm text-gray-300">Selke Guarantee</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mb-2">
                  <Home className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="text-sm text-gray-300">Pet & Family Safe</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="text-sm text-gray-300">Licensed & Insured</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="text-sm text-gray-300">Local Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive pest control solutions tailored to protect your home and family
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mb-6">
                <Bug className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-4">General Pest Control</h3>
              <p className="text-gray-600 mb-6">
                Complete protection against ants, roaches, spiders, and other common household pests. Our proven treatments keep your home pest-free year-round.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Interior & exterior treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Quarterly maintenance plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Safe for pets & children</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-4">Mosquito Control</h3>
              <p className="text-gray-600 mb-6">
                Enjoy your outdoor spaces without the annoyance of mosquitoes. Our targeted treatments reduce mosquito populations by up to 96%.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Yard & perimeter treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Monthly seasonal service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Event-based treatments available</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-4">Flea & Tick Control</h3>
              <p className="text-gray-600 mb-6">
                Protect your pets and family from fleas and ticks. Our comprehensive treatments eliminate existing infestations and prevent future problems.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Indoor & outdoor treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Pet-safe formulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Follow-up inspections included</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Savings Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-4">
                  <Star className="w-4 h-4" />
                  <span className="text-sm">91% of Customers Bundle</span>
                </div>
                <h2 className="text-3xl md:text-4xl mb-4">Save More with Our Bundle Package</h2>
                <p className="text-xl text-cyan-100 mb-6">
                  Combine general pest control with mosquito protection for maximum value and year-round peace of mind.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="mb-1">Complete Protection</h3>
                      <p className="text-cyan-100 text-sm">Comprehensive indoor and outdoor pest control plus mosquito treatments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="mb-1">Better Value</h3>
                      <p className="text-cyan-100 text-sm">Save money compared to purchasing services separately</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="mb-1">Convenient Scheduling</h3>
                      <p className="text-cyan-100 text-sm">One technician, one visit - get both services at the same time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="mb-1">Get Outside Again</h3>
                      <p className="text-cyan-100 text-sm">Reclaim your outdoor spaces from mosquitoes and other pests</p>
                    </div>
                  </div>
                </div>
                <button onClick={() => setIsQuoteModalOpen(true)} className="mt-8 bg-white text-cyan-700 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg">
                  Get Bundle Quote
                </button>
              </div>
              <div className="relative">
                <img
                  src={techWalking}
                  alt="Professional pest control service"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Click each step to learn more
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {processSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setOpenProcessStep(openProcessStep === index ? null : index)}
                  className={`p-4 rounded-xl border-2 transition-all text-left relative group ${
                    openProcessStep === index
                      ? 'border-cyan-500 bg-cyan-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-cyan-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <h3 className="text-center text-sm font-semibold mb-2">{step.title}</h3>
                    <ChevronDown className={`w-5 h-5 text-cyan-600 transition-transform ${openProcessStep === index ? 'rotate-180' : 'group-hover:translate-y-1'}`} />
                  </div>
                </button>
              ))}
            </div>
            {openProcessStep !== null && (
              <div className="bg-gray-50 rounded-xl p-8 border-2 border-cyan-500 animate-in fade-in slide-in-from-top-2 duration-300">
                <h3 className="text-2xl mb-4 text-cyan-700">
                  {processSteps[openProcessStep].title}
                </h3>
                <p className="text-gray-700 text-lg">
                  {processSteps[openProcessStep].description}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Homeowner Tips */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Homeowner Essentials</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to protect your home between treatments
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl mb-3">Prevention</h3>
              <p className="text-gray-600 mb-2">Seal Entry Points</p>
              <p className="text-sm text-gray-500">
                Check windows, doors, and foundation for gaps. Seal cracks and crevices where pests can enter your home.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <Droplets className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl mb-3">Mosquitoes</h3>
              <p className="text-gray-600 mb-2">Eliminate Standing Water</p>
              <p className="text-sm text-gray-500">
                Empty flower pots, birdbaths, and gutters regularly. Mosquitoes breed in standing water.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl mb-3">Kitchen Pests</h3>
              <p className="text-gray-600 mb-2">Store Food Properly</p>
              <p className="text-sm text-gray-500">
                Keep food in sealed containers, clean up spills immediately, and take out trash regularly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose Selke Pest Control?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just pest control experts – we're your neighbors committed to protecting Charlotte Metro homes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-xl mb-3">100% Guarantee</h3>
              <p className="text-gray-600">
                If pests return between treatments, we return at no extra cost. Your complete satisfaction is our priority.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-xl mb-3">15+ Years Experience</h3>
              <p className="text-gray-600">
                Backed by over 15 years of pest control expertise serving North Carolina homes and families.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-xl mb-3">Pet & Family Safe</h3>
              <p className="text-gray-600">
                EPA-approved products that are tough on pests but safe for your loved ones and pets.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-xl mb-3">Personalized Service</h3>
              <p className="text-gray-600">
                You'll work directly with our local team, not a call center.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-xl mb-3">Fast Response</h3>
              <p className="text-gray-600">
                Most quotes scheduled within 2-3 days. Same-week service available for urgent situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by Charlotte Metro families
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah M.",
                location: "Mooresville",
                text: "Finally found a pest control company I can trust! The technician was professional, thorough, and explained everything. No more ants in my kitchen!",
                rating: 5
              },
              {
                name: "Mike R.",
                location: "Huntersville",
                text: "We bundle the mosquito and general pest service and it's been a game changer. We can actually enjoy our backyard again. Highly recommend!",
                rating: 5
              },
              {
                name: "Jennifer L.",
                location: "Cornelius",
                text: "Best decision we made for our home. The Selke team is responsive, professional, and their treatments actually work. Worth every penny.",
                rating: 5
              },
              {
                name: "David K.",
                location: "Charlotte",
                text: "I was skeptical at first, but after one treatment the difference was incredible. No more spiders, roaches gone, and great customer service.",
                rating: 5
              },
              {
                name: "Amanda T.",
                location: "Davidson",
                text: "As a pet owner, I was worried about chemicals. Selke uses safe products and my dogs are fine. Plus, no more fleas! Thank you!",
                rating: 5
              },
              {
                name: "Robert S.",
                location: "Lake Norman",
                text: "The mosquito control is amazing. We had our first outdoor party in years without being eaten alive. The team is fantastic!",
                rating: 5
              },
              {
                name: "Lisa P.",
                location: "Matthews",
                text: "Family-owned and it shows. They treat you like a neighbor, not a number. Quick response, fair pricing, and excellent results.",
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="areas" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Serving the Charlotte Metro Area</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Mooresville', 'Charlotte', 'Cornelius', 'Huntersville',
                'Davidson', 'Troutman', 'Denver', 'Weddington',
                'Waxhaw', 'Matthews', 'Indian Trail', 'Lake Norman'
              ].map((city) => (
                <div key={city} className="bg-gray-100 px-5 py-3 rounded-full hover:bg-cyan-500 hover:text-white transition-colors">
                  <p className="text-sm font-medium">{city}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Don't see your city? <a href="tel:704-728-0204" className="text-cyan-600 hover:text-cyan-700 font-semibold">Call us at 704-728-0204</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips & Resources Section */}
      <section id="tips" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Pest Control Tips & Insights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert advice to help you understand and prevent pest problems
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((blog) => (
              <BlogArticle
                key={blog.id}
                icon={blog.icon}
                title={blog.title}
                excerpt={blog.excerpt}
                onClick={() => setActiveBlog(blog.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our services
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What areas do you service?",
                answer: "We proudly serve the entire Charlotte Metro area including Mooresville, Charlotte, Cornelius, Huntersville, Davidson, Troutman, Denver, Weddington, Waxhaw, Matthews, Indian Trail, and the Lake Norman region. If you don't see your city listed, give us a call at 704-728-0204 to check if we cover your area."
              },
              {
                question: "Are your treatments safe for kids and pets?",
                answer: "Absolutely! We use EPA-approved products that are tough on pests but safe for your family and pets. Our treatments are designed with your loved ones' safety as our top priority. We'll provide specific instructions if any temporary precautions are needed, but generally, treated areas are safe once dry."
              },
              {
                question: "How fast can you come out?",
                answer: "Most quotes are scheduled within 2-3 days of your initial contact. For urgent situations, we offer same-week service and can often accommodate same-day appointments depending on availability. We understand pest problems can't wait, so we work hard to respond quickly."
              },
              {
                question: "What if pests come back between scheduled visits?",
                answer: "That's covered by our Selke Guarantee! If pests return between your scheduled treatments, we'll come back and retreat at no additional charge. Your complete satisfaction is our priority, and we stand behind our work 100%."
              },
              {
                question: "What are your business hours?",
                answer: "We're available Monday through Saturday, 8:00 AM to 8:00 PM Eastern Standard Time. This gives you flexibility to schedule service at a time that works best for your schedule."
              },
              {
                question: "Do you offer bundled services?",
                answer: "Yes! In fact, 91% of our customers bundle mosquito control with general pest control because it saves money and provides comprehensive protection. Bundling services is more convenient (one visit for multiple treatments) and gives you better value than purchasing services separately."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg pr-8">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-cyan-600 flex-shrink-0 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-5 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl mb-6">Ready to Get Outside Again?</h2>
            <p className="text-xl mb-8 text-cyan-100">
              Contact us today for your free quote and experience the Selke difference
            </p>
            <p className="text-lg mb-10">Monday - Saturday: 8:00 AM - 8:00 PM EST</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:704-728-0204" className="bg-white text-cyan-700 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2 text-lg shadow-xl">
                <Phone className="w-5 h-5" />
                704-728-0204
              </a>
              <button onClick={() => setIsQuoteModalOpen(true)} className="bg-cyan-800 text-white px-10 py-5 rounded-xl hover:bg-cyan-900 transition-all text-lg border-2 border-white shadow-xl">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <FooterLogo className="h-20 mb-4" />
              <p className="text-gray-400 mb-3">
                Family-owned and locally operated. Protecting Charlotte Metro homes with professional, reliable pest control services.
              </p>
              <p className="text-gray-400">
                <MapPin className="w-4 h-4 inline mr-2" />
                Based out of Mooresville, North Carolina
              </p>
            </div>
            <div>
              <h3 className="text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
                <li><a href="#why-us" className="hover:text-cyan-400 transition-colors">Why Choose Us</a></li>
                <li><button onClick={() => setIsPestLibraryOpen(true)} className="hover:text-cyan-400 transition-colors">Pest Library</button></li>
                <li><a href="#tips" className="hover:text-cyan-400 transition-colors">Tips & Resources</a></li>
                <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-4">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:704-728-0204" className="hover:text-cyan-400 transition-colors">704-728-0204</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:sales@selkepestcontrol.com" className="hover:text-cyan-400 transition-colors">sales@selkepestcontrol.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Selke Pest Control. All rights reserved. Licensed & Insured.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
