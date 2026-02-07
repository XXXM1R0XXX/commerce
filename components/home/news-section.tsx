import Link from "next/link";
import { newsItems } from "lib/data/news";

export default function NewsSection() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50 py-16 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Новости
          </h2>
          <Link
            href="#"
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            Все новости
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.slice(0, 3).map((news) => (
            <article
              key={news.id}
              className="group rounded-xl border border-neutral-200 bg-white transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-t-xl bg-neutral-100 dark:bg-neutral-800">
                <div className="flex h-full items-center justify-center text-neutral-400">
                  <svg
                    className="h-12 w-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <time className="text-sm text-neutral-500 dark:text-neutral-500">
                  {new Date(news.date).toLocaleDateString("ru-RU")}
                </time>
                <h3 className="mt-2 text-lg font-semibold text-neutral-900 group-hover:text-neutral-700 dark:text-neutral-100 dark:group-hover:text-neutral-300">
                  {news.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {news.preview}
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center text-sm font-medium text-neutral-900 hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-400"
                >
                  Подробнее
                  <svg
                    className="ml-1 h-4 w-4"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
