import AddressCard from "@/Components/Cards/AddressCard";
import InputFloatLabel from "@/Components/Forms/Inputs/FloatLabel";
import TextAreaFloatLabel from "@/Components/Forms/TextArea/FloatLabel";
import React, { useState } from "react";

export default function ContactUs() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate a form submission process
        setTimeout(() => {
            alert("Message sent successfully!");
            setLoading(false);
        }, 2000);
    };

    const iconDes = [
        {
            icon: (
                <i
                    className="pi pi-map-marker"
                    style={{ fontSize: "24px" }}
                ></i>
            ),
            description: "Rupp, Phnom Penh, Cambodia",
        },
        {
            icon: (
                <i className="pi pi-envelope" style={{ fontSize: "24px" }}></i>
            ),
            description: "1qUeh@example.com",
        },
        {
            icon: <i className="pi pi-phone" style={{ fontSize: "24px" }}></i>,
            description: "+855 96 26 35 945",
        },
    ];

    return (
        <div
            id="contact"
            className="w-full flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 py-4 md:py-6 lg:py-8"
        >
            <h2 className="w-full text-center p-4 md:p-6 lg:p-8 text-gray-600">
                Contact Us
            </h2>

            <div className="w-full flex flex-col justify-center">
                <div className="w-full flex flex-row justify-between items-center max-sm:flex-col max-sm:gap-6">
                    <AddressCard
                        cssWrapper="gap-4 text-gray-600"
                        iconDes={iconDes}
                    />

                    <div>
                        <iframe
                            className="w-[600px] h-[150px] max-sm:w-full max-sm:h-auto"
                            style={{ border: 0 }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.022870628863!2d104.91386106802679!3d11.55021701938725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095123cb2ec215%3A0xf0a17d2b09aa28f7!2sBuilding%20N%2C%2016%20St%20320%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1726461646341!5m2!1sen!2skh"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-sm:w-full flex flex-col gap-6"
                >
                    <div className="flex flex-col w-full gap-6">
                        <div className="w-full grid grid-cols-2 gap-6">
                            <InputFloatLabel
                                htmlFor="firstName"
                                label="First Name"
                                value={form.firstName}
                                onChange={handleChange}
                            />
                            <InputFloatLabel
                                htmlFor="lastName"
                                label="Last Name"
                                value={form.lastName}
                                onChange={handleChange}
                            />
                            <InputFloatLabel
                                htmlFor="email"
                                label="Email"
                                value={form.email}
                                onChange={handleChange}
                            />

                            <InputFloatLabel
                                htmlFor="phoneNumber"
                                label="Phone Number"
                                value={form.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>

                        <TextAreaFloatLabel
                            htmlFor="message"
                            label="Message"
                            value={form.message}
                            onChange={handleChange}
                        />
                        <div className="w-full flex flex-row justify-center items-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`px-4 py-2 rounded-none ${
                                    loading
                                        ? "bg-gray-400 text-white"
                                        : "bg-primary text-white"
                                }`}
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}