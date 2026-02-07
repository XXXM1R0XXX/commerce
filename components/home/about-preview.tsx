import Link from "next/link";
import { companyDescription } from "lib/data/company";

export default function AboutPreview() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              О компании
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
              Знаем всё о производстве кабеленесущих систем и электротехнических
              изделий
            </h2>
            <div className="mt-6 space-y-4 text-neutral-600 dark:text-neutral-300">
              {companyDescription.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/company"
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-400"
              >
                Подробнее о компании
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
              <div className="flex h-full items-center justify-center text-neutral-400">
                <svg
                  className="h-24 w-24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
