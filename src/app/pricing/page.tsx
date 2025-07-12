import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PricingInfo from "../components/PricingInfo";


export default function Pricing() {
  return (
    <>
    <Navbar />
    <main className="pt-20 flex flex-col items-center">
      <PricingInfo />
    </main>
    <Footer />
    </>
  );
}