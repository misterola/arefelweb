import Nav from "@/components/Nav";
import Banner from "@/components/Banner";
import About from "@/components/About";
import How from "@/components/How";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <div className="lg:px-10 lg:flex lg:items-center lg:mt-20 lg:h-screen">
        <Banner />
      </div>
      <div className="lg:px-10 lg:py-10 lg:h-screen lg:flex lg:items-center">
        <About />
      </div>
      <div className="lg:px-10 lg:h-screen lg:mt-20 lg:mb-80 mb-10">
        <How />
      </div>
      <div className="lg:px-10 lg:h-full lg:mb-10 lg:mt-80 mb-10">
        <FAQ />
      </div>
      <div className="lg:px-10 lg:h-full">
        <Footer />
      </div>
    </div>
  );
}
