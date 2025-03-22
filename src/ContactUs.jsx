import React from "react";

const ContactUs = () => {
  return (
    <div className="border-t-1 border-gray-400 flex flex-col justify-center items-center gap-8 md:gap-15 w-full py-8 md:py-15 px-4 md:px-40">
      <h1 className="autoShow text-3xl md:text-6xl text-white text-center font-bold">
        Contact Us to Work Together
      </h1>
      <div className="autoShow box rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-[0px_0px_15px_#72a1de68] w-full">
        <div className="left bg-gray-100 flex flex-col gap-4 md:gap-7 p-6 md:p-18">
          <h2 className="text-3xl md:text-5xl text-[#011245] font-semibold">
            Lets Get in touch
          </h2>
          <p className="text-base md:text-2xl font-semibold">
            Have questions, suggestions, or just want to connect? We'd love to
            hear from you! Whether you're interested in joining our club,
            collaborating on exciting projects, or simply learning more about
            what we do, feel free to reach out. Our team is always ready to help
            and engage with like-minded individuals. Drop us a message, and
            let's create something amazing together!
          </p>
          <p className="flex gap-3 items-center">
            <img className="h-5 md:h-6" src="/assets/location.svg" alt="" />
            <span className="text-base md:text-xl font-bold">
              Amity University Punjab,Mohali
            </span>
          </p>
          <p className="flex gap-3 items-center">
            <img className="h-5 md:h-6" src="/assets/mail.svg" alt="" />
            <span className="text-base md:text-xl font-bold">
              xyz@gmail.com
            </span>
          </p>
          <p className="flex gap-3 items-center">
            <img className="h-5 md:h-6" src="/assets/phone.svg" alt="" />
            <span className="text-base md:text-xl font-bold">9812XXXXXX</span>
          </p>
          <h4 className="text-2xl md:text-3xl font-semibold">
            Connect with us:
          </h4>
          <ul className="flex gap-5">
            <li className="">
              <a href="#">
                <img className="h-6 md:h-8" src="/assets/insta.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img className="h-6 md:h-8" src="/assets/twitter.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img className="h-6 md:h-8" src="/assets/linkedin.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="right w-full md:w-[50vw] text-white bg-[#071029] p-6 md:p-18">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="flex flex-col gap-4 md:gap-5"
          >
            <input
              type="hidden"
              name="access_key"
              value="3f27681f-15db-4201-93e2-9b596f4b6a45"
            />

            <h2 className="text-3xl md:text-5xl font-semibold">Contact Us</h2>
            <div>
              <input
                className="border-2 border-white rounded-4xl px-4 md:px-6 py-2 md:py-3 text-base md:text-xl w-full md:w-110"
                type="text"
                name="Name:"
                placeholder="Your Name"
              />
            </div>
            <div>
              <input
                className="border-2 border-white rounded-4xl px-4 md:px-6 py-2 md:py-3 text-base md:text-xl w-full md:w-110"
                type="text"
                name="Enroll No:"
                placeholder="Enroll No."
              />
            </div>
            <div>
              <input
                className="border-2 border-white rounded-4xl px-4 md:px-6 py-2 md:py-3 text-base md:text-xl w-full md:w-110"
                type="tel"
                name="Phone:"
                placeholder="Phone"
              />
            </div>
            <div>
              <input
                className="border-2 border-white rounded-4xl px-4 md:px-6 py-2 md:py-3 text-base md:text-xl w-full md:w-110"
                type="email"
                name="Email:"
                placeholder="Your Mail"
              />
            </div>
            <div>
              <textarea
                className="border-2 border-white rounded-3xl px-4 md:px-6 py-2 md:py-3 text-base md:text-xl w-full md:w-110 resize-none h-32 md:h-45"
                name="Message:"
                placeholder="Reason For Joining The Club"
              ></textarea>
            </div>
            <button className="cursor-pointer text-xl md:text-2xl transition-all duration-400 font-bold text-[#011245] bg-white w-full md:w-40 rounded-4xl py-2 md:py-3 hover:bg-[#011245] hover:text-white">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
