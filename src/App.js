import { BrowserRouter, Routes , Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import pageRoutes from "./Routes/pageRoutes";
import "./App.css";

function App() {
  const allPageRoutes = pageRoutes.map((linkComponent) => {
    return <Route exact key={linkComponent.path} path={linkComponent.path} element={linkComponent.element} />;
  });
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {pageRoutes.map((route) => (
          <Route key={route.path} exact path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
