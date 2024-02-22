import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Section2 from "./Components/Section2";


export default function Home() {

  return (
    <div className="max-w-[160opx]">
      <Header />
      <Hero />
      <Section2 />
      <Footer />
    </div>
  );
}
