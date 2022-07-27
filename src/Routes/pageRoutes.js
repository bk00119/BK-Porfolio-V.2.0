import LandingPage from "../Components/LandingPage";
import AboutPage from "../Components/AboutPage";
import ContactPage from "../Components/ContactPage";
import ProjectDetailPage from "../Components/LandingPage/Projects/ProjectDetailPage";

const pageRoutes = [
    { path: "/", element: <LandingPage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/contact", element: <ContactPage /> },
    ProjectDetailPage
];

export default pageRoutes.flat();