import React from 'react';
import { Link } from 'react-router-dom';
import aboutUsImg from '../images/AboutUs.png'; 

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          SafeNest: Leave your data security worries behind
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl">
        </p>
        <Link
          to="/home"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 mt-12"
        >
          Get Started
        </Link>
        <section className="py-16 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">
          Why limit to security when you can go beyond?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <FeatureCard
            title="Personalized Media Hub"
            description="Create your own Netflix with Jellyfin, featuring centralized library management and multi-device access."
            icon="🎬"
          />
          <FeatureCard
            title="Private Cloud Storage"
            description="Deploy unlimited cloud storage with full control, ensuring data stays secure and private."
            icon="☁️"
          />
          <FeatureCard
            title="Easy Docker Hosting"
            description="Host anything from game servers to databases with simple Docker setup, no technical expertise needed."
            icon="🐳"
          />
          <FeatureCard
            title="User Control"
            description="Manage user accounts and permissions with ease for a tailored, secure experience."
            icon="🔒"
          />
        </div>
      </section>

      </section>

      {/* Features Section */}
      {/* About Us Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-800/40 backdrop-blur-md">
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          
          {/* Image */}
          <div className="flex justify-center">
            <img 
              src={aboutUsImg} // ✅ Corrected usage here
              alt="CodeBlooded illustration" 
              className="w-full max-w-md rounded-2xl shadow-2xl border border-gray-700/40"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg">
              About Us
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              At <span className="font-semibold text-blue-400">SafeNest</span>, we build secure, self-hosted solutions that empower users with digital freedom and privacy.
              Our mission goes beyond tech — we give old hardware a second life, reducing e-waste while delivering powerful, user-friendly tools for modern, sustainable living.
            </p>
          </div>

        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-800/50 backdrop-blur-sm">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <TestimonialCard
            name="Sarah Johnson"
            role="Homeowner"
            quote="SafeNest's Jellyfin setup turned my media collection into a personal Netflix—amazing!"
            image="https://randomuser.me/api/portraits/women/1.jpg"
          />
          <TestimonialCard
            name="Michael Chen"
            role="Tech Enthusiast"
            quote="The cloud storage feature is a game-changer, and Docker setup was a breeze!"
            image="https://randomuser.me/api/portraits/men/2.jpg"
          />
          <TestimonialCard
            name="Emily Davis"
            role="Parent"
            quote="Hosting my own game server with SafeNest was simple and secure—perfect for family fun."
            image="https://randomuser.me/api/portraits/women/3.jpg"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center playwrite-ro">
        <p className="text-4xl dancing-script text-center">
          Join thousands of satisfied customers and unlock the power of SafeNest today.
        </p>
        <h2 className="text-4xl dancing-script text-center">
          So you don't have to think before clicking 
        </h2>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 text-gray-400">
        <div className="text-center">
          <p>© 2025 SafeNest. All rights reserved.</p>
        </div>
        <div className="flex justify-end mt-4">
          <p className="text-lg italic">Built with 🧠 for 🌎.</p>
        </div>
      </footer>
      
    </div>
  );
};

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-700/50 transform hover:scale-105 transition-transform duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-100">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

const TestimonialCard = ({ name, role, quote, image }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-700/50">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
      />
      <p className="text-sm text-gray-300 italic mb-4">"{quote}"</p>
      <p className="text-sm font-semibold text-gray-100">{name}</p>
      <p className="text-xs text-gray-400">{role}</p>
    </div>
  );
};

export default LandingPage;
