import { BrowserRouter, Routes , Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import pageRoutes from "./Routes/pageRoutes";
import Footer from "./Components/Footer"
import ScrollToTop from "./Components/ScrollToTop";
import "./App.css";

function App() {
  const allPageRoutes = pageRoutes.map((linkComponent) => {
    return <Route exact key={linkComponent.path} path={linkComponent.path} element={linkComponent.element} />;
  });
  
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Routes>
          {pageRoutes.map((route) => (
            <Route key={route.path} exact path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
