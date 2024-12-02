import React from "react";

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-6 md:py-8">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between text-center md:text-left ml-4">
                <div className="w-full md:w-1/4 mb-4 flex flex-col  justify-center">
                    <h5 className="font-semibold">Company</h5>
                    </div>

                    <div className="w-full md:w-1/4 mb-4 mt-3 ">
                        <h5 className="font-semibold mb-2">Feature</h5>
                        <ul>
                            <li><a href="#" className="hover:underline">Blog Service</a></li>
                            <li><a href="#" className="hover:underline">Quality</a></li>
                          
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4 mt-3">
                        <h5 className="font-semibold mb-2">Services</h5>
                        <ul>
                            <li><a href="#" className="hover:underline">Education</a></li>
                            <li><a href="#" className="hover:underline">E-Commerce</a></li>
                            <li><a href="#" className="hover:underline">System Delivery</a></li>
                            <li><a href="#" className="hover:underline">Hospital System</a></li>
                            <li><a href="#" className="hover:underline">Illness System</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4 mt-3">
                        <h5 className="font-semibold mb-2">Contact</h5>
                        <ul>
                            <li><a href="#" className="hover:underline">Email:info@servicetech.com</a></li>
                            <li><a href="#" className="hover:underline">Tel: +855 122223344</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
