import LandingPage from "../Components/LandingPage";
import FooterPage from "../Components/FooterPage";
import AboutPage from "../Components/AboutPage";
import ContactPage from "../Components/ContactPage";

const pageRoutes = [
    { path: "/", element: <LandingPage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/contact", element: <ContactPage /> },
];

export default pageRoutes.flat();