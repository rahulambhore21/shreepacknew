import Hero from "@/components/hero";
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/testnomials";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  const logos = [
    { src: "/img/logo1.png", alt: "Partner 1", width: 120, height: 60 },
    { src: "/img/logo2.png", alt: "Partner 2", width: 120, height: 60 },
    { src: "/img/logo3.png", alt: "Partner 3", width: 120, height: 60 },
    { src: "/img/logo4.png", alt: "Partner 4", width: 120, height: 60 },
    { src: "/img/logo5.png", alt: "Partner 5", width: 120, height: 60 },
    { src: "/img/logo6.png", alt: "Partner 6", width: 120, height: 60 },
  ];

  return (
    <>
      <Hero/>
      
      <OurServices/>
      <Testimonials/>
      <Footer/>
    </>
  );
}
