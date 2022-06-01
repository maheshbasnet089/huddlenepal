import { Suspense } from "react";
import Footer from "./Components/Footer";
import HeaderNav from "./Components/Header";
import { GlobalStyles } from "./globalstyles";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyles />
        <HeaderNav />
        <Home />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
