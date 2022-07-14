import LandingPage from "../Components/LandingPage";
import FooterPage from "../Components/FooterPage";

const homePage = { path: "/", element: <LandingPage /> };
const pageRoutes = [homePage, FooterPage];

export default pageRoutes.flat();