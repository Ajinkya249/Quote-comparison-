import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import solarImg from '../assets/solar.jpg';

function SolarHome() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">

      {/* 🔆 Sunlight Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-yellow-400/30 rounded-full blur-[150px] animate-sunlight z-10 pointer-events-none" />

      {/* 💎 Navbar */}
      <nav className="sticky top-0 z-20 backdrop-blur-md bg-white/10 border-b border-white/10 p-5 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide text-yellow-300">☀️ SolarVision</h1>
        <div className="space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/quote-comparison" className="hover:text-yellow-400 transition">Quote Comparison</Link>
        </div>
      </nav>

      {/* 🌞 Hero Section */}
      <div
        className="relative z-10 flex flex-col items-center justify-center px-6 pt-32 pb-32 text-center bg-black/60"
        style={{
          backgroundImage: `url(${solarImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h2
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text drop-shadow-lg"
        >
          Power Your Future with Solar Energy
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-200 max-w-2xl mx-auto mb-12 text-lg"
        >
          Discover how solar energy saves money, helps the environment, and unlocks energy independence with the latest innovations in solar tech.
        </p>

        {/* 🔢 Stats */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center bg-black/30 p-8 rounded-xl backdrop-blur-sm">
          <Stat title="kWh Saved" value={30000} suffix="+" dataAos="zoom-in" dataAosDelay="0" />
          <Stat title="Saved in Bills" value={500000} prefix="₹" dataAos="zoom-in" dataAosDelay="200" />
          <Stat title="Installations Completed" value={150} dataAos="zoom-in" dataAosDelay="400" />
        </div>

        {/* CTA Button */}
        <Link
          to="/quote-comparison"
          className="mt-12 bg-yellow-400 text-black px-10 py-4 rounded-full shadow-lg text-lg font-semibold hover:bg-yellow-500 transition transform hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Compare Quotes with AI →
        </Link>
      </div>

      {/* 🌟 Features Section */}
      <section className="relative z-10 px-6 md:px-20 py-16 bg-white text-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-aos="fade-up">Powerful Features</h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="150">
          Our AI tool helps you make the best decision when choosing solar installation providers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon="📄" title="Multi-Format Upload" desc="Upload PDFs, Word docs, images or text files from solar providers." />
          <FeatureCard icon="📊" title="AI-Powered Analysis" desc="AI extracts and normalizes key data points for comparison." />
          <FeatureCard icon="📈" title="Interactive Dashboard" desc="Visualize and compare quotes with charts and tables." />
          <FeatureCard icon="🧾" title="Exportable Reports" desc="Download detailed comparison reports to share." />
          <FeatureCard icon="🔒" title="Secure Processing" desc="Your data is encrypted and processed securely." />
          <FeatureCard icon="🎯" title="Smart Recommendations" desc="Personalized suggestions based on your needs." />
        </div>
      </section>

      {/* 🚀 How It Works */}
      <section className="relative z-10 px-6 md:px-20 py-20 bg-black text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-aos="fade-up">How It Works</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="150">
          A simple 3-step process to compare and choose the best solar quote effortlessly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <StepCard number="1" title="Upload Quotes" desc="Upload your vendor quotations in PDF, Word, or image formats." />
          <StepCard number="2" title="AI Compares Them" desc="Our AI analyzes the documents and extracts key data points." />
          <StepCard number="3" title="Get Smart Results" desc="You receive side-by-side comparisons, summaries, and recommendations." />
        </div>
      </section>

      {/* 💡 Why Choose Us */}
      <section className="relative z-10 px-6 md:px-20 py-20 bg-white text-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-aos="fade-up">Why Choose Us?</h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="150">
          Trusted by thousands for transparent solar savings with cutting-edge technology.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <BenefitCard title="Zero Hidden Fees" icon="💸" />
          <BenefitCard title="100% Data Privacy" icon="🔐" />
          <BenefitCard title="Lightning Fast AI" icon="⚡" />
          <BenefitCard title="Expert Support" icon="👨‍🔧" />
        </div>
      </section>

      {/* 📢 CTA Banner */}
      <section
        className="relative z-10 px-6 md:px-20 py-20 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-center"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Saving with Smarter Solar Decisions</h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg">Upload your solar quotes and get intelligent, AI-powered comparisons today.</p>
        <Link
          to="/quote-comparison"
          className="bg-black text-yellow-300 px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Compare Now →
        </Link>
      </section>

      {/* 🌊 Decorative Wave */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.24,22,104.89,42.36,166,42.36s118.91-20.42,172-38.46c58.15-19.75,111.4-35.42,162-27.24,30,4.66,57.15,16.7,85,29.18,37.62,16.6,77.22,30.49,117,30.49s79.09-13.89,117-30.49c27.86-12.48,55-24.52,85-29.18,50.58-8.18,103.83,7.49,162,27.24,53.09,18,110.73,38.46,172,38.46s118.77-20.36,166-42.36V0Z"
            opacity=".2"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

const Stat = ({ title, value, suffix = '', prefix = '', dataAos, dataAosDelay }) => (
  <div className="text-center" data-aos={dataAos} data-aos-delay={dataAosDelay} data-aos-duration="800">
    <h3 className="text-4xl md:text-5xl font-bold text-yellow-400">
      {prefix}<CountUp end={value} duration={3} separator="," />{suffix}
    </h3>
    <p className="text-gray-300 mt-2">{title}</p>
  </div>
);

const FeatureCard = ({ icon, title, desc }) => (
  <div
    className="p-6 rounded-2xl bg-gray-100 shadow hover:shadow-xl transition-all duration-300 border border-transparent hover:border-yellow-400"
    data-aos="fade-up"
    data-aos-duration="700"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);

const StepCard = ({ number, title, desc }) => (
  <div
    className="rounded-xl border border-yellow-500 bg-white/5 backdrop-blur-md p-6 text-center shadow hover:shadow-xl transition"
    data-aos="zoom-in-up"
    data-aos-duration="800"
  >
    <div className="text-5xl font-bold text-yellow-400 mb-4">{number}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 text-sm">{desc}</p>
  </div>
);

const BenefitCard = ({ icon, title }) => (
  <div
    className="rounded-xl bg-yellow-100 text-yellow-800 p-6 text-center shadow-md hover:shadow-xl transition font-medium"
    data-aos="fade-up"
    data-aos-duration="700"
  >
    <div className="text-4xl mb-3">{icon}</div>
    <h4 className="text-lg font-semibold">{title}</h4>
  </div>
);

export default SolarHome;
