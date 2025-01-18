"use client";
import React, { useState } from "react";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "What are postharvest losses?",
      answer:
        "Postharvest losses (PHLs) are measurable degradation in the quality, quantity, and economic value of agricultural produce in the postharvest part of the food supply chain. The postharvest part of the food supply chain usually spans from the time right before harvesting through the point of produce distribution to the point right before produce reaches the final consumer (losses at the consumer level are usually termed ‘food wastes’). PHLs are caused by several factors depending on the nature of the crop, mode of postharvest handling, production season, location, and stage in the supply chain under consideration. Causes of postharvest losses include the inherent nature of produce, physiological factors (e.g. respiration, germination, transpiration, and ripening), harvesting and postharvest handling practices, outdated and inefficient storage and processing methods, prolonged storage, biological factors (such as pests, microbes, and diseases attack), environmental factors such as temperature and humidity levels at harvest time, poor harvest timing, inadequate or lack of appropriate government policies, and more importantly restricted market access (due to market inefficiencies, poor farm road networks, etc.).",
    },
    {
      question: "Why solve the postharvest loss problem in Africa?",
      answer:
        "Currently, about half of Africans lack physical and economic access to food, and many African countries currently face high food price inflation and volatility challenges. Meanwhile, agriculture employs about 60% of the population in low-income African countries and, on average, African consumers currently spend at least half of their income on food. According to the Rockefeller Foundation, postharvest losses reduce the income of smallholder farmers in Africa by at least 15%. The most concerning of all, however, is the steady population growth in Africa and the consequent rising food demand. The world is estimated to have a population of 10 billion by 2050, and Africa's population will make up about 25% of this estimate. This high population growth rate in Africa occurs in rural and urban areas, leading to rising food demands and rural land scarcity respectively. Further, the fast-paced urban population growth rate in Africa has created a massive demand for highly nutritious quality food in Africa. Currently, urban food sales in Africa is estimated to be 200 to 250 billion USD, and the urban population growth rate is projected to be 3.5% per annum from 2015 to 2025 (according to AGRA). Rising population, growing urbanization, rising income, and changing diets currently fuel the demand for food in African cities. Also, the mass exodus of highly skilled workers and their families out of Africa is driving the need for high-quality, well-packaged African foods in the diaspora. Solving postharvest losses is a feasible and efficient approach to increasing food availability to cater to these demands.",
    },
    {
      question: "How does Arefel solve this problem?",
      answer:
        "By combining cutting-edge food product and process innovation with technology, we organize farmers into economically viable commercial groups and provide these smallholder farmers with dependable production and postharvest management knowledge and support. Moreover, we provide farmers with guaranteed unrestricted market access so that they can minimize losses, earn more income from the sale of produce, and enjoy improved livelihoods. Through our ML-powered food value chain management technology platform, we coordinate and improve the efficiency of players across our value chain.",
    },
    {
      question: "What is a food value chain management platform?",
      answer:
        "A food value chain management platform is a technology platform that helps in efficiently managing the sequence of activities that increase value for key stakeholders in different parts of the agricultural production-to-consumption lifecycle, including agricultural production, processing, manufacturing, distribution, and consumption. The platform ensures that management of key value chain activities can be done at scale. What are our target crops? We are starting with cassava, cowpea, fruits, and vegetable supply chains in Nigeria. We hope to expand our coverage to include other perishable crops eventually. Why is our solution more efficient? With the help of machine learning, we forecast the volume of perishable produce to expect from farmer groups, when to expect produce and the price at which to expect produce. Using these insights, we provide farmers with the best postharvest support level possible to reduce food losses. Also, we add tremendous value to perishable produce by transforming them into innovative food products, increasing demand for these products, and sustainably increasing produce demand. Additionally, we deploy time-tested science-based principles including HACCP, GAP, and GHP to reduce and control food loss across the supply chain. Lastly, we off-take produce directly from farmers, thereby eliminating the need for intermediaries who often profit from farmers’ fear of postharvest losses.",
    },
    {
      question: "How does our solution benefit distributors of food products?",
      answer:
        "Using our ML-powered food value chain management platform, we onboard distributors of innovative food products developed from perishable produce grown by smallholder farmers. With this platform, we manage product orders, delivery, and our relationship with and incentives to distributors. Distributors also experience enhanced transparency in their transactions with us as they leverage their existing strong retailer networks to get our innovative food products to these retailers.  ",
    },
    {
      question: "How can I contact Arefel?",
      answer:
        " We would like to hear from you. Please get in touch with us via email: info@arefelfoods.com.ng",
    },
  ];

  return (
    <div className="mx-auto px-5">
      <h1 className="lg:text-center lg:font-bold font-bold text-2xl lg:text-3xl lg:mb-10 mb-5">
        Frequently Asked Questions
      </h1>
      <div className="lg:flex flex-row lg:justify-between">
        <div>
          <Image
            src="https://res.cloudinary.com/temilorun/image/upload/v1724835606/final_cassava-zDiM6sis_hu8iuu.png"
            alt="FAQ Image"
            className="w-full lg:rounded-xl"
            height={800}
            width={1000}
          />
        </div>
        <div className="lg:w-7/12">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-lg font-medium bg-gray-100 p-4 rounded-lg shadow-md focus:outline-none"
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <div className="bg-white p-4 mt-2 rounded-lg shadow-md">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
