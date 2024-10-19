import {
  Routes,
  BrowserRouter as Router,
  Route,
  // Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";
// pages
import Home from "./pages/Home/Home";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AboutUs } from "./components/AboutUs/AboutUs";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/aboutUs" element={
          <Layout>
            <AboutUs />
          </Layout>} />
      </Routes>

    </Router>
  );
}

export default App;
