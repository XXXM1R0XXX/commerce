import { Category } from "lib/types";

export const categories: Category[] = [
  {
    id: "1",
    slug: "SKS",
    name: "Структурированные кабельные системы (СКС)",
    image: "/images/categories/sks.svg",
    subcategories: [
      { id: "1-1", slug: "twisted-pair", name: "Витая пара" },
      { id: "1-2", slug: "patch-panel", name: "Коммутационная панель" },
      { id: "1-3", slug: "cabinet-accessories", name: "Аксессуары для шкафов" },
      {
        id: "1-4",
        slug: "keystone-modules",
        name: "Модули форм-фактора Keystone и адаптеры",
      },
      { id: "1-5", slug: "patch-cord", name: "Коммутационный шнур" },
    ],
  },
  {
    id: "2",
    slug: "electrical-installation",
    name: "Электроустановочные изделия",
    image: "/images/categories/electrical.svg",
    subcategories: [
      {
        id: "2-1",
        slug: "flush-mounting",
        name: "Изделия для скрытого монтажа",
      },
      { id: "2-2", slug: "45x45", name: "Электроустановочные изделия 45х45" },
      {
        id: "2-3",
        slug: "ip55-66",
        name: "Электроустановочные изделия IP 55-66",
      },
    ],
  },
  {
    id: "3",
    slug: "korob-montaj",
    name: "Электромонтажные коробки",
    image: "/images/categories/boxes.svg",
    subcategories: [],
  },
  {
    id: "4",
    slug: "pipes",
    name: "Трубы электротехнические",
    image: "/images/categories/pipes.svg",
    subcategories: [
      { id: "4-1", slug: "rigid-pipes", name: "Трубы гладкие жёсткие" },
      { id: "4-2", slug: "corrugated", name: "Трубы гофрированные" },
      { id: "4-3", slug: "clips", name: "Крепёж-клипсы для труб" },
    ],
  },
  {
    id: "5",
    slug: "socket-blocks",
    name: "Системы лючков и колонн",
    image: "/images/categories/sockets.svg",
    subcategories: [
      { id: "5-1", slug: "floor-sockets", name: "Система лючков" },
      {
        id: "5-2",
        slug: "columns",
        name: "Система алюминиевых колонн",
      },
    ],
  },
  {
    id: "6",
    slug: "cable-channel",
    name: "Кабельные каналы",
    image: "/images/categories/cable-channels.svg",
    subcategories: [
      { id: "6-1", slug: "channels", name: "Кабельные каналы" },
      {
        id: "6-2",
        slug: "channel-accessories",
        name: "Аксессуары к кабельным каналам",
      },
    ],
  },
];
