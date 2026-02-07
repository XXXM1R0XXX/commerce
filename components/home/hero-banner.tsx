import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-24 lg:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Инженерная инфраструктура от ведущего Российского производителя
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            SPL — один из ведущих производителей электротехнических и
            слаботочных решений на Российском рынке
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-8 border-t border-neutral-700 pt-10">
            <div>
              <p className="text-3xl font-bold text-white">20 000+</p>
              <p className="mt-2 text-sm text-neutral-400">
                реализованных проектов
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">8</p>
              <p className="mt-2 text-sm text-neutral-400">представительств</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">5</p>
              <p className="mt-2 text-sm text-neutral-400">
                производственных площадок
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Оставить заявку
            </Link>
            <Link
              href="/catalog"
              className="inline-flex items-center justify-center rounded-lg border border-neutral-600 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              Каталог продукции
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
