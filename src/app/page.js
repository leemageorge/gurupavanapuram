import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

import Intro from "@/components/Intro";
import ServiceCard from "@/components/ServiceCard";
import StarChara from "@/components/StarChara";



export default function Home() {
  return (
      <div >
        <Banner />
        <div className="bg-amber-100">
        <Intro /> 
        <ServiceCard />
        <StarChara />
        </div>
      
      </div>
  );
}
