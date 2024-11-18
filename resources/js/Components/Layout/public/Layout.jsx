import Navigation from "@/Components/Navigations/Navigation";
import React from "react";

export default function Layout({ heroSection, content, footer }) {
    return (
        <div className="w-full flex flex-col min-h-screen">
            <Navigation />
            {heroSection}
            {content}
            {footer}
        </div>
    );
}
