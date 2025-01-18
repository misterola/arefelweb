"use client";
import Image from "next/image";
import { useState } from "react";
import AboutRemainingContent from "./contents/AboutRemainingContent";
import AboutMainContent from "./contents/AboutMainContent";

export default function About() {
  const [step, setStep] = useState(0);
  return (
    <div className="px-5 mb-10">
      <div className="lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-10">
        <div className="lg:w-6/12">
          <Image
            className="rounded-xl shadow-xl"
            alt="arefel banner"
            src={
              "https://res.cloudinary.com/temilorun/image/upload/v1724834996/vegetables_vodtpc.png"
            }
            height={800}
            width={1000}
          />
        </div>
        <div className="lg:w-6/12 mt-5">
          <div className="">
            <h1 className="lg:text-start lg:font-bold text-2xl font-bold lg:text-3xl lg:mb-5 mb-2">
              Who we are
            </h1>
          </div>
          {step === 0 ? (
            <div>
              <AboutMainContent />
              <div className="lg:mt-7 mt-5">
                <button
                  onClick={() => setStep(1)}
                  className="flex text-white bg-[rgb(79,104,6)] border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-lg"
                >
                  Learn More
                </button>
              </div>
            </div>
          ) : step === 1 ? (
            <div>
              <AboutRemainingContent />
              <div className="lg:mt-7 mt-5">
                <button
                  onClick={() => setStep(0)}
                  className="flex text-white bg-[rgb(79,104,6)] border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-lg"
                >
                  Learn More
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
