import Hero from "@/components/hero";
import OurServices from "@/components/OurServices";
import LogoLoop from "@/components/LogoLoop";
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
      
      {/* Partners/Clients Logo Loop */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Trusted by Leading Companies
          </h2>
          <LogoLoop
            logos={logos}
            speed={80}
            direction="left"
            logoHeight={50}
            gap={48}
            pauseOnHover={true}
            fadeOut={true}
            scaleOnHover={true}
            ariaLabel="Our trusted partners and clients"
            className="max-w-6xl mx-auto"
          />
        </div>
      </section>
      
      <OurServices/>
      <Testimonials/>
      <Footer/>
    </>
  );
}
