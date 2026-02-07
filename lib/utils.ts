export const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const COMPANY_NAME = process.env.COMPANY_NAME || "SPL Group";
export const SITE_NAME =
  process.env.SITE_NAME || "SPL — System Professional Line";
export const PHONE_NUMBER = "+7 (804) 333-75-95";
export const EMAIL = "mail@spl.group";
export const ADDRESS = "г. Москва, Мичуринский проспект 11 корпус 2, офис 4";
