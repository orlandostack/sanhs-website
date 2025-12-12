import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import BlogContentPage from "../pages/BlogContentPage";
import BlogPage from "../pages/BlogPage";
import AnnouncementPage from "../pages/AnnouncementPage";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog/:id" element={<BlogContentPage />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/announcementpage" element={<AnnouncementPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
