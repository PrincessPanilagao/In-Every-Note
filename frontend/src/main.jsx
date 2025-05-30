import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrap the App with Redux Provider to make the store accessible */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
