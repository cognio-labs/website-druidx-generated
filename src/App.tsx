import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin, Phone, Instagram, Facebook, Mail, ChevronRight, Flower, Scissors, Sparkles, Heart } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Signature Facial",
      description: "Rejuvenate your skin with our organic, botanical-infused treatments tailored to your unique complexion.",
      icon: <Sparkles className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Holistic Massage",
      description: "Release tension and restore balance with our expert therapists using ancient techniques and aromatic oils.",
      icon: <Heart className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Fashion Styling",
      description: "Elevate your personal brand with a curated wardrobe session and color analysis led by top fashion consultants.",
      icon: <Scissors className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="font-sans antialiased text-stone-800 bg-stone-50 selection:bg-emerald-200 selection:text-emerald-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Flower className={`w-8 h-8 ${isScrolled ? 'text-emerald-700' : 'text-white'}`} />
            <span className={`text-2xl font-serif tracking-widest uppercase ${isScrolled ? 'text-stone-900' : 'text-white'}`}>Aromi</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Services', 'Experience', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-medium tracking-wide hover:text-emerald-600 transition-colors ${isScrolled ? 'text-stone-600' : 'text-stone-200'}`}>
                {item}
              </a>
            ))}
            <button className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors duration-300 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className={`w-6 h-6 ${isScrolled ? 'text-stone-900' : 'text-white'}`} /> : <Menu className={`w-6 h-6 ${isScrolled ? 'text-stone-900' : 'text-white'}`} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-stone-100 py-6 px-6 flex flex-col gap-4">
            {['About', 'Services', 'Experience', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-stone-600 font-medium hover:text-emerald-700" onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
            <button className="bg-stone-900 text-white px-6 py-3 rounded-full text-sm font-medium w-full mt-2">
              Book Appointment
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Spa Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-emerald-300 tracking-[0.3em] uppercase text-sm mb-4 font-medium animate-fade-in-up">Fashion Meets Wellness</p>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Elevate Your <br/> Essence
          </h1>
          <p className="text-stone-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Experience the synergy of high-fashion aesthetics and holistic healing. A sanctuary where style meets serenity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button className="bg-white text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-emerald-50 transition-all duration-300 hover:scale-105 shadow-lg shadow-white/10">
              Explore Services
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2">
              View Gallery <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Intro / Philosophy */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Relaxing atmosphere" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-emerald-50 p-8 rounded-xl shadow-xl hidden md:block max-w-xs">
              <p className="text-emerald-800 font-serif italic text-lg">"True elegance is the reflection of a calm mind and a nurtured body."</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-serif text-stone-900 mb-6">The Aromi Philosophy</h2>
            <div className="w-16 h-1 bg-emerald-600 mb-8"></div>
            <p className="text-stone-600 leading-relaxed mb-6">
              At Aromi, we believe that self-care is the ultimate fashion statement. Born from a desire to merge the meticulous attention to detail found in haute couture with the restorative powers of traditional spa therapies.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Our curated spaces are designed to transport you from the chaos of the city to a realm of tranquility, where every treatment is personalized to enhance your natural radiance.
            </p>
            <ul className="space-y-4">
              {['Organic & Sustainable Products', 'Expert Aestheticians & Stylists', 'Private Luxury Suites'].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-stone-700">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-600 tracking-widest uppercase text-sm font-semibold mb-3">Our Curations</p>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">Signature Experiences</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">Discover our range of treatments designed to harmonize your outer beauty with inner peace.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full text-emerald-800">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-serif text-stone-900 mb-3">{service.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-6">{service.description}</p>
                  <a href="#" className="inline-flex items-center text-stone-900 font-medium text-sm hover:text-emerald-700 transition-colors group-hover:gap-3 gap-2">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break / Parallax */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Spa Details" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/50"></div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Unwind in Luxury</h2>
          <button className="bg-white text-stone-900 px-8 py-3 rounded-full font-medium hover:bg-emerald-50 transition-colors">
            Book Your Escape
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section id="experience" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-emerald-600 tracking-widest uppercase text-sm font-semibold mb-3">Client Stories</p>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-12">Voices of Serenity</h2>
          
          <div className="bg-stone-50 p-10 md:p-16 rounded-3xl relative">
            <div className="absolute top-8 left-8 text-6xl text-emerald-200 font-serif">"</div>
                <p className="text-xl md:text-2xl text-stone-700 font-light italic leading-relaxed mb-8 relative z-10">
                  Aromi isn't just a spa, it's a transformative experience. The attention to detail in both the ambiance and the treatments is unmatched. I left feeling not just relaxed, but completely renewed.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Client" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-serif font-medium text-stone-900">Isabella Rossi</p>
                    <p className="text-sm text-stone-500">Fashion Editor</p>
                  </div>
                </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-24 px-6 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-serif mb-6">Visit Aromi</h2>
            <p className="text-stone-400 mb-10 leading-relaxed">
              Located in the heart of the fashion district, our sanctuary awaits you. Step inside and leave the world behind.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-emerald-500 mt-1" />
                <div>
                  <h4 className="font-medium text-stone-200">Address</h4>
                  <p className="text-stone-400">123 Luxury Lane, Design District<br/>New York, NY 10012</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-emerald-500 mt-1" />
                <div>
                  <h4 className="font-medium text-stone-200">Phone</h4>
                  <p className="text-stone-400">+1 (212) 555-0199</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-emerald-500 mt-1" />
                <div>
                  <h4 className="font-medium text-stone-200">Email</h4>
                  <p className="text-stone-400">concierge@aromi-spa.com</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="bg-stone-800 p-8 md:p-10 rounded-2xl">
            <h3 className="text-2xl font-serif mb-6">Make an Inquiry</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500 transition-colors" />
                <input type="text" placeholder="Last Name" className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500 transition-colors" />
              <select className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-stone-400 focus:outline-none focus:border-emerald-500 transition-colors">
                <option>Select Service Interest</option>
                <option>Signature Facial</option>
                <option>Holistic Massage</option>
                <option>Fashion Styling</option>
                <option>Other</option>
              </select>
              <textarea placeholder="Your Message" rows="4" className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500 transition-colors"></textarea>
              <button type="submit" className="w-full bg-emerald-700 text-white py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-8 px-6 border-t border-stone-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Flower className="w-5 h-5 text-stone-600" />
            <span className="text-lg font-serif tracking-widest uppercase text-stone-600">Aromi</span>
          </div>
          <p className="text-sm">© 2023 Aromi Fashion Spa. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}