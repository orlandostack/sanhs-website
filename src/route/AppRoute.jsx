import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import BlogContentPage from "../pages/BlogContentPage";
import BlogPage from "../pages/BlogPage";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog/:id" element={<BlogContentPage />} />
        <Route path="/blogpage" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
