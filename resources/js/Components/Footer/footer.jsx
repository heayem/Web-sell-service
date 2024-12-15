import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
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
                        <h5 className="font-semibold mb-2">
                            {t("footer.products")}
                        </h5>
                        <ul>
                            <li>
                                <a href="#" className="hover:underline">
                                    {t(
                                        "our_products.education_platform.header"
                                    )}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    {t(
                                        "our_products.e_commerce_solution.header"
                                    )}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    {t(
                                        "our_products.hospital_management.header"
                                    )}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    {t("our_products.illness_tracker.header")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/4">
                        <h5 className="font-semibold mb-2"> {t("footer.services")}</h5>
                        <ul>
                            <li>
                                <a href="#" className="hover:underline">
                                    {t(
                                        "our_services.consultation_and_strategy.header"
                                    )}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    {t(
                                        "our_services.software_development.header"
                                    )}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    {t(
                                        "our_services.maintenance_and_support.header"
                                    )}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    {t("our_services.infrastructure.header")}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    {t("our_services.training.header")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/4">
                        <h5 className="font-semibold mb-2">{t("contact.header")}</h5>
                        <ul>
                            <li>
                                <a href="#" className="hover:underline">
                                {t("contact.form.email")}: info@servicetech.com
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                {t("contact.form.phone")}: +855 96 263 5945
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
