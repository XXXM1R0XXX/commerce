import { offices } from "lib/data/offices";
import { PHONE_NUMBER, EMAIL } from "lib/utils";
import Footer from "components/layout/footer";

export const metadata = {
  title: "Контакты",
  description:
    "Контактная информация SPL. 8 представительств по России и странам СНГ.",
};

export default function ContactsPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          Контакты компании
        </h1>

        {/* Main contacts */}
        <div className="mt-12 rounded-2xl bg-neutral-900 p-8 text-white dark:bg-neutral-800">
          <h2 className="text-xl font-semibold">Головной офис</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm text-neutral-400">Телефон</p>
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="mt-1 block text-lg font-medium hover:text-neutral-300"
              >
                {PHONE_NUMBER}
              </a>
            </div>
            <div>
              <p className="text-sm text-neutral-400">Email</p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-1 block text-lg font-medium hover:text-neutral-300"
              >
                {EMAIL}
              </a>
            </div>
            <div>
              <p className="text-sm text-neutral-400">Адрес</p>
              <a
                href="https://yandex.ru/maps/-/CCUZySxocA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-lg font-medium hover:text-neutral-300"
              >
                г. Москва, Мичуринский проспект 11 корпус 2, офис 4
              </a>
            </div>
          </div>
        </div>

        {/* Regional offices */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Региональные представительства
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {offices.map((office) => (
              <div
                key={office.id}
                className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {office.city}
                  </h3>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                    {office.region}
                  </span>
                </div>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  {office.address}
                </p>
                <div className="mt-4">
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  >
                    {office.phone}
                  </a>
                </div>

                {/* Employees */}
                <div className="mt-6 space-y-4 border-t border-neutral-200 pt-6 dark:border-neutral-800">
                  {office.employees.slice(0, 2).map((employee) => (
                    <div key={employee.email}>
                      <p className="font-medium text-neutral-900 dark:text-neutral-100">
                        {employee.name}
                      </p>
                      <p className="text-sm text-neutral-500">
                        {employee.position}
                      </p>
                      <div className="mt-1 text-sm">
                        <a
                          href={`tel:${employee.phone.replace(/\s/g, "")}`}
                          className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                        >
                          {employee.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
