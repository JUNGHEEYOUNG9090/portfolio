import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ParrotRag from "../pages/projects/parrotrag";
import Geumbang from "../pages/projects/Geumbang";
import CultureMate from "../pages/projects/CultureMate";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/parrot-rag" element={<ParrotRag />} />
      <Route path="/projects/geumbang" element={<Geumbang />} />
      <Route path="/projects/culturemate" element={<CultureMate />} />
    </Routes>
  );
}
