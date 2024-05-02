import React from "react";
import { createRoot } from "react-dom/client"; // Исправлен импорт
import { Provider } from "react-redux";
import { configureAppStore } from "./redux/configureStore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./components/App.jsx";

const store = configureAppStore();

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="*" element={<App />} />{" "}
          {/* Исправлен путь родительского маршрута */}
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);
