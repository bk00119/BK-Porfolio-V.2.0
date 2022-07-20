import AiTudier from "./AiTudier";
import PostExpired from "./PostExpired";
import HostFam from "./HostFam";
import WT_SHSI from "./WT_SHSI";

const ProjectDetailPage = [
    { path: "/AiTudier", element: <AiTudier /> },
    { path: "/PostExpired", element: <PostExpired /> },
    { path: "/HostFam", element: <HostFam /> },
    { path: "/WT_SHSI", element: <WT_SHSI /> }
];

export default ProjectDetailPage.flat();