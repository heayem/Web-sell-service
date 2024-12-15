import React from "react";
import Layout from "@/Components/Layout/public/Layout";
import { HeroWithoutContent } from "@/Components/Hero/HeroSection";
import Footer from "@/Components/Footer/footer";
import { Profile } from "@/Components/Profile/Profile";
import { Cards } from "@/Components/Cards/Cards";
import OrganizationalChart from "@/Components/Charts/OrganizationalChart";

let fakeData = {
    teacher: {
        name: "Chim Bnthoeurn",
        position: "Teacher Web Application",
        linkedin_link: "#",
        github_link: "#",
        photo: "images/team/teacher.png",
    },
    team: [
        {
            name: "Phon Sobon",
            position: "Product Manager",
            linkedin_link: "#",
            github_link: "#",
            photo: "images/team/sobon.png",
            children: [
                {
                    name: "Tes Sophanna",
                    position: "Front-end developer",
                    linkedin_link: "#",
                    github_link: "#",
                    photo: "images/team/phanna.png",
                },
                {
                    name: "Toek Yoteav",
                    position: "Front-end developer",
                    linkedin_link: "#",
                    github_link: "#",
                    photo: "images/team/teav.png",
                },
            ],
        },
        {
            name: "Uth Narin",
            position: "UXUI Designer",
            linkedin_link: "#",
            github_link: "#",
            photo: "images/team/narin.png",
        },
        {
            name: "Yem Hea",
            position: "Tech Lead",
            linkedin_link: "#",
            github_link: "#",
            photo: "images/team/hea.png",
            children: [
                {
                    name: "Sok Leaphea",
                    position: "Full-stack Developer",
                    linkedin_link: "#",
                    github_link: "#",
                    photo: "images/team/phea.png",
                },
                {
                    name: "Chea Menglim",
                    position: "Back-end developer",
                    linkedin_link: "#",
                    github_link: "#",
                    photo: "images/team/mengLim.png",
                },
            ],
        },
    ],
};

// Transform fakeData.team into a hierarchical format
const teamData = fakeData.team.map((member) => ({
    label: (
        <Profile
            name={member.name}
            position={member.position}
            linkedin_link={member.linkedin_link}
            github_link={member.github_link}
            src={member.photo}
        />
    ),
    children: member.children?.map((child) => ({
        label: (
            <Profile
                name={child.name}
                position={child.position}
                linkedin_link={child.linkedin_link}
                github_link={child.github_link}
                src={child.photo}
            />
        ),
    })),
}));

const data = {
    root: (
        <Profile
            name={fakeData.teacher.name}
            position={fakeData.teacher.position}
            linkedin_link={fakeData.teacher.linkedin_link}
            github_link={fakeData.teacher.github_link}
            src={fakeData.teacher.photo}
        />
    ),
    children: teamData,
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
                        <div className="flex flex-col justify-center items-center gap-8 md:gap-14">
                            <OrganizationalChart
                                root={data.root}
                                data={data.children}
                            />
                        </div>
                    </div>
                }
                footer={<Footer />}
            />
        </>
    );
}
