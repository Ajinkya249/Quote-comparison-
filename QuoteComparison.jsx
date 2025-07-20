import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUpload, FiSun, FiMoon, FiCheckCircle } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

function QuoteComparison() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState('');

  const toggleDarkMode = () => setDarkMode(!darkMode);

  AOS.init();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedFile(file);
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setAiResult(data.response);
        setShowResults(true);
      } else {
        alert('Error: ' + data.error);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong during upload.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`min-h-screen font-sans ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} transition duration-500`}>

        {/* 🔆 Sun Glow Accent */}
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-yellow-400/20 rounded-full blur-[150px] animate-sunlight z-0 pointer-events-none" />

        {/* 🌐 Navbar */}
        <nav className="sticky top-0 z-20 backdrop-blur-md bg-white/10 border-b border-white/10 p-5 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide text-yellow-300">☀️ SolarVision</h1>
          <div className="space-x-6 text-sm font-medium">
            <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link to="/quote-comparison" className="hover:text-yellow-400 transition">Quote Comparison</Link>
          </div>
          <button onClick={toggleDarkMode} className="text-yellow-400 text-2xl hover:text-yellow-300">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </nav>

        {/* 🧠 Hero */}
        <section className="text-center px-6 pt-24 pb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text drop-shadow-lg">
            Upload & Compare Solar Quotes
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto text-lg">
            Leverage AI to analyze your vendor quotations and get smart, data-backed decisions.
          </p>
        </section>

        {/* 📤 Upload Card */}
        <section className="px-6 pb-20 flex justify-center" data-aos="zoom-in">
          <div className="w-full max-w-xl bg-white dark:bg-white/5 border border-yellow-400/40 backdrop-blur-md rounded-2xl p-10 text-center shadow-xl hover:shadow-2xl transition duration-300">
            <label className="cursor-pointer flex flex-col items-center justify-center">
              <FiUpload className="text-4xl mb-3 text-yellow-400" />
              <span className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Upload Quotation File</span>
              <input
                type="file"
                accept=".pdf,.docx,.jpg,.png"
                onChange={handleFileChange}
                className="hidden"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400">Accepted: PDF, DOCX, JPG, PNG</p>
            </label>

            {selectedFile && (
              <p className="mt-4 text-sm text-green-600 dark:text-green-400 font-medium flex items-center justify-center">
                <FiCheckCircle className="mr-2" /> Uploaded: {selectedFile.name}
              </p>
            )}
          </div>
        </section>

        {/* 🌟 Features */}
        <section className="px-6 md:px-20 pb-20" data-aos="fade-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'AI extracts and compares costs',
              'Highlights unique feature points',
              'Shows savings across vendors',
              'Delivers ranked recommendations',
            ].map((text, idx) => (
              <div
                key={idx}
                className="bg-gray-100 dark:bg-white/5 border border-yellow-400/30 backdrop-blur-md p-6 rounded-xl text-sm text-gray-800 dark:text-gray-300 hover:scale-[1.02] transition shadow"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {text}
              </div>
            ))}
          </div>
        </section>

        {/* 📊 AI Results */}
        {loading && (
          <div className="text-center text-yellow-400 text-lg mb-10">Analyzing quotation with AI...</div>
        )}

        {showResults && aiResult && (
          <section className="px-6 md:px-20 pb-24" data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-center mb-6 text-yellow-500">AI Quote Summary</h3>
            <div className="bg-white dark:bg-white/5 border border-yellow-300/20 p-6 rounded-xl text-left text-gray-800 dark:text-gray-200 shadow-md whitespace-pre-line max-w-3xl mx-auto">
              {aiResult}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default QuoteComparison;
