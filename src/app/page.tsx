import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="pt-20 flex flex-col items-center">
      <Info />
    </main>
    <Footer />
    </>
  );
}
