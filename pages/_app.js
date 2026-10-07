import "@/styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="font-sans text-gray-800 bg-gray-50">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
