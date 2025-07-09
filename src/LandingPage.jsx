import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, MessageCircle, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import P1 from "./assets/P1.png"
import P2 from "./assets/P2.png"
import P3 from "./assets/P3.png"
import CV from "./assets/Resume.pdf"
import ChiragMalik from "./assets/ChiragMalik.jpeg"


const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showText, setShowText] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  // Sample project images - replace with your actual project images
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      type: "Frontend Development",
      technologies: ["React", "tailwind", "Node.js"],
      description: "Modern e-commerce for Audio devices site",
      image: P1,
      url: "https://auralis.onrender.com/"
    },
    {
      id: 2,
      name: "Service Provider",
      type: "Full-Stack Development",
      technologies: ["React", "php", "Tailwind"],
      description: "Providing digital services to clients",
      image: P2,
      url: "https://digital-creations.vercel.app/"
    },
    {
      id: 3,
      name: "E-Commerce Platform",
      type: "Full Stack Development",
      technologies: ["React", "Tailwind", "Php"],
      description: "E-commerce platform for pads.",
      image: P3,
      url: "https://securepads.vercel.app/"
    },
    
    
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const openProject = (url) => {
    window.open(url, '_blank');
  };

  const openWhatsApp = () => {
    const phoneNumber = "+917915617821"; // Replace with your WhatsApp number
    const message = "Hello! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/chirag-malik-308049285/', '_blank'); // Replace with your LinkedIn profile
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/chiragmalik442/', '_blank'); // Replace with your Instagram profile
  };

  const sendEmail = () => {
    window.location.href = 'mailto:chiragmalik400@gmail.com?subject=Website Inquiry'; // Replace with your email
  };

  const handleFormSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  const whatsappMessage = `Hello! New inquiry from your website:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
  const phoneNumber = "+917015617821";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappUrl, '_blank');
};


  useEffect(() => {
    const timer1 = setTimeout(() => setIsLoaded(true), 100);
    const timer2 = setTimeout(() => setShowText(true), 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const getSkillColor = (skill) => {
    const colorMap = {
      React: '#06b6d4',
      JavaScript: '#a855f7',
      TypeScript: '#ec4899',
      Python: '#22c55e',
      PHP: '#eab308',
      SQL: '#3b82f6',
      Flask: '#ef4444',
      Tailwind: '#14b8a6',
    };
    return colorMap[skill] || '#ffffff';
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-700 to-black overflow-hidden relative">
      {/* Add custom keyframes for animations */}
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          
          @keyframes ping {
            75%, 100% { transform: scale(2); opacity: 0; }
          }
          
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-25%); }
          }
          
          @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100vh); }
          }
          
          @keyframes scan-horizontal {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100vw); }
          }
        `}
      </style>

      {/* Navigation */}
      <nav className="relative z-20 p-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <span className="bg-gradient-to-br from-white to-gray-600 bg-clip-text text-transparent">CM</span>
        </div>
        <div className="flex space-x-6">
          {['About', 'Work', 'Skills', 'Contact'].map((item, index) => (
            <button
              key={item}
              onClick={() => {
          const element = document.getElementById(item.target);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
              className={`px-4 py-2 text-gray-300 font-bold hover:text-white transition-all duration-300 transform hover:scale-105 ${
                showText ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="relative">{item}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen pt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Main Hero Text */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              showText ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 relative">
              <span className="bg-gradient-to-br from-white via-gray-600 to-white bg-clip-text text-transparent">
                HELLO!
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-2">
              I'm <span className="text-white font-bold">Chirag Malik</span>
            </div>
            <div className="text-lg text-gray-300 font-bold mb-6">22 • Frontend Developer</div>
          </div>

          {/* Tech Display */}
          <div className="relative mb-8 w-full max-w-4xl mx-auto z-10">
            {/* Central Code Symbol */}
            <div
              className={`relative mx-auto w-40 h-40 flex items-center justify-center transform transition-all duration-1000 ease-out ${
                isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-0'
              }`}
            >
              <div
                className="absolute inset-0 rounded-full border-2 border-white opacity-30"
                style={{
                  animation: 'spin 4s linear infinite, pulse 2s ease-in-out infinite alternate',
                }}
              ></div>
              <div
                className="absolute inset-2 rounded-full border-2 border-white opacity-50"
                style={{
                  animation: 'spin 3s linear infinite reverse, pulse 1.5s ease-in-out infinite alternate',
                }}
              ></div>
              <div
                className="absolute inset-4 rounded-full border-2 border-white opacity-70"
                style={{
                  animation: 'spin 2s linear infinite, pulse 1s ease-in-out infinite alternate',
                }}
              ></div>
              <div className="relative text-6xl font-black text-white">
                <span className="text-white inline-block animate-pulse">{'<'}</span>
                <span className="text-white mx-1 inline-block animate-bounce">{'/'}</span>
                <span className="text-white inline-block animate-pulse">{'>'}</span>
              </div>
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-white-400/10 via-gray-500/10 to-white-500/10"
                style={{
                  animation: 'pulse 3s ease-in-out infinite, ping 4s cubic-bezier(0, 0, 0.2, 1) infinite',
                }}
              ></div>
            </div>

            {/* Circular Skill Badges in Background */}
            {['React', 'JavaScript', 'TypeScript', 'Python', 'PHP', 'SQL', 'Flask', 'Tailwind'].map(
              (skill, i, arr) => {
                const radius = 500;
                const angle = (i / arr.length) * 2 * Math.PI;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  <div
                    key={skill}
                    className={`absolute bg-slate-800 text-white px-5 py-3 rounded-full text-sm font-semibold border-2 transition-all duration-1000 ease-out hover:scale-110 ${
                      showText ? 'translate-y-0 opacity-70' : 'translate-y-12 opacity-0'
                    }`}
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      transitionDelay: `${1600 + i * 100}ms`,
                      borderColor: getSkillColor(skill),
                      zIndex: 0,
                      filter: 'blur(1.5px)',
                    }}
                  >
                    {skill}
                  </div>
                );
              }
            )}
          </div>

          {/* Description */}
          <div
            className={`max-w-2xl mx-auto transition-all duration-1000 ${
              showText ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '2200ms' }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
              onClick={() => {
          const element = document.getElementById("work");
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
              className="px-8 py-3 bg-gradient-to-br from-white to-gray-700 text-black font-bold rounded-full transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                VIEW MY WORK
              </button>
              <button
              onClick={() => {
          const element = document.getElementById("contact");
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-full transform hover:scale-105 transition-all duration-300 hover:bg-white hover:text-black">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id='about' className="relative z-20 min-h-screen flex items-center justify-center pt-140 pb-60">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
              <span className="bg-gradient-to-br from-white via-gray-600 to-white bg-clip-text text-transparent">
                ABOUT
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              {/* Futuristic Frame */}
              <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
              
                {/* Outer rotating ring */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-white opacity-30"
                  style={{
                    animation: 'spin 10s linear infinite',
                  }}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
                  
                </div>
                {/* Inner circular image container */}
    <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-white/50">
      <img
        src={ChiragMalik}
        alt="Chirag Malik"
        className="w-full h-full object-cover"
      />
    </div>
                 
                  
                  {/* Scanning line effect */}
                  <div
                    className="relative overflow-hidden inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-20"
                    style={{
                      height: '2px',
                      animation: 'scan 3s ease-in-out infinite',
                    }}
                  ></div>
                
                

                {/* Corner brackets */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white"></div>
              </div>

              {/* Floating info cards */}
              <div className="absolute -top-4 -right-4 bg-black border border-white rounded-lg px-4 py-2 text-white text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  ONLINE
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-black border border-white rounded-lg px-4 py-2 text-white text-sm">
                📍 Panipat, India
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* Bio */}
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-white via-gray-500 to-transparent"></div>
                <div className="pl-8">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Frontend Developer & Problem Solver
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    I'm a 22-year-old frontend developer from Panipat, Haryana, with a passion for creating 
                    innovative digital experiences. With a Bachelor's degree in Computer Science, I specialize 
                    in building modern, responsive web applications that push the boundaries of what's possible.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    As a freelancer, I bring fresh perspectives and cutting-edge solutions to every project, 
                    combining technical expertise with creative vision to deliver exceptional results.
                  </p>
                </div>
              </div>

             {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Age', value: '22', icon: '👨‍💻', color: '#06b6d4' },
                  { label: 'Degree', value: 'B.CS', icon: '🎓', color: '#22c55e' },
                  { label: 'Status', value: 'Freelancer', icon: '💼', color: '#a855f7' },
                  { label: 'Location', value: 'Panipat, IN', icon: '🌍', color: '#ef4444' },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="relative group"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Stat Card */}
                    <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-6 h-full transform hover:scale-105 transition-all duration-500 hover:border-white overflow-hidden">
                      {/* Animated Background */}
                      <div
                        className="absolute inset-0 opacity-5 transition-opacity duration-500 group-hover:opacity-10"
                        style={{
                          background: `radial-gradient(circle at 50% 50%, ${stat.color} 0%, transparent 70%)`
                        }}
                      ></div>
                      
                      {/* Scanning Line */}
                      <div
                        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          animation: 'scan-horizontal 2s ease-in-out infinite'
                        }}
                      ></div>

                      {/* Corner Brackets */}
                      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-white opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-white opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-white opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-white opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>

                      <div className="relative z-10 text-center">
                        {/* Icon */}
                        <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                          {stat.icon}
                        </div>
                        
                        {/* Value */}
                        <div className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                          {stat.value}
                        </div>
                        
                        {/* Label */}
                        <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                          {stat.label}
                        </div>

                        {/* Animated underline */}
                        <div
                          className="mt-3 mx-auto h-0.5 w-0 group-hover:w-full transition-all duration-500"
                          style={{
                            backgroundColor: stat.color,
                            boxShadow: `0 0 10px ${stat.color}40`
                          }}
                        ></div>
                      </div>

                      {/* Hover Glow Effect */}
                      <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at center, ${stat.color} 0%, transparent 70%)`,
                          filter: 'blur(20px)'
                        }}
                      ></div>
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                ))}
              </div>

              {/* CTA */}
<div className="pt-6">
  <button 
    onClick={() => {
      const link = document.createElement('a');
      link.href = CV; // Replace with your actual CV file path
      link.download = 'Chirag_Malik_CV.pdf'; // The name for the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }}
    className="px-8 py-3 bg-gradient-to-br from-white to-gray-700 text-black font-bold rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
  >
    DOWNLOAD CV
  </button>
</div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div id='work' className="relative z-20 min-h-screen flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
              <span className="bg-gradient-to-br from-white via-gray-600 to-white bg-clip-text text-transparent">
                My Work
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore my latest projects and innovations in web development
            </p>
          </div>

          {/* Project Slider */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 border border-white rounded-full p-3 text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 border border-white rounded-full p-3 text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            {/* Project Cards Container */}
            <div className="overflow-hidden rounded-2xl border border-gray-700">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="w-full flex-shrink-0 bg-gradient-to-br from-gray-900 to-black relative group"
                  >
                    {/* Project Content */}
                    <div className="flex-col min-h-[600px]">
                      {/* Right - Project Details */}
                      <div className="p-8 md:p-12 flex w-full">
                        <div className='flex flex-col w-[50%]'>
                          {/* Project Number */}
                          <div className="text-6xl font-black text-white/20 mb-4">
                            {String(index + 1).padStart(2, '0')}
                          </div>

                          {/* Project Type */}
                          <div className="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-widest">
                            {project.type}
                          </div>

                          {/* Project Name */}
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {project.name}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            {project.description}
                          </p>
                        </div>

                        <div className='flex flex-col ml-60 flex-1'>
                          {/* Technologies */}
                          <div className="mb-8">
                            <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-white transition-colors duration-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Button */}
                          <button
                            onClick={() => openProject(project.url)}
                            className="self-start px-8 py-3 bg-gradient-to-br from-white to-gray-700 text-black font-bold rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg flex items-center gap-2"
                          >
                            VIEW PROJECT
                            <ExternalLink size={16} />
                          </button>
                        </div>
                      </div>

                      {/* Left - Project Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-transparent opacity-70"></div>
                        {/* Scanning effect */}
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 w-2"
                          style={{
                            animation: 'scan-horizontal 3s ease-in-out infinite',
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white opacity-30"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white opacity-30"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white opacity-30"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white opacity-30"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Indicators */}
            <div className="flex justify-center mt-8 space-x-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? 'bg-white scale-125'
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Project Counter */}
            <div className="text-center mt-6">
              <span className="text-gray-400 text-sm">
                Project {currentProject + 1} of {projects.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id='skills' className="relative z-20 min-h-screen flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
              <span className="bg-gradient-to-br from-white via-gray-600 to-white bg-clip-text text-transparent">
                SKILLS
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Technologies I use to build exceptional digital experiences
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'React.js',
                category: 'Frontend',
                proficiency: 95,
                icon: '⚛️',
                color: '#06b6d4',
                description: 'Component-based UI library'
              },
              {
                name: 'TypeScript',
                category: 'Language',
                proficiency: 88,
                icon: '🔷',
                color: '#3178c6',
                description: 'Type-safe JavaScript'
              },
              {
                name: 'Tailwind CSS',
                category: 'Styling',
                proficiency: 92,
                icon: '🎨',
                color: '#14b8a6',
                description: 'Utility-first CSS framework'
              },
              {
                name: 'Python',
                category: 'Backend',
                proficiency: 85,
                icon: '🐍',
                color: '#22c55e',
                description: 'Versatile programming language'
              },
              {
                name: 'Flask',
                category: 'Framework',
                proficiency: 80,
                icon: '🌶️',
                color: '#ef4444',
                description: 'Lightweight Python web framework'
              },
              {
                name: 'PHP',
                category: 'Backend',
                proficiency: 78,
                icon: '🐘',
                color: '#a855f7',
                description: 'Server-side scripting language'
              },
              {
                name: 'HTML5',
                category: 'Markup',
                proficiency: 98,
                icon: '🌐',
                color: '#f97316',
                description: 'Modern web markup language'
              },
              {
                name: 'CSS3',
                category: 'Styling',
                proficiency: 95,
                icon: '🎭',
                color: '#3b82f6',
                description: 'Advanced styling and animations'
              }
            ].map((skill, index) => (
              <div
                key={skill.name}
                className="relative group"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Skill Card */}
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-6 h-full transform hover:scale-105 transition-all duration-500 hover:border-white overflow-hidden">
                  {/* Animated Background */}
                  <div
                    className="absolute inset-0 opacity-5 transition-opacity duration-500 group-hover:opacity-10"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${skill.color} 0%, transparent 70%)`
                    }}
                  ></div>
                  
                  {/* Scanning Line */}
                  <div
                    className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      animation: 'scan-horizontal 2s ease-in-out infinite'
                    }}
                  ></div>

                  {/* Corner Brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-white opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-white opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-white opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-white opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    {/* Skill Icon */}
                    <div className="text-4xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>

                    {/* Skill Name */}
                    <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </h3>

                    {/* Category */}
                    <div className="text-center mb-4">
                      <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs text-gray-400 uppercase tracking-wider group-hover:border-white group-hover:text-white transition-all duration-300">
                        {skill.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm text-center mb-4 group-hover:text-gray-300 transition-colors duration-300">
                      {skill.description}
                    </p>

                    {/* Proficiency Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Proficiency</span>
                        <span className="text-xs text-white font-bold">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out relative"
                          style={{
                            width: `${skill.proficiency}%`,
                            backgroundColor: skill.color,
                            boxShadow: `0 0 10px ${skill.color}40`
                          }}
                        >
                          {/* Animated shine effect */}
                          <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                            style={{
                              animation: 'scan-horizontal 3s ease-in-out infinite'
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Skill Level Indicator */}
                    <div className="mt-4 text-center">
                      <div className="flex justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i < Math.floor(skill.proficiency / 20)
                                ? 'bg-white'
                                : 'bg-gray-600'
                            }`}
                            style={{
                              backgroundColor: i < Math.floor(skill.proficiency / 20) ? skill.color : undefined
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color} 0%, transparent 70%)`,
                      filter: 'blur(20px)'
                    }}
                  ></div>
                </div>

                {/* Floating Particles */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl p-8 relative overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5"></div>
              <div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                style={{
                  animation: 'scan-horizontal 4s ease-in-out infinite'
                }}
              ></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Full-Stack Development Expertise
                </h3>
                <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
                  With a strong foundation in modern web technologies, I create seamless user experiences 
                  from frontend interfaces to backend systems. My expertise spans across multiple programming 
                  languages and frameworks, allowing me to build comprehensive digital solutions.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                  {[
                    { label: 'Frontend', value: '95%', color: '#06b6d4' },
                    { label: 'Backend', value: '82%', color: '#22c55e' },
                    { label: 'Styling', value: '93%', color: '#14b8a6' },
                    { label: 'Languages', value: '87%', color: '#a855f7' }
                  ].map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className="relative w-16 h-16 mx-auto mb-3">
                        <div className="absolute inset-0 rounded-full border-2 border-gray-700"></div>
                        <div
                          className="absolute inset-0 rounded-full border-2 border-transparent"
                          style={{
                            borderTopColor: stat.color,
                            borderRightColor: stat.color,
                            transform: `rotate(${(parseInt(stat.value) / 100) * 360}deg)`,
                            transition: 'transform 1s ease-out'
                          }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-sm font-bold">{stat.value}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id='contact' className="relative z-20 min-h-screen flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
              <span className="bg-gradient-to-br from-white via-gray-600 to-white bg-clip-text text-transparent">
                CONTACT
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Let's discuss your next project or collaboration. I'm always open to exciting opportunities.
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">chiragmalik400@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">+91 7015617821</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-full flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-gray-300">Panipat, Haryana, India</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Connect With Me</h3>
                <div className="flex gap-4">
                  {/* WhatsApp */}
                  <button
                    onClick={openWhatsApp}
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-full font-semibold hover:from-green-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <MessageCircle size={20} />
                    WhatsApp
                  </button>

                  {/* LinkedIn */}
                  <button
                    onClick={openLinkedIn}
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </button>

                  {/* Instagram */}
                  <button
                    onClick={openInstagram}
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-pink-600 to-purple-700 text-white rounded-full font-semibold hover:from-pink-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <Instagram size={20} />
                    Instagram
                  </button>
                </div>
              </div>

              {/* Quick Email Button */}
              <div className="pt-6">
                <button
                  onClick={sendEmail}
                  className="px-8 py-3 bg-gradient-to-br from-white to-gray-700 text-black font-bold rounded-full transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  SEND EMAIL
                </button>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="relative">
              {/* Futuristic Frame */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl p-8 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white opacity-30"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white opacity-30"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white opacity-30"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white opacity-30"></div>

                {/* Scanning effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5 w-2"
                  style={{
                    animation: 'scan-horizontal 4s ease-in-out infinite',
                  }}
                ></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                  
                  <form onSubmit={handleFormSubmit} className="space-y-6">
  <div>
    <label className="block text-gray-300 text-sm font-semibold mb-2">
      Full Name
    </label>
    <input
      type="text"
      name="name"
      required
      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300"
      placeholder="Your full name"
    />
  </div>

  <div>
    <label className="block text-gray-300 text-sm font-semibold mb-2">
      Email Address
    </label>
    <input
      type="email"
      name="email"
      required
      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300"
      placeholder="your.email@example.com"
    />
  </div>

  <div>
    <label className="block text-gray-300 text-sm font-semibold mb-2">
      Message
    </label>
    <textarea
      name="message"
      rows="4"
      required
      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300 resize-none"
      placeholder="Tell me about your project..."
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full px-8 py-3 bg-gradient-to-br from-white to-gray-700 text-black font-bold rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
  >
    SEND MESSAGE
  </button>
</form>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl p-8 relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Let's turn your ideas into reality. I'm here to help you build something amazing.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={openWhatsApp}
                    className="px-8 py-3 bg-gradient-to-br from-green-600 to-green-700 text-white font-bold rounded-full transform hover:scale-105 transition-all duration-300 hover:shadow-lg flex items-center gap-2 justify-center"
                  >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </button>
                  
                  <button
                    onClick={sendEmail}
                    className="px-8 py-3 border-2 border-white text-white font-bold rounded-full transform hover:scale-105 transition-all duration-300 hover:bg-white hover:text-black flex items-center gap-2 justify-center"
                  >
                    <Mail size={20} />
                    Send Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-20 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold text-white mb-4 md:mb-0">
              <span className="bg-gradient-to-br from-white to-gray-600 bg-clip-text text-transparent">
                Chirag Malik
              </span>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mb-4 md:mb-0">
              <button
                onClick={openWhatsApp}
                className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-full flex items-center justify-center text-white hover:border-white transition-all duration-300 transform hover:scale-110"
              >
                <MessageCircle size={18} />
              </button>
              
              <button
                onClick={openLinkedIn}
                className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-full flex items-center justify-center text-white hover:border-white transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={18} />
              </button>
              
              <button
                onClick={openInstagram}
                className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-full flex items-center justify-center text-white hover:border-white transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={18} />
              </button>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 Chirag Malik. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;