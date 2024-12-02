import React from "react";

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-6 md:py-8">
            <div className="container mx-auto">
                <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 text-center md:text-left">
                    <div className="w-full md:w-1/4 flex flex-col items-center md:items-start">
                        <h5 className="font-semibold text-lg text-center md:text-left mb-2">
                            SERVICETECH
                        </h5>

                        <div className="mb-2">
                            <img
                                src="/images/logo.png"
                                alt="ServiceTech Logo"
                                className="w-20 h-15 object-contain"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/4">
                        <h5 className="font-semibold mb-2">Feature</h5>
                        <ul>
                            <li>
                                <a href="#" className="hover:underline">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Quality
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/4">
                        <h5 className="font-semibold mb-2">Services</h5>
                        <ul>
                            <li>
                                <a href="#" className="hover:underline">
                                    Blog Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Quality
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/4">
                        <h5 className="font-semibold mb-2">Contact</h5>
                        <ul>
                            <li>
                                <a href="#" className="hover:underline">
                                    Email: info@servicetech.com
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Tel: +855 122223344
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
