import { MantineProvider } from "@mantine/core";
import { useEffect } from "react";
import { useLocation } from "react-router";
import Header from "./components/navigations/Header";
import Router from "./routes/Router";
import Footer from "./components/navigations/Footer";
import ScrollTop from "./components/navigations/ScrollTop";
import "@mantine/core/styles.css";

const App = () => {
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <MantineProvider>
      <div className="flex flex-col w-full min-h-screen bg-[#EEE8D6]">
        <Header />
        <Router />
        <Footer />
        <ScrollTop />
      </div>
    </MantineProvider>
  );
};

export default App;
