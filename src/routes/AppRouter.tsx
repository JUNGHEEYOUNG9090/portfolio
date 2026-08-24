import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ParrotRag from "../pages/projects/ParrotRag";
import Geumbang from "../pages/projects/Geumbang";
import CultureMate from "../pages/projects/CultureMate";
import ReceiptOcr from "../pages/projects/ReceiptOcr";
import ScrollToTop from "../components/layout/ScrollToTop";

export default function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/ReceiptOcr" element={<ReceiptOcr />} />
        <Route path="/projects/parrot-rag" element={<ParrotRag />} />
        <Route path="/projects/geumbang" element={<Geumbang />} />
        <Route path="/projects/culturemate" element={<CultureMate />} />
      </Routes>
    </>
  );
}
