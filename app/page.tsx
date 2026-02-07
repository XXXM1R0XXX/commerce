import HeroBanner from "components/home/hero-banner";
import AboutPreview from "components/home/about-preview";
import PartnersSection from "components/home/partners-section";
import OfficesSection from "components/home/offices-section";
import ClientsSection from "components/home/clients-section";
import FAQSection from "components/home/faq-section";
import NewsSection from "components/home/news-section";
import FeedbackForm from "components/home/feedback-form";
import Footer from "components/layout/footer";

export const metadata = {
  title: "Главная страница",
  description:
    "SPL (System Professional Line) — один из ведущих отечественных производителей электротехнических и слаботочных решений на российском рынке.",
};

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <AboutPreview />
      <PartnersSection />
      <OfficesSection />
      <ClientsSection />
      <FAQSection />
      <NewsSection />
      <FeedbackForm />
      <Footer />
    </>
  );
}
