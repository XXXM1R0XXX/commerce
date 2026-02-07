"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto my-4 flex max-w-xl flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 dark:border-neutral-800 dark:bg-neutral-900">
      <h2 className="text-xl font-bold">Ошибка</h2>
      <p className="my-2">
        Произошла ошибка при загрузке страницы. Пожалуйста, попробуйте ещё раз.
      </p>
      <button
        className="mx-auto mt-4 flex w-full items-center justify-center rounded-full bg-neutral-900 p-4 tracking-wide text-white hover:opacity-90 dark:bg-neutral-100 dark:text-neutral-900"
        onClick={() => reset()}
      >
        Попробовать снова
      </button>
    </div>
  );
}
