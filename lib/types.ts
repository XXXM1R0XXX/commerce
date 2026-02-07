export interface Category {
  id: string;
  slug: string;
  name: string;
  image: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  slug: string;
  name: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  subcategorySlug: string;
  image: string;
  description: string;
  specs: Record<string, string>;
}

export interface Office {
  id: string;
  city: string;
  region: string;
  address: string;
  phone: string;
  email: string;
  employees: Employee[];
}

export interface Employee {
  name: string;
  position: string;
  phone: string;
  email: string;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  image: string;
  preview: string;
  content: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  url: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface CompanyHistoryItem {
  year: string;
  title: string;
  description: string;
}

export interface Advantage {
  id: string;
  title: string;
  label: string;
  description: string;
}

export interface Recommendation {
  id: string;
  company: string;
  text: string;
}

export interface MenuItem {
  title: string;
  path: string;
}

export interface Distributor {
  id: string;
  region: string;
  company: string;
  city: string;
  phone: string;
  email: string;
  website?: string;
}

export interface TechDocument {
  id: string;
  title: string;
  category: string;
  fileUrl: string;
  fileSize: string;
}
