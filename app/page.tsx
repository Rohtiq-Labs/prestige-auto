import { Navbar } from "@/components/sections/navbar/navbar";
import { Hero } from "@/components/sections/hero/hero";
import { Services } from "@/components/sections/services/services";
import { Portfolio } from "@/components/sections/portfolio/portfolio";
import { Featured } from "@/components/sections/featured/featured";
import { Technology } from "@/components/sections/technology/technology";
import { Testimonials } from "@/components/sections/testimonials/testimonials";
import { ServiceArea } from "@/components/sections/service-area/service-area";
import { Booking } from "@/components/sections/booking/booking";
import { Footer } from "@/components/sections/footer/footer";

export default function Home(): React.ReactNode {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Featured />
        <Technology />
        <Testimonials />
        <ServiceArea />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
