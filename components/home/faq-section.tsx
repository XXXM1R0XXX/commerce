"use client";

import { useState } from "react";
import { faqs } from "lib/data/faq";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          Ответы на вопросы
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-medium text-neutral-900 dark:text-neutral-100">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 text-neutral-500 transition-transform ${
                    openId === faq.id ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-4">
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
