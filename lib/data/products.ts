import { Product } from "lib/types";

export const products: Product[] = [
  // СКС
  {
    id: "p1",
    slug: "kabel-utp-cat6",
    name: "Кабель UTP кат.6 SPL Essential LAN",
    categorySlug: "SKS",
    subcategorySlug: "twisted-pair",
    image: "/images/categories/sks.svg",
    description:
      "Кабель витая пара UTP категории 6 для структурированных кабельных систем. Поддерживает передачу данных на скорости до 10 Гбит/с на коротких дистанциях.",
    specs: {
      Категория: "6",
      "Тип экрана": "UTP (неэкранированный)",
      "Количество пар": "4",
      "Диаметр проводника": "0.57 мм",
      Материал: "Медь",
      "Длина в бухте": "305 м",
    },
  },
  {
    id: "p2",
    slug: "patch-panel-24",
    name: "Коммутационная панель 24 порта кат.6",
    categorySlug: "SKS",
    subcategorySlug: "patch-panel",
    image: "/images/categories/sks.svg",
    description:
      "Коммутационная панель на 24 порта категории 6 для монтажа в 19-дюймовую стойку. Высота 1U.",
    specs: {
      "Количество портов": "24",
      Категория: "6",
      Высота: "1U",
      Монтаж: '19" стойка',
      Материал: "Сталь с порошковым покрытием",
    },
  },
  {
    id: "p3",
    slug: "patch-cord-rj45-1m",
    name: "Коммутационный шнур RJ45 1м кат.6",
    categorySlug: "SKS",
    subcategorySlug: "patch-cord",
    image: "/images/categories/sks.svg",
    description:
      "Коммутационный шнур (патч-корд) UTP категории 6 с разъёмами RJ45 на обоих концах. Длина 1 метр.",
    specs: {
      Категория: "6",
      Длина: "1 м",
      Разъёмы: "RJ45 — RJ45",
      "Тип экрана": "UTP",
      Цвет: "Серый",
    },
  },
  // Электроустановочные изделия
  {
    id: "p4",
    slug: "rozetka-45x45",
    name: "Розетка электрическая 45x45 мм",
    categorySlug: "electrical-installation",
    subcategorySlug: "45x45",
    image: "/images/categories/electrical.svg",
    description:
      "Электрическая розетка стандарта 45x45 мм для монтажа в кабельные каналы, колонны и лючки. Номинальный ток 16А.",
    specs: {
      Стандарт: "45x45 мм",
      "Номинальный ток": "16А",
      "Номинальное напряжение": "250В",
      "Степень защиты": "IP20",
      Цвет: "Белый",
    },
  },
  {
    id: "p5",
    slug: "vyklyuchatel-1kl",
    name: "Выключатель одноклавишный для скрытого монтажа",
    categorySlug: "electrical-installation",
    subcategorySlug: "flush-mounting",
    image: "/images/categories/electrical.svg",
    description:
      "Выключатель одноклавишный для скрытого монтажа. Номинальный ток 10А, напряжение 250В.",
    specs: {
      "Количество клавиш": "1",
      "Номинальный ток": "10А",
      "Номинальное напряжение": "250В",
      Монтаж: "Скрытый",
      "Степень защиты": "IP20",
    },
  },
  {
    id: "p6",
    slug: "rozetka-ip55",
    name: "Розетка влагозащищённая IP55",
    categorySlug: "electrical-installation",
    subcategorySlug: "ip55-66",
    image: "/images/categories/electrical.svg",
    description:
      "Розетка электрическая с повышенной степенью защиты IP55 для влажных помещений и наружного монтажа.",
    specs: {
      "Степень защиты": "IP55",
      "Номинальный ток": "16А",
      "Номинальное напряжение": "250В",
      Монтаж: "Накладной",
      Цвет: "Серый",
    },
  },
  // Электромонтажные коробки
  {
    id: "p7",
    slug: "korobka-raspredelitelnaya-100",
    name: "Коробка распределительная 100х100х50 мм",
    categorySlug: "korob-montaj",
    subcategorySlug: "",
    image: "/images/categories/boxes.svg",
    description:
      "Распределительная коробка из самозатухающего ПВХ для скрытой и открытой проводки. Степень защиты IP55.",
    specs: {
      Размер: "100x100x50 мм",
      Материал: "Самозатухающий ПВХ",
      "Степень защиты": "IP55",
      "Количество вводов": "6",
    },
  },
  // Трубы электротехнические
  {
    id: "p8",
    slug: "truba-gofr-20mm",
    name: "Труба гофрированная ПВХ d=20 мм",
    categorySlug: "pipes",
    subcategorySlug: "corrugated",
    image: "/images/categories/pipes.svg",
    description:
      "Гофрированная труба из ПВХ диаметром 20 мм с зондом для протяжки кабеля. Самозатухающая.",
    specs: {
      "Наружный диаметр": "20 мм",
      "Внутренний диаметр": "14.1 мм",
      Материал: "Самозатухающий ПВХ",
      Цвет: "Серый",
      "Длина в бухте": "100 м",
      Зонд: "Да",
    },
  },
  {
    id: "p9",
    slug: "truba-gladkaya-25mm",
    name: "Труба гладкая жёсткая ПВХ d=25 мм",
    categorySlug: "pipes",
    subcategorySlug: "rigid-pipes",
    image: "/images/categories/pipes.svg",
    description:
      "Гладкая жёсткая труба из ПВХ диаметром 25 мм для электропроводки. Длина 3 метра.",
    specs: {
      "Наружный диаметр": "25 мм",
      "Внутренний диаметр": "21 мм",
      Материал: "Самозатухающий ПВХ",
      Цвет: "Серый",
      Длина: "3 м",
    },
  },
  {
    id: "p10",
    slug: "klipsa-20mm",
    name: "Крепёж-клипса для труб d=20 мм",
    categorySlug: "pipes",
    subcategorySlug: "clips",
    image: "/images/categories/pipes.svg",
    description:
      "Крепёжная клипса для фиксации гладких и гофрированных труб диаметром 20 мм.",
    specs: {
      "Диаметр трубы": "20 мм",
      Материал: "Полиэтилен",
      Цвет: "Серый",
      "В упаковке": "100 шт",
    },
  },
  // Системы лючков и колонн
  {
    id: "p11",
    slug: "lyuchok-napolniy-8m",
    name: "Лючок напольный на 8 модулей",
    categorySlug: "socket-blocks",
    subcategorySlug: "floor-sockets",
    image: "/images/categories/sockets.svg",
    description:
      "Напольный лючок на 8 модулей 45x45 мм для организации рабочих мест в офисных помещениях.",
    specs: {
      "Количество модулей": "8",
      "Стандарт модулей": "45x45 мм",
      Материал: "Алюминий / ABS",
      "Степень защиты": "IP40 (закрыт)",
    },
  },
  {
    id: "p12",
    slug: "kolonna-alyum-3m",
    name: "Колонна алюминиевая 3 метра",
    categorySlug: "socket-blocks",
    subcategorySlug: "columns",
    image: "/images/categories/sockets.svg",
    description:
      "Алюминиевая колонна высотой 3 метра для размещения силовых и информационных розеток.",
    specs: {
      Высота: "3 м",
      "Сечение профиля": "80x80 мм",
      Материал: "Алюминий анодированный",
      Цвет: "Серебристый",
      "Количество секций": "2",
    },
  },
  // Кабельные каналы
  {
    id: "p13",
    slug: "kanal-60x40",
    name: "Кабельный канал 60x40 мм",
    categorySlug: "cable-channel",
    subcategorySlug: "channels",
    image: "/images/categories/cable-channels.svg",
    description:
      "Кабельный канал из самозатухающего ПВХ размером 60x40 мм. Длина 2 метра. С крышкой.",
    specs: {
      Размер: "60x40 мм",
      Длина: "2 м",
      Материал: "Самозатухающий ПВХ",
      Цвет: "Белый",
      "Количество секций": "1",
    },
  },
  {
    id: "p14",
    slug: "ugol-vnutrenniy-60x40",
    name: "Угол внутренний для канала 60x40 мм",
    categorySlug: "cable-channel",
    subcategorySlug: "channel-accessories",
    image: "/images/categories/cable-channels.svg",
    description:
      "Внутренний угол для кабельного канала размером 60x40 мм. Регулируемый угол.",
    specs: {
      "Для канала": "60x40 мм",
      Материал: "ПВХ",
      Цвет: "Белый",
      "Угол регулировки": "80°—120°",
    },
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductsBySubcategory(
  categorySlug: string,
  subcategorySlug: string,
): Product[] {
  return products.filter(
    (p) =>
      p.categorySlug === categorySlug && p.subcategorySlug === subcategorySlug,
  );
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
