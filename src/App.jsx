import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Navigation */}
      <nav className="bg-black/30 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <span className="text-xl font-bold">Eden RP</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Quickstart', 'Features', 'Events', 'Safety'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm hover:text-pink-300 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="md:hidden text-xl">☰</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>LGBTQ+ Friendly • NO Pay to Win • High Quality</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Eden RP
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Welcome to the most inclusive GTA Roleplay experience. A safe haven for LGBTQ+ players and allies, 
            where creativity thrives and everyone belongs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="https://discord.gg/YMGWAcXCpT"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317,5.337A18.144,18.144,0,0,0,16.66,4.07a19.62,19.62,0,0,0-3.569,1.6c-1.125-.6-2.276-1-3.57-1.23A18.21,18.21,0,0,0,5.683,5.337,19.53,19.53,0,0,0,4.07,16.929a19.87,19.87,0,0,0,3.824,2.564,18.5,18.5,0,0,0,.815,2.388l.01.03a1.71,1.71,0,0,0,.8.88,1.647,1.647,0,0,0,1.385.232,1.71,1.71,0,0,0,.987-.756,13.48,13.48,0,0,1,1.983-2.315,13.678,13.678,0,0,1,1.984,2.314,1.682,1.682,0,0,0,.987.757,1.647,1.647,0,0,0,1.385-.232,1.71,1.71,0,0,0,.8-.88l.01-.03a18.5,18.5,0,0,0,.815-2.388,19.87,19.87,0,0,0,3.824-2.564A19.53,19.53,0,0,0,20.317,5.337ZM8.02,15.334c-1.182,0-2.177-1.075-2.177-2.389S6.838,10.556,8.02,10.556s2.177,1.075,2.177,2.389S9.2,15.334,8.02,15.334Zm7.283,0c-1.182,0-2.177-1.075-2.177-2.389s.995-2.389,2.177-2.389,2.177,1.075,2.177,2.389-.995,2.389-2.177,2.389Z"/>
              </svg>
              <span>Join our Discord</span>
            </a>
            
            <a
              href="fivem://connect/6g7yrd"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span>Launch FiveM</span>
            </a>
          </div>

          {/* Cfx.re link for copy-paste */}
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <p className="text-sm text-gray-300 mb-2">Can't connect? Copy this server code:</p>
            <div className="flex items-center space-x-2">
              <code className="flex-1 bg-black/30 px-3 py-2 rounded text-sm font-mono">
                6g7yrd
              </code>
              <a
                href="https://cfx.re/join/6g7yrd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-pink-300 hover:text-pink-200 transition-colors"
              >
                Open Cfx.re
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quickstart Section */}
      <div id="quickstart" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get Started in 60 Seconds</h2>
            <p className="text-xl text-gray-300">Your journey to Eden begins here</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {[
              { step: 1, title: "Install FiveM", desc: "Download and install the FiveM client" },
              { step: 2, title: "Click Launch", desc: "Use our FiveM button above" },
              { step: 3, title: "Join Discord", desc: "Connect with our community" },
              { step: 4, title: "Read Rules", desc: "Understand our Code of Conduct" },
              { step: 5, title: "Play", desc: "Begin your roleplay journey" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Eden RP?</h2>
            <p className="text-xl text-gray-300">What makes our city special</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Inclusive Community",
                desc: "LGBTQ+ friendly environment with strict anti-harassment policies and mandatory pronoun usage",
                icon: "👥"
              },
              {
                title: "Professional Roleplay",
                desc: "Immersive EMS, LEO, and civilian systems with realistic progression and story arcs",
                icon: "🎭"
              },
              {
                title: "Weekly Events",
                desc: "Regular community events, tournaments, and seasonal celebrations for all players",
                icon: "🎉"
              },
              {
                title: "Creator Friendly",
                desc: "Priority queue, stream support, and collaboration opportunities for content creators",
                icon: "🎥"
              },
              {
                title: "No Pay-to-Win",
                desc: "Fair gameplay for everyone. Cosmetics only, no gameplay advantages for purchase",
                icon: "🚫"
              },
              {
                title: "Active Moderation",
                desc: "24/7 staff team ensuring safety, fairness, and quality roleplay experiences",
                icon: "🛡️"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Events & Creator Schedule</h2>
            <p className="text-xl text-gray-300">Stay updated with our community calendar</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Upcoming Events</h3>
                <div className="space-y-4">
                  {[
                    { title: "Pride Parade Roleplay", date: "June 15, 2025", type: "Community" },
                    { title: "Detective Mystery Arc", date: "June 20-22, 2025", type: "Story" },
                    { title: "Weekly Trivia Night", date: "Every Friday, 8 PM EST", type: "Recurring" },
                    { title: "Streamer Showcase", date: "June 28, 2025", type: "Creator" }
                  ].map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div>
                        <h4 className="font-semibold">{event.title}</h4>
                        <p className="text-gray-400 text-sm">{event.date}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.type === 'Community' ? 'bg-blue-500/20 text-blue-300' :
                        event.type === 'Story' ? 'bg-purple-500/20 text-purple-300' :
                        event.type === 'Recurring' ? 'bg-green-500/20 text-green-300' :
                        'bg-pink-500/20 text-pink-300'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Featured Streamers</h3>
                <div className="space-y-4">
                  {[
                    { name: "pandacass021", platform: "Twitch", schedule: "Mon/Wed/Fri 7-10 PM" },
                    { name: "broadwayblonde", platform: "YouTube", schedule: "Tue/Thu 8-11 PM" },
                    { name: "Lance_a1ot", platform: "Twitch", schedule: "Sat/Sun 6-9 PM" }
                  ].map((streamer, index) => (
                    <div key={index} className="flex items-center p-4 bg-white/5 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm font-bold mr-4">
                        {streamer.name[0]}
                      </div>
                      <div>
                        <h4 className="font-semibold">{streamer.name}</h4>
                        <p className="text-gray-400 text-sm">{streamer.platform} • {streamer.schedule}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-400 mt-6">
                  Interested in streaming with us? Contact our creator team in Discord!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Safety & Rules Section */}
      <div id="safety" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Safety & Code of Conduct</h2>
            <p className="text-xl text-gray-300">Our commitment to a safe and inclusive environment</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Code of Conduct</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h4 className="font-bold text-lg mb-3 flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3">✓</span>
                    Respect & Inclusion
                  </h4>
                  <p className="text-gray-300">All players are required to respect others' identities, pronouns, and boundaries. Hate speech, discrimination, and harassment will not be tolerated.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h4 className="font-bold text-lg mb-3 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs mr-3">✓</span>
                    Pronoun Usage
                  </h4>
                  <p className="text-gray-300">Pronouns are mandatory in all communication. Players must use others' correct pronouns and update their own in Discord and in-game profiles.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h4 className="font-bold text-lg mb-3 flex items-center">
                    <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs mr-3">✓</span>
                    Reporting System
                  </h4>
                  <p className="text-gray-300">Clear, anonymous reporting channels with guaranteed response within 24 hours. All reports are taken seriously and investigated promptly.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Moderation Policy</h3>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <div className="mb-6">
                  <h4 className="font-bold mb-3">How to Report</h4>
                  <ol className="text-gray-300 space-y-2 text-sm">
                    <li>1. Use the #report-harassment channel in Discord</li>
                    <li>2. Fill out the anonymous web form (link in Discord)</li>
                    <li>3. DM any staff member with "REPORT" in the message</li>
                  </ol>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-3">Response Time</h4>
                  <p className="text-gray-300">All reports receive acknowledgment within 1 hour and full investigation within 24 hours.</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-3">Consequences</h4>
                  <p className="text-gray-300">Violations result in warnings, temporary suspensions, or permanent bans based on severity and repeat offenses.</p>
                </div>
                
                <a
                  href="https://discord.gg/YMGWAcXCpT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-3 rounded-lg text-center hover:from-pink-700 hover:to-purple-700 transition-all duration-200 text-sm font-semibold"
                >
                  Read Full Rules in Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Preview Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Helpful Guides</h2>
            <p className="text-xl text-gray-300">Resources for new and returning players</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "LGBTQ+ Friendly GTA RP Guide",
                excerpt: "Everything you need to know about finding safe, inclusive roleplay communities in 2025.",
                tags: ["LGBTQ+", "Beginner", "Safety"]
              },
              {
                title: "How to Start GTA Roleplay (2025)",
                excerpt: "Complete beginner's guide to FiveM, roleplay fundamentals, and building your character.",
                tags: ["Beginner", "Guide", "Tips"]
              },
              {
                title: "Eden RP Rules & Safety Protocols",
                excerpt: "Detailed breakdown of our community standards, reporting system, and moderation policies.",
                tags: ["Rules", "Safety", "Community"]
              }
            ].map((post, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="h-40 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://discord.gg/YMGWAcXCpT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-300 hover:text-pink-200 text-sm font-semibold transition-colors"
                >
                  Read more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="text-xl font-bold">Eden RP</span>
              </div>
              <p className="text-gray-400 mb-4">
                The premier LGBTQ+ friendly GTA Roleplay community. Safe, inclusive, and immersive roleplay experiences for everyone.
              </p>
              <div className="flex space-x-4">
                {[
                  { name: "Discord", icon: "💬", url: "https://discord.gg/YMGWAcXCpT" },
                  { name: "TikTok", icon: "🎵", url: "#" },
                  { name: "YouTube", icon: "▶️", url: "#" },
                  { name: "Twitch", icon: "🎮", url: "#" }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="https://discord.gg/YMGWAcXCpT" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Join Discord
                </a>
                <a href="fivem://connect/6g7yrd" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Launch FiveM
                </a>
                <a href="https://cfx.re/join/6g7yrd" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Cfx.re Join Link
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Rules & Safety
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">For Creators</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Streamer Program
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Content Guidelines
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Asset Requests
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Tebex Store
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Eden RP. All rights reserved. Not affiliated with Rockstar Games, Take-Two Interactive, or any of their subsidiaries.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}