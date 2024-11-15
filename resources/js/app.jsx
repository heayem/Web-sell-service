import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/saga-blue/theme.css";  
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


import i18n from "i18next";
import { initReactI18next } from "react-i18next";



import GB from "./locales/en";
import KH from "./locales/kh";


i18n.use(initReactI18next).init({
    resources: {
        GB: GB,
        KH: KH,
    },
    lng: "GB", // Default language
    fallbackLng: "GB", // Fallback language if the selected one is unavailable
    interpolation: {
        escapeValue: false, // React already escapes values
    },
});



// Custom console clearing function
function clearSpecificConsoleMessages() {
    console.clear(); // Optionally clear the entire console
  
    // Re-override specific methods if needed
    console.log = originalLog;
    console.warn = originalWarn;
    console.error = originalError;
    console.info = originalInfo;
  }
  
  // Save the original console methods
  const originalLog = console.log;
  const originalWarn = console.warn;
  const originalError = console.error;
  const originalInfo = console.info;
  
  // Override methods to log to custom variables
  console.log = (...args) => { originalLog.apply(console, args); };
  console.warn = (...args) => { originalWarn.apply(console, args); };
  console.error = (...args) => { originalError.apply(console, args); };
  console.info = (...args) => { originalInfo.apply(console, args); };
  
  // Clear specified console methods every minute
  setInterval(clearSpecificConsoleMessages, 60000); // 1 minute



const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <PrimeReactProvider>
                <App {...props} />
            </PrimeReactProvider>
        );
    },
    progress: {
        delay: 250,
        color: '#29d',
        includeCSS: true,
    },
});
