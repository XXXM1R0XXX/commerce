import Link from "next/link";
import { categories } from "lib/data/categories";
import Footer from "components/layout/footer";

export const metadata = {
  title: "Каталог продукции",
  description:
    "Каталог продукции SPL — структурированные кабельные системы, кабельные каналы, трубы, электроустановочные изделия и многое другое.",
};

export default function CatalogPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          Каталог нашей продукции
        </h1>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/products/${category.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="absolute left-4 top-4 text-6xl font-bold text-neutral-100 dark:text-neutral-800">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="relative p-8">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800">
                  <svg
                    className="h-10 w-10 text-neutral-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-neutral-700 dark:text-neutral-100 dark:group-hover:text-neutral-300">
                  {category.name}
                </h2>
                {category.subcategories.length > 0 && (
                  <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-500">
                    {category.subcategories.length} подкатегорий
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* PDF Catalog CTA */}
        <div className="mt-16 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                PDF-каталог
              </h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                Вы можете ознакомиться с нашим полным каталогом продукции и
                скачать его
              </p>
            </div>
            <Link
              href="/docs/spl-catalog.pdf"
              className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Скачать
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
