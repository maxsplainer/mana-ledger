import { BrowserRouter, Routes, Route } from "react-router-dom";

import BottomNavigation from "./components/BottomNavigation";

import HomePage from "./pages/HomePage";

function PlaceholderPage({ title }: { title: string }) {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>{title}</h1>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<PlaceholderPage title="Verlauf" />} />
        <Route path="/add" element={<PlaceholderPage title="Hinzufügen" />} />
        <Route path="/insights" element={<PlaceholderPage title="Analyse" />} />
        <Route path="/profile" element={<PlaceholderPage title="Profil" />} />
      </Routes>

      <BottomNavigation />
    </BrowserRouter>
  );
}