import "./App.css";
import ContactUs from "./ContactUs";
import { useState } from "react";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <div className="relative flex flex-col items-center bg-[#001f7c38] h-full">
      <video
        className="bg-video -z-1 fixed inset-0 mix-blend-lighten object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/assets/galaxy.mp4"
      ></video>
      {/* BlackBox Video */}
      <div className="blackhole-box absolute top-0  mix-blend-lighten -z-1">
        <video
          className="md:mt-[-23.5%] mt-[-12%] hue-rotate-[-60deg] brightness-105 contrast-125 "
          autoPlay
          loop
          muted
          playsInline
          src="/assets/blackhole.mp4"
        ></video>
      </div>
      {/*-------- Navbar-------- */}
      <nav className="flex justify-between fixed  top-0 right-0 items-center w-full h-[70px] px-4 md:px-10 py-3 md:py-5 bg-[rgba(255,255,255,0.123)] backdrop-blur-[15px] shadow-[0px_0px_15px_#72a1de68] z-5">
        <div className="logo flex gap-2 h-full items-center">
          <img className="h-9 md:h-12 " src="/assets/logo1.png" alt="" />
          <h1 className="text-white text-2xl md:text-3xl font-bold">
            <span className="text-blue-300">Tex</span>plore
          </h1>
        </div>

        {/* Burger Menu Button */}
        <button
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 text-white z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 bottom-0 h-screen w-[80%] max-w-[400px] bg-black backdrop-blur-lg transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-start h-full pt-20 px-8">
            <ul className="text-white flex flex-col items-start gap-8 py-4 w-full">
              <li
                onClick={() => scrollToSection("hero-section")}
                className="cursor-pointer font-semibold hover:text-purple-300 text-xl w-full text-left flex items-center gap-3"
              >
                <FaHome className="text-[#727fde] text-2xl" />
                Home
              </li>
              <li
                onClick={() => scrollToSection("why-choose-section")}
                className="cursor-pointer font-semibold hover:text-purple-300 text-xl w-full text-left flex items-center gap-3"
              >
                <FaInfoCircle className="text-[#727fde] text-2xl" />
                About
              </li>
              <li
                onClick={() => scrollToSection("contact-section")}
                className="cursor-pointer font-semibold hover:text-purple-300 text-xl w-full text-left flex items-center gap-3"
              >
                <FaEnvelope className="text-[#727fde] text-2xl" />
                Contact Us
              </li>
              <li className="flex gap-8 mt-8">
                <a href="#">
                  <img className="invert h-8" src="/assets/insta.svg" alt="" />
                </a>
                <a href="#">
                  <img
                    className="invert h-8"
                    src="/assets/twitter.svg"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    className="invert h-8"
                    src="/assets/linkedin.svg"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-white justify-center gap-4 md:gap-50 rounded-full px-4 md:px-10 py-2 md:py-3 backdrop-blur-lg shadow-[0px_0px_10px_#727fde65] mb-4 md:mb-0">
          <li
            onClick={() => scrollToSection("hero-section")}
            className="cursor-pointer font-semibold hover:text-purple-300"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("why-choose-section")}
            className="cursor-pointer font-semibold hover:text-purple-300"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("contact-section")}
            className="cursor-pointer font-semibold hover:text-purple-300"
          >
            Contact Us
          </li>
        </ul>
        <ul className="hidden md:flex gap-5">
          <li>
            <a href="#">
              <img
                className="invert h-6 md:h-8"
                src="/assets/insta.svg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className="invert h-6 md:h-8"
                src="/assets/twitter.svg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className="invert h-6 md:h-8"
                src="/assets/linkedin.svg"
                alt=""
              />
            </a>
          </li>
        </ul>
      </nav>
      {/* Hero Section */}
      <section
        id="hero-section"
        className="hero-section min-h-screen relative flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-0"
      >
        <div className="hero-info relative md:absolute left-0 md:left-[5%] max-w-[600px] mt-32 md:mt-0">
          <div className="title flex gap-2 justify-center items-center text-[#727fde] px-2 py-1.5 border-[#727fde77] border-1 w-fit bg-[2200493d] shadow-[0px_0px_5px_#727fde88] rounded-full font-semibold">
            <img
              className="invert w-4 md:w-5"
              src="/assets/sketch.svg"
              alt=""
            />
            <p className="text-sm md:text-base">Texplore Community</p>
          </div>
          <h1 className="text-4xl md:text-5xl leading-[1.2] md:leading-[50px] mt-6 md:mt-[20px] mb-4 md:mb-[30px] text-white hero-head font-bold">
            Experience the <span className="gradient">Thrill of a</span> Startup
            Without <span className="gradient">Starting One!</span>
          </h1>
          <p className="text-white text-lg md:text-3xl hero-para mt-6 md:mt-10 max-w-[550px] mb-8 md:mb-[40px] leading-[1.4] md:leading-[25px]">
            Still confused about what to do? You're not alone, and that's
            exactly why we're here! Step into a space where ideas take flight,
            where entrepreneurship meets technology, marketing blends with
            creativity, and entertainment come alive.
          </p>
          <div className="flex gap-4 md:gap-6">
            <button
              onClick={() => scrollToSection("contact-section")}
              className="px-6 cursor-pointer md:px-8 py-2 md:py-3 bg-[#727fde] text-white rounded-full font-semibold hover:bg-[#5a61b3] transition-all duration-300"
            >
              Join Now
            </button>
            <button
              onClick={() => scrollToSection("founder-section")}
              className="px-6 cursor-pointer md:px-8 py-2 md:py-3 border-2 border-[#727fde] text-white rounded-full font-semibold hover:bg-[#727fde] hover:text-white transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-video-box relative md:absolute right-0 w-full md:w-auto h-[300px] md:h-[800px] mt-8 md:mt-0 hidden md:block">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover mix-blend-lighten"
            src="/assets/hero-video.mp4"
          ></video>
        </div>
      </section>
      {/* Section 2 */}
      <section
        id="founder-section"
        className="section-2 py-20 md:py-60 border-t-1 border-gray-400 w-full flex flex-col justify-center items-center gap-6 md:gap-10 px-4"
      >
        <h1 className="autoShow text-white text-4xl md:text-7xl font-bold text-center">
          Are You a Founder?
        </h1>
        <h1 className="autoShow text-white text-4xl md:text-7xl font-bold text-center">
          Joiner? Learner?
        </h1>

        <p className="autoShow text-white text-xl md:text-4xl px-4 md:px-40 text-center">
          Whether you're an experienced entrepreneur or just taking your first
          steps, Texplore Community is the perfect place to explore, build, and
          innovate. We offer a startup-like environment where creativity meets
          technology, marketing, UI/UX design, and entertainment. Here, you'll
          collaborate with like-minded individuals, gain hands-on experience,
          and work on real-world projects that push your limits. From
          brainstorming groundbreaking ideas to executing them with a team, we
          provide you with the resources, mentorship, and network to thrive.
          Join us and be part of something bigger, where your journey truly
          begins!
        </p>
      </section>
      {/* Why Choose Texplore Section */}
      <section
        id="why-choose-section"
        className="section-3 py-20 md:py-50 border-t-1 border-gray-400 w-full px-4"
      >
        <h1 className="autoShow text-white text-4xl md:text-7xl font-bold text-center mb-8 md:mb-16">
          Why Choose Texplore?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="autoShow bg-[rgba(255,255,255,0.123)] p-6 md:p-8 rounded-xl shadow-[0px_0px_15px_#72a1de68]">
            <div className="text-[#727fde] text-3xl md:text-4xl mb-4">🎯</div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Hands-on Experience
            </h3>
            <p className="text-white text-base md:text-lg">
              Work on real projects, build your portfolio, and gain practical
              skills that matter in today's tech landscape.
            </p>
          </div>
          <div className="autoShow bg-[rgba(255,255,255,0.123)] p-6 md:p-8 rounded-xl shadow-[0px_0px_15px_#72a1de68]">
            <div className="text-[#727fde] text-3xl md:text-4xl mb-4">🤝</div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Vibrant Community
            </h3>
            <p className="text-white text-base md:text-lg">
              Connect with passionate individuals, share ideas, and grow
              together in a supportive environment.
            </p>
          </div>
          <div className="autoShow bg-[rgba(255,255,255,0.123)] p-6 md:p-8 rounded-xl shadow-[0px_0px_15px_#72a1de68]">
            <div className="text-[#727fde] text-3xl md:text-4xl mb-4">💡</div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Innovation Hub
            </h3>
            <p className="text-white text-base md:text-lg">
              Access cutting-edge resources, mentorship, and opportunities to
              turn your ideas into reality.
            </p>
          </div>
          <div className="autoShow bg-[rgba(255,255,255,0.123)] p-6 md:p-8 rounded-xl shadow-[0px_0px_15px_#72a1de68]">
            <div className="text-[#727fde] text-3xl md:text-4xl mb-4">🚀</div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Career Growth
            </h3>
            <p className="text-white text-base md:text-lg">
              Develop leadership skills, build your network, and prepare for
              future entrepreneurial ventures.
            </p>
          </div>
          <div className="autoShow bg-[rgba(255,255,255,0.123)] p-6 md:p-8 rounded-xl shadow-[0px_0px_15px_#72a1de68]">
            <div className="text-[#727fde] text-3xl md:text-4xl mb-4">🎓</div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Learning Environment
            </h3>
            <p className="text-white text-base md:text-lg">
              Continuous learning through workshops, seminars, and peer-to-peer
              knowledge sharing.
            </p>
          </div>
          <div className="autoShow bg-[rgba(255,255,255,0.123)] p-6 md:p-8 rounded-xl shadow-[0px_0px_15px_#72a1de68]">
            <div className="text-[#727fde] text-3xl md:text-4xl mb-4">💫</div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Creative Freedom
            </h3>
            <p className="text-white text-base md:text-lg">
              Express your creativity, experiment with new ideas, and push
              boundaries in a safe space.
            </p>
          </div>
        </div>
      </section>
      {/* Meet Our Team Section */}
      <section className="section-4 border-t-1 border-gray-400 text-white py-8 md:py-14 px-4 md:px-10">
        <h1 className="text-4xl md:text-6xl text-center font-semibold mt-5">
          Meet Our Team
        </h1>
        <p className="text-xl md:text-3xl text-center font-medium mt-4 md:mt-8">
          Meet the talented minds working behind the scenes to bring the magic
          to life!
        </p>

        {/* Card Box */}
        <div className="team grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10 md:mt-20 justify-center items-center rounded-xl py-6 bg-[#00071B]">
          <div className="autoShow box bg-[rgba(255,255,255,0.123)] shadow-[0px_0px_10px_#72a1de68] rounded-xl p-4">
            <img
              className="w-full rounded-lg"
              src="/assets/sample.jpg"
              alt=""
            />
            <div className="about mt-2">
              <h4 className="text-lg md:text-xl font-bold">Batman</h4>
              <h4 className="text-lg md:text-xl">Vice President</h4>
            </div>
          </div>
          <div className="autoShow box bg-[rgba(255,255,255,0.123)] shadow-[0px_0px_15px_#72a1de68] rounded-xl p-4">
            <img
              className="w-full rounded-lg"
              src="/assets/sample2.jpg"
              alt=""
            />
            <div className="about mt-2">
              <h4 className="text-lg md:text-xl font-bold">Batman</h4>
              <h4 className="text-lg md:text-xl">Vice President</h4>
            </div>
          </div>
          <div className="autoShow box bg-[rgba(255,255,255,0.123)] shadow-[0px_0px_15px_#72a1de68] rounded-xl p-4">
            <img
              className="w-full rounded-lg"
              src="/assets/sample2.jpg"
              alt=""
            />
            <div className="about mt-2">
              <h4 className="text-lg md:text-xl font-bold">Batman</h4>
              <h4 className="text-lg md:text-xl">Vice President</h4>
            </div>
          </div>
          <div className="autoShow box bg-[rgba(255,255,255,0.123)] shadow-[0px_0px_15px_#72a1de68] rounded-xl p-4">
            <img
              className="w-full rounded-lg"
              src="/assets/sample.jpg"
              alt=""
            />
            <div className="about mt-2">
              <h4 className="text-lg md:text-xl font-bold">Batman</h4>
              <h4 className="text-lg md:text-xl">Vice President</h4>
            </div>
          </div>
          <div className="autoShow box bg-[rgba(255,255,255,0.123)] shadow-[0px_0px_15px_#72a1de68] rounded-xl p-4">
            <img
              className="w-full rounded-lg"
              src="/assets/sample.jpg"
              alt=""
            />
            <div className="about mt-2">
              <h4 className="text-lg md:text-xl font-bold">Batman</h4>
              <h4 className="text-lg md:text-xl">Vice President</h4>
            </div>
          </div>
          <div className="autoShow box bg-[rgba(255,255,255,0.123)] shadow-[0px_0px_15px_#72a1de68] rounded-xl p-4">
            <img
              className="w-full rounded-lg"
              src="/assets/sample.jpg"
              alt=""
            />
            <div className="about mt-2">
              <h4 className="text-lg md:text-xl font-bold">Batman</h4>
              <h4 className="text-lg md:text-xl">Vice President</h4>
            </div>
          </div>
          <div className="autoShow box bg-[rgba(255,255,255,0.123)] shadow-[0px_0px_15px_#72a1de68] rounded-xl p-4">
            <img
              className="w-full rounded-lg"
              src="/assets/sample.jpg"
              alt=""
            />
            <div className="about mt-2">
              <h4 className="text-lg md:text-xl font-bold">Batman</h4>
              <h4 className="text-lg md:text-xl">Vice President</h4>
            </div>
          </div>
          <div className="autoShow box bg-[rgba(255,255,255,0.123)] shadow-[0px_0px_15px_#72a1de68] rounded-xl p-4">
            <img
              className="w-full rounded-lg"
              src="/assets/sample.jpg"
              alt=""
            />
            <div className="about mt-2">
              <h4 className="text-lg md:text-xl font-bold">Batman</h4>
              <h4 className="text-lg md:text-xl">Vice President</h4>
            </div>
          </div>
        </div>
      </section>
      <div id="contact-section">
        <ContactUs />
      </div>

      {/* Footer Section */}
      <footer className="w-full border-t-1 border-gray-400 bg-[rgba(255,255,255,0.123)] backdrop-blur-[15px] shadow-[0px_0px_15px_#72a1de68] py-8 px-4 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <p className="text-white text-lg md:text-xl text-center">
            "Our mission is to empower the next generation of innovators through
            hands-on experience and collaborative learning."
          </p>

          <div className="flex gap-6 mt-4">
            <a
              href="https://instagram.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                className="invert h-6 md:h-8"
                src="/assets/insta.svg"
                alt="Instagram"
              />
            </a>
            <a
              href="https://twitter.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                className="invert h-6 md:h-8"
                src="/assets/twitter.svg"
                alt="Twitter"
              />
            </a>
            <a
              href="https://linkedin.com/company/your-company"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                className="invert h-6 md:h-8"
                src="/assets/linkedin.svg"
                alt="LinkedIn"
              />
            </a>
          </div>

          <p className="text-white text-sm mt-4">
            © {new Date().getFullYear()} Texplore. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
