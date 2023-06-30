import Image from "next/image";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <HomePage />
      <Footer />
    </main>
  );
}
