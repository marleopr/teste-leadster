"use client";
import Head from "next/head";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Head>
        <meta name="color-scheme" content="light" />
      </Head>
      <Header />
      <HomePage />
      <Banner />
      <Footer />
    </main>
  );
}
