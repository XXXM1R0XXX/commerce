import { partners } from "lib/data/company";

export default function PartnersSection() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50 py-12 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Партнёры
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex h-12 items-center justify-center opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            >
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
