import HeroSection from "@/Components/HeroSection";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <HeroSection
            title = "WELCOME TO SERVICEBOX"
            description = "At SERVICEBOX, we provide a seamless platform for businesses to purchase the products they need to thrive. Whether you're looking for essential tools, equipment, or specialized solutions for your company, we are here to make the process easy and efficient."
            isButton
            buttonLabel = "Get Started"
            />
        </>
    );
}
