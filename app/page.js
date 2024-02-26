import ChatSection from "./Components/ChatSection";
import Cookie from "./Components/Cookie";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import HeroAlternative from "./Components/HeroAlternative";
import Section2 from "./Components/Section2";

export default function Home() {
  return (
    <div className="max-w-[1600px] flex flex-col justify-center items-center overflow-x-hidden">
      <Header />
      <Hero />
      <HeroAlternative />
      <Cookie />
      <Section2 />
      <ChatSection />
      <Footer />
    </div>
  );
}