import Link from "next/link";
import { mainMenu } from "lib/data/menu";
import { PHONE_NUMBER, COMPANY_NAME, EMAIL, ADDRESS } from "lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">SPL</span>
            </Link>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
              System Professional Line — производство кабеленесущих систем и
              электротехнических изделий
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://vk.com/spl__group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                VK
              </a>
              <a
                href="https://www.instagram.com/spl__group/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Каталог продукции
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/catalog"
                  className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                  Все категории
                </Link>
              </li>
              <li>
                <Link
                  href="/products/SKS"
                  className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                  СКС
                </Link>
              </li>
              <li>
                <Link
                  href="/products/cable-channel"
                  className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                  Кабельные каналы
                </Link>
              </li>
            </ul>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Карта сайта
            </h3>
            <ul className="mt-4 space-y-3">
              {mainMenu.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Контакты
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                  className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="https://yandex.ru/maps/-/CCUZySxocA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                  {ADDRESS}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {COMPANY_NAME}, © {currentYear}
            </p>
            <Link
              href="/"
              className="text-sm text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
            >
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
