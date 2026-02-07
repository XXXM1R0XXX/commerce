import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "lib/data/categories";
import { products, getProductsByCategory } from "lib/data/products";
import Footer from "components/layout/footer";

interface Props {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryData = categories.find((c) => c.slug === category);

  if (!categoryData) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
          <Link href="/catalog" className="hover:text-neutral-900">
            Каталог
          </Link>
          <span>/</span>
          <span className="text-neutral-900">{categoryData.name}</span>
        </div>

        <h1 className="mt-6 text-3xl font-bold text-neutral-900 dark:text-neutral-100">
          {categoryData.name}
        </h1>

        <div className="mt-12 grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
              Подкатегории
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href={`/products/${category}`}
                  className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                  Все товары
                </Link>
              </li>
              {categoryData.subcategories.map((sub) => (
                <li key={sub.id}>
                  <Link
                    href={`/products/${category}?subcategory=${sub.slug}`}
                    className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  >
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            {categoryProducts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categoryProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${category}/${product.slug}`}
                    className="group rounded-xl border border-neutral-200 bg-white p-4 transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
                  >
                    <div className="aspect-square overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800">
                      <div className="flex h-full items-center justify-center text-neutral-400">
                        <svg
                          className="h-16 w-16"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="mt-4 font-semibold text-neutral-900 group-hover:text-neutral-700 dark:text-neutral-100 dark:group-hover:text-neutral-300">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      {product.subcategorySlug || "Общий раздел"}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-neutral-600 dark:text-neutral-400">
                Товары в данной категории будут добавлены позже.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
