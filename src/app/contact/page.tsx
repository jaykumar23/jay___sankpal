"use client";

import React from "react";
import { useProtfolioUtils } from "@/utils/portfolio.utils";

const ContactPage = () => {
  const { contactItems } = useProtfolioUtils();

  return (
    <section className="px-6 pt-24 md:px-20 md:pt-30 lg:pb-62 text-center">
      <h1 className="text-4xl lg:text-7xl md:text-6xl font-bold text-gray-800 mb-12">
        Contact <span className="text-purple-600">Me</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:-translate-y-1 border border-purple-100"
            >
              <div className="flex flex-col items-center gap-3">
                <Icon className="w-6 h-6 text-purple-600" />
                <p className="text-sm font-medium text-gray-500">
                  {item.label}
                </p>
                <p className="text-base font-semibold text-gray-800 text-center break-words">
                  {item.value}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default ContactPage;
