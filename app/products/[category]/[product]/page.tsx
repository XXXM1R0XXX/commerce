import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "lib/data/categories";
import { getProductBySlug } from "lib/data/products";
import Footer from "components/layout/footer";

interface Props {
  params: Promise<{ category: string; product: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { category, product } = await params;
  const categoryData = categories.find((c) => c.slug === category);
  const productData = getProductBySlug(product);

  if (!categoryData || !productData) {
    notFound();
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
          <Link href="/catalog" className="hover:text-neutral-900">
            Каталог
          </Link>
          <span>/</span>
          <Link
            href={`/products/${category}`}
            className="hover:text-neutral-900"
          >
            {categoryData.name}
          </Link>
          <span>/</span>
          <span className="text-neutral-900">{productData.name}</span>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Image */}
          <div>
            <div className="aspect-square overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
              <div className="flex h-full items-center justify-center text-neutral-400">
                <svg
                  className="h-32 w-32"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
              {productData.name}
            </h1>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              {productData.description}
            </p>

            {/* Specs */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Характеристики
              </h2>
              <dl className="mt-4 divide-y divide-neutral-200 dark:divide-neutral-800">
                {Object.entries(productData.specs).map(([key, value]) => (
                  <div key={key} className="flex py-3">
                    <dt className="w-1/2 text-sm font-medium text-neutral-500 dark:text-neutral-500">
                      {key}
                    </dt>
                    <dd className="w-1/2 text-sm text-neutral-900 dark:text-neutral-100">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                Оставить заявку
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
