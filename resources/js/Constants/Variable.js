import { useTranslation } from "react-i18next";

const menu_items = () => {
    const { t } = useTranslation();
    return [
        { name: t("nav_menu.home"), href: "/" },
        { name: t("nav_menu.service"), href: "/service" },
        { name: t("nav_menu.aboutUs"), href: "/about-us" },
        // { name: t("nav_menu.contactUs"), href: "/contact" },
    ];
};

const lang_menu = () => {
    const { t } = useTranslation();
    return [
        {
            name: t("label.english"),
            value: "GB",
        },
        {
            name: t("label.khmer"),
            value: "KH",
        },
    ];
};

export { menu_items, lang_menu };
