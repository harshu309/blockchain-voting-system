import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Proposals from "./pages/Proposals";
import ProposalDetails from "./pages/ProposalDetails";
import Results from "./pages/Results";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/proposals" element={<Proposals />} />
        <Route path="/proposals/:id" element={<ProposalDetails />} />
        <Route path="/results" element={<Results />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
