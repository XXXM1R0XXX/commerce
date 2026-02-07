import Footer from "components/layout/footer";
import {
  companyDescription,
  companyHistory,
  mission,
  advantages,
  recommendations,
} from "lib/data/company";

export const metadata = {
  title: "О компании",
  description:
    "SPL (System Professional Line) — один из ведущих отечественных производителей электротехнических и слаботочных решений на российском рынке.",
};

export default function CompanyPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-2xl bg-neutral-900 p-12 lg:p-16">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            О компании
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            {companyDescription.split("\n\n")[0]}
          </p>
        </div>

        {/* History Timeline */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            История компании
          </h2>
          <div className="mt-12 space-y-8">
            {companyHistory.map((item, index) => (
              <div key={item.year} className="flex gap-8">
                <div className="flex w-24 flex-shrink-0 flex-col items-end">
                  <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                    {item.year}
                  </span>
                </div>
                <div className="relative border-l-2 border-neutral-200 pb-8 pl-8 dark:border-neutral-800">
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-neutral-900 bg-white dark:border-neutral-100 dark:bg-neutral-900" />
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="mt-20 rounded-2xl bg-neutral-50 p-12 dark:bg-neutral-900">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Миссия компании
          </h2>
          <blockquote className="mt-6">
            <p className="text-lg text-neutral-700 dark:text-neutral-300">
              {mission}
            </p>
            <footer className="mt-4">
              <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                Виктор Лебедев
              </p>
              <p className="text-sm text-neutral-500">
                Генеральный директор SPL
              </p>
            </footer>
          </blockquote>
        </div>

        {/* Advantages */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            Наши преимущества
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage) => (
              <div
                key={advantage.id}
                className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <span className="text-xs font-bold tracking-wider text-neutral-400">
                  {advantage.label}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {advantage.title}
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            Рекомендации и благодарности
          </h2>
          <div className="mt-12 space-y-8">
            {recommendations.map((rec) => (
              <div
                key={rec.id}
                className="rounded-xl border-l-4 border-neutral-900 bg-neutral-50 p-6 dark:border-neutral-100 dark:bg-neutral-900"
              >
                <p className="text-neutral-700 dark:text-neutral-300">
                  {rec.text}
                </p>
                <p className="mt-4 font-semibold text-neutral-900 dark:text-neutral-100">
                  {rec.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
