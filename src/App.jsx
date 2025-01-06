import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import Header from "./components/Header";
import About from "./components/About";
import Properties from "./components/Properties";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PropertyDetails from "./components/PropertyDetails"; // Import the new PropertyDetails component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <div className="w-full overflow-hidden">
        <ToastContainer />
        <Header />
        <Routes>
          {/* Route for Home Page */}
          <Route
            path="/"
            element={
              <>
                <About />
                <Properties />
                <Testimonials />
                <Contact />
              </>
            }
          />

          {/* Route for Property Details Page */}
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
