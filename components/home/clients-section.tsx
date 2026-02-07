import { clients } from "lib/data/company";

export default function ClientsSection() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50 py-16 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          Нашу продукцию используют
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600 dark:text-neutral-400">
          Крупнейшие компании и организации России доверяют SPL
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <a
              key={client.id}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-24 items-center justify-center rounded-lg border border-neutral-200 bg-white p-4 transition-colors hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600"
            >
              <span className="text-center text-sm font-medium text-neutral-600 transition-colors group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-200">
                {client.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
