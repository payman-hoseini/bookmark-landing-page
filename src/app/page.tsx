import Extensions from "./components/extensions";
import Features from "./components/Features";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Input from "./components/input";
import Questions from "./components/questions";

export default function Home() {
  return (
    <>
      <main className="max-w-[1440px] mx-auto">
        <Header />
        <Hero />
        <Features />
        <Extensions />
        <Questions />
        <Input />
        <Footer />
      </main>
    </>
  );
}
