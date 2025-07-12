import ContactFooter from "../components/ContactFooter";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function Contact() {
  return (
    <>
    <Navbar />
    <main className="pt-40 md:pt-20 flex flex-col items-center">
      <ContactInfo />
    </main>
    <ContactFooter />
    </>
  );
}