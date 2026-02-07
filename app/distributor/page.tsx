import { distributors } from "lib/data/menu";
import Footer from "components/layout/footer";

export const metadata = {
  title: "Дистрибьюторы",
  description:
    "Сеть дистрибьюторов SPL по всей России. Найдите ближайшего партнёра.",
};

export default function DistributorPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          Дистрибьюторы
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
          Продукция SPL реализуется исключительно через сеть дистрибьюторов.
          Найдите ближайшего к вам партнёра.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {distributors.map((dist) => (
            <div
              key={dist.id}
              className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-sm font-medium text-neutral-500">
                    {dist.region}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {dist.company}
                  </h3>
                  <p className="text-sm text-neutral-500">{dist.city}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div>
                  <a
                    href={`tel:${dist.phone.replace(/\s/g, "")}`}
                    className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  >
                    {dist.phone}
                  </a>
                </div>
                <div>
                  <a
                    href={`mailto:${dist.email}`}
                    className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  >
                    {dist.email}
                  </a>
                </div>
                {dist.website && (
                  <div>
                    <a
                      href={dist.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {dist.website}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
