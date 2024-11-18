import React from "react";

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-6">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between text-center md:text-left ml-4">
                <div className="w-full md:w-1/4 mb-4 flex flex-col  justify-center">
                    <h5 className="font-semibold">Company</h5>
                    </div>

                    <div className="w-full md:w-1/4 mb-4 ">
                        <h5 className="font-semibold mb-2">Support</h5>
                        <ul>
                            <li><a href="#" className="hover:underline">Help Center</a></li>
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                            <li><a href="#" className="hover:underline">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4">
                        <h5 className="font-semibold mb-2">Services</h5>
                        <ul>
                            <li><a href="#" className="hover:underline">Web Development</a></li>
                            <li><a href="#" className="hover:underline">SEO</a></li>
                            <li><a href="#" className="hover:underline">Marketing</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4">
                        <h5 className="font-semibold mb-2">Follow Us</h5>
                        <ul>
                            <li><a href="#" className="hover:underline">Facebook</a></li>
                            <li><a href="#" className="hover:underline">Twitter</a></li>
                            <li><a href="#" className="hover:underline">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
