import { MantineProvider } from "@mantine/core";
import Header from "./components/navigations/Header";
import "@mantine/core/styles.css";
import Router from "./routes/Router";

const App = () => {
  return (
    <MantineProvider>
      <div className="flex flex-col w-full min-h-screen bg-[#EEE8D6]">
        <Header />
        <Router />
      </div>
    </MantineProvider>
  );
};

export default App;
