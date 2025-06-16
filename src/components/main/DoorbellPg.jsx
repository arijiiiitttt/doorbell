"use client";
import React, { useState } from "react";
import {
  MdRocket,
  MdLightbulb,
  MdDescription,
  MdOutlineQuestionAnswer,
  MdSearch,
  MdExplore,
  MdThumbUp,
  MdMenu,
  MdClose,
  MdChatBubble,
  MdPeople,
  MdLiveHelp,
  MdWorkspaces,
} from "react-icons/md";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
  FaReact,
  FaCss3Alt,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiWebrtc, SiVercel } from "react-icons/si";



export default function DoorbellPg() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const faqItems = [
    {
      question: "What is Doorbell?",
      answer:
        "Doorbell is a fun and spontaneous way to connect with random people online through video chat. Share your interests and meet someone new!",
    },
    {
      question: "How does Doorbell match me with people?",
      answer:
        "Doorbell uses your stated interests to find other users with similar passions. This helps ensure you have something in common to talk about!",
    },
    {
      question: "Is Doorbell safe to use?",
      answer:
        "We take safety seriously. We have moderation tools and encourage users to report any inappropriate behavior. Be mindful of the information you share.",
    },
    {
      question: "Do I need an account to use Doorbell?",
      answer:
        "Yes, creating an account helps us personalize your experience and ensure a safer community for everyone.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = useState(null);
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const useCases = [
    {
      icon: <MdExplore className="text-red-600 text-2xl" />,
      title: "Discover New Cultures",
      description:
        "Connect with people from different countries and learn about their cultures and perspectives.",
    },
    {
      icon: <MdLightbulb className="text-red-600 text-2xl" />,
      title: "Share Your Interests",
      description:
        "Find others who are passionate about the same things you are, whether it's music, movies, sports, or anything else!",
    },
    {
      icon: <MdChatBubble className="text-red-600 text-2xl" />,
      title: "Practice a Language",
      description:
        "Improve your language skills by chatting with native speakers from around the world.",
    },
    {
      icon: <MdPeople className="text-red-600 text-2xl" />,
      title: "Make New Friends",
      description:
        "Expand your social circle and meet interesting people you might never have encountered otherwise.",
    },
    {
      icon: <MdRocket className="text-red-600 text-2xl" />,
      title: "Spontaneous Fun",
      description:
        "Enjoy the excitement of random connections and see where the conversation takes you!",
    },
    {
      icon: <MdThumbUp className="text-red-600 text-2xl" />,
      title: "Positive Connections",
      description:
        "Connect with others in a friendly and respectful environment. Help us build a positive community!",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-10">
        {/* Header */}
        <header className="flex justify-between items-center py-6 sticky top-0 bg-gray-50 z-50" id="">
          <a href="/doorbell" className="text-3xl font-bold">Doorbell</a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            {isMenuOpen ? <MdClose className="h-6 w-6" /> : <MdMenu className="h-6 w-6" />}
          </button>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="hover:text-red-600">Features</a>
            <a href="#use-cases" className="hover:text-red-600">Use Cases</a>
            <a href="#faq" className="hover:text-red-600">FAQ</a>
            <a href='/doorbell' className="px-4 py-2 bg-red-100 text-gray-600 rounded-lg hover:bg-red-200 flex items-center">
              Find Someone Now <MdSearch className="ml-2" />
            </a>
          </nav>
        </header>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6 text-lg md:hidden">
            <a href="#features" className="hover:text-red-600" onClick={toggleMenu}>
              Features
            </a>
            <a href="#use-cases" className="hover:text-red-600" onClick={toggleMenu}>
              Use Cases
            </a>
            <a href="#faq" className="hover:text-red-600" onClick={toggleMenu}>
              FAQ
            </a>
            <a
              href='/doorbell'
              onClick={toggleMenu}
              className="px-4 py-2 bg-red-100 text-gray-600 rounded-lg hover:bg-red-200 flex items-center"
            >
              Find Someone Now <MdSearch className="ml-2" />
            </a>
          </div>
        )}


        {/* Hero Section */}
        <section className="text-center my-10" id="hero">
          <h2 className="text-3xl md:text-5xl font-extrabold  mb-4 leading-tight">
            Connect Globally With One Ring {" "}
            <span className="text-red-600">Doorbell</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Discover new people and share your interests through spontaneous video
            chats. Doorbell makes it easy to connect with strangers from around
            the globe 🌍
          </p>
          <a href='/doorbell' className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
            Start Chatting
            <MdRocket className="ml-2 h-5 w-5 inline-block" />
          </a>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>Random Chat</span>
            <span>Video Calls</span>
            <span>New Friends</span>
            <span>Global Connections</span>
            <span>Share Interests</span>
          </div>
          <img
            src="/mockup1.png"
            alt="Doorbell Screenshot"
            className="mx-auto mt-10 rounded-lg shadow-xl max-w-full w-[720px] border border-gray-200"
          />
        </section>

        {/* Explanation Section */}
        <section id="features" className="text-center my-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            <span className="text-red-600">Simple</span>, Spontaneous, and Fun
            Connections
          </h3>
          <p className="text-md text-gray-600 max-w-2xl mx-auto mb-8">
            Experience the excitement of meeting new people and sharing your world
            through random video calls.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-left">
            <div className="w-full md:w-64 p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-200">
              <MdLightbulb className="text-red-600 h-8 w-8 mb-4" />
              <h4 className="font-semibold text-lg mb-2 flex text-red-600 items-center">
                Interest-Based Matching
              </h4>
              <p className="text-sm text-gray-600">
                Connect with people who share your passions and hobbies.
              </p>
            </div>
            <div className="w-full md:w-64 p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-200">
              <MdDescription className="text-red-600 h-8 w-8 mb-4" />
              <h4 className="font-semibold text-lg mb-2 flex text-red-600 items-center">
                Easy Video Chat
              </h4>
              <p className="text-sm text-gray-600">
                Start a video call with just one click. No complicated setup
                required.
              </p>
            </div>
            <div className="w-full md:w-64 p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-200">
              <MdOutlineQuestionAnswer className="text-red-600 h-8 w-8 mb-4" />
              <h4 className="font-semibold text-lg mb-2 flex text-red-600 items-center">
                Safe and Secure
              </h4>
              <p className="text-sm text-gray-600">
                We prioritize your safety and privacy. Report any inappropriate
                behavior.
              </p>
            </div>
          </div>
          <img
            src="/mockup2.png"
            alt="Explanation Screenshot"
            className="mx-auto mt-10 rounded-lg shadow-xl max-w-full w-[720px] border border-gray-200"
          />
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="my-16">
          <h2 className="text-3xl font-bold text-center mb-4 flex items-center justify-center">
            <MdWorkspaces className="mr-2 text-gray-800" /> Who Uses Doorbell?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-200  border border-transparent"
              >
                <div className="flex items-center mb-4">
                  {useCase.icon}
                  <h3 className="text-xl text-red-600 font-semibold ml-3">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="my-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 flex items-center justify-center">
            <MdLiveHelp className="mr-2 text-gray-800" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-200 cursor-pointer"
              >
                <h3
                  className="font-semibold text-sm group-hover:text-gray-600 transition-colors duration-200 flex items-center justify-between"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center">{item.question}</div>
                  <svg
                    className={`w-4 h-4 ml-2 transition-transform duration-200 ${expandedFaq === index ? "rotate-180" : ""
                      }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </h3>
                <div
                  className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${expandedFaq === index ? "block" : "hidden"
                    }`}
                  style={{ height: expandedFaq === index ? "auto" : 0 }}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </section>


        <section id="sponsors" className=" text-center px-6 ">
          <h3 className="text-3xl font-bold mb-4">Frameworks Used 👇🏻</h3>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Doorbell is built on powerful frameworks, offering a seamless and spontaneous video chat experience to meet new people and share interests.

          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 text-xl md:text-2xl text-gray-600">
            <div className="flex items-center gap-2 text-cyan-500"><FaReact className="text-3xl" /> React</div>
            <div className="flex items-center gap-2 text-black"><SiNextdotjs className="text-3xl" /> Next.js</div>
            <div className="flex items-center gap-2 text-sky-500"><SiTailwindcss className="text-3xl" /> tailwindcss</div>
             <div className="flex items-center gap-2 text-red-400"><SiWebrtc className="text-3xl" />WebRTC</div>
            <div className="flex items-center gap-2"><SiVercel className="text-3xl" /> Vercel</div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="my-16 text-center bg-red-600 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Meet Someone New?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-red-100">
            Join the Doorbell community and start connecting with interesting
            people from around the world.
          </p>
          <a href='/doorbell' className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
            Ring the Doorbell
            <MdRocket className="ml-2 h-5 w-5 inline-block" />
          </a>
          <div className="mt-4 flex justify-center items-center">
            <MdThumbUp className="mr-2 h-6 w-6" />
            <p className="text-sm">Thousands of connections made daily!</p>
          </div>
        </section>


        {/* Footer */}
        <footer className="py-12 text-center text-gray-500 border-t border-gray-300 mt-20">
          <div className="flex justify-center gap-6 mb-6">
            <a href="" className="hover:text-red-600"><FaTwitter /></a>
            <a href="" className="hover:text-red-600"><FaGithub /></a>
            <a href="" className="hover:text-red-600"><FaLinkedin /></a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-gray-800 text-sm">
            <a href="/notfound" className="hover:text-red-600">Privacy Policy</a>
            <a href="/termsofservice" className="hover:text-red-600">Terms of Service</a>
            <a href="" className="hover:text-red-600">Contact Us</a>
            <a href="/notfound" className="hover:text-red-600">Careers</a>
            <a href="#hero" className="hover:text-red-600">Back to Top</a>
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} Doorbell. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
