import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { PrimeReactProvider } from "primereact/api";
// PrimeReact theme (choose one)
import "primereact/resources/themes/saga-blue/theme.css";  // You can choose different themes like "saga-blue", "lara-light-indigo", etc.
// Core PrimeReact CSS
import "primereact/resources/primereact.min.css";
// PrimeReact icons
import "primeicons/primeicons.css";

import "primereact/resources/themes/saga-blue/theme.css";  // Replace with your preferred theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


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
        color: "#4B5563",
    },
});
