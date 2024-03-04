import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Newest from "./components/Newest";

export default function Home() {
  return (
    <div>
      <Hero />
      <Newest />
    </div>
  );
}
