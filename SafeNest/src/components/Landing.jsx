// import React from 'react';

// const LandingPage = () => {
//   return (
//     <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen font-sans">
//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
//         <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
//           SafeNest: Secure Your Home, Simplify Your Life
//         </h1>
//         <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
//           Experience peace of mind with SafeNest's cutting-edge smart home security system, designed to protect what matters most.
//         </p>
//         <a
//           href="#signup"
//           className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
//         >
//           Get Started Now
//         </a>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 px-4 md:px-8">
//         <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">Why Choose SafeNest?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
//           <FeatureCard
//             title="Real-Time Monitoring"
//             description="Stay connected with live video feeds and instant alerts, accessible from anywhere via our mobile app."
//             icon="📹"
//           />
//           <FeatureCard
//             title="Motion Detection"
//             description="Advanced sensors detect unusual activity and notify you immediately, ensuring rapid response."
//             icon="🚨"
//           />
//           <FeatureCard
//             title="Smart Integration"
//             description="Seamlessly connect with Alexa, Google Home, and other smart devices for a unified experience."
//             icon="🏠"
//           />
//           <FeatureCard
//             title="Mobile Alerts"
//             description="Receive instant notifications for any security events, keeping you informed 24/7."
//             icon="📱"
//           />
//         </div>
//       </section>

//       {/* Testimonial Section */}
//       <section className="py-16 px-4 md:px-8 bg-gray-800/50 backdrop-blur-sm">
//         <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">What Our Customers Say</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           <TestimonialCard
//             name="Sarah Johnson"
//             role="Homeowner"
//             quote="SafeNest gives me peace of mind knowing my family is protected. The app is so easy to use!"
//             image="https://randomuser.me/api/portraits/women/1.jpg"
//           />
//           <TestimonialCard
//             name="Michael Chen"
//             role="Tech Enthusiast"
//             quote="The smart integration with my Google Home is flawless. Highly recommend SafeNest!"
//             image="https://randomuser.me/api/portraits/men/2.jpg"
//           />
//           <TestimonialCard
//             name="Emily Davis"
//             role="Parent"
//             quote="The motion detection caught an intruder before any harm was done. SafeNest is a lifesaver."
//             image="https://randomuser.me/api/portraits/women/3.jpg"
//           />
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4 text-center">
//         <h2 className="text-3xl font-bold mb-4 text-gray-100">Ready to Secure Your Home?</h2>
//         <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
//           Join thousands of satisfied customers and protect your home with SafeNest today.
//         </p>
//         <a
//           href="#signup"
//           className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
//         >
//           Sign Up for a Free Trial
//         </a>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 py-8 px-4 text-center text-gray-400">
//         <p>&copy; 2025 SafeNest. All rights reserved.</p>
//         <div className="mt-4 space-x-4">
//           <a href="#privacy" className="hover:text-gray-200">Privacy Policy</a>
//           <a href="#terms" className="hover:text-gray-200">Terms of Service</a>
//           <a href="#contact" className="hover:text-gray-200">Contact Us</a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// const FeatureCard = ({ title, description, icon }) => {
//   return (
//     <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-700/50 transform hover:scale-105 transition-transform duration-300">
//       <div className="text-4xl mb-4">{icon}</div>
//       <h3 className="text-xl font-semibold mb-2 text-gray-100">{title}</h3>
//       <p className="text-sm text-gray-300">{description}</p>
//     </div>
//   );
// };

// const TestimonialCard = ({ name, role, quote, image }) => {
//   return (
//     <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-700/50">
//       <img
//         src={image}
//         alt={name}
//         className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
//       />
//       <p className="text-sm text-gray-300 italic mb-4">"{quote}"</p>
//       <p className="text-sm font-semibold text-gray-100">{name}</p>
//       <p className="text-xs text-gray-400">{role}</p>
//     </div>
//   );
// };

// export default LandingPage;
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-16">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
      SafeNest: Secure Your Home, Simplify Your Life
    </h1>
    <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl">
      Why limit it to just safety? Let's do much more!
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
      {/* Flashcard 1: Jellyfin Media Hub */}
      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-700/50 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-bold mb-4 text-blue-300">Create Your Own Netflix!</h2>
        <p className="text-sm text-gray-300 mb-3">Enjoy movies, TV, and music on any device using Jellyfin.</p>
        <ul className="list-disc pl-5 text-sm text-gray-400 space-y-2">
          <li>Centralized library management</li>
          <li>Simple UI, accessible from both PCs and mobile devices</li>
          <li>User accounts and permission control</li>
        </ul>
      </div>

      {/* Flashcard 2: Cloud Storage */}
      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-700/50 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-bold mb-4 text-blue-300">Deploy Your Own Cloud Storage!</h2>
        <p className="text-sm text-gray-300 mb-3">Like Google Drive, with full control over your data.</p>
        <ul className="list-disc pl-5 text-sm text-gray-400 space-y-2">
          <li>Have as much storage as you'd like</li>
          <li>No data is sent outside without your permission, YOU are in control</li>
          <li>User accounts and permission control</li>
        </ul>
      </div>

      {/* Flashcard 3: Docker Hosting */}
      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-700/50 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-bold mb-4 text-blue-300">Your Imagination is the Limit!</h2>
        <p className="text-sm text-gray-300 mb-3">Host anything with simple Docker setup.</p>
        <ul className="list-disc pl-5 text-sm text-gray-400 space-y-2">
          <li>Host what you want! Use Docker for simple setup</li>
          <li>Little to no need for technical how-to for setup</li>
          <li>Host your own Wikipedia, game servers, databases, and more!</li>
        </ul>
      </div>
    </div>
    

<Link
  to="/home"
  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 mt-12"
>
  Get Started Now!
</Link>

  </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">Why Choose SafeNest?</h2>
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
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-100">Ready to Transform Your Home?</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
          Join thousands of satisfied customers and unlock the power of SafeNest today.
        </p>
        <Link
  to="/home"
  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 mt-12"
>
  Get Started Now!
</Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 text-center text-gray-400">
        <p>© 2025 SafeNest. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#privacy" className="hover:text-gray-200">Privacy Policy</a>
          <a href="#terms" className="hover:text-gray-200">Terms of Service</a>
          <a href="#contact" className="hover:text-gray-200">Contact Us</a>
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