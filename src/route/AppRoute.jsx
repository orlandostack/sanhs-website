import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import BlogContentPage from "../pages/BlogContentPage";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog/:id" element={<BlogContentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
