import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import "./styles/style.css";
import "./styles/utils.css";
import "../app/globals.css";
import "./WEB/css/clash-grotesk.css";
import "./Tanker/css/tanker.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="app-theme">
    <App />
  </ThemeProvider>
);
