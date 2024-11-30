import React from "react";
import Layout from "@/Components/Layout/public/Layout";
import { HeroWithoutContent } from "@/Components/Hero/HeroSection";
import Footer from "@/Components/Footer/footer";
import { Heading } from "@/Components/Typography/Heading";
import { Profile } from "@/Components/Profile/Profile";
import { Cards } from "@/Components/Cards/Cards";

export default function AboutUsScreen() {
    return (
        <>
            <Layout
                heroSection={
                    <HeroWithoutContent
                        className="mx-auto h-[80vh] md:h-[85vh] lg:h-[88vh]"
                        image="./images/bg-aboutpage.png"
                    />
                }
                content={
                    <div className="container flex flex-row gap-8 md:gap-16 my-8 md:my-16">
                        <div className="my-8 md:my-16">
                            {/* Cards Section */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Vision Card */}
                                <Cards
                                    icon={
                                        <i
                                            className={`pi pi-eye text-4xl text-blue-500 hover:text-white`}
                                        ></i>
                                    }
                                    title="Our Vision"
                                    desc="To revolutionize the web service industry by delivering innovative, user-centric, and scalable solutions that empower businesses to thrive in the digital era."
                                    hoverColor="hover:bg-primary"
                                />

                                {/* Mission Card */}
                                <Cards
                                    icon={
                                        <i
                                            icon="pi-flag"
                                            className={`pi pi-flag text-4xl text-green-500 hover:text-white`}
                                        ></i>
                                    }
                                    title="Our Mission"
                                    desc="To provide exceptional web services by leveraging cutting-edge technology, fostering creativity, and prioritizing customer satisfaction at every step."
                                    hoverColor="hover:bg-primary"
                                />

                                {/* Team Card */}
                                <Cards
                                    icon={
                                        <i
                                            className={`pi pi-users text-4xl text-red-500 hover:text-white`}
                                        ></i>
                                    }
                                    title="Our Team"
                                    desc="A team of dedicated professionals committed to innovation, excellence, and delivering outstanding web services to our clients."
                                    hoverColor="hover:bg-primary"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Profile
                                name="Yem Hea"
                                position="Web developer"
                                linkedin_link="https://www.linkedin.com/in/johndoe"
                                github_link="https://github.com/johndoe"
                                photo="https://via.placeholder.com/200" // Provide URL of the profile picture
                            />
                        </div>
                    </div>
                }
                footer={
                    <>
                        <Footer />
                    </>
                }
            />
        </>
    );
}
