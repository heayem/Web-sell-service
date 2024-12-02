import React from "react";
import Layout from "@/Components/Layout/public/Layout";
import { HeroWithoutContent } from "@/Components/Hero/HeroSection";
import Footer from "@/Components/Footer/footer";
import { Heading } from "@/Components/Typography/Heading";
import { Profile } from "@/Components/Profile/Profile";
import { Cards } from "@/Components/Cards/Cards";

let fakeData = {
    teacher: {
        name: "Chim Bnthoeurn",
        position: "Teacher Web Application",
        linkedin_link: "#",
        github_link: "#",
        photo: "images/team/teacher.png",
    },
    projectManager: {
        name: "Phon Sobon",
        position: "Product Manager",
        linkedin_link: "#",
        github_link: "#",
        photo: "images/team/sobon.png",
    },
    team: [
        {
            name: "Yem Hea",
            position: "Tech Lead",
            linkedin_link: "#",
            github_link: "#",
            photo: "images/team/hea.png",
        },
        {
            name: "Sok Leaphea",
            position: "Fullstack Developer",
            linkedin_link: "#",
            github_link: "#",
            photo: "images/team/phea.png",
        },
        {
            name: "Chea Menglim",
            position: "Data Analyst",
            linkedin_link: "#",
            github_link: "#",
            photo: "images/team/mengLim.png",
        },
        {
            name: "Uth Narin",
            position: "UX/UI Design",
            linkedin_link: "#",
            github_link: "#",
            photo: "images/team/narin.png",
        },
        {
            name: "Tes Sophanna",
            position: "Front end developer",
            linkedin_link: "#",
            github_link: "#",
            photo: "images/team/phanna.png",
        },
        {
            name: "Toek Yoteav",
            position: "Front end developer",
            linkedin_link: "#",
            github_link: "#",
            photo: "images/team/teav.png",
        },
    ],
};
export default function AboutUsScreen() {
    return (
        <>
            <Layout
                heroSection={
                    <HeroWithoutContent
                        className="mx-auto h-[50vh] md:h-[85vh] lg:h-[88vh]"
                        image="./images/bg-aboutpage.png"
                    />
                }
                content={
                    <div className="container flex flex-col gap-8 md:gap-16 my-8 md:my-16">
                        <div className="my-8 md:my-16">
                            {/* Cards Section */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Vision Card */}
                                <Cards
                                    icon={
                                        <i
                                            className={`pi pi-eye text-4xl text-blue-500`}
                                        ></i>
                                    }
                                    title="Our Vision"
                                    desc="To revolutionize the web service industry by delivering innovative, user-centric, and scalable solutions that empower businesses to thrive in the digital era."
                                />

                                {/* Mission Card */}
                                <Cards
                                    icon={
                                        <i
                                            icon="pi-flag"
                                            className={`pi pi-flag text-4xl text-green-500`}
                                        ></i>
                                    }
                                    title="Our Mission"
                                    desc="To provide exceptional web services by leveraging cutting-edge technology, fostering creativity, and prioritizing customer satisfaction at every step."
                                />

                                {/* Team Card */}
                                <Cards
                                    icon={
                                        <i
                                            className={`pi pi-users text-4xl text-red-500`}
                                        ></i>
                                    }
                                    title="Our Team"
                                    desc="A team of dedicated professionals committed to innovation, excellence, and delivering outstanding web services to our clients."
                                />
                            </div>
                        </div>
                        <div className=" flex flex-col justify-center items-center gap-8 md:gap-14">
                            <div className="w-full  flex flex-col justify-center items-center gap-8 md:gap-12">
                                {fakeData.teacher && (
                                    <>
                                        <Heading title="Our Teacher" />
                                        <Profile
                                            name={fakeData.teacher.name}
                                            position={fakeData.teacher.position}
                                            linkedin_link={
                                                fakeData.teacher.linkedin_link
                                            }
                                            github_link={
                                                fakeData.teacher.github_link
                                            }
                                            src={fakeData.teacher.photo}
                                        />
                                    </>
                                )}
                            </div>
                            <div className="w-full  flex flex-col justify-center items-center gap-8 md:gap-12">
                                {fakeData.projectManager && (
                                    <>
                                        <Heading title="Our Team" />
                                        <Profile
                                            name={fakeData.projectManager.name}
                                            position={
                                                fakeData.projectManager.position
                                            }
                                            linkedin_link={
                                                fakeData.projectManager
                                                    .linkedin_link
                                            }
                                            github_link={
                                                fakeData.projectManager
                                                    .github_link
                                            }
                                            src={fakeData.projectManager.photo}
                                        />
                                    </>
                                )}
                            </div>
                            <div className="w-full  flex flex-col justify-center items-center gap-8 md:gap-12">
                                {fakeData.team && (
                                    <>
                                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                                            {fakeData.team.map(
                                                (team, index) => (
                                                    <Profile
                                                        key={index}
                                                        name={team.name}
                                                        position={team.position}
                                                        linkedin_link={
                                                            team.linkedin_link
                                                        }
                                                        github_link={
                                                            team.github_link
                                                        }
                                                        src={team.photo}
                                                    />
                                                )
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
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
