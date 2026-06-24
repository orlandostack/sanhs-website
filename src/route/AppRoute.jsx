// src\route\AppRoute.jsx
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";

// Lazy-load pages for code splitting / better performance
const LandingPage = lazy(() => import("../pages/LandingPage"));
const BlogContentPage = lazy(() => import("../pages/BlogContentPage"));
const BlogPage = lazy(() => import("../pages/BlogPage"));
const AnnouncementPage = lazy(() => import("../pages/AnnouncementPage"));
const DownloadPage = lazy(() => import("../pages/DownloadPage"))
const RestrictionPage = lazy(() => import("../pages/RestrictionPage"));

// Minimal accessible fallback while chunks load
const PageLoader = () => (
  <main aria-busy="true" aria-label="Loading page…" />
);

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog/:blogId" element={<BlogContentPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/announcements" element={<AnnouncementPage />} />
          <Route path="/downloads" element={<DownloadPage />} />
          <Route path="/devtools" element={<RestrictionPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoute;