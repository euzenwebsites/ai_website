import ChatSection from "./Components/ChatSection";
import Cookie from "./Components/Cookie";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import HeroAlternative from "./Components/HeroAlternative";
import Section2 from "./Components/Section2";
import ChatFixed from "./Components/chatFixed";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden max-w-[100vw] flex flex-col items-center">
        <Header />
        <Hero />
        <HeroAlternative />
        {/* <ChatFixed /> */}
        <Cookie />
        <Section2 />
        <ChatSection />
        <Footer />
      </div>
    </>
  );
}