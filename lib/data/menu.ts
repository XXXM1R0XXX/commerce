import { MenuItem, Distributor, TechDocument } from "lib/types";

export const mainMenu: MenuItem[] = [
  { title: "Главная", path: "/" },
  { title: "Каталог продукции", path: "/catalog" },
  { title: "О компании", path: "/company" },
  { title: "Дистрибьюторы", path: "/distributor" },
  { title: "Контакты", path: "/contacts" },
  { title: "Техническая документация", path: "/tech-documentation" },
];

export const distributors: Distributor[] = [
  {
    id: "1",
    region: "Москва и Московская область",
    company: "ООО «Электрокомплект»",
    city: "Москва",
    phone: "+7 (495) 123-45-67",
    email: "info@elektrokomplekt.ru",
    website: "https://elektrokomplekt.ru",
  },
  {
    id: "2",
    region: "Санкт-Петербург и Ленинградская область",
    company: "ООО «Северо-Западные кабельные системы»",
    city: "Санкт-Петербург",
    phone: "+7 (812) 234-56-78",
    email: "zakaz@szks.ru",
    website: "https://szks.ru",
  },
  {
    id: "3",
    region: "Новосибирская область",
    company: "ООО «Сибэлектро»",
    city: "Новосибирск",
    phone: "+7 (383) 345-67-89",
    email: "sales@sibelectro.ru",
    website: "https://sibelectro.ru",
  },
  {
    id: "4",
    region: "Казахстан (Алматы)",
    company: "ТОО «КазЭлектро»",
    city: "Алматы",
    phone: "+7 (727) 456-78-90",
    email: "info@kazelectro.kz",
    website: "https://kazelectro.kz",
  },
  {
    id: "5",
    region: "Екатеринбург и Свердловская область",
    company: "ООО «УралКабель»",
    city: "Екатеринбург",
    phone: "+7 (343) 567-89-01",
    email: "office@uralkabel.ru",
  },
];

export const techDocuments: TechDocument[] = [
  {
    id: "1",
    title: "Общий каталог продукции SPL",
    category: "Каталоги",
    fileUrl: "/docs/spl-catalog.pdf",
    fileSize: "8.5 MB",
  },
  {
    id: "2",
    title: "Руководство по проектированию СКС",
    category: "Документация",
    fileUrl: "/docs/sks-design-guide.pdf",
    fileSize: "4.2 MB",
  },
  {
    id: "3",
    title: "Технические характеристики кабельных каналов",
    category: "Спецификации",
    fileUrl: "/docs/cable-channel-specs.pdf",
    fileSize: "2.1 MB",
  },
  {
    id: "4",
    title: "Инструкция по монтажу труб ПВХ",
    category: "Документация",
    fileUrl: "/docs/pvc-pipes-installation.pdf",
    fileSize: "1.8 MB",
  },
  {
    id: "5",
    title: "Сертификаты соответствия ГОСТ",
    category: "Сертификаты",
    fileUrl: "/docs/certificates-gost.pdf",
    fileSize: "5.3 MB",
  },
];
