import { offices } from "lib/data/offices";

export default function OfficesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          SPL на карте
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600 dark:text-neutral-400">
          8 представительств по России и странам СНГ
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((office) => (
            <div
              key={office.id}
              className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                {office.city}
              </h3>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">
                {office.region}
              </p>
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                {office.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
