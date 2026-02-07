import { techDocuments } from "lib/data/menu";
import Footer from "components/layout/footer";

export const metadata = {
  title: "Техническая документация",
  description:
    "Каталоги продукции, руководства, спецификации и сертификаты SPL.",
};

export default function TechDocumentationPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          Техническая документация
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
          Здесь вы можете скачать каталоги продукции, технические спецификации,
          инструкции по монтажу и сертификаты соответствия.
        </p>

        <div className="mt-12">
          <div className="rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
            <div className="border-b border-neutral-200 px-6 py-4 dark:border-neutral-800">
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Документы
              </h2>
            </div>
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {techDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between px-6 py-4"
                >
                  <div>
                    <span className="text-xs font-medium text-neutral-500">
                      {doc.category}
                    </span>
                    <h3 className="mt-1 font-medium text-neutral-900 dark:text-neutral-100">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-neutral-500">{doc.fileSize}</p>
                  </div>
                  <a
                    href={doc.fileUrl}
                    className="flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
                    download
                  >
                    <svg
                      className="h-4 w-4"
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
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
