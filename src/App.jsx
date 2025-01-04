import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/LayOut.jsx/LayOut";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
