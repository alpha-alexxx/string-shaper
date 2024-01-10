import React, { useState } from "react"; //imrs
import "./components/CSS/style.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Contact from "./components/Contact";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import { useEffect } from "react";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const location = useLocation();


  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Home - Tools | UpperCase | LowerCase | TitleCase | Remove Extra Spaces";
    } else if (location.pathname === "/about") {
      document.title = "About - Simple Text Utility Description";
    } else if (location.pathname === "/contact") {
      document.title = "Simple Text Utility - Contact Us";
    }
  }, [location]);
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#252525';
      document.body.style.color = "#fff"
      showAlert("Dark Mode Enabled!", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = "#000"
      showAlert("Light Mode Enabled!", "success");

    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <Navbar
        title=""
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <TextForm
              showAlert={showAlert}
              heading="Manipulate the text to uppercase, lowercase, titlecase, alternate case, and remove extra Spaces:"
              mode={mode}

            />
          }
        />
        <Route exact path="/about" element={<About mode={mode} />} />
        <Route exact path="/contact" element={<Contact mode={mode} />} />
      </Routes>
      <Footer mode={mode} title="Simple Text Utility"
      />
    </>
  );
}

export default App;
